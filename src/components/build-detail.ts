import { LitElement, css, html } from 'lit';
import { findBuild } from '../data/classes';
import { SOURCES } from '../data/sources';
import { detailBlockStyles, renderDetailBlock } from './detail-blocks';

export class BuildDetail extends LitElement {
  static properties = {
    buildId: { attribute: false },
  };

  static styles = [
    detailBlockStyles,
    css`
      :host {
        display: block;
      }
      .back {
        display: inline-flex;
        align-items: center;
        gap: var(--sl-spacing-2x-small);
        color: var(--sl-color-neutral-600);
        text-decoration: none;
        font-size: var(--sl-font-size-small);
      }
      .back:hover {
        color: var(--sl-color-primary-600);
      }
      header {
        margin: var(--sl-spacing-medium) 0 var(--sl-spacing-x-large);
      }
      .eyebrow {
        color: var(--sl-color-primary-600);
        font-size: var(--sl-font-size-small);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      h1 {
        margin: var(--sl-spacing-2x-small) 0 var(--sl-spacing-small);
        font-size: var(--sl-font-size-3x-large);
        line-height: var(--sl-line-height-dense);
      }
      .intro {
        max-width: 70ch;
        margin: 0 0 var(--sl-spacing-medium);
        color: var(--sl-color-neutral-700);
        font-size: var(--sl-font-size-large);
      }
      .sources {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sl-spacing-small) var(--sl-spacing-medium);
      }
      .sources a {
        display: inline-flex;
        align-items: center;
        gap: var(--sl-spacing-2x-small);
        color: var(--sl-color-neutral-600);
        text-decoration: none;
        font-size: var(--sl-font-size-small);
      }
      .sources a:hover {
        color: var(--sl-color-primary-600);
      }
      .layout {
        display: grid;
        grid-template-columns: 200px minmax(0, 1fr);
        gap: var(--sl-spacing-2x-large);
        align-items: start;
      }
      nav {
        position: sticky;
        top: var(--sl-spacing-medium);
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-3x-small);
      }
      nav button {
        all: unset;
        cursor: pointer;
        padding: var(--sl-spacing-2x-small) var(--sl-spacing-small);
        border-left: 2px solid var(--sl-color-neutral-200);
        color: var(--sl-color-neutral-600);
        font-size: var(--sl-font-size-small);
      }
      nav button:hover {
        color: var(--sl-color-neutral-900);
        border-left-color: var(--sl-color-primary-600);
      }
      nav button:focus-visible {
        outline: var(--sl-focus-ring);
      }
      @media (max-width: 900px) {
        .layout {
          grid-template-columns: minmax(0, 1fr);
        }
        nav {
          position: static;
          flex-direction: row;
          flex-wrap: wrap;
          gap: var(--sl-spacing-x-small);
        }
        nav button {
          border: 1px solid var(--sl-color-neutral-200);
          border-radius: var(--sl-border-radius-pill);
          padding: var(--sl-spacing-3x-small) var(--sl-spacing-small);
        }
      }
      section {
        scroll-margin-top: var(--sl-spacing-medium);
        padding-bottom: var(--sl-spacing-2x-large);
        margin-bottom: var(--sl-spacing-2x-large);
        border-bottom: 1px solid var(--sl-color-neutral-100);
      }
      section:last-child {
        border-bottom: none;
      }
      h2 {
        margin: 0 0 var(--sl-spacing-medium);
        font-size: var(--sl-font-size-x-large);
      }
      .block + .block {
        margin-top: var(--sl-spacing-large);
      }
    `,
  ];

  declare buildId: string;

  private scrollToSection(id: string) {
    this.renderRoot.querySelector(`#sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const found = findBuild(this.buildId);
    const details = found?.build.details;
    if (!found || !details) {
      return html`<a class="back" href="#/"><sl-icon name="arrow-left"></sl-icon>Zurück</a>
        <p>Für diesen Build gibt es noch keine Detailseite.</p>`;
    }
    const { cls, build } = found;
    return html`
      <a class="back" href="#/"><sl-icon name="arrow-left"></sl-icon>Zurück zur Übersicht</a>
      <header>
        <div class="eyebrow">${cls.name} · ${build.mode.toUpperCase()} · ${cls.weapon}</div>
        <h1>${build.name}</h1>
        <p class="intro">${details.intro}</p>
        <div class="sources">
          ${details.sources
            .map((id) => SOURCES[id])
            .filter(Boolean)
            .map(
              (s) => html`<a href=${s.url} target="_blank" rel="noopener noreferrer" title=${s.note ?? ''}>
                <sl-icon name=${s.kind === 'youtube' ? 'youtube' : 'link-45deg'}></sl-icon>${s.title}
              </a>`,
            )}
        </div>
      </header>
      <div class="layout">
        <nav aria-label="Inhalt">
          ${details.sections.map((s) => html`<button @click=${() => this.scrollToSection(s.id)}>${s.title}</button>`)}
        </nav>
        <div>
          ${details.sections.map(
            (s) => html`<section id="sec-${s.id}">
              <h2>${s.title}</h2>
              ${s.blocks.map((b) => html`<div class="block">${renderDetailBlock(b)}</div>`)}
            </section>`,
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('build-detail', BuildDetail);
