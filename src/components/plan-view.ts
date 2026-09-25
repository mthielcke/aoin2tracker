import { LitElement, css, html, nothing } from 'lit';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { getClass } from '../data/classes';
import { PLAN_SCOPE, START_PLAN } from '../data/startplan';
import { phaseKeys, progress, type ScopedPhase } from '../progress';
import { StoreController, store, type Character } from '../store';
import { checklistStyles, firstOpenPhaseKey, renderChecklistPhase } from './checklist';

const LEVEL_ALT_TARGET = 21;

export class PlanView extends LitElement {
  static properties = {
    onlyOpen: { state: true },
  };

  static styles = [
    checklistStyles,
    css`
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
      .setup {
        display: grid;
        grid-template-columns: 1fr 180px;
        gap: var(--sl-spacing-medium);
        align-items: start;
        padding: var(--sl-spacing-medium);
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: var(--sl-border-radius-large);
        background: var(--sl-color-neutral-50);
      }
      .setup .goal {
        grid-column: 1 / -1;
      }
      @media (max-width: 560px) {
        .setup {
          grid-template-columns: 1fr;
        }
      }
      .goal-row {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-medium);
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-700);
      }
      .goal-row sl-progress-bar {
        flex: 1;
        --height: 10px;
      }
      .hint {
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-600);
      }
      .overall {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-medium);
      }
      .overall sl-progress-bar {
        flex: 1;
        --height: 10px;
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--sl-spacing-small);
        flex-wrap: wrap;
        color: var(--sl-color-neutral-600);
      }
      .chars {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sl-spacing-x-small);
      }
      .status {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-x-small);
        font-size: var(--sl-font-size-small);
      }
    `,
  ];

  declare onlyOpen: boolean;
  private openKey?: string;

  constructor() {
    super();
    new StoreController(this);
    this.onlyOpen = false;
  }

  private get main(): Character | undefined {
    const { characters, plan } = store.state;
    return characters.find((c) => c.id === plan.mainId);
  }

  private levelStatus(c: Character | undefined, target: number) {
    if (!c) return html`<span class="hint">Oben einen Main auswählen, dann erscheint hier sein Stand.</span>`;
    const reached = c.level >= target;
    return html`<div class="status">
      <sl-badge variant=${reached ? 'success' : 'neutral'} pill>${reached ? `Level ${target} erreicht` : `Level ${c.level} / ${target}`}</sl-badge>
      <span>${c.name}</span>
    </div>`;
  }

  private altsStatus() {
    const alts = store.state.characters.filter((c) => c.id !== store.state.plan.mainId);
    if (!alts.length) {
      return html`<span class="hint">Noch keine Twinks angelegt – im Tab „Charaktere“ hinzufügen.</span>`;
    }
    return html`<div class="chars">
      ${alts.map((c) => {
        const reached = c.level >= LEVEL_ALT_TARGET;
        return html`<sl-badge variant=${reached ? 'success' : 'neutral'} pill>
          ${c.name} · ${getClass(c.classId)?.name ?? c.classId} · Lv. ${c.level}${reached ? ' ✓' : ''}
        </sl-badge>`;
      })}
    </div>`;
  }

  private goalStatus() {
    const main = this.main;
    const target = store.state.plan.weekOneTarget;
    if (!main) return html`<span class="hint">Main auswählen, um den Fortschritt zum Wochenziel zu sehen.</span>`;
    const gs = main.gearScore ?? 0;
    const percent = target ? Math.min(100, Math.round((gs / target) * 100)) : 0;
    return html`<div class="goal-row">
      <sl-progress-bar value=${percent} label="Gear Score zum Wochenziel"></sl-progress-bar>
      <strong>${gs.toLocaleString('de-DE')} / ${target.toLocaleString('de-DE')} GS</strong>
    </div>
    ${main.gearScore ? nothing : html`<span class="hint">Den aktuellen Gear Score trägst du in der Charakteransicht ein.</span>`}`;
  }

  private extraFor(phaseId: string) {
    switch (phaseId) {
      case 'main-21':
        return this.levelStatus(this.main, 21);
      case 'alts-21':
        return this.altsStatus();
      case 'main-45':
        return this.levelStatus(this.main, 45);
      case 'main-focus':
        return this.goalStatus();
      default:
        return nothing;
    }
  }

  render() {
    const { plan, characters } = store.state;
    const phases: ScopedPhase[] = START_PLAN.map((phase) => ({ scope: PLAN_SCOPE, phase }));
    const overall = progress(plan.done, phases.flatMap(phaseKeys));
    this.openKey ??= firstOpenPhaseKey(phases, plan.done);
    const opts = {
      done: plan.done,
      onlyOpen: this.onlyOpen,
      onToggle: (key: string, done: boolean) => store.setPlanItemDone(key, done),
    };

    return html`
      <div>
        <h2>Startplan</h2>
        <p class="intro">
          Setup → Main auf 21 (Energie läuft) → Twinks auf 21 → Main auf 45 mit Horizontals → Main-Fokus bis zum
          Wochenziel → Twinks weiterspielen. Der Plan gilt für den ganzen Account.
        </p>
      </div>

      <div class="setup">
        <sl-select
          label="Main"
          placeholder=${characters.length ? 'Main auswählen' : 'Erst einen Charakter anlegen'}
          ?disabled=${!characters.length}
          .value=${plan.mainId ?? ''}
          @sl-change=${(e: Event) => store.updatePlan({ mainId: ((e.target as SlSelect).value as string) || undefined })}
        >
          ${characters.map(
            (c) => html`<sl-option value=${c.id}>${c.name} (${getClass(c.classId)?.name ?? c.classId}, Lv. ${c.level})</sl-option>`,
          )}
        </sl-select>
        <sl-input
          label="Ziel-GS Woche 1"
          type="number"
          min="0"
          max="99999"
          help-text="z. B. 1.400 (Tier 2) oder 2.100 (Tier 3)"
          .value=${String(plan.weekOneTarget)}
          @sl-change=${(e: Event) =>
            store.updatePlan({ weekOneTarget: Math.max(0, Math.round(Number((e.target as SlInput).value)) || 0) })}
        ></sl-input>
        <div class="goal">${this.goalStatus()}</div>
      </div>

      <div class="overall">
        <sl-progress-bar value=${overall.percent} label="Fortschritt Startplan"></sl-progress-bar>
        <strong>${overall.percent} %</strong>
      </div>

      <div class="toolbar">
        <span>${overall.done} von ${overall.total} Punkten erledigt</span>
        <sl-switch
          size="small"
          .checked=${this.onlyOpen}
          @sl-change=${(e: Event) => (this.onlyOpen = (e.target as SlSwitch).checked)}
          >Nur offene zeigen</sl-switch
        >
      </div>

      <div class="phases">
        ${phases.map((sp) =>
          renderChecklistPhase(sp, `${sp.scope}.${sp.phase.id}` === this.openKey, opts, this.extraFor(sp.phase.id)),
        )}
      </div>
    `;
  }
}

customElements.define('plan-view', PlanView);
