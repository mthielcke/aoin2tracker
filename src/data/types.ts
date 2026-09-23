export type Mode = 'pve' | 'pvp';

export type SectionKind =
  | 'quests'
  | 'skills'
  | 'passives'
  | 'stigmas'
  | 'daevanion'
  | 'gear'
  | 'stats'
  | 'arcana'
  | 'rotation'
  | 'systems';

export interface Source {
  id: string;
  title: string;
  url: string;
  kind: 'youtube' | 'web';
  note?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  detail?: string;
  /** IDs aus sources.ts */
  sources?: string[];
  /** Quellen widersprechen sich oder Name ist aus Transkript unsicher */
  uncertain?: boolean;
}

export interface Section {
  id: string;
  kind: SectionKind;
  title: string;
  items: ChecklistItem[];
}

export interface Phase {
  id: string;
  title: string;
  description?: string;
  sections: Section[];
}

export interface BuildVariant {
  id: string;
  name: string;
  mode: Mode;
  summary: string;
  phases: Phase[];
  details?: BuildDetails;
}

/** Spezialisierungen 1–5 werden im Spiel farbig dargestellt: grün, blau, gelb, orange, rot. */
export type SpecSlot = 1 | 2 | 3 | 4 | 5;

export interface SkillSpec {
  slot: SpecSlot;
  text: string;
  pick?: boolean;
}

export type SkillPriority = 'top' | 'high' | 'mid' | 'low';

export interface SkillDetail {
  name: string;
  priority: SkillPriority;
  summary: string;
  target?: string;
  specs?: SkillSpec[];
  note?: string;
}

export type DetailBlock =
  | { type: 'text'; text: string }
  | { type: 'callout'; variant: 'primary' | 'warning' | 'success'; title: string; text: string }
  | { type: 'steps'; title?: string; items: string[] }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'skills'; skills: SkillDetail[] }
  | { type: 'table'; columns: string[]; rows: string[][] };

export interface DetailSection {
  id: string;
  title: string;
  blocks: DetailBlock[];
}

export interface TipGroup {
  title: string;
  tips: ChecklistItem[];
}

export interface TipTopic {
  id: string;
  title: string;
  icon: string;
  intro: string;
  blocks?: DetailBlock[];
  groups: TipGroup[];
}

export interface BuildDetails {
  intro: string;
  sources: string[];
  sections: DetailSection[];
}

export interface ClassDef {
  id: string;
  name: string;
  role: string;
  weapon: string;
  summary: string;
  builds: BuildVariant[];
}
