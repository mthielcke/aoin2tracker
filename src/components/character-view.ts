import { LitElement, css, html, nothing } from 'lit';
import type SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import type SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import { buildDetailsHref, getBuild, getClass } from '../data/classes';
import { phaseKeys, phasesFor, progress } from '../progress';
import { store, type Character } from '../store';
import { checklistStyles, firstOpenPhaseKey, renderChecklistPhase } from './checklist';

const MODE_LABEL = { pve: 'PvE', pvp: 'PvP' } as const;

const clampInt = (value: string, min: number, max: number) =>
  Math.min(max, Math.max(min, Math.round(Number(value)) || min));

export class CharacterView extends LitElement {
  static properties = {
    character: { attribute: false },
    onlyOpen: { state: true },
  };

  static styles = [
    checklistStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-large);
      }
      .head {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: var(--sl-spacing-small);
      }
      h2 {
        margin: 0;
        font-size: var(--sl-font-size-2x-large);
      }
      .sub {
        color: var(--sl-color-neutral-600);
      }
      .controls {
        display: grid;
        grid-template-columns: 1fr 110px 120px;
        gap: var(--sl-spacing-medium);
        align-items: end;
      }
      @media (max-width: 560px) {
        .controls {
          grid-template-columns: 1fr 1fr;
        }
        .controls sl-select {
          grid-column: 1 / -1;
        }
      }
      .build-info {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-medium);
        flex-wrap: wrap;
      }
      .summary {
        flex: 1 1 320px;
        margin: 0;
        color: var(--sl-color-neutral-700);
        font-size: var(--sl-font-size-small);
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
      }
    `,
  ];

  declare character: Character;
  declare onlyOpen: boolean;

  /** Pro Charakter+Build einmalig bestimmt, damit Abhaken die Phasen nicht auf-/zuklappt. */
  private initiallyOpen = new Map<string, string>();

  constructor() {
    super();
    this.onlyOpen = false;
  }

  private patch(changes: Parameters<typeof store.updateCharacter>[1]) {
    store.updateCharacter(this.character.id, changes);
  }

  private confirmDelete() {
    this.renderRoot.querySelector<SlDialog>('#delete-dialog')!.show();
  }

  private deleteCharacter() {
    this.renderRoot.querySelector<SlDialog>('#delete-dialog')!.hide();
    store.deleteCharacter(this.character.id);
  }

  render() {
    const c = this.character;
    const cls = getClass(c.classId);
    const build = getBuild(c.classId, c.buildId);
    const phases = phasesFor(c);
    const overall = progress(c.done, phases.flatMap(phaseKeys));

    const openStateKey = `${c.id}:${c.buildId}`;
    if (!this.initiallyOpen.has(openStateKey)) {
      this.initiallyOpen.set(openStateKey, firstOpenPhaseKey(phases, c.done));
    }
    const openKey = this.initiallyOpen.get(openStateKey);
    const opts = {
      done: c.done,
      onlyOpen: this.onlyOpen,
      onToggle: (key: string, done: boolean) => store.setItemDone(c.id, key, done),
    };

    return html`
      <div class="head">
        <div>
          <h2>${c.name}</h2>
          <div class="sub">${cls ? `${cls.name} · ${cls.role} · ${cls.weapon}` : `Unbekannte Klasse (${c.classId})`}</div>
        </div>
        <sl-button variant="danger" outline size="small" @click=${this.confirmDelete}>
          <sl-icon slot="prefix" name="trash"></sl-icon>Löschen
        </sl-button>
      </div>

      <div class="controls">
        <sl-select
          label="Buildvariante"
          .value=${c.buildId}
          @sl-change=${(e: Event) => this.patch({ buildId: (e.target as SlSelect).value as string })}
        >
          ${cls?.builds.map((b) => html`<sl-option value=${b.id}>${MODE_LABEL[b.mode]} · ${b.name}</sl-option>`)}
        </sl-select>
        <sl-input
          label="Level"
          type="number"
          min="1"
          max="99"
          .value=${String(c.level)}
          @sl-change=${(e: Event) => this.patch({ level: clampInt((e.target as SlInput).value, 1, 99) })}
        ></sl-input>
        <sl-input
          label="Gear Score"
          type="number"
          min="0"
          max="99999"
          .value=${String(c.gearScore ?? 0)}
          @sl-change=${(e: Event) => this.patch({ gearScore: clampInt((e.target as SlInput).value, 0, 99999) })}
        ></sl-input>
      </div>
      ${build
        ? html`<div class="build-info">
            <p class="summary">${build.summary}</p>
            ${build.details
              ? html`<sl-button size="small" variant="primary" outline href=${buildDetailsHref(build.id)}>
                  <sl-icon slot="prefix" name="book"></sl-icon>Build-Details
                </sl-button>`
              : nothing}
          </div>`
        : nothing}

      <div class="overall">
        <sl-progress-bar value=${overall.percent} label="Gesamtfortschritt"></sl-progress-bar>
        <strong>${overall.percent} %</strong>
      </div>

      <div class="toolbar">
        <span class="sub">${overall.done} von ${overall.total} Punkten erledigt</span>
        <sl-switch
          size="small"
          .checked=${this.onlyOpen}
          @sl-change=${(e: Event) => (this.onlyOpen = (e.target as SlSwitch).checked)}
          >Nur offene zeigen</sl-switch
        >
      </div>

      <div class="phases">
        ${phases.map((sp) => renderChecklistPhase(sp, `${sp.scope}.${sp.phase.id}` === openKey, opts))}
      </div>

      <sl-textarea
        label="Notizen"
        resize="auto"
        placeholder="Eigene Notizen zu diesem Charakter …"
        .value=${c.notes}
        @sl-change=${(e: Event) => this.patch({ notes: (e.target as SlTextarea).value })}
      ></sl-textarea>

      <sl-dialog id="delete-dialog" label="Charakter löschen?">
        „${c.name}“ und der gesamte Fortschritt werden entfernt. Das lässt sich nicht rückgängig machen – vorher ggf.
        exportieren.
        <sl-button slot="footer" @click=${() => this.renderRoot.querySelector<SlDialog>('#delete-dialog')!.hide()}
          >Abbrechen</sl-button
        >
        <sl-button slot="footer" variant="danger" @click=${this.deleteCharacter}>Löschen</sl-button>
      </sl-dialog>
    `;
  }
}

customElements.define('character-view', CharacterView);
