import { css, html, nothing, type TemplateResult } from 'lit';
import type SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import { SOURCES } from '../data/sources';
import type { ChecklistItem, SectionKind } from '../data/types';
import { itemKey, phaseKeys, progress, type ScopedPhase } from '../progress';

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

export const checklistStyles = css`
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
  .phase-extra {
    margin-bottom: var(--sl-spacing-medium);
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
  ul.checklist {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.checklist li {
    padding: var(--sl-spacing-x-small) 0;
    border-bottom: 1px solid var(--sl-color-neutral-100);
  }
  ul.checklist li:last-child {
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

export interface ChecklistOptions {
  done: Record<string, true>;
  onlyOpen: boolean;
  onToggle: (key: string, done: boolean) => void;
}

function renderItem(item: ChecklistItem, key: string, opts: ChecklistOptions) {
  const done = !!opts.done[key];
  if (opts.onlyOpen && done) return nothing;
  const sources = (item.sources ?? []).map((id) => SOURCES[id]).filter(Boolean);
  return html`
    <li class=${done ? 'done' : ''}>
      <div class="item-row">
        <sl-checkbox
          .checked=${done}
          @sl-change=${(e: Event) => opts.onToggle(key, (e.target as SlCheckbox).checked)}
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

/** `extra` wird oberhalb der Abschnitte einer Phase eingeblendet (z. B. Live-Status). */
export function renderChecklistPhase(
  sp: ScopedPhase,
  open: boolean,
  opts: ChecklistOptions,
  extra?: TemplateResult | typeof nothing,
) {
  const { scope, phase } = sp;
  const p = progress(opts.done, phaseKeys(sp));
  const sections = phase.sections
    .map((section) => ({
      section,
      rows: section.items.map((item) => renderItem(item, itemKey(scope, phase.id, section.id, item.id), opts)),
    }))
    .filter(({ rows }) => rows.some((r) => r !== nothing));
  return html`
    <sl-details ?open=${open}>
      <div slot="summary" class="phase-summary">
        <span class="phase-title">${phase.title}</span>
        <sl-badge variant=${p.done === p.total ? 'success' : 'neutral'} pill>${p.done}/${p.total}</sl-badge>
      </div>
      ${phase.description ? html`<p class="phase-desc">${phase.description}</p>` : nothing}
      ${extra && extra !== nothing ? html`<div class="phase-extra">${extra}</div>` : nothing}
      ${sections.length
        ? sections.map(
            ({ section, rows }) => html`
              <section>
                <h3><sl-icon name=${SECTION_ICON[section.kind]}></sl-icon>${section.title}</h3>
                <ul class="checklist">
                  ${rows}
                </ul>
              </section>
            `,
          )
        : html`<div class="all-done">Alles erledigt.</div>`}
    </sl-details>
  `;
}

/** Erste noch offene Phase – wird einmalig aufgeklappt. */
export function firstOpenPhaseKey(phases: ScopedPhase[], done: Record<string, true>): string {
  const first = phases.find((sp) => {
    const p = progress(done, phaseKeys(sp));
    return p.done < p.total;
  });
  return first ? `${first.scope}.${first.phase.id}` : '';
}
