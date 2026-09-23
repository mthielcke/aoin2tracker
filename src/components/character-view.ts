import { LitElement, css, html, nothing } from 'lit';
import type SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import type SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import type SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import type SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import { buildDetailsHref, getBuild, getClass } from '../data/classes';
import { SOURCES } from '../data/sources';
import type { ChecklistItem, SectionKind } from '../data/types';
import { itemKey, phaseKeys, phasesFor, progress, type ScopedPhase } from '../progress';
import { store, type Character } from '../store';

const SECTION_ICON: Record<SectionKind, string> = {
  quests: 'signpost-2',
  skills: 'lightning-charge',
  passives: 'shield-check',
  stigmas: 'stars',
  daevanion: 'diagram-3',
  gear: 'hammer',
  stats: 'bar-chart',
  arcana: 'collection',
  rotation: 'arrow-repeat',
  systems: 'gear',
};

const MODE_LABEL = { pve: 'PvE', pvp: 'PvP' } as const;

export class CharacterView extends LitElement {
  static properties = {
    character: { attribute: false },
    onlyOpen: { state: true },
  };

  static styles = css`
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
      grid-template-columns: 1fr 120px;
      gap: var(--sl-spacing-medium);
      align-items: end;
    }
    @media (max-width: 560px) {
      .controls {
        grid-template-columns: 1fr;
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
    .phases {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-small);
    }
    .phase-summary {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-small);
      width: 100%;
      padding-right: var(--sl-spacing-small);
    }
    .phase-title {
      flex: 1;
      font-weight: var(--sl-font-weight-semibold);
    }
    .phase-desc {
      margin: 0 0 var(--sl-spacing-medium);
      color: var(--sl-color-neutral-600);
      font-size: var(--sl-font-size-small);
    }
    section + section {
      margin-top: var(--sl-spacing-large);
    }
    h3 {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-x-small);
      margin: 0 0 var(--sl-spacing-x-small);
      font-size: var(--sl-font-size-small);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--sl-color-primary-600);
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      padding: var(--sl-spacing-x-small) 0;
      border-bottom: 1px solid var(--sl-color-neutral-100);
    }
    li:last-child {
      border-bottom: none;
    }
    .item-row {
      display: flex;
      align-items: flex-start;
      gap: var(--sl-spacing-x-small);
    }
    .item-row sl-checkbox {
      flex: 1;
    }
    li.done sl-checkbox::part(label) {
      color: var(--sl-color-neutral-500);
      text-decoration: line-through;
    }
    .meta {
      margin: var(--sl-spacing-3x-small) 0 0 calc(var(--sl-toggle-size-medium) + var(--sl-spacing-x-small));
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-600);
    }
    .meta p {
      margin: 0 0 var(--sl-spacing-3x-small);
    }
    .sources {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sl-spacing-x-small);
    }
    .sources a {
      display: inline-flex;
      align-items: center;
      gap: var(--sl-spacing-3x-small);
      color: var(--sl-color-neutral-500);
      text-decoration: none;
      font-size: var(--sl-font-size-x-small);
    }
    .sources a:hover {
      color: var(--sl-color-primary-600);
    }
    .all-done {
      color: var(--sl-color-success-600);
      font-size: var(--sl-font-size-small);
    }
  `;

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

  private renderItem(item: ChecklistItem, key: string) {
    const done = !!this.character.done[key];
    if (this.onlyOpen && done) return nothing;
    const sources = (item.sources ?? []).map((id) => SOURCES[id]).filter(Boolean);
    return html`
      <li class=${done ? 'done' : ''}>
        <div class="item-row">
          <sl-checkbox
            .checked=${done}
            @sl-change=${(e: Event) =>
              store.setItemDone(this.character.id, key, (e.target as SlCheckbox).checked)}
            >${item.text}</sl-checkbox
          >
          ${item.uncertain
            ? html`<sl-tooltip content="Quellen widersprechen sich oder Name stammt aus einem Transkript – im Spiel prüfen.">
                <sl-badge variant="warning" pill>prüfen</sl-badge>
              </sl-tooltip>`
            : nothing}
        </div>
        ${item.detail || sources.length
          ? html`<div class="meta">
              ${item.detail ? html`<p>${item.detail}</p>` : nothing}
              <div class="sources">
                ${sources.map(
                  (s) => html`<a href=${s.url} target="_blank" rel="noopener noreferrer" title=${s.note ?? s.title}>
                    <sl-icon name=${s.kind === 'youtube' ? 'youtube' : 'link-45deg'}></sl-icon>${s.title}
                  </a>`,
                )}
              </div>
            </div>`
          : nothing}
      </li>
    `;
  }

  private renderPhase(sp: ScopedPhase, open: boolean) {
    const { scope, phase } = sp;
    const p = progress(this.character, phaseKeys(sp));
    const sections = phase.sections
      .map((section) => ({
        section,
        rows: section.items.map((item) => this.renderItem(item, itemKey(scope, phase.id, section.id, item.id))),
      }))
      .filter(({ rows }) => rows.some((r) => r !== nothing));
    return html`
      <sl-details ?open=${open}>
        <div slot="summary" class="phase-summary">
          <span class="phase-title">${phase.title}</span>
          <sl-badge variant=${p.done === p.total ? 'success' : 'neutral'} pill>${p.done}/${p.total}</sl-badge>
        </div>
        ${phase.description ? html`<p class="phase-desc">${phase.description}</p>` : nothing}
        ${sections.length
          ? sections.map(
              ({ section, rows }) => html`
                <section>
                  <h3><sl-icon name=${SECTION_ICON[section.kind]}></sl-icon>${section.title}</h3>
                  <ul>
                    ${rows}
                  </ul>
                </section>
              `,
            )
          : html`<div class="all-done">Alles erledigt.</div>`}
      </sl-details>
    `;
  }

  render() {
    const c = this.character;
    const cls = getClass(c.classId);
    const build = getBuild(c.classId, c.buildId);
    const phases = phasesFor(c);
    const overall = progress(c, phases.flatMap(phaseKeys));

    const openStateKey = `${c.id}:${c.buildId}`;
    if (!this.initiallyOpen.has(openStateKey)) {
      const firstOpen = phases.find((sp) => {
        const p = progress(c, phaseKeys(sp));
        return p.done < p.total;
      });
      this.initiallyOpen.set(openStateKey, firstOpen ? `${firstOpen.scope}.${firstOpen.phase.id}` : '');
    }
    const openKey = this.initiallyOpen.get(openStateKey);

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
          @sl-change=${(e: Event) => {
            const level = Math.min(99, Math.max(1, Math.round(Number((e.target as SlInput).value)) || 1));
            this.patch({ level });
          }}
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
        ${phases.map((sp) => this.renderPhase(sp, `${sp.scope}.${sp.phase.id}` === openKey))}
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
