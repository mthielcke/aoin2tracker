import { LitElement, css, html } from 'lit';
import { CRAFTING_TOPICS } from '../data/crafting';
import { TIP_TOPICS } from '../data/tips';
import { StoreController, store } from '../store';
import './build-detail';
import './character-panel';
import './todo-list';
import './tips-view';
import './sources-view';

const buildIdFromHash = () => /^#\/build\/([\w-]+)$/.exec(location.hash)?.[1];

function toast(message: string, variant: 'success' | 'danger') {
  const alert = Object.assign(document.createElement('sl-alert'), {
    variant,
    closable: true,
    duration: 4000,
    textContent: message,
  });
  document.body.append(alert);
  alert.toast();
}

export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px 48px;
    }
    header {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sl-spacing-medium);
      align-items: center;
      justify-content: space-between;
      padding: var(--sl-spacing-large) 0 var(--sl-spacing-small);
    }
    h1 {
      margin: 0;
      font-size: var(--sl-font-size-x-large);
      letter-spacing: 0.02em;
    }
    .tagline {
      color: var(--sl-color-neutral-600);
      font-size: var(--sl-font-size-small);
    }
    .actions {
      display: flex;
      gap: var(--sl-spacing-x-small);
    }
    .wip {
      display: block;
      margin-bottom: var(--sl-spacing-x-large);
    }
    sl-divider {
      --spacing: var(--sl-spacing-2x-large);
    }
    sl-tab-group[hidden] {
      display: none;
    }
    sl-tab-panel::part(base) {
      padding-top: var(--sl-spacing-large);
    }
    sl-badge {
      margin-left: var(--sl-spacing-2x-small);
    }
  `;

  static properties = {
    detailBuildId: { state: true },
  };

  declare detailBuildId: string | undefined;

  private onHashChange = () => {
    this.detailBuildId = buildIdFromHash();
    window.scrollTo(0, 0);
  };

  constructor() {
    super();
    new StoreController(this);
    this.detailBuildId = buildIdFromHash();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('hashchange', this.onHashChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this.onHashChange);
  }

  private exportData() {
    const blob = new Blob([store.exportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url,
      download: `aion2-tracker-${new Date().toISOString().slice(0, 10)}.json`,
    });
    a.click();
    URL.revokeObjectURL(url);
  }

  private async importData(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    if (!confirm('Import überschreibt alle aktuellen Charaktere und Todos. Fortfahren?')) return;
    try {
      store.importJson(await file.text());
      toast('Daten importiert.', 'success');
    } catch (err) {
      toast(`Import fehlgeschlagen: ${(err as Error).message}`, 'danger');
    }
  }

  render() {
    const openTodos = store.state.todos.filter((t) => !t.done).length;
    return html`
      <header>
        <div>
          <h1>AION 2 Tracker</h1>
          <div class="tagline">Charakterplanung & Buildguides</div>
        </div>
        <div class="actions">
          <sl-button size="small" @click=${this.exportData}>
            <sl-icon slot="prefix" name="download"></sl-icon>Export
          </sl-button>
          <sl-button size="small" @click=${() => this.renderRoot.querySelector<HTMLInputElement>('#import')?.click()}>
            <sl-icon slot="prefix" name="upload"></sl-icon>Import
          </sl-button>
          <input id="import" type="file" accept="application/json" hidden @change=${this.importData} />
        </div>
      </header>
      ${this.detailBuildId ? html`<build-detail .buildId=${this.detailBuildId}></build-detail>` : ''}
      <sl-tab-group ?hidden=${!!this.detailBuildId}>
        <sl-tab slot="nav" panel="chars">Charaktere</sl-tab>
        <sl-tab slot="nav" panel="todos">
          Todos & Tipps${openTodos ? html`<sl-badge pill variant="primary">${openTodos}</sl-badge>` : ''}
        </sl-tab>
        <sl-tab slot="nav" panel="crafting">Crafting</sl-tab>
        <sl-tab slot="nav" panel="sources">Quellen</sl-tab>
        <sl-tab-panel name="chars"><character-panel></character-panel></sl-tab-panel>
        <sl-tab-panel name="todos">
          <todo-list></todo-list>
          <sl-divider></sl-divider>
          <tips-view
            .topics=${TIP_TOPICS}
            heading="Tipps & Hinweise"
            stand="Quellen: YouTube-Guides vom 19.08.–22.09.2026"
          ></tips-view>
        </sl-tab-panel>
        <sl-tab-panel name="crafting">
          <sl-alert class="wip" variant="warning" open>
            <sl-icon slot="icon" name="cone-striped"></sl-icon>
            <strong>Work in Progress</strong><br />
            Dieser Bereich ist noch im Aufbau. Einige Video-Guides konnten bisher nur über ihre Beschreibung
            ausgewertet werden – Details wie Proc-Chancen, Berufslevel und Gathering-Perks folgen. Punkte mit „prüfen“
            sind noch unsicher.
          </sl-alert>
          <tips-view
            .topics=${CRAFTING_TOPICS}
            heading="Crafting & Gathering"
            stand="Quellen: Guides vom 10.09.–22.09.2026, Stand Global-Client"
          ></tips-view>
        </sl-tab-panel>
        <sl-tab-panel name="sources"><sources-view></sources-view></sl-tab-panel>
      </sl-tab-group>
    `;
  }
}

customElements.define('app-root', AppRoot);
