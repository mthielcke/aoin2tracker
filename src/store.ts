import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface Character {
  id: string;
  name: string;
  classId: string;
  buildId: string;
  level: number;
  notes: string;
  done: Record<string, true>;
  createdAt: number;
}

export interface Todo {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
}

export interface AppState {
  version: 1;
  characters: Character[];
  todos: Todo[];
  activeCharacterId?: string;
}

const STORAGE_KEY = 'aion2-tracker:v1';

const emptyState = (): AppState => ({ version: 1, characters: [], todos: [] });

function isAppState(value: unknown): value is AppState {
  const v = value as AppState;
  return !!v && v.version === 1 && Array.isArray(v.characters) && Array.isArray(v.todos);
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed: unknown = JSON.parse(raw);
    return isAppState(parsed) ? parsed : emptyState();
  } catch {
    return emptyState();
  }
}

const uid = () => crypto.randomUUID();

class Store extends EventTarget {
  state: AppState = load();

  private commit(next: AppState) {
    this.state = next;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.error('Speichern fehlgeschlagen', err);
    }
    this.dispatchEvent(new Event('change'));
  }

  private patchCharacter(id: string, fn: (c: Character) => Character) {
    this.commit({
      ...this.state,
      characters: this.state.characters.map((c) => (c.id === id ? fn(c) : c)),
    });
  }

  get activeCharacter(): Character | undefined {
    const { characters, activeCharacterId } = this.state;
    return characters.find((c) => c.id === activeCharacterId) ?? characters[0];
  }

  addCharacter(input: Pick<Character, 'name' | 'classId' | 'buildId'>) {
    const character: Character = { ...input, id: uid(), level: 1, notes: '', done: {}, createdAt: Date.now() };
    this.commit({
      ...this.state,
      characters: [...this.state.characters, character],
      activeCharacterId: character.id,
    });
  }

  selectCharacter(id: string) {
    this.commit({ ...this.state, activeCharacterId: id });
  }

  updateCharacter(id: string, changes: Partial<Pick<Character, 'name' | 'buildId' | 'level' | 'notes'>>) {
    this.patchCharacter(id, (c) => ({ ...c, ...changes }));
  }

  deleteCharacter(id: string) {
    const characters = this.state.characters.filter((c) => c.id !== id);
    this.commit({ ...this.state, characters, activeCharacterId: characters[0]?.id });
  }

  setItemDone(characterId: string, key: string, done: boolean) {
    this.patchCharacter(characterId, (c) => {
      const next = { ...c.done };
      if (done) next[key] = true;
      else delete next[key];
      return { ...c, done: next };
    });
  }

  addTodo(text: string) {
    const todo: Todo = { id: uid(), text, done: false, createdAt: Date.now() };
    this.commit({ ...this.state, todos: [...this.state.todos, todo] });
  }

  toggleTodo(id: string) {
    this.commit({
      ...this.state,
      todos: this.state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    });
  }

  deleteTodo(id: string) {
    this.commit({ ...this.state, todos: this.state.todos.filter((t) => t.id !== id) });
  }

  clearDoneTodos() {
    this.commit({ ...this.state, todos: this.state.todos.filter((t) => !t.done) });
  }

  exportJson(): string {
    return JSON.stringify(this.state, null, 2);
  }

  importJson(text: string) {
    const parsed: unknown = JSON.parse(text);
    if (!isAppState(parsed)) throw new Error('Keine gültige Tracker-Datei.');
    this.commit(parsed);
  }
}

export const store = new Store();

export class StoreController implements ReactiveController {
  private onChange = () => this.host.requestUpdate();

  constructor(private host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostConnected() {
    store.addEventListener('change', this.onChange);
  }

  hostDisconnected() {
    store.removeEventListener('change', this.onChange);
  }
}
