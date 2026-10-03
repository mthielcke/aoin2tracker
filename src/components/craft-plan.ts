import { LitElement, css, html, nothing } from 'lit';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { getClass } from '../data/classes';
import { CRAFT_PLAN, CRAFT_SCOPE, WEAPON_PROFESSION } from '../data/craftplan';
import { phaseKeys, progress, type ScopedPhase } from '../progress';
import { StoreController, store } from '../store';
import { checklistStyles, firstOpenPhaseKey, renderChecklistPhase } from './checklist';

/** Abhakbarer Crafting-Fahrplan mit Fokus auf die Waffe. Häkchen liegen accountweit in `plan.done`. */
export class CraftPlan extends LitElement {
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
      .main-hint {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-x-small);
        flex-wrap: wrap;
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-700);
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
    `,
  ];

  declare onlyOpen: boolean;
  private openKey?: string;

  constructor() {
    super();
    new StoreController(this);
    this.onlyOpen = false;
  }

  private mainHint() {
    const { characters, plan } = store.state;
    const main = characters.find((c) => c.id === plan.mainId);
    if (!main) return html`<span>Im Startplan einen Main wählen, dann steht hier sein Waffen-Beruf.</span>`;
    const cls = getClass(main.classId);
    const profession = WEAPON_PROFESSION[main.classId];
    return html`<sl-icon name="hammer"></sl-icon>
      <span>${main.name} (${cls?.name ?? main.classId}): Waffe über</span>
      ${profession ? html`<sl-badge variant="primary" pill>${profession}</sl-badge>` : html`<span>unbekannten Beruf</span>`}
      <span>· Guard über Blacksmithing · Accessoires über Handicrafting</span>`;
  }

  render() {
    const { plan } = store.state;
    const phases: ScopedPhase[] = CRAFT_PLAN.map((phase) => ({ scope: CRAFT_SCOPE, phase }));
    const overall = progress(plan.done, phases.flatMap(phaseKeys));
    this.openKey ??= firstOpenPhaseKey(phases, plan.done);
    const opts = {
      done: plan.done,
      onlyOpen: this.onlyOpen,
      onToggle: (key: string, done: boolean) => store.setPlanItemDone(key, done),
    };

    return html`
      <div>
        <h2>Crafting-Fahrplan: Waffe</h2>
        <p class="intro">
          Berufe wählen und sammeln → Waffen-Beruf auf Novice 50 → Professional 20–30 → Proc-Kette bis zur goldenen Basis →
          Endgame-Waffe craften und per Transfer aufwerten. Der Fahrplan gilt für den ganzen Account.
        </p>
      </div>

      <div class="main-hint">${this.mainHint()}</div>

      <div class="overall">
        <sl-progress-bar value=${overall.percent} label="Fortschritt Crafting-Fahrplan"></sl-progress-bar>
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
        ${phases.map((sp) => renderChecklistPhase(sp, `${sp.scope}.${sp.phase.id}` === this.openKey, opts, nothing))}
      </div>
    `;
  }
}

customElements.define('craft-plan', CraftPlan);
