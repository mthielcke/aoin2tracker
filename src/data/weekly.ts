export type WeeklyRole = 'main' | 'alt';

export interface WeeklyOptions {
  membership: boolean;
  pvp: boolean;
  abyss: boolean;
}

export interface WeeklyActivity {
  id: string;
  title: string;
  detail?: string;
  sources?: string[];
  /** Zeitwert ist eine eigene Schätzung, nicht aus der Excel bzw. einer Quelle. */
  estimate?: boolean;
  roles: WeeklyRole[];
  requires?: 'pvp' | 'abyss';
  unit: string;
  count: (o: WeeklyOptions) => number;
  /** Minuten pro Einheit */
  minutes: number;
}

export const WEEKLY_ACTIVITIES: WeeklyActivity[] = [
  {
    id: 'dungeons',
    title: 'Dungeon-Runs (Conquest)',
    detail:
      'Mit Abo: 21 Belohnungen pro Woche = 10 Runs mit doppelter + 1 Run mit einfacher Belohnung. Ohne Abo: 14 Belohnungen. Ca. 9 Min. pro Clear, alle Bosse töten.',
    roles: ['main', 'alt'],
    unit: 'Runs',
    count: (o) => (o.membership ? 11 : 14),
    minutes: 9,
  },
  {
    id: 'ascension',
    title: 'Ascension Trial',
    detail: '3 Clears pro Woche, ca. 3–5 Min. pro Run. Am besten am letzten Tag vor dem Reset.',
    sources: ['yt-mistakes-lucky'],
    roles: ['main', 'alt'],
    unit: 'Runs',
    count: () => 3,
    minutes: 5,
  },
  {
    id: 'daily-missions',
    title: 'Daily Missions',
    detail: 'Duty-Missionen (5 pro Tag), Gilden-Check-in, Tages-Pass, Bounties – ca. 15 Min. pro Tag, nur auf dem Main.',
    roles: ['main'],
    unit: 'Tage',
    count: () => 7,
    minutes: 15,
  },
  {
    id: 'nightmare',
    title: 'Nightmare',
    detail: '2 Einträge pro Tag, max. 14 gespeichert – nicht verfallen lassen. Zeit pro Boss geschätzt.',
    sources: ['yt-mistakes-lucky'],
    estimate: true,
    roles: ['main'],
    unit: 'Einträge',
    count: () => 14,
    minutes: 3,
  },
  {
    id: 'daily-dungeon',
    title: 'Daily Dungeon',
    detail: '7 freie Einträge pro Woche, ca. 2–3 Min. pro Run – alle an einem Tag vor dem Reset möglich.',
    sources: ['yt-daily-mr4k'],
    roles: ['main'],
    unit: 'Runs',
    count: () => 7,
    minutes: 3,
  },
  {
    id: 'shugo',
    title: 'Shugo Festival',
    detail: '+2 Schlüssel pro Tag, max. 14, jeweils zur vollen Stunde. Zeit pro Spiel geschätzt.',
    sources: ['aion2kina-checklist'],
    estimate: true,
    roles: ['main'],
    unit: 'Spiele',
    count: () => 7,
    minutes: 5,
  },
  {
    id: 'invasion',
    title: 'Dimensional Invasion',
    detail: '+1 pro Tag, max. 7, jeweils zur halben Stunde. Zeit geschätzt.',
    sources: ['aion2kina-checklist', 'yt-start-sywo'],
    estimate: true,
    roles: ['main'],
    unit: 'Einsätze',
    count: () => 7,
    minutes: 5,
  },
  {
    id: 'world-bosses',
    title: 'Weltbosse & Allianz-Raids',
    detail: '1–2× pro Woche zu festen Spawn-Zeiten – High-Tier-Crafting-Material, Schmuck, Gear.',
    roles: ['main'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 75,
  },
  {
    id: 'guild',
    title: 'Gilden-Aufgaben & Gilden-Boss',
    detail: 'Gilden-Münzen, Gilden-Pass-EP, Veredelungssteine, passive Buffs.',
    roles: ['main'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 45,
  },
  {
    id: 'crafting',
    title: 'Wöchentliches Handwerk & Transformation',
    detail: 'Ariel’s Crystals (Ariel’s Trace), Stigma-Upgrades, verkaufbare Consumables.',
    roles: ['main'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 21,
  },
  {
    id: 'arena-main',
    title: 'Arena-PvP (Full PvP)',
    detail: 'Der Main spielt die volle PvP-Runde.',
    roles: ['main'],
    requires: 'pvp',
    unit: 'pauschal',
    count: () => 1,
    minutes: 120,
  },
  {
    id: 'arena-10v10',
    title: '10v10 Arena (Equalized)',
    detail: 'Angeglichene Stats, kein Gear nötig – ca. 2.000 AP pro Sieg plus 3 Sieg-/Teilnahme-Kisten pro Woche.',
    roles: ['alt'],
    requires: 'pvp',
    unit: 'pauschal',
    count: () => 1,
    minutes: 40,
  },
  {
    id: 'artifact',
    title: 'Artifact-Kämpfe & Artifact-Dungeon',
    detail: 'Fraktion gegen Fraktion am Boss; die siegreiche Fraktion bekommt den 2-Minuten-Dungeon mit Abyss-Punkten. Anzahl pro Woche geschätzt.',
    sources: ['yt-start-sywo', 'yt-kinah-aselon'],
    estimate: true,
    roles: ['main'],
    requires: 'abyss',
    unit: 'Kämpfe',
    count: () => 2,
    minutes: 15,
  },
  {
    id: 'abyss-quests',
    title: '20 Abyss-Wochenquests',
    detail: 'Laut SywoGG nie auslassen. Zeitwert geschätzt.',
    sources: ['yt-start-sywo'],
    estimate: true,
    roles: ['main'],
    requires: 'abyss',
    unit: 'pauschal',
    count: () => 1,
    minutes: 60,
  },
  {
    id: 'abyss-grind',
    title: 'Mobs im Abyss grinden',
    detail:
      '2–3 h pro Woche empfohlen (hier 2 Sessions à ca. 75 Min.) – auch wenn du dabei stirbst und zurückfliegen musst, lohnt es sich langfristig.',
    sources: ['yt-start-sywo'],
    roles: ['main'],
    requires: 'abyss',
    unit: 'Sessions',
    count: () => 2,
    minutes: 75,
  },
];

export function activitiesFor(role: WeeklyRole, o: WeeklyOptions): WeeklyActivity[] {
  return WEEKLY_ACTIVITIES.filter((a) => a.roles.includes(role) && (!a.requires || o[a.requires]));
}

export const KINAH_PER_CLAIM = 400_000;
export const SERVER_CLAIM_CAP = 84;
export const claimsPerWeek = (o: WeeklyOptions) => (o.membership ? 21 : 14);
