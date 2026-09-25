import { LitElement, css, html } from 'lit';
import type SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import type SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import { CLASSES, getBuild, getClass } from '../data/classes';
import { phaseKeys, phasesFor, progress } from '../progress';
import { StoreController, store, type Character } from '../store';
import './character-view';

const MODE_LABEL = { pve: 'PvE', pvp: 'PvP' } as const;

export class CharacterPanel extends LitElement {
  static properties = {
    draftClassId: { state: true },
    draftBuildId: { state: true },
    draftName: { state: true },
  };

  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: var(--sl-spacing-x-large);
      align-items: start;
    }
    @media (max-width: 800px) {
      :host {
        grid-template-columns: 1fr;
      }
    }
    aside {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-small);
    }
    .char {
      all: unset;
      cursor: pointer;
      display: block;
      padding: var(--sl-spacing-small) var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
      background: var(--sl-color-neutral-50);
    }
    .char:hover {
      border-color: var(--sl-color-neutral-400);
    }
    .char:focus-visible {
      outline: var(--sl-focus-ring);
    }
    .char[aria-current='true'] {
      border-color: var(--sl-color-primary-600);
      background: var(--sl-color-primary-50);
    }
    .char-name {
      font-weight: var(--sl-font-weight-semibold);
    }
    .char-meta {
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-600);
      margin-bottom: var(--sl-spacing-2x-small);
    }
    sl-progress-bar {
      --height: 6px;
    }
    .empty {
      padding: var(--sl-spacing-2x-large);
      border: 1px dashed var(--sl-color-neutral-300);
      border-radius: var(--sl-border-radius-large);
      text-align: center;
      color: var(--sl-color-neutral-600);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-medium);
    }
  `;

  declare draftClassId: string;
  declare draftBuildId: string;
  declare draftName: string;

  constructor() {
    super();
    new StoreController(this);
    this.resetDraft();
  }

  private resetDraft() {
    this.draftName = '';
    this.draftClassId = '';
    this.draftBuildId = '';
  }

  private get dialog() {
    return this.renderRoot.querySelector<SlDialog>('sl-dialog')!;
  }

  private openDialog() {
    this.resetDraft();
    this.dialog.show();
  }

  private selectClass(classId: string) {
    this.draftClassId = classId;
    this.draftBuildId = getClass(classId)?.builds[0]?.id ?? '';
  }

  private create(e: Event) {
    e.preventDefault();
    if (!this.canCreate) return;
    store.addCharacter({ name: this.draftName.trim(), classId: this.draftClassId, buildId: this.draftBuildId });
    this.dialog.hide();
  }

  private get canCreate() {
    return !!(this.draftName.trim() && getBuild(this.draftClassId, this.draftBuildId));
  }

  private renderCharButton(c: Character, active: boolean) {
    const cls = getClass(c.classId);
    const build = getBuild(c.classId, c.buildId);
    const p = progress(c.done, phasesFor(c).flatMap(phaseKeys));
    return html`
      <button class="char" aria-current=${active} @click=${() => store.selectCharacter(c.id)}>
        <div class="char-name">${c.name}</div>
        <div class="char-meta">${cls?.name ?? c.classId} · Lv. ${c.level} · ${build ? `${MODE_LABEL[build.mode]} · ${build.name}` : '–'}</div>
        <sl-progress-bar value=${p.percent} label="Fortschritt"></sl-progress-bar>
      </button>
    `;
  }

  private renderDialog() {
    const cls = getClass(this.draftClassId);
    return html`
      <sl-dialog label="Neuer Charakter">
        <form id="new-char" @submit=${this.create}>
          <sl-input
            label="Name"
            required
            autofocus
            .value=${this.draftName}
            @sl-input=${(e: Event) => (this.draftName = (e.target as SlInput).value)}
          ></sl-input>
          <sl-select
            label="Klasse"
            placeholder="Klasse wählen"
            .value=${this.draftClassId}
            @sl-change=${(e: Event) => this.selectClass((e.target as SlSelect).value as string)}
          >
            ${CLASSES.map((c) => html`<sl-option value=${c.id}>${c.name} – ${c.role}</sl-option>`)}
          </sl-select>
          <sl-select
            label="Buildvariante"
            ?disabled=${!cls}
            .value=${this.draftBuildId}
            help-text=${cls?.builds.find((b) => b.id === this.draftBuildId)?.summary ?? ''}
            @sl-change=${(e: Event) => (this.draftBuildId = (e.target as SlSelect).value as string)}
          >
            ${cls?.builds.map((b) => html`<sl-option value=${b.id}>${MODE_LABEL[b.mode]} · ${b.name}</sl-option>`)}
          </sl-select>
        </form>
        <sl-button slot="footer" variant="primary" type="submit" form="new-char" ?disabled=${!this.canCreate}>
          Anlegen
        </sl-button>
      </sl-dialog>
    `;
  }

  render() {
    const { characters } = store.state;
    const active = store.activeCharacter;
    return html`
      <aside>
        <sl-button variant="primary" @click=${this.openDialog}>
          <sl-icon slot="prefix" name="plus-lg"></sl-icon>Neuer Charakter
        </sl-button>
        ${characters.map((c) => this.renderCharButton(c, c.id === active?.id))}
      </aside>
      <main>
        ${active
          ? html`<character-view .character=${active}></character-view>`
          : html`<div class="empty">Noch keine Charaktere. Lege links deinen ersten Charakter an.</div>`}
      </main>
      ${this.renderDialog()}
    `;
  }
}

customElements.define('character-panel', CharacterPanel);
