import { LitElement, css, html } from 'lit';
import { CLASSES, buildDetailsHref } from '../data/classes';
import { SOURCES } from '../data/sources';

export class SourcesView extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-x-large);
      max-width: 820px;
    }
    h2 {
      margin: 0 0 var(--sl-spacing-small);
      font-size: var(--sl-font-size-large);
    }
    ul {
      margin: 0;
      padding-left: var(--sl-spacing-large);
    }
    li {
      margin-bottom: var(--sl-spacing-x-small);
    }
    a {
      color: var(--sl-color-primary-600);
    }
    .note {
      color: var(--sl-color-neutral-600);
      font-size: var(--sl-font-size-small);
    }
  `;

  render() {
    const sources = Object.values(SOURCES);
    return html`
      <sl-alert variant="warning" open>
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        Stand der Guide-Daten: September 2026. Fast alle Quellen basieren auf den KR/TW-Servern (dort läuft bereits
        Season 4); die Global-Version startet am 5. Oktober 2026 mit Season 1, übernimmt aber die aktuelle
        Klassenbalance. Punkte mit „prüfen“ sind unsicher und sollten im Spiel verifiziert werden.
      </sl-alert>

      <section>
        <h2>Klassen & Buildvarianten</h2>
        <ul>
          ${CLASSES.map(
            (c) => html`<li>
              <strong>${c.name}</strong> (${c.role}, ${c.weapon}) –
              ${c.builds.map(
                (b, i) => html`${i ? ', ' : ''}${b.mode.toUpperCase()} · ${b.details
                    ? html`<a href=${buildDetailsHref(b.id)}>${b.name}</a>`
                    : b.name}`,
              )}
            </li>`,
          )}
        </ul>
      </section>

      <section>
        <h2>Quellen</h2>
        <ul>
          ${sources.map(
            (s) => html`<li>
              <a href=${s.url} target="_blank" rel="noopener noreferrer">${s.title}</a>
              ${s.note ? html`<span class="note"> – ${s.note}</span>` : ''}
            </li>`,
          )}
        </ul>
      </section>
    `;
  }
}

customElements.define('sources-view', SourcesView);
