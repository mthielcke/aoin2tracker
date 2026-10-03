import type { Phase } from './types';

export const CRAFT_SCOPE = 'craft';

/** Welcher Beruf die Waffe der Klasse herstellt (Global Season 1). */
export const WEAPON_PROFESSION: Record<string, string> = {
  gladiator: 'Blacksmithing',
  templar: 'Blacksmithing',
  assassin: 'Blacksmithing',
  cleric: 'Blacksmithing',
  ranger: 'Handicrafting',
  chanter: 'Handicrafting',
  sorcerer: 'Alchemy',
  spiritmaster: 'Alchemy',
};

export const CRAFT_PLAN: Phase[] = [
  {
    id: 'start',
    title: '1 · Einstieg: Berufe & Sammeln',
    description:
      'Crafting läuft nebenher – du musst dafür nicht am Werktisch stehen. Wichtig ist, früh anzufangen, weil die Berufslevel die Erfolgs- und Bruchchancen bestimmen.',
    sections: [
      {
        id: 'professions',
        kind: 'quests',
        title: 'Berufe',
        items: [
          {
            id: 'weapon-profession',
            text: 'Waffen-Beruf festlegen (Gladiator: Blacksmithing) und die Freischalt-Quest im Crafting-Viertel der Hauptstadt machen',
            detail: 'Blacksmithing stellt auch die Guards her – für alle Klassen. Zweiter Beruf: Handicrafting für Ketten, Ohrringe und Ringe.',
            sources: ['yt-plan-madsin', 'yt-craft-crusherx'],
          },
          {
            id: 'vendor',
            text: 'Beim Berufs-Händler am Werktisch die Grund-Reagenzien kaufen – die lassen sich nicht farmen',
            detail: 'Beispiel: 2 Orichalcum-Erz + Katalysator → Orichalcum-Barren. Im Rezept zeigt „Sources“, woher jede Zutat kommt.',
            sources: ['yt-craft-crusherx', 'yt-craft-silvias'],
          },
          {
            id: 'storage-tab',
            text: 'Ein Lagerfach nur für Crafting-Zutaten anlegen – nichts davon blind verkaufen',
            sources: ['yt-craft-ynoki'],
          },
        ],
      },
      {
        id: 'gathering',
        kind: 'systems',
        title: 'Sammeln (Essence Extraction)',
        items: [
          {
            id: 'perks',
            text: 'Perks: Proficient Handling hoch, Delicate Touch mittel, Lady Luck niedrig – dazu Odyle und Erz maximieren',
            detail: 'Lady Luck erhöht nur die Menge, nicht die Qualität. Erz brauchst du für Waffen und Rüstung, Edelsteine für Schmuck, Holz für Bögen. Zurücksetzen kostet 50.000 Kinah.',
            sources: ['yt-craft-silvias', 'yt-gather-mr4k'],
          },
          {
            id: 'odyle-always',
            text: 'Odyle immer mitnehmen – per Substance Morph wird daraus jedes andere Material derselben Stufe',
            detail: 'Graues Odyle → graue Materialien, grünes → grüne, blaues (Pure) → blaue, Radiant → goldene. Am Dungeon-Ende gibt es 3 Odyle-Knoten pro Person.',
            sources: ['yt-craft-silvias', 'yt-gather-mr4k'],
          },
          {
            id: 'odyle-weekly',
            text: 'Jede Woche 20 blaue Odyle für den Energie-Morph zurücklegen',
            detail: 'Die wöchentliche Odyle-Energie aus Substance Morph braucht blaues Odyle – das ist der Engpass.',
            sources: ['yt-craft-silvias'],
            uncertain: true,
          },
          {
            id: 'nodes-on-the-way',
            text: 'Unterwegs jeden Erz- und Odyle-Knoten mitnehmen – es gibt kein Tageslimit, aber gelegentlich ein Captcha',
            sources: ['yt-craft-silvias', 'yt-gather-mr4k'],
          },
        ],
      },
    ],
  },
  {
    id: 'novice',
    title: '2 · Waffen-Beruf auf Novice 50',
    description:
      'Jeder Craft gibt feste Erfahrung, auch auf hohem Berufslevel. Deshalb reicht das billigste Level-1-Rezept, um den Beruf hochzuziehen.',
    sections: [
      {
        id: 'level',
        kind: 'gear',
        title: 'Leveln',
        items: [
          {
            id: 'afk-crafts',
            text: 'Billiges Level-1-Rezept (z. B. Barren) per Max-Craft in Serie laufen lassen – beim AFK oder über Nacht',
            detail: 'Zutaten beim Händler bzw. weiße Grundmaterialien günstig im Auktionshaus kaufen.',
            sources: ['yt-plan-madsin', 'yt-craft-mr4k'],
          },
          {
            id: 'supply-requests',
            text: 'Täglich die Crafting-Supply-Requests abgeben – EP, Katalysatoren und Kinah zurück',
            detail: 'Abyss-Punkte aus Crafting-Supply-Requests sind saisonal und zählen nicht zum Wochenlimit.',
            sources: ['yt-craft-crusherx', 'yt-kinah-aselon'],
          },
          {
            id: 'rank-up',
            text: 'Bei Novice 50: Rang-Aufstiegsquest des Berufs abschließen → Professional',
            detail: 'Bei Novice 50 friert die Erfahrung ein, bis die Quest erledigt ist. Für Gathering gibt es eine eigene Quest (NPC Alzir).',
            sources: ['yt-plan-madsin', 'yt-craft-crusherx', 'yt-craft-zyaso'],
          },
          {
            id: 'gathering-50',
            text: 'Gathering ebenfalls auf 50 und den Rang-Aufstieg holen (auf Global aktuell Maximum: Professional 50)',
            sources: ['yt-craft-silvias', 'yt-gather-mr4k'],
          },
        ],
      },
    ],
  },
  {
    id: 'professional',
    title: '3 · Professional 20–30 – vor dem ersten echten Craft',
    description:
      'Jeder Craft kann zerbrechen – je höher die Stufe, desto eher. Mit steigendem Berufslevel sinkt das Risiko. Erst leveln, dann wertvolle Materialien einsetzen.',
    sections: [
      {
        id: 'level',
        kind: 'gear',
        title: 'Leveln',
        items: [
          {
            id: 'pro-20',
            text: 'Mit Level-1-Rezepten bis Professional 20',
            sources: ['yt-plan-madsin'],
          },
          {
            id: 'pro-30',
            text: 'Mit blauen Zwischenprodukten (z. B. Barren) auf 25–30 – blaue Crafts brauchen Berufslevel 30',
            detail: 'Die Zwischenprodukte gleich in großer Menge herstellen: Sie bringen EP und werden später gebraucht.',
            sources: ['yt-plan-madsin', 'yt-craft-silvias'],
          },
        ],
      },
      {
        id: 'materials',
        kind: 'systems',
        title: 'Material vorbereiten',
        items: [
          {
            id: 'recipe-check',
            text: 'Das Rezept der Ziel-Waffe öffnen und alle Zutaten samt Quellen notieren (als Todo)',
            detail: 'Für höhere Crafts brauchst du Material aus 1★-, 2★- und 3★-Dungeons sowie Drachen-Zutaten aus Conquest.',
            sources: ['yt-craft-crusherx', 'yt-craft-lucky'],
          },
          {
            id: 'alts-mats',
            text: 'Dungeon-Material der Twinks übers Server-Lager zum Main schicken',
            sources: ['yt-plan-madsin', 'yt-craft-crusherx'],
          },
          {
            id: 'season-shop',
            text: 'Saison-Shop → Materialien: Odyle und Drachen-Zutaten mit den Twinks kaufen und weiterschicken',
            detail: 'Die Marken des Mains für die Talisra-Wings aufheben.',
            sources: ['yt-plan-madsin'],
          },
          {
            id: 'bound-first',
            text: 'Für die eigene Waffe gebundenes Material verwenden, handelbares lieber verkaufen',
            sources: ['yt-craft-crusherx'],
          },
        ],
      },
    ],
  },
  {
    id: 'proc-chain',
    title: '4 · Proc-Kette bis zur goldenen Basis',
    description:
      'Die Waffe entsteht stufenweise: weiß → grün → blau → gold. Jeder Craft hat 25 % Chance, eine Stufe höher zu „proccen“; das geprocte Teil ist die Zutat für die nächste Stufe. Erst mit der goldenen Basis wird die Endgame-Waffe gecraftet.',
    sections: [
      {
        id: 'chain',
        kind: 'gear',
        title: 'Kette',
        items: [
          {
            id: 'white',
            text: 'Weiße Waffe in größerer Menge craften, bis grüne Procs da sind',
            detail: 'Große Mengen am Stück glätten das 25-%-Glück – einzeln kannst du auch zehnmal in Folge leer ausgehen.',
            sources: ['yt-craft-ynoki', 'yt-craft-silvias'],
          },
          { id: 'green', text: 'Aus den grünen Procs grüne Waffen craften, bis blaue Procs da sind', sources: ['yt-craft-silvias'] },
          { id: 'blue', text: 'Aus den blauen Procs blaue Waffen craften, bis eine goldene Basis dabei ist', sources: ['yt-craft-silvias'] },
          {
            id: 'leftovers',
            text: 'Teile ohne Proc nicht wegwerfen: in Supply Requests geben (Abyss-Punkte für Stigmas) oder verkaufen',
            detail: 'Ab Blau bringen sie im Auktionshaus gutes Geld, weil andere Spieler sie für ihre Supply Requests brauchen.',
            sources: ['yt-craft-silvias', 'yt-plan-madsin', 'yt-kinah-aselon'],
          },
        ],
      },
      {
        id: 'shortcuts',
        kind: 'systems',
        title: 'Abkürzungen',
        items: [
          {
            id: 'buy-base',
            text: 'Alternative mit Abo: die goldene Basis im Auktionshaus kaufen (Madsin rechnet mit ca. 4 Mio. Kinah)',
            detail: 'Je länger du wartest, desto mehr Basen gibt es und desto günstiger werden sie. Den Marktplatz gibt es nur mit Abo.',
            sources: ['yt-plan-madsin', 'yt-dropcraft-lucky'],
          },
          {
            id: 'core-breath',
            text: 'Core + Magical Breath für einen garantierten Craft für die Waffe aufheben',
            detail: 'Magical Breath gibt es im Season Shop → Materials, nur 5 pro Server und Season, nicht übertragbar. Priorität: Waffe, Guard, Kette, Ohrringe.',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx', 'yt-craft-lucky'],
          },
          {
            id: 'artisan',
            text: 'Artisan-Steine sammeln – Shugo Festival, Saison-Shop (10 pro Server) und Sammeln',
            detail: 'Der Artisan-Stein ist der größte Engpass beim Waffen-Craft.',
            sources: ['yt-dropcraft-lucky', 'yt-plan-madsin'],
          },
        ],
      },
    ],
  },
  {
    id: 'weapon',
    title: '5 · Endgame-Waffe & Aufwerten',
    description:
      'Die goldene Basis wird mit Dungeon-Material, Erz und Odyle zur Crafting-Waffe. Ab da ist jedes Aufwerten garantiert, und dein Fortschritt geht nicht mehr verloren.',
    sections: [
      {
        id: 'craft',
        kind: 'gear',
        title: 'Craften',
        items: [
          {
            id: 'first-weapon',
            text: 'Erste Crafting-Waffe herstellen (aktuell Item-Level 62, später auf 70 aufwertbar)',
            detail: 'Crafting-Waffe: 5 Soul-Bind-Zeilen statt 4, mit Philosopher’s Stone 6. Voller PvE Damage Boost über Potential.',
            sources: ['yt-craft-silvias', 'yt-dropcraft-lucky'],
          },
          {
            id: 'upgrade',
            text: 'Per Transfer-Crafting aufwerten: Star Dragon → Splendid → Dark Dragon → Ebony',
            detail: 'Upgrades gelingen immer. Enhance, Amplify und Soul Binds wandern mit, Mana Stones nicht.',
            sources: ['yt-plan-madsin', 'yt-dropcraft-lucky', 'yt-craft-lucky'],
          },
          {
            id: 'soulbinds',
            text: 'Auf der Crafting-Waffe mit Soul Codexes würfeln, bis Angriffstempo oder zwei gute Werte drauf sind',
            sources: ['yt-plan-madsin'],
          },
          {
            id: 'potential',
            text: 'Potential (PvE Damage Boost) erst auf die Crafting-Waffe – es wird nicht übertragen',
            sources: ['yt-gear-freshy', 'yt-dropcraft-lucky'],
          },
        ],
      },
      {
        id: 'next',
        kind: 'quests',
        title: 'Danach',
        items: [
          {
            id: 'guard',
            text: 'Als Nächstes die Guard (ebenfalls Blacksmithing) – oder über die Nuakum-Tickets aus Horn Den',
            sources: ['yt-plan-madsin', 'yt-craft-silvias'],
          },
          {
            id: 'accessories',
            text: 'Accessoires über Handicrafting: Kette, 2 Ohrringe, 2 Ringe',
            detail: 'Madsin craftet die Accessoires sogar vor der Waffe, weil sie günstiger sind und schnell Item-Level bringen.',
            sources: ['yt-plan-madsin'],
          },
          {
            id: 'sell-procs',
            text: 'Unerwartete gelbe oder lila Procs in der Launch-Woche verkaufen – die Preise fallen nach dem ersten Monat stark',
            sources: ['yt-craft-crusherx', 'yt-craft-mr4k'],
          },
        ],
      },
    ],
  },
];
