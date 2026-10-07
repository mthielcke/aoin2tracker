import { LitElement, css, html, nothing } from 'lit';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { StoreController, lastBossSpawn, nextBossSpawn, store, type BossTimer } from '../store';

/** Nach dem Spawn gilt ein Boss so lange als „aktiv“. */
const ACTIVE_MS = 15 * 60 * 1000;
/** So früh vor dem Spawn kommt der Hinweis. */
const SOON_MS = 5 * 60 * 1000;

const fmtClock = (ts: number) => new Date(ts).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

const fmtCountdown = (ms: number) => {
  const total = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
};

const validTime = (v: string) => /^([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v.trim());
const normalizeTime = (v: string) => (v.trim().split(':').length === 2 ? `${v.trim()}:00` : v.trim());

export class BossTimerView extends LitElement {
  static properties = {
    now: { state: true },
    editing: { state: true },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-large);
      max-width: 960px;
    }
    h2 {
      margin: 0 0 var(--sl-spacing-x-small);
      font-size: var(--sl-font-size-2x-large);
    }
    .intro {
      margin: 0;
      color: var(--sl-color-neutral-700);
      max-width: 75ch;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sl-spacing-medium);
      align-items: center;
      justify-content: space-between;
    }
    .route {
      padding: var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-primary-300);
      border-radius: var(--sl-border-radius-large);
      background: var(--sl-color-primary-50);
      font-size: var(--sl-font-size-small);
    }
    .route strong {
      font-size: var(--sl-font-size-medium);
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-x-small);
    }
    .boss {
      display: grid;
      grid-template-columns: 2rem minmax(160px, 1fr) 90px 110px auto;
      gap: var(--sl-spacing-small);
      align-items: center;
      padding: var(--sl-spacing-small) var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
      background: var(--sl-color-neutral-0);
    }
    .boss.soon {
      border-color: var(--sl-color-warning-500);
    }
    .boss.active {
      border-color: var(--sl-color-success-500);
      background: var(--sl-color-success-50);
    }
    .boss.done {
      opacity: 0.6;
    }
    .pos {
      font-weight: var(--sl-font-weight-semibold);
      color: var(--sl-color-neutral-500);
    }
    .name {
      display: flex;
      flex-direction: column;
    }
    .name small {
      color: var(--sl-color-neutral-600);
    }
    .clock {
      font-variant-numeric: tabular-nums;
      font-weight: var(--sl-font-weight-semibold);
    }
    .countdown {
      font-variant-numeric: tabular-nums;
      font-size: var(--sl-font-size-large);
    }
    .actions {
      display: flex;
      gap: var(--sl-spacing-2x-small);
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .edit {
      grid-column: 2 / -1;
      display: grid;
      grid-template-columns: 1fr 120px 100px auto;
      gap: var(--sl-spacing-small);
      align-items: end;
    }
    .add {
      display: grid;
      grid-template-columns: 1fr 120px 100px auto;
      gap: var(--sl-spacing-small);
      align-items: end;
      padding: var(--sl-spacing-medium);
      border: 1px dashed var(--sl-color-neutral-300);
      border-radius: var(--sl-border-radius-large);
    }
    .hint {
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-600);
    }
    @media (max-width: 640px) {
      .boss {
        grid-template-columns: 1.5rem 1fr auto;
      }
      .boss .clock {
        display: none;
      }
      .boss .actions {
        grid-column: 1 / -1;
        justify-content: flex-start;
      }
      .edit,
      .add {
        grid-template-columns: 1fr 1fr;
      }
      .edit {
        grid-column: 1 / -1;
      }
    }
  `;

  declare now: number;
  declare editing: boolean;
  private timer?: number;
  private notified = new Set<string>();

  constructor() {
    super();
    new StoreController(this);
    this.now = Date.now();
    this.editing = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.timer = window.setInterval(() => {
      this.now = Date.now();
      this.checkNotifications();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
  }

  private checkNotifications() {
    const { list, notify } = store.state.bosses;
    if (!notify || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    for (const b of list) {
      const next = nextBossSpawn(b, this.now);
      const key = `${b.id}:${next}`;
      if (next - this.now <= SOON_MS && !this.notified.has(key)) {
        this.notified.add(key);
        new Notification(`${b.name} spawnt um ${fmtClock(next)}`, { body: `Noch ${fmtCountdown(next - this.now)}` });
      }
    }
  }

  private async toggleNotify(e: Event) {
    const on = (e.target as SlSwitch).checked;
    if (on && typeof Notification !== 'undefined' && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
    store.setBossNotify(on);
  }

  private status(b: BossTimer) {
    const last = lastBossSpawn(b, this.now);
    const next = nextBossSpawn(b, this.now);
    const done = !!b.killedAt && b.killedAt >= last;
    const active = !done && this.now - last < ACTIVE_MS;
    const soon = !done && !active && next - this.now <= SOON_MS;
    return { last, next, done, active, soon };
  }

  private toggleKilled(b: BossTimer, done: boolean) {
    store.updateBoss(b.id, { killedAt: done ? undefined : Date.now() });
  }

  private saveTime(b: BossTimer, value: string) {
    if (validTime(value)) store.updateBoss(b.id, { spawnTime: normalizeTime(value) });
  }

  private addBoss() {
    const root = this.renderRoot;
    const name = root.querySelector<SlInput>('#new-name')!;
    const time = root.querySelector<SlInput>('#new-time')!;
    const interval = root.querySelector<SlInput>('#new-interval')!;
    if (!name.value.trim() || !validTime(time.value)) return;
    store.addBoss({
      name: name.value.trim(),
      spawnTime: normalizeTime(time.value),
      intervalHours: Math.max(0.25, Number(interval.value) || 12),
    });
    name.value = '';
    time.value = '';
  }

  private renderRoute(list: BossTimer[]) {
    if (!list.length) return nothing;
    const [first] = list;
    const start = this.status(first).active ? lastBossSpawn(first, this.now) : nextBossSpawn(first, this.now);
    return html`<div class="route">
      Nächste Route ab <strong>${fmtClock(start)}</strong>:
      ${list.map((b, i) => {
        const spawn = nextBossSpawn(b, start - 1);
        return html`${i ? ' → ' : ''}${b.name} ${fmtClock(spawn)}`;
      })}
    </div>`;
  }

  private renderBoss(b: BossTimer, i: number, count: number) {
    const { next, last, done, active, soon } = this.status(b);
    return html`<div class="boss ${active ? 'active' : ''} ${soon ? 'soon' : ''} ${done ? 'done' : ''}">
      <span class="pos">${i + 1}</span>
      <div class="name">
        <strong>${b.name}</strong>
        <small>alle ${b.intervalHours} h ab ${b.spawnTime.slice(0, 5)}</small>
      </div>
      <span class="clock">${active ? fmtClock(last) : fmtClock(next)}</span>
      <span class="countdown">
        ${active
          ? html`<sl-badge variant="success" pill>aktiv seit ${fmtCountdown(this.now - last)}</sl-badge>`
          : html`${fmtCountdown(next - this.now)}`}
      </span>
      <div class="actions">
        ${soon ? html`<sl-badge variant="warning" pill>gleich</sl-badge>` : nothing}
        <sl-button size="small" variant=${done ? 'success' : 'default'} @click=${() => this.toggleKilled(b, done)}>
          <sl-icon slot="prefix" name=${done ? 'check-circle-fill' : 'circle'}></sl-icon>${done ? 'erledigt' : 'Kill'}
        </sl-button>
      </div>
      ${this.editing
        ? html`<div class="edit">
            <sl-input
              size="small"
              label="Name"
              .value=${b.name}
              @sl-change=${(e: Event) => store.updateBoss(b.id, { name: (e.target as SlInput).value.trim() || b.name })}
            ></sl-input>
            <sl-input
              size="small"
              label="Spawn (HH:MM:SS)"
              .value=${b.spawnTime}
              @sl-change=${(e: Event) => this.saveTime(b, (e.target as SlInput).value)}
            ></sl-input>
            <sl-input
              size="small"
              label="Takt (h)"
              type="number"
              min="0.25"
              step="0.25"
              .value=${String(b.intervalHours)}
              @sl-change=${(e: Event) =>
                store.updateBoss(b.id, { intervalHours: Math.max(0.25, Number((e.target as SlInput).value) || b.intervalHours) })}
            ></sl-input>
            <div class="actions">
              <sl-icon-button name="arrow-up" label="Nach oben" ?disabled=${i === 0} @click=${() => store.moveBoss(b.id, -1)}></sl-icon-button>
              <sl-icon-button
                name="arrow-down"
                label="Nach unten"
                ?disabled=${i === count - 1}
                @click=${() => store.moveBoss(b.id, 1)}
              ></sl-icon-button>
              <sl-icon-button name="trash" label="Entfernen" @click=${() => store.removeBoss(b.id)}></sl-icon-button>
            </div>
          </div>`
        : nothing}
    </div>`;
  }

  render() {
    const { list, notify } = store.state.bosses;
    return html`
      <div>
        <h2>Feldboss-Timer</h2>
        <p class="intro">
          Countdown bis zum nächsten Spawn, in eurer Routen-Reihenfolge. Nach dem Kill abhaken – das Häkchen gilt bis zum nächsten
          Spawn. Stimmt eine Zeit nicht, unter „Bearbeiten“ einen bekannten Spawn (z. B. aus der Boss-Liste im Spiel) und den Takt
          eintragen.
        </p>
      </div>

      <div class="toolbar">
        <sl-switch size="small" .checked=${notify} @sl-change=${this.toggleNotify}>Browser-Hinweis 5 Min. vorher</sl-switch>
        <sl-switch size="small" .checked=${this.editing} @sl-change=${(e: Event) => (this.editing = (e.target as SlSwitch).checked)}
          >Bearbeiten</sl-switch
        >
      </div>

      ${this.renderRoute(list)}

      <div class="list">${list.map((b, i) => this.renderBoss(b, i, list.length))}</div>

      ${this.editing
        ? html`<div class="add">
            <sl-input id="new-name" size="small" label="Neuer Boss"></sl-input>
            <sl-input id="new-time" size="small" label="Spawn (HH:MM:SS)" placeholder="11:17:45"></sl-input>
            <sl-input id="new-interval" size="small" label="Takt (h)" type="number" min="0.25" step="0.25" value="12"></sl-input>
            <sl-button size="small" variant="primary" @click=${this.addBoss}>
              <sl-icon slot="prefix" name="plus-lg"></sl-icon>Hinzufügen
            </sl-button>
          </div>`
        : nothing}

      <span class="hint">
        Startwerte aus eurem Screenshot (23:32): Gartua und Lagta im 12-Stunden-Takt, Kashapa und Dartan im 6-Stunden-Takt – so folgen sie
        direkt auf Gartua. Der 6-Stunden-Takt ist abgeleitet; bitte einmal im Spiel prüfen. Der Hinweis funktioniert nur, solange der Tab
        geöffnet ist.
      </span>
    `;
  }
}

customElements.define('boss-timer', BossTimerView);
