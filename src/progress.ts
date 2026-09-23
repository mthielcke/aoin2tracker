import { COMMON_PHASES } from './data/common';
import { getBuild } from './data/classes';
import type { Phase } from './data/types';
import type { Character } from './store';

export interface ScopedPhase {
  scope: string;
  phase: Phase;
}

export const itemKey = (scope: string, phaseId: string, sectionId: string, itemId: string) =>
  `${scope}.${phaseId}.${sectionId}.${itemId}`;

/** Allgemeine Phasen (scope "common") bleiben beim Build-Wechsel erhalten. */
export function phasesFor(character: Character): ScopedPhase[] {
  const build = getBuild(character.classId, character.buildId);
  return [
    ...COMMON_PHASES.map((phase) => ({ scope: 'common', phase })),
    ...(build ? build.phases.map((phase) => ({ scope: build.id, phase })) : []),
  ];
}

export function phaseKeys({ scope, phase }: ScopedPhase): string[] {
  return phase.sections.flatMap((s) => s.items.map((i) => itemKey(scope, phase.id, s.id, i.id)));
}

export function progress(character: Character, keys: string[]) {
  const done = keys.filter((k) => character.done[k]).length;
  return { done, total: keys.length, percent: keys.length ? Math.round((done / keys.length) * 100) : 0 };
}
