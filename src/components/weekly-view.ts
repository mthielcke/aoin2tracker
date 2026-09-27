import { LitElement, css, html, nothing } from 'lit';
import type SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { getClass } from '../data/classes';
import { SOURCES } from '../data/sources';
import {
  KINAH_PER_CLAIM,
  SERVER_CLAIM_CAP,
  activitiesFor,
  claimsPerWeek,
  type WeeklyActivity,
  type WeeklyRole,
} from '../data/weekly';
import { StoreController, lastWeeklyReset, store, type Character } from '../store';

const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

const fmtDuration = (minutes: number) => {
  const m = Math.round(minutes);
  const h = Math.floor(m / 60);
  const rest = m % 60;
  if (!h) return `${rest} min`;
  return rest ? `${h} h ${rest} min` : `${h} h`;
};

const fmtDate = (ts: number) =>
  new Date(ts).toLocaleString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

interface PlannedChar {
  character: Character;
  role: WeeklyRole;
  isPvpChar: boolean;
  activities: WeeklyActivity[];
}

export class WeeklyView extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-large);
    }
    h2 {
      margin: 0 0 var(--sl-spacing-2x-small);
      font-size: var(--sl-font-size-2x-large);
    }
    .sub {
      color: var(--sl-color-neutral-600);
      font-size: var(--sl-font-size-small);
    }
    .head {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--sl-spacing-small);
    }
    .card {
      padding: var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
      background: var(--sl-color-neutral-50);
    }
    .settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--sl-spacing-large);
    }
    .settings h3 {
      margin: 0 0 var(--sl-spacing-x-small);
      font-size: var(--sl-font-size-small);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--sl-color-primary-600);
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-small);
    }
    .reset {
      display: grid;
      grid-template-columns: 1fr 90px;
      gap: var(--sl-spacing-x-small);
    }
    .hint {
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: var(--sl-spacing-medium);
    }
    .tile {
      padding: var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
    }
    .tile .label {
      font-size: var(--sl-font-size-x-small);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--sl-color-neutral-600);
    }
    .tile .value {
      margin-top: var(--sl-spacing-2x-small);
      font-size: var(--sl-font-size-x-large);
      font-weight: var(--sl-font-weight-semibold);
    }
    .tile .note {
      margin-top: var(--sl-spacing-2x-small);
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
    }
    .overview {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-small);
    }
    .ov-row {
      display: grid;
      grid-template-columns: minmax(140px, 1fr) minmax(120px, 2fr) 130px auto;
      gap: var(--sl-spacing-medium);
      align-items: center;
    }
    .ov-name {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-x-small);
      min-width: 0;
    }
    .ov-name strong {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ov-row sl-progress-bar {
      --height: 8px;
    }
    .ov-stats {
      display: flex;
      flex-direction: column;
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
      text-align: right;
    }
    .ov-stats strong {
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-900);
    }
    .ov-link {
      all: unset;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 2px;
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-primary-600);
    }
    .ov-link:hover {
      text-decoration: underline;
    }
    .ov-link:focus-visible {
      outline: var(--sl-focus-ring);
    }
    @media (max-width: 600px) {
      .ov-row {
        grid-template-columns: 1fr auto auto;
        row-gap: var(--sl-spacing-2x-small);
      }
      .ov-row sl-progress-bar {
        grid-column: 1 / -1;
        order: 3;
      }
      .ov-stats span {
        display: none;
      }
    }
    .char-card {
      scroll-margin-top: var(--sl-spacing-medium);
    }
    .char-card.flash {
      animation: flash 1.6s ease-out;
    }
    @keyframes flash {
      0%,
      30% {
        border-color: var(--sl-color-primary-500);
        box-shadow: 0 0 0 2px var(--sl-color-primary-500);
      }
      100% {
        box-shadow: 0 0 0 0 transparent;
      }
    }
    .chars {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-medium);
    }
    .char-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--sl-spacing-x-small) var(--sl-spacing-small);
      margin-bottom: var(--sl-spacing-small);
    }
    .char-name {
      font-weight: var(--sl-font-weight-semibold);
      font-size: var(--sl-font-size-large);
    }
    .char-time {
      margin-left: auto;
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-700);
    }
    .char-card sl-progress-bar {
      --height: 6px;
      margin-bottom: var(--sl-spacing-small);
    }
    .activity {
      display: grid;
      grid-template-columns: minmax(180px, 1.2fr) minmax(0, 2fr) 110px;
      gap: var(--sl-spacing-small);
      align-items: center;
      padding: var(--sl-spacing-x-small) 0;
      border-top: 1px solid var(--sl-color-neutral-100);
    }
    @media (max-width: 700px) {
      .activity {
        grid-template-columns: 1fr auto;
      }
      .activity .pips {
        grid-column: 1 / -1;
        order: 3;
      }
    }
    .act-title {
      font-size: var(--sl-font-size-small);
      font-weight: var(--sl-font-weight-semibold);
    }
    .act-title sl-badge {
      margin-left: var(--sl-spacing-3x-small);
      vertical-align: middle;
    }
    .act-detail {
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
      font-weight: normal;
    }
    .act-detail a {
      color: var(--sl-color-neutral-500);
    }
    .pips {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .pip {
      all: unset;
      cursor: pointer;
      width: 22px;
      height: 22px;
      border-radius: var(--sl-border-radius-small);
      border: 1px solid var(--sl-color-neutral-300);
      background: var(--sl-color-neutral-0);
      display: grid;
      place-items: center;
      font-size: 11px;
      color: var(--sl-color-neutral-500);
    }
    .pip.wide {
      width: auto;
      padding: 0 var(--sl-spacing-x-small);
    }
    .pip:hover {
      border-color: var(--sl-color-primary-500);
    }
    .pip:focus-visible {
      outline: var(--sl-focus-ring);
    }
    .pip.on {
      background: var(--sl-color-success-600);
      border-color: var(--sl-color-success-600);
      color: var(--sl-color-neutral-0);
    }
    .act-meta {
      text-align: right;
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
    }
    .act-meta strong {
      display: block;
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-900);
    }
  `;

  private timer?: number;

  constructor() {
    super();
    new StoreController(this);
  }

  connectedCallback() {
    super.connectedCallback();
    store.ensureCurrentWeek();
    this.timer = window.setInterval(() => store.ensureCurrentWeek(), 60_000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
  }

  /** Der gewählte PvP-Twink – nur gültig, wenn er existiert, eingeplant und nicht der Main ist. */
  private pvpTwinkId(): string | undefined {
    const { characters, plan, weekly } = store.state;
    const id = weekly.pvpCharId;
    const valid = id && id !== plan.mainId && !weekly.excluded.includes(id) && characters.some((c) => c.id === id);
    return valid ? id : undefined;
  }

  private planned(): PlannedChar[] {
    const { characters, plan, weekly } = store.state;
    const pvpTwink = this.pvpTwinkId();
    const sorted = [...characters].sort((a, b) => Number(b.id === plan.mainId) - Number(a.id === plan.mainId));
    return sorted
      .filter((c) => !weekly.excluded.includes(c.id))
      .map((c) => {
        const role: WeeklyRole = c.id === plan.mainId ? 'main' : 'alt';
        const isPvpChar = pvpTwink ? c.id === pvpTwink : role === 'main';
        return { character: c, role, isPvpChar, activities: activitiesFor(role, isPvpChar, weekly) };
      });
  }

  private roleBadges({ role, isPvpChar }: PlannedChar) {
    return html`<sl-badge variant=${role === 'main' ? 'primary' : 'neutral'} pill>${role === 'main' ? 'Main' : 'Twink'}</sl-badge>
      ${isPvpChar && role === 'alt' ? html`<sl-badge variant="danger" pill>PvP</sl-badge>` : nothing}`;
  }

  private doneOf(charId: string, act: WeeklyActivity) {
    return Math.min(store.state.weekly.progress[charId]?.[act.id] ?? 0, act.count(store.state.weekly));
  }

  private toggleIncluded(id: string, included: boolean) {
    const excluded = store.state.weekly.excluded.filter((x) => x !== id);
    store.updateWeekly({ excluded: included ? excluded : [...excluded, id] });
  }

  private clickPip(charId: string, act: WeeklyActivity, index: number) {
    const done = this.doneOf(charId, act);
    store.setWeeklyCount(charId, act.id, done >= index ? index - 1 : index);
  }

  private resetWeek() {
    if (confirm('Alle Häkchen dieser Woche zurücksetzen?')) store.resetWeek();
  }

  private renderSettings() {
    const { characters, plan, weekly } = store.state;
    return html`
      <div class="card settings">
        <div class="stack">
          <h3>Charaktere</h3>
          <sl-select
            label="Main"
            size="small"
            placeholder=${characters.length ? 'Main auswählen' : 'Erst einen Charakter anlegen'}
            ?disabled=${!characters.length}
            .value=${plan.mainId ?? ''}
            @sl-change=${(e: Event) => store.updatePlan({ mainId: ((e.target as SlSelect).value as string) || undefined })}
          >
            ${characters.map((c) => html`<sl-option value=${c.id}>${c.name}</sl-option>`)}
          </sl-select>
          ${characters.map(
            (c) => html`<sl-checkbox
              size="small"
              .checked=${!weekly.excluded.includes(c.id)}
              @sl-change=${(e: Event) => this.toggleIncluded(c.id, (e.target as SlCheckbox).checked)}
              >${c.name} (${c.id === plan.mainId ? 'Main' : 'Twink'}, Lv. ${c.level})</sl-checkbox
            >`,
          )}
        </div>
        <div class="stack">
          <h3>Was spielst du?</h3>
          <sl-switch
            size="small"
            .checked=${weekly.membership}
            @sl-change=${(e: Event) => store.updateWeekly({ membership: (e.target as SlSwitch).checked })}
            >Abo (Membership) – 21 statt 14 Dungeon-Belohnungen</sl-switch
          >
          <sl-switch
            size="small"
            .checked=${weekly.pvp}
            @sl-change=${(e: Event) => store.updateWeekly({ pvp: (e.target as SlSwitch).checked })}
            >Arena-PvP (PvP-Charakter Full PvP, alle anderen 10v10)</sl-switch
          >
          <sl-switch
            size="small"
            .checked=${weekly.abyss}
            @sl-change=${(e: Event) => store.updateWeekly({ abyss: (e.target as SlSwitch).checked })}
            >Abyss-Zeit (Main: Artifact + 20 Wochenquests · PvP-Charakter: 2–3 h Grinden)</sl-switch
          >
          <span class="hint">Abyss-Empfehlung aus „Do THIS From Day 1“ (SywoGG) – lohnt sich auch für reine PvE-Spieler.</span>
          <sl-select
            label="PvP-Charakter"
            size="small"
            help-text="Übernimmt Abyss-Grind und Full-PvP-Arena. Der Main behält Wochenquests und Artifact und spielt dann 10v10."
            .value=${this.pvpTwinkId() ?? ''}
            @sl-change=${(e: Event) => store.updateWeekly({ pvpCharId: ((e.target as SlSelect).value as string) || undefined })}
          >
            <sl-option value="">Main</sl-option>
            ${characters
              .filter((c) => c.id !== plan.mainId && !weekly.excluded.includes(c.id))
              .map((c) => html`<sl-option value=${c.id}>${c.name}</sl-option>`)}
          </sl-select>
        </div>
        <div class="stack">
          <h3>Wochen-Reset</h3>
          <div class="reset">
            <sl-select
              size="small"
              label="Tag"
              .value=${String(weekly.resetWeekday)}
              @sl-change=${(e: Event) => store.updateWeekly({ resetWeekday: Number((e.target as SlSelect).value) })}
            >
              ${WEEKDAYS.map((d, i) => html`<sl-option value=${String(i)}>${d}</sl-option>`)}
            </sl-select>
            <sl-input
              size="small"
              label="Uhr"
              type="number"
              min="0"
              max="23"
              .value=${String(weekly.resetHour)}
              @sl-change=${(e: Event) =>
                store.updateWeekly({
                  resetHour: Math.min(23, Math.max(0, Math.round(Number((e.target as SlInput).value)) || 0)),
                })}
            ></sl-input>
          </div>
          <span class="hint">KR/TW: Mittwoch 05:00. Für Global noch nicht bestätigt – bei Bedarf anpassen. Die Häkchen werden automatisch zurückgesetzt.</span>
          <sl-button size="small" @click=${this.resetWeek}>
            <sl-icon slot="prefix" name="arrow-counterclockwise"></sl-icon>Woche jetzt zurücksetzen
          </sl-button>
        </div>
      </div>
    `;
  }

  private renderActivity(charId: string, act: WeeklyActivity) {
    const total = act.count(store.state.weekly);
    const done = this.doneOf(charId, act);
    const sources = (act.sources ?? []).map((id) => SOURCES[id]).filter(Boolean);
    const single = total === 1;
    return html`
      <div class="activity">
        <div class="act-title">
          ${act.title}
          ${act.estimate
            ? html`<sl-tooltip content="Zeitwert ist eine eigene Schätzung – nicht aus deiner Excel oder einer Quelle.">
                <sl-badge variant="warning" pill>Schätzung</sl-badge>
              </sl-tooltip>`
            : nothing}
          ${act.detail || sources.length
            ? html`<div class="act-detail">
                ${act.detail ?? ''}
                ${sources.map(
                  (s) => html` <a href=${s.url} target="_blank" rel="noopener noreferrer" title=${s.title}>↗</a>`,
                )}
              </div>`
            : nothing}
        </div>
        <div class="pips" role="group" aria-label=${`${act.title}: ${done} von ${total}`}>
          ${Array.from({ length: total }, (_, i) => {
            const n = i + 1;
            return html`<button
              class="pip ${n <= done ? 'on' : ''} ${single ? 'wide' : ''}"
              aria-pressed=${n <= done}
              title=${single ? 'erledigt' : `${n} von ${total}`}
              @click=${() => this.clickPip(charId, act, n)}
            >
              ${single ? (done ? '✓ erledigt' : 'offen') : n}
            </button>`;
          })}
        </div>
        <div class="act-meta">
          <strong>${done} / ${total} ${single ? '' : act.unit}</strong>
          ${fmtDuration(total * act.minutes)}
        </div>
      </div>
    `;
  }

  private totals({ character, activities }: PlannedChar) {
    const weekly = store.state.weekly;
    const planned = activities.reduce((s, a) => s + a.count(weekly) * a.minutes, 0);
    const doneMin = activities.reduce((s, a) => s + this.doneOf(character.id, a) * a.minutes, 0);
    return { planned, doneMin, percent: planned ? Math.round((doneMin / planned) * 100) : 0 };
  }

  private jumpTo(charId: string) {
    const card = this.renderRoot.querySelector<HTMLElement>(`#char-${charId}`);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    card.classList.remove('flash');
    void card.offsetWidth;
    card.classList.add('flash');
  }

  private renderOverview(planned: PlannedChar[]) {
    return html`
      <div class="card overview">
        ${planned.map((p) => {
          const { character: c } = p;
          const { planned: plannedMin, doneMin, percent } = this.totals(p);
          return html`
            <div class="ov-row">
              <div class="ov-name">
                <strong>${c.name}</strong>
                ${this.roleBadges(p)}
              </div>
              <sl-progress-bar value=${percent} label=${`Wochenfortschritt ${c.name}`}></sl-progress-bar>
              <div class="ov-stats">
                <strong>${percent} %</strong>
                <span>${fmtDuration(doneMin)} / ${fmtDuration(plannedMin)}</span>
              </div>
              <button class="ov-link" @click=${() => this.jumpTo(c.id)}>
                Details <sl-icon name="arrow-down-short"></sl-icon>
              </button>
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderChar(p: PlannedChar) {
    const { character: c, activities } = p;
    const { planned, doneMin, percent } = this.totals(p);
    return html`
      <div class="card char-card" id="char-${c.id}">
        <div class="char-head">
          <span class="char-name">${c.name}</span>
          ${this.roleBadges(p)}
          <span class="sub">${getClass(c.classId)?.name ?? c.classId} · Lv. ${c.level}</span>
          ${c.level < 45 ? html`<sl-badge variant="warning" pill>unter 45 – Dungeons ggf. noch gesperrt</sl-badge>` : nothing}
          <span class="char-time">${fmtDuration(doneMin)} von ${fmtDuration(planned)}</span>
        </div>
        <sl-progress-bar value=${percent} label=${`Fortschritt ${c.name}`}></sl-progress-bar>
        ${activities.map((a) => this.renderActivity(c.id, a))}
      </div>
    `;
  }

  render() {
    const { characters, plan, weekly } = store.state;
    const planned = this.planned();
    const totalMin = planned.reduce(
      (s, p) => s + p.activities.reduce((t, a) => t + a.count(weekly) * a.minutes, 0),
      0,
    );
    const doneMin = planned.reduce(
      (s, p) => s + p.activities.reduce((t, a) => t + this.doneOf(p.character.id, a) * a.minutes, 0),
      0,
    );
    const claims = planned.length * claimsPerWeek(weekly);
    const kinah = Math.min(claims, SERVER_CLAIM_CAP) * KINAH_PER_CLAIM;
    const nextReset = lastWeeklyReset(Date.now(), weekly.resetWeekday, weekly.resetHour) + 7 * 24 * 3600 * 1000;

    return html`
      <div class="head">
        <div>
          <h2>Wochenplanung</h2>
          <div class="sub">Aktuelle Woche seit ${fmtDate(weekly.weekStart)} · nächster Reset ${fmtDate(nextReset)}</div>
        </div>
      </div>

      ${planned.length ? this.renderOverview(planned) : nothing}

      ${this.renderSettings()}

      ${!characters.length
        ? html`<sl-alert variant="primary" open>
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Lege im Tab „Charaktere“ deinen Main und deine Twinks an – die Wochenplanung baut darauf auf.
          </sl-alert>`
        : html`
            ${!plan.mainId
              ? html`<sl-alert variant="warning" open>
                  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                  Kein Main ausgewählt – alle Charaktere werden als Twinks geplant (ohne Daily Missions, Weltbosse usw.).
                </sl-alert>`
              : nothing}
            <div class="tiles">
              <div class="tile">
                <div class="label">Geplant pro Woche</div>
                <div class="value">${fmtDuration(totalMin)}</div>
                <div class="note">${planned.length} Charakter(e)</div>
              </div>
              <div class="tile">
                <div class="label">Ø pro Tag</div>
                <div class="value">${fmtDuration(totalMin / 7)}</div>
              </div>
              <div class="tile">
                <div class="label">Erledigt</div>
                <div class="value">${totalMin ? Math.round((doneMin / totalMin) * 100) : 0} %</div>
                <div class="note">${fmtDuration(doneMin)} · noch ${fmtDuration(Math.max(0, totalMin - doneMin))}</div>
              </div>
              <div class="tile">
                <div class="label">Kinah-Schätzung</div>
                <div class="value">≈ ${(kinah / 1_000_000).toLocaleString('de-DE', { maximumFractionDigits: 1 })} Mio.</div>
                <div class="note">
                  ${claims} Dungeon-Belohnungen × 400k (Fire Temple Conquest)${claims > SERVER_CLAIM_CAP
                    ? html` – ab ${SERVER_CLAIM_CAP} pro Server und Woche sinkt der Ertrag`
                    : nothing}
                </div>
              </div>
            </div>
            <div class="chars">${planned.map((p) => this.renderChar(p))}</div>
          `}
    `;
  }
}

customElements.define('weekly-view', WeeklyView);
