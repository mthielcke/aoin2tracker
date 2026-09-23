import { LitElement, css, html } from 'lit';
import type SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import { StoreController, store } from '../store';

export class TodoList extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 720px;
    }
    form {
      display: flex;
      gap: var(--sl-spacing-small);
      margin-bottom: var(--sl-spacing-large);
    }
    form sl-input {
      flex: 1;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-small);
      padding: var(--sl-spacing-x-small) var(--sl-spacing-small);
      border-bottom: 1px solid var(--sl-color-neutral-100);
    }
    li sl-checkbox {
      flex: 1;
    }
    li.done sl-checkbox::part(label) {
      color: var(--sl-color-neutral-500);
      text-decoration: line-through;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--sl-spacing-medium);
      color: var(--sl-color-neutral-600);
      font-size: var(--sl-font-size-small);
    }
    .empty {
      color: var(--sl-color-neutral-600);
      padding: var(--sl-spacing-large) 0;
    }
  `;

  constructor() {
    super();
    new StoreController(this);
  }

  private add(e: Event) {
    e.preventDefault();
    const input = this.renderRoot.querySelector<SlInput>('sl-input')!;
    const text = input.value.trim();
    if (!text) return;
    store.addTodo(text);
    input.value = '';
    input.focus();
  }

  render() {
    const { todos } = store.state;
    const open = todos.filter((t) => !t.done).length;
    const doneCount = todos.length - open;
    return html`
      <form @submit=${this.add}>
        <sl-input placeholder="Neues Todo, z. B. „Stigma Shards farmen“" aria-label="Neues Todo"></sl-input>
        <sl-button type="submit" variant="primary"><sl-icon slot="prefix" name="plus-lg"></sl-icon>Hinzufügen</sl-button>
      </form>
      ${todos.length
        ? html`<ul>
            ${todos.map(
              (t) => html`
                <li class=${t.done ? 'done' : ''}>
                  <sl-checkbox .checked=${t.done} @sl-change=${() => store.toggleTodo(t.id)}>${t.text}</sl-checkbox>
                  <sl-icon-button name="trash" label="Todo löschen" @click=${() => store.deleteTodo(t.id)}></sl-icon-button>
                </li>
              `,
            )}
          </ul>`
        : html`<div class="empty">Keine Todos.</div>`}
      ${todos.length
        ? html`<div class="footer">
            <span>${open} offen · ${doneCount} erledigt</span>
            <sl-button size="small" ?disabled=${!doneCount} @click=${() => store.clearDoneTodos()}>
              Erledigte entfernen
            </sl-button>
          </div>`
        : ''}
    `;
  }
}

customElements.define('todo-list', TodoList);
