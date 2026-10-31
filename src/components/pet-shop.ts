import { LitElement, css, html, nothing } from 'lit';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { PET_SCOPE, PET_SHOP_PLAN } from '../data/petshop';
import { phaseKeys, progress, type ScopedPhase } from '../progress';
import { StoreController, store } from '../store';
import { checklistStyles, firstOpenPhaseKey, renderChecklistPhase } from './checklist';

/** Abhakbare Sammelliste der Händler-Pets (Haken = Stufe 3). Häkchen liegen accountweit in `plan.done`. */
export class PetShop extends LitElement {
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

  render() {
    const { plan } = store.state;
    const phases: ScopedPhase[] = PET_SHOP_PLAN.map((phase) => ({ scope: PET_SCOPE, phase }));
    const overall = progress(plan.done, phaseKeys(phases[0]));
    this.openKey ??= firstOpenPhaseKey(phases, plan.done);
    const opts = {
      done: plan.done,
      onlyOpen: this.onlyOpen,
      onToggle: (key: string, done: boolean) => store.setPlanItemDone(key, done),
    };

    return html`
      <div>
        <h2>Pets vom Händler</h2>
        <p class="intro">
          Pets, die deinen Charakter verbessern, aber nicht als Seele droppen – also beim Black Cloud Merchant kaufen
          (oder aus Kisten). Special-Pets aus Atelier, Shugo Festival, Tsenka-Händler, Halloween-Shop oder Daeva Pass
          geben keine Werte und stehen deshalb nicht hier. Stand: EliteGrindLab vom 14.10.2026 (Global-Client).
        </p>
      </div>

      <div class="overall">
        <sl-progress-bar value=${overall.percent} label="Pets auf Stufe 3"></sl-progress-bar>
        <strong>${overall.done} / ${overall.total} Pets auf Stufe 3</strong>
      </div>

      <div class="toolbar">
        <span>Bilder: EliteGrindLab</span>
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

customElements.define('pet-shop', PetShop);
