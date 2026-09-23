import type { BuildVariant, ClassDef } from '../types';
import { chanter } from './chanter';
import { cleric } from './cleric';
import { gladiator } from './gladiator';
import { ranger } from './ranger';

// Neue Klasse: Datei anlegen und hier eintragen.
export const CLASSES: ClassDef[] = [gladiator, chanter, cleric, ranger];

export function getClass(id: string): ClassDef | undefined {
  return CLASSES.find((c) => c.id === id);
}

export function getBuild(classId: string, buildId: string): BuildVariant | undefined {
  return getClass(classId)?.builds.find((b) => b.id === buildId);
}

export function findBuild(buildId: string): { cls: ClassDef; build: BuildVariant } | undefined {
  for (const cls of CLASSES) {
    const build = cls.builds.find((b) => b.id === buildId);
    if (build) return { cls, build };
  }
  return undefined;
}

export const buildDetailsHref = (buildId: string) => `#/build/${buildId}`;
