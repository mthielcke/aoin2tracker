import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface Character {
  id: string;
  name: string;
  classId: string;
  buildId: string;
  level: number;
  gearScore?: number;
  notes: string;
  done: Record<string, true>;
  createdAt: number;
}

export interface StartPlan {
  done: Record<string, true>;
  mainId?: string;
  weekOneTarget: number;
}

export interface WeeklyState {
  membership: boolean;
  pvp: boolean;
  abyss: boolean;
  /** Charaktere, die nicht in die Wochenplanung einfließen */
  excluded: string[];
  /** progress[characterId][activityId] = erledigte Einheiten */
  progress: Record<string, Record<string, number>>;
  weekStart: number;
  /** 0 = Sonntag … 6 = Samstag */
  resetWeekday: number;
  resetHour: number;
}

/** Letzte Reset-Grenze (Wochentag + Uhrzeit, lokale Zeit) vor oder gleich `now`. */
export function lastWeeklyReset(now: number, weekday: number, hour: number): number {
  const d = new Date(now);
  d.setHours(hour, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() - weekday + 7) % 7));
  if (d.getTime() > now) d.setDate(d.getDate() - 7);
  return d.getTime();
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
  plan: StartPlan;
  weekly: WeeklyState;
}

const STORAGE_KEY = 'aion2-tracker:v1';

const emptyPlan = (): StartPlan => ({ done: {}, weekOneTarget: 1400 });

const emptyWeekly = (): WeeklyState => ({
  membership: true,
  pvp: false,
  abyss: false,
  excluded: [],
  progress: {},
  weekStart: lastWeeklyReset(Date.now(), 3, 5),
  resetWeekday: 3,
  resetHour: 5,
});

const emptyState = (): AppState => ({
  version: 1,
  characters: [],
  todos: [],
  plan: emptyPlan(),
  weekly: emptyWeekly(),
});

function isAppState(value: unknown): value is AppState {
  const v = value as AppState;
  return !!v && v.version === 1 && Array.isArray(v.characters) && Array.isArray(v.todos);
}

/** Ältere Stände haben evtl. noch kein `plan`- bzw. `weekly`-Feld. */
const normalize = (s: AppState): AppState => ({
  ...s,
  plan: { ...emptyPlan(), ...s.plan },
  weekly: { ...emptyWeekly(), ...s.weekly },
});

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed: unknown = JSON.parse(raw);
    return isAppState(parsed) ? normalize(parsed) : emptyState();
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

  updateCharacter(
    id: string,
    changes: Partial<Pick<Character, 'name' | 'buildId' | 'level' | 'gearScore' | 'notes'>>,
  ) {
    this.patchCharacter(id, (c) => ({ ...c, ...changes }));
  }

  deleteCharacter(id: string) {
    const characters = this.state.characters.filter((c) => c.id !== id);
    const plan = this.state.plan.mainId === id ? { ...this.state.plan, mainId: undefined } : this.state.plan;
    const { [id]: _removed, ...progress } = this.state.weekly.progress;
    const weekly = { ...this.state.weekly, progress, excluded: this.state.weekly.excluded.filter((x) => x !== id) };
    this.commit({ ...this.state, characters, plan, weekly, activeCharacterId: characters[0]?.id });
  }

  setPlanItemDone(key: string, done: boolean) {
    const next = { ...this.state.plan.done };
    if (done) next[key] = true;
    else delete next[key];
    this.commit({ ...this.state, plan: { ...this.state.plan, done: next } });
  }

  updatePlan(changes: Partial<Pick<StartPlan, 'mainId' | 'weekOneTarget'>>) {
    this.commit({ ...this.state, plan: { ...this.state.plan, ...changes } });
  }

  updateWeekly(
    changes: Partial<Pick<WeeklyState, 'membership' | 'pvp' | 'abyss' | 'excluded' | 'resetWeekday' | 'resetHour'>>,
  ) {
    const weekly = { ...this.state.weekly, ...changes };
    weekly.weekStart = lastWeeklyReset(Date.now(), weekly.resetWeekday, weekly.resetHour);
    this.commit({ ...this.state, weekly });
  }

  setWeeklyCount(characterId: string, activityId: string, count: number) {
    const { weekly } = this.state;
    const forChar = { ...weekly.progress[characterId], [activityId]: count };
    this.commit({ ...this.state, weekly: { ...weekly, progress: { ...weekly.progress, [characterId]: forChar } } });
  }

  resetWeek() {
    const { weekly } = this.state;
    this.commit({
      ...this.state,
      weekly: { ...weekly, progress: {}, weekStart: lastWeeklyReset(Date.now(), weekly.resetWeekday, weekly.resetHour) },
    });
  }

  /** Startet automatisch eine neue Woche, wenn der Reset seit dem letzten Wochenstart vorbei ist. */
  ensureCurrentWeek() {
    const { weekly } = this.state;
    if (lastWeeklyReset(Date.now(), weekly.resetWeekday, weekly.resetHour) > weekly.weekStart) this.resetWeek();
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
    this.commit(normalize(parsed));
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
