import { LitElement, css, html, nothing } from 'lit';
import { findBuild } from '../data/classes';
import { SOURCES } from '../data/sources';
import type { DetailBlock, SkillDetail, SkillPriority, SpecSlot } from '../data/types';

const PRIORITY: Record<SkillPriority, { label: string; variant: string }> = {
  top: { label: 'Top', variant: 'warning' },
  high: { label: 'Hoch', variant: 'primary' },
  mid: { label: 'Mittel', variant: 'neutral' },
  low: { label: 'Niedrig', variant: 'neutral' },
};

const SPEC_COLOR: Record<SpecSlot, { name: string; color: string }> = {
  1: { name: 'grün', color: 'var(--sl-color-green-500)' },
  2: { name: 'blau', color: 'var(--sl-color-blue-500)' },
  3: { name: 'gelb', color: 'var(--sl-color-yellow-400)' },
  4: { name: 'orange', color: 'var(--sl-color-orange-500)' },
  5: { name: 'rot', color: 'var(--sl-color-red-500)' },
};

const CALLOUT_ICON = { primary: 'info-circle', warning: 'exclamation-triangle', success: 'check2-circle' } as const;

export class BuildDetail extends LitElement {
  static properties = {
    buildId: { attribute: false },
  };

  static styles = css`
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
    h3 {
      margin: var(--sl-spacing-large) 0 var(--sl-spacing-x-small);
      font-size: var(--sl-font-size-medium);
      color: var(--sl-color-neutral-700);
    }
    .block + .block {
      margin-top: var(--sl-spacing-large);
    }
    p {
      max-width: 75ch;
      margin: 0;
      color: var(--sl-color-neutral-700);
    }
    ul.list {
      margin: 0;
      padding-left: var(--sl-spacing-large);
      max-width: 80ch;
    }
    ul.list li + li {
      margin-top: var(--sl-spacing-x-small);
    }
    ol.steps {
      list-style: none;
      margin: 0;
      padding: 0;
      counter-reset: step;
      max-width: 80ch;
    }
    ol.steps li {
      counter-increment: step;
      position: relative;
      padding: 0 0 var(--sl-spacing-small) 2.5rem;
    }
    ol.steps li::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: var(--sl-font-size-small);
      font-weight: var(--sl-font-weight-semibold);
      background: var(--sl-color-primary-100);
      color: var(--sl-color-primary-700);
    }
    .skills {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: var(--sl-spacing-medium);
    }
    .skill {
      padding: var(--sl-spacing-medium);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
      background: var(--sl-color-neutral-50);
    }
    .skill.low {
      opacity: 0.75;
    }
    .skill-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--sl-spacing-x-small);
      margin-bottom: var(--sl-spacing-x-small);
    }
    .skill-name {
      flex: 1;
      font-weight: var(--sl-font-weight-semibold);
    }
    .target {
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
      border: 1px solid var(--sl-color-neutral-300);
      border-radius: var(--sl-border-radius-pill);
      padding: 0 var(--sl-spacing-x-small);
    }
    .skill p {
      font-size: var(--sl-font-size-small);
    }
    .specs {
      list-style: none;
      margin: var(--sl-spacing-small) 0 0;
      padding: 0;
      font-size: var(--sl-font-size-small);
    }
    .specs li {
      display: flex;
      align-items: flex-start;
      gap: var(--sl-spacing-x-small);
      padding: var(--sl-spacing-3x-small) 0;
      color: var(--sl-color-neutral-500);
    }
    .specs li.pick {
      color: var(--sl-color-neutral-900);
      font-weight: var(--sl-font-weight-semibold);
    }
    .dot {
      flex: none;
      width: 1.25rem;
      height: 1.25rem;
      margin-top: 1px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 0.7rem;
      font-weight: var(--sl-font-weight-bold);
      color: var(--sl-color-neutral-0);
      background: var(--spec-color);
      opacity: 0.45;
    }
    .pick .dot {
      opacity: 1;
    }
    .pick-icon {
      margin-left: auto;
      color: var(--sl-color-success-600);
      flex: none;
    }
    .note {
      margin-top: var(--sl-spacing-x-small);
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
      font-style: italic;
    }
    .table-wrap {
      overflow-x: auto;
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-large);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--sl-font-size-small);
    }
    th,
    td {
      text-align: left;
      vertical-align: top;
      padding: var(--sl-spacing-x-small) var(--sl-spacing-medium);
      border-bottom: 1px solid var(--sl-color-neutral-100);
    }
    th {
      background: var(--sl-color-neutral-50);
      color: var(--sl-color-neutral-600);
      font-weight: var(--sl-font-weight-semibold);
    }
    td:first-child {
      white-space: nowrap;
      font-weight: var(--sl-font-weight-semibold);
    }
    tr:last-child td {
      border-bottom: none;
    }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sl-spacing-medium);
      font-size: var(--sl-font-size-x-small);
      color: var(--sl-color-neutral-600);
    }
    .legend span {
      display: inline-flex;
      align-items: center;
      gap: var(--sl-spacing-2x-small);
    }
    .legend .dot {
      width: 0.9rem;
      height: 0.9rem;
      opacity: 1;
      font-size: 0.55rem;
    }
  `;

