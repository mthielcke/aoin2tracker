import { LitElement, css, html, nothing } from 'lit';
import { SOURCES } from '../data/sources';
import { TIP_TOPICS } from '../data/tips';
import type { ChecklistItem } from '../data/types';
import { StoreController, store } from '../store';
import { detailBlockStyles, renderDetailBlock } from './detail-blocks';

export class TipsView extends LitElement {
  static styles = [
    detailBlockStyles,
    css`
      :host {
        display: block;
      }
      .head {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--sl-spacing-x-small);
        margin-bottom: var(--sl-spacing-small);
      }
      h2 {
        margin: 0;
        font-size: var(--sl-font-size-x-large);
      }
      .stand {
        color: var(--sl-color-neutral-600);
        font-size: var(--sl-font-size-small);
      }
      sl-tab sl-icon {
        margin-right: var(--sl-spacing-2x-small);
      }
      sl-tab-panel::part(base) {
        padding-top: var(--sl-spacing-large);
      }
      .intro {
        margin-bottom: var(--sl-spacing-large);
      }
      .block {
        margin-bottom: var(--sl-spacing-large);
      }
      h3:first-child {
        margin-top: 0;
      }
      ul.tips {
        list-style: none;
        margin: 0;
        padding: 0;
        max-width: 90ch;
      }
      ul.tips li {
        display: flex;
        gap: var(--sl-spacing-medium);
        align-items: flex-start;
        padding: var(--sl-spacing-small) 0;
        border-bottom: 1px solid var(--sl-color-neutral-100);
      }
      ul.tips li:last-child {
        border-bottom: none;
      }
      .tip-body {
        flex: 1;
        min-width: 0;
      }
      .tip-text {
        font-weight: var(--sl-font-weight-semibold);
      }
      .tip-text sl-badge {
        margin-left: var(--sl-spacing-2x-small);
        vertical-align: middle;
      }
      .tip-detail {
        margin-top: var(--sl-spacing-3x-small);
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-600);
      }
      .sources {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sl-spacing-x-small);
        margin-top: var(--sl-spacing-3x-small);
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
      sl-button {
        flex: none;
      }
    `,
  ];

  constructor() {
    super();
    new StoreController(this);
  }

  private renderTip(tip: ChecklistItem) {
    const added = store.state.todos.some((t) => t.text === tip.text);
    const sources = (tip.sources ?? []).map((id) => SOURCES[id]).filter(Boolean);
    return html`
      <li>
        <div class="tip-body">
          <div class="tip-text">
            ${tip.text}
            ${tip.uncertain
              ? html`<sl-tooltip content="Nur eine Quelle oder widersprüchlich – im Spiel prüfen.">
                  <sl-badge variant="warning" pill>prüfen</sl-badge>
                </sl-tooltip>`
              : nothing}
          </div>
          ${tip.detail ? html`<div class="tip-detail">${tip.detail}</div>` : nothing}
          ${sources.length
            ? html`<div class="sources">
                ${sources.map(
                  (s) => html`<a href=${s.url} target="_blank" rel="noopener noreferrer" title=${s.note ?? s.title}>
                    <sl-icon name=${s.kind === 'youtube' ? 'youtube' : 'link-45deg'}></sl-icon>${s.title}
                  </a>`,
                )}
              </div>`
            : nothing}
        </div>
        <sl-button size="small" ?disabled=${added} @click=${() => store.addTodo(tip.text)}>
          <sl-icon slot="prefix" name=${added ? 'check-lg' : 'plus-lg'}></sl-icon>${added ? 'In Todos' : 'Todo'}
        </sl-button>
      </li>
    `;
  }

  render() {
    return html`
      <div class="head">
        <h2>Tipps & Hinweise</h2>
        <span class="stand">Quellen: YouTube-Guides vom 19.08.–22.09.2026</span>
      </div>
      <sl-tab-group>
        ${TIP_TOPICS.map(
          (t) => html`<sl-tab slot="nav" panel=${t.id}><sl-icon name=${t.icon}></sl-icon>${t.title}</sl-tab>`,
        )}
        ${TIP_TOPICS.map(
          (t) => html`<sl-tab-panel name=${t.id}>
            <p class="intro">${t.intro}</p>
            ${(t.blocks ?? []).map((b) => html`<div class="block">${renderDetailBlock(b)}</div>`)}
            ${t.groups.map(
              (g) => html`<h3>${g.title}</h3>
                <ul class="tips">
                  ${g.tips.map((tip) => this.renderTip(tip))}
                </ul>`,
            )}
          </sl-tab-panel>`,
        )}
      </sl-tab-group>
    `;
  }
}

customElements.define('tips-view', TipsView);
