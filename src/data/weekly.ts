/** 'shop': die Karte „Kaufen & Herstellen“ (pro Server bzw. auf dem Main). */
export type WeeklyRole = 'main' | 'alt' | 'shop';

export interface WeeklyOptions {
  membership: boolean;
  pvp: boolean;
  abyss: boolean;
  /** Anzahl eingeplanter Twinks – für Aktivitäten, die pro Twink zählen. */
  alts?: number;
}

export interface WeeklyActivity {
  id: string;
  title: string;
  detail?: string;
  sources?: string[];
  /** Zeitwert ist eine eigene Schätzung, nicht aus der Excel bzw. einer Quelle. */
  estimate?: boolean;
  roles: WeeklyRole[];
  /**
   * 'pvp-char': nur der PvP-Charakter (Standard: Main).
   * 'not-pvp-char': alle passenden Rollen außer dem PvP-Charakter.
   */
  assign?: 'pvp-char' | 'not-pvp-char';
  requires?: 'pvp' | 'abyss' | 'membership';
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
    detail:
      'Auf jedem Charakter ab Level 45: 2 Tickets pro Tag, max. 14 gespeichert – nicht verfallen lassen. Gerade am Anfang wichtig: Ziel ist der Endboss (Zikel) für die Zikel-Statue (14.000 Marken), dazu Stigma Shards aus dem Nightmare-Shop. Geschaffte Stufen musst du nicht wiederholen. Mit Abo gibt es Instant-Clear-Tickets, auch für Twinks. Zeit pro Boss geschätzt.',
    sources: ['yt-mistakes-lucky', 'yt-plan-madsin', 'yt-endgame-freshy'],
    estimate: true,
    roles: ['main', 'alt'],
    unit: 'Einträge',
    count: () => 14,
    minutes: 3,
  },
  {
    id: 'daily-dungeon',
    title: 'Daily Dungeon',
    detail: '14 Runs pro Woche, ca. 2–3 Min. pro Run – alle an einem Tag vor dem Reset möglich.',
    sources: ['yt-daily-mr4k'],
    roles: ['main'],
    unit: 'Runs',
    count: () => 14,
    minutes: 3,
  },
  {
    id: 'breeze-energy-char',
    title: 'Wind Breeze Merchant: 20 × 40 Odyle-Energie',
    detail:
      'Abo-Shop → Wind Breeze Merchant → Special: Jeder Charakter kann pro Woche 20 Steine à 40 Odyle-Energie kaufen. Die Energie bleibt auf dem Charakter – jede Woche vor dem Reset komplett mitnehmen.',
    sources: ['sportskeeda-odyle', 'yt-odyle-mr4k'],
    roles: ['main', 'alt'],
    requires: 'membership',
    unit: 'pauschal',
    count: () => 1,
    minutes: 1,
  },
  {
    id: 'weekly-quests-main',
    title: 'Wochenquests (Abyss & Hauptstadt)',
    detail: 'Die Wochenquests beim Händler im Abyss und in der Hauptstadt kaufen – beide gelten pro Server, deshalb nur auf dem Main.',
    roles: ['main'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 1,
  },
  {
    id: 'arena-main',
    title: 'Arena-PvP (Full PvP)',
    detail: 'Die volle PvP-Runde mit eigenem Gear – spielt der PvP-Charakter (Standard: Main).',
    roles: ['main', 'alt'],
    assign: 'pvp-char',
    requires: 'pvp',
    unit: 'pauschal',
    count: () => 1,
    minutes: 120,
  },
  {
    id: 'arena-10v10',
    title: '10v10 Arena (Equalized)',
    detail:
      'Angeglichene Stats, kein Gear nötig – ca. 2.000 AP pro Sieg plus 3 Sieg-/Teilnahme-Kisten pro Woche. Spielt jeder außer dem PvP-Charakter, also auch der Main, sobald ein PvP-Twink gewählt ist.',
    roles: ['main', 'alt'],
    assign: 'not-pvp-char',
    requires: 'pvp',
    unit: 'pauschal',
    count: () => 1,
    minutes: 40,
  },

  // ---------- Kaufen & Herstellen (eigene Karte)
  {
    id: 'commands',
    title: 'Command-Scrolls kaufen und erledigen',
    detail:
      'Beim Command-Händler in der Hauptstadt: 12 Scrolls pro Woche und Server – Twinks bekommen keine eigenen. Jede Rolle schaltet eine kleine Mission frei (Journal → Duty → Command) und gibt u. a. Abyss-Punkte. Belohnungen nach Bedarf wählen: Enhance Stones, Pet-Kristalle, Abyss-Punkte, Cube-Schlüssel. Nicht erledigte Scrolls lassen sich in die nächste Woche mitnehmen. Die 20 Abyss-Aufträge kaufst du beim Händler im Abyss (siehe Main). Zeit pro Befehl geschätzt.',
    sources: ['meinmmo-checklist', 'skycoach-checklist', 'yt-gear2200-freshy', 'yt-plan-madsin'],
    estimate: true,
    roles: ['shop'],
    unit: 'Befehle',
    count: () => 12,
    minutes: 5,
  },
  {
    id: 'morph-energy-main',
    title: '20 × 40 Odyle-Energie auf dem Main gecraftet',
    detail:
      'Substance Morph → Special → Consumables: 16 pro Account plus 4 pro Charakter – alles auf dem Main craften. Twinks können ihre 4 optional selbst morphen. Braucht Odyle (laut Silvias vor allem blaues). Setzt wöchentlich zurück, deshalb vor dem Reset morphen. Odyle sammeln: Crafting-Tab → Gathering & Materialien.',
    sources: ['meinmmo-checklist', 'skycoach-checklist', 'yt-odyle-mr4k', 'yt-craft-silvias'],
    roles: ['shop'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 10,
  },
  {
    id: 'breeze-tickets',
    title: 'Wind Breeze Merchant: 21 Daily-Dungeon-Tickets',
    detail: 'Mit Abo gibt es 21 zusätzliche Daily-Dungeon-Tickets pro Woche – abholen, damit sie nicht verfallen.',
    sources: ['meinmmo-checklist', 'skycoach-checklist', 'yt-endgame-freshy'],
    estimate: true,
    roles: ['shop'],
    requires: 'membership',
    unit: 'pauschal',
    count: () => 1,
    minutes: 1,
  },
  {
    id: 'breeze-soul',
    title: 'Wind Breeze Merchant: Soul Crystals',
    detail:
      'Soul Crystals für Genus Insight (Pets). In KR seit dem Patch vom 16.09. für 500 Kinah mit Limit 30.000 – Global-Werte im Spiel prüfen.',
    sources: ['aion2t-soulcrystal', 'meinmmo-checklist'],
    estimate: true,
    roles: ['shop'],
    requires: 'membership',
    unit: 'pauschal',
    count: () => 1,
    minutes: 1,
  },
  {
    id: 'shop-stigma',
    title: 'Stigma Shards & Shop-Einkäufe',
    detail:
      'Abyss-Shop: Stigma Shards (ca. 10.000 AP). Nightmare-Shop: Stigma Shards, aber 14.000 Marken für die Zikel-Statue zurücklegen. Shugo-Festival-Shop: zuerst Daevanion-Kristalle (GS), dann Stigma Shards.',
    sources: ['yt-plan-madsin', 'yt-glad-arthars'],
    estimate: true,
    roles: ['shop'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 10,
  },
  {
    id: 'season-shop',
    title: 'Saison-Shop prüfen',
    detail:
      'Magical Breath (5 pro Server und Season) für garantierte Crafts, Artisan-Steine (10 pro Server), Odyle und Drachen-Zutaten mit den Twinks kaufen und übers Server-Lager schicken. Marken des Mains für die Talisra-Wings aufheben. Mehr im Crafting-Tab.',
    sources: ['yt-plan-madsin', 'yt-dropcraft-lucky', 'yt-craft-mr4k'],
    estimate: true,
    roles: ['shop'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 5,
  },
  {
    id: 'crafting',
    title: 'Wöchentliches Handwerk & Transformation',
    detail:
      'Ariel’s Crystals (Ariel’s Trace) und Ariel-Bücher morphen (100-%-Option wählen), Stigma-Upgrades, verkaufbare Consumables craften. Waffen-Crafting: Crafting-Tab → Crafting-Fahrplan.',
    sources: ['yt-chanter-ultimate', 'yt-craft-crusherx'],
    roles: ['shop'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 21,
  },
  {
    id: 'supply-requests',
    title: 'Supply Requests abgeben',
    detail:
      'Tägliche und wöchentliche Liefer-Aufträge: Material oder gecraftete Teile abgeben, dafür Abyss-Punkte (meist ohne Wochenlimit), Kinah und Katalysatoren. Überzählige Crafts vorher prüfen, statt sie zu zerlegen. Teure Materialien wie Odyle lieber behalten.',
    sources: ['yt-lvl-nobs', 'yt-kinah-aselon', 'yt-craft-crusherx', 'yt-plan-madsin'],
    estimate: true,
    roles: ['shop'],
    unit: 'pauschal',
    count: () => 1,
    minutes: 15,
  },
];

export function activitiesFor(role: WeeklyRole, isPvpChar: boolean, o: WeeklyOptions): WeeklyActivity[] {
  return WEEKLY_ACTIVITIES.filter((a) => {
    if (!a.roles.includes(role) || (a.requires && !o[a.requires]) || a.count(o) <= 0) return false;
    if (a.assign === 'pvp-char') return isPvpChar;
    if (a.assign === 'not-pvp-char') return !isPvpChar;
    return true;
  });
}

export const KINAH_PER_CLAIM = 400_000;
export const SERVER_CLAIM_CAP = 84;
export const claimsPerWeek = (o: WeeklyOptions) => (o.membership ? 21 : 14);