  declare buildId: string;

  private scrollToSection(id: string) {
    this.renderRoot.querySelector(`#sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private renderSkill(skill: SkillDetail) {
    const prio = PRIORITY[skill.priority];
    return html`
      <article class="skill ${skill.priority}">
        <div class="skill-head">
          <span class="skill-name">${skill.name}</span>
          ${skill.target ? html`<span class="target">${skill.target}</span>` : nothing}
          <sl-badge variant=${prio.variant} pill>${prio.label}</sl-badge>
        </div>
        <p>${skill.summary}</p>
        ${skill.specs
          ? html`<ul class="specs">
              ${skill.specs.map(
                (s) => html`<li class=${s.pick ? 'pick' : ''}>
                  <span class="dot" style="--spec-color: ${SPEC_COLOR[s.slot].color}" title="Spez. ${s.slot} (${SPEC_COLOR[s.slot].name})"
                    >${s.slot}</span
                  >
                  <span>${s.text}</span>
                  ${s.pick ? html`<sl-icon class="pick-icon" name="check-lg" label="Empfohlen"></sl-icon>` : nothing}
                </li>`,
              )}
            </ul>`
          : nothing}
        ${skill.note ? html`<div class="note">${skill.note}</div>` : nothing}
      </article>
    `;
  }

  private renderBlock(block: DetailBlock) {
    switch (block.type) {
      case 'text':
        return html`<p>${block.text}</p>`;
      case 'callout':
        return html`<sl-alert variant=${block.variant} open>
          <sl-icon slot="icon" name=${CALLOUT_ICON[block.variant]}></sl-icon>
          <strong>${block.title}</strong><br />${block.text}
        </sl-alert>`;
      case 'steps':
        return html`${block.title ? html`<h3>${block.title}</h3>` : nothing}
          <ol class="steps">
            ${block.items.map((i) => html`<li>${i}</li>`)}
          </ol>`;
      case 'list':
        return html`${block.title ? html`<h3>${block.title}</h3>` : nothing}
          <ul class="list">
            ${block.items.map((i) => html`<li>${i}</li>`)}
          </ul>`;
      case 'skills': {
        const hasSpecs = block.skills.some((s) => s.specs);
        return html`${hasSpecs
            ? html`<div class="legend">
                ${([1, 2, 3, 4, 5] as SpecSlot[]).map(
                  (slot) => html`<span
                    ><span class="dot" style="--spec-color: ${SPEC_COLOR[slot].color}">${slot}</span>Spez. ${slot} (${SPEC_COLOR[slot].name})</span
                  >`,
                )}
                <span><sl-icon name="check-lg"></sl-icon>empfohlen</span>
              </div>`
            : nothing}
          <div class="skills" style=${hasSpecs ? 'margin-top: var(--sl-spacing-small)' : ''}>
            ${block.skills.map((s) => this.renderSkill(s))}
          </div>`;
      }
      case 'table':
        return html`<div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${block.columns.map((c) => html`<th>${c}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${block.rows.map(
                (row) => html`<tr>
                  ${row.map((cell) => html`<td>${cell}</td>`)}
                </tr>`,
              )}
            </tbody>
          </table>
        </div>`;
    }
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
              ${s.blocks.map((b) => html`<div class="block">${this.renderBlock(b)}</div>`)}
            </section>`,
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('build-detail', BuildDetail);
