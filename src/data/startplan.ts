import type { Phase } from './types';

export const PLAN_SCOPE = 'plan';

export const START_PLAN: Phase[] = [
  {
    id: 'setup',
    title: '1 · Setup vor dem Losspielen',
    description: 'Einmal richtig einstellen spart später viele Nerven.',
    sections: [
      {
        id: 'choice',
        kind: 'quests',
        title: 'Vor dem Start',
        items: [
          {
            id: 'class',
            text: 'Main-Klasse nach Spielstil wählen, nicht nach Tier-Liste',
            detail: 'Die Balance ändert sich laufend – jede Klasse hat ihre starken Phasen.',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'faction',
            text: 'Fraktion und Server bewusst wählen – dort, wo die großen Gilden hingehen',
            detail:
              'In Discord, Reddit und Gilden-Rekrutierungen nachsehen. Eine schwache Fraktion verliert die Artifact-Kämpfe, und die bringen auch PvE-Spielern Abyss-Punkte.',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'roster',
            text: 'Roster planen: Main plus 1–2 Twinks mit Klassen, die Spaß machen',
            detail: 'Twinks sammeln Energie, Ressourcen und Crafting-Chancen für den Main. Supports oder Templar eignen sich gut.',
            sources: ['yt-start-sywo'],
          },
        ],
      },
      {
        id: 'settings',
        kind: 'systems',
        title: 'Einstellungen direkt nach dem Einloggen',
        items: [
          { id: 'camera', text: 'Kamera-Wackeln im Kampf ausschalten (Foto-Symbol)', sources: ['yt-mistakes-lucky'] },
          {
            id: 'tab-target',
            text: 'Kampfmodus: Aion-1-Modus (Tab-Target) – greift in Skill-Lücken automatisch an und lädt Mana',
            sources: ['yt-mistakes-lucky', 'yt-cleric-beginner'],
          },
          {
            id: 'auto-target',
            text: 'Kampf → Steuerung: „Auto Target Upon Skill Use“ und „Pursue Targets with Skill Activation“ an',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'target-scan',
            text: 'Target Scanning: vor der Kamera; Priorität feindliche Spieler > Angreifer > markierte Ziele',
            sources: ['yt-beginner-nobs'],
          },
          { id: 'buff-auto', text: 'Buff-Auto-Use auf „Im Kampf“', sources: ['yt-beginner-nobs'] },
          {
            id: 'boss-orientation',
            text: 'Info-Anzeige → Kampf: Boss-Ausrichtung „Alle“',
            sources: ['yt-beginner-nobs'],
          },
          { id: 'defiance', text: 'Defiance auf eine eigene Taste legen', sources: ['yt-beginner-nobs'] },
        ],
      },
      {
        id: 'unlocks',
        kind: 'rotation',
        title: 'Freischaltungen beim Leveln',
        items: [
          {
            id: 'macro-4',
            text: 'Ab Level 4: Makro einrichten',
            detail:
              'Einstellungen → Tastenbelegung → Gameplay → Makro. Die Skill-Ketten je Klasse stehen in den Build-Details. Verzögerung: 10 ms bei Ping < 50, 40–50 ms ab 80.',
            sources: ['yt-chanter-ultimate', 'allyria-ranger'],
          },
          {
            id: 'ui-10',
            text: 'Ab Level 10: Interface im UI-Editor anpassen und Helfer-Sprechblasen ausblenden',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
    ],
  },
  {
    id: 'main-21',
    title: '2 · Main bis Level 21 – Energie starten',
    description:
      'Ab etwa Level 21 regeneriert der Charakter Energie für Dungeons (DankRNG nennt 22), und der erste Dungeon wird freigeschaltet. Deshalb zuerst den Main dorthin bringen, dann die Twinks.',
    sections: [
      {
        id: 'route',
        kind: 'quests',
        title: 'Route',
        items: [
          { id: 'msq', text: 'Main Story Quest (gelb) durchziehen', sources: ['yt-prog-whelps', 'yt-lvl-spid'] },
          {
            id: 'on-the-way',
            text: 'Federn, Sealed Dungeons und grüne Side Quests nur mitnehmen, wenn sie auf dem Weg liegen',
            detail: '1–21 ist der langsamste Abschnitt. Die Punkte machen den Charakter stärker, der Rest wird mit 45 nachgeholt.',
            sources: ['yt-prog-whelps', 'yt-lvl-spid'],
          },
          { id: 'kisks', text: 'Kisks und Teleporter unterwegs freischalten', sources: ['yt-lvl-spid'] },
        ],
      },
      {
        id: 'power',
        kind: 'skills',
        title: 'Stärker werden',
        items: [
          {
            id: 'weapon',
            text: 'Waffe nur bei Bedarf verbessern – wenn dir Schaden fehlt oder eine gute Waffe droppt',
            detail:
              'Bis Level 21 kein Muss. Ab 21 kommt der erste Dungeon – spätestens dann lohnen sich +3 bis +5. Beim Extrahieren gibt es alle Enhance Stones zurück, das Kinah nicht.',
            sources: ['yt-prog-whelps', 'yt-lvl-spid'],
          },
          {
            id: 'green-arrow',
            text: 'Items mit grünem Pfeil in der Tasche sofort anlegen (Upgrade)',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'points',
            text: 'Skill- und Daevanion-Punkte sofort verteilen',
            sources: ['yt-gear-dankrng', 'yt-lvl-krix'],
          },
          { id: 'titles', text: 'Titel vom Monolith ausrüsten', sources: ['yt-lvl-krix'] },
        ],
      },
      {
        id: 'save',
        kind: 'systems',
        title: 'Nichts verschwenden',
        items: [
          {
            id: 'shugo-keys',
            text: 'Shugo-Festival-Schlüssel sparen – vor 45 gibt es nur einen Bruchteil der Belohnungen',
            sources: ['yt-mistakes-lucky', 'yt-start-sywo'],
          },
          {
            id: 'no-chests',
            text: 'Truhen der Story-Dungeons nicht öffnen – Energie sparen',
            sources: ['yt-mistakes-lucky'],
          },
          { id: 'reached', text: 'Main hat Level 21 erreicht' },
        ],
      },
    ],
  },
  {
    id: 'alts-21',
    title: '3 · Twinks auf Level 21',
    description: 'Umloggen und so viele Twinks auf 21 bringen, wie du Lust hast – danach sammeln sie im Hintergrund Energie.',
    sections: [
      {
        id: 'alts',
        kind: 'quests',
        title: 'Twinks',
        items: [
          {
            id: 'create',
            text: 'Twinks im Tracker anlegen und Level pflegen – der Status erscheint oben in dieser Phase',
          },
          { id: 'msq-only', text: 'Twinks nur per Main Story Quest auf 21 – keine Nebeninhalte' },
          {
            id: 'park',
            text: 'Twinks auf 21 parken: Die Energie läuft voll, ohne dass du spielst',
            sources: ['yt-gear-dankrng'],
          },
          {
            id: 'warehouse',
            text: 'Roster-/Server-Lager nutzen, um Material zwischen den Charakteren zu verschieben',
            sources: ['yt-start-sywo', 'yt-craft-crusherx'],
          },
        ],
      },
    ],
  },
  {
    id: 'main-45',
    title: '4 · Main auf Level 45',
    description: 'Zurück zum Main: Story bis 45 und dabei mitnehmen, was auf dem Weg liegt.',
    sections: [
      {
        id: 'route',
        kind: 'quests',
        title: 'Route',
        items: [
          { id: 'msq', text: 'Main Story Quest bis Level 45', sources: ['yt-prog-whelps'] },
          {
            id: 'side-quests',
            text: 'Grüne Side Quests auf dem Weg machen – ohne sie füllt sich der rote Ascension-Balken nicht',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'feathers-strongholds',
            text: 'Federn und Strongholds auf dem Weg mitnehmen',
            detail: 'Strongholds (Lagerfeuer-Symbol): nicht durch die Tür, einfach hineinfliegen – das startet die Instanz.',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'energy-gates',
            text: 'Bei Level 22 und 33 verlangt die Story volle Energie – ein paar Quests bzw. Dungeon-Einträge reichen',
            sources: ['yt-mistakes-lucky'],
            uncertain: true,
          },
        ],
      },
      {
        id: 'power',
        kind: 'skills',
        title: 'Stärker werden',
        items: [
          {
            id: 'stigmas',
            text: 'Ab Level 22 pro Level ein Stigma Shard – Stigmas ausrüsten und leveln',
            sources: ['yt-lvl-krix'],
          },
          {
            id: 'ascension',
            text: 'Letzte Ascension abschließen – gibt das Armband; am Ende der Story gibt es die Unique-Waffe',
            sources: ['yt-prog-whelps'],
          },
          { id: 'reached', text: 'Main hat Level 45 erreicht (ca. 1.000 GS)', sources: ['yt-prog-whelps'] },
        ],
      },
    ],
  },
  {
    id: 'horizontals',
    title: '5 · Mit 45: Horizontals – Ziel 1.400 GS',
    description:
      'Nach der Story liegt der Main bei ca. 1.000 GS. Mit allen Horizontals kommst du nahe an 1.400 – den Einstieg für Tier-2-Dungeons auf Global. Tier 1 überspringst du dann und sparst Energie.',
    sections: [
      {
        id: 'own-map',
        kind: 'quests',
        title: 'Eigene Karte',
        items: [
          {
            id: 'feathers',
            text: 'Alle Federn sammeln und am Monolith abgeben (nur eigene Fraktion)',
            sources: ['yt-prog-whelps', 'yt-lvl-nobs'],
          },
          {
            id: 'sealed',
            text: 'Alle 61 Sealed Dungeons abschließen (je 2 Daevanion-Punkte)',
            sources: ['yt-prog-whelps'],
          },
          { id: 'strongholds', text: 'Alle Strongholds abschließen – Material für den Gürtel', sources: ['yt-prog-whelps'] },
          {
            id: 'side-quests',
            text: 'Alle Side Quests erledigen – mit 45 kommen weitere dazu (je ca. 1 Daevanion-Punkt)',
            sources: ['yt-prog-whelps'],
          },
        ],
      },
      {
        id: 'enemy-map',
        kind: 'quests',
        title: 'Feindgebiet & Abyss',
        items: [
          {
            id: 'rift',
            text: 'Über den Space-Time Rift ins Feindgebiet: dort ebenfalls Sealed Dungeons und Strongholds',
            detail:
              'In KR öffnet der Rift um 2/5/8/11 Uhr (alle 3 h) für 10 Minuten; drüben darfst du 1 h bleiben. Meist reichen 2 Sessions. Federn gibt es dort nicht.',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'abyss-feathers',
            text: 'Abyss-Federn am Abyss-Monolith abgeben – die Punkte fürs PvP-Board zählen ebenfalls als GS',
            sources: ['yt-prog-whelps'],
            uncertain: true,
          },
        ],
      },
      {
        id: 'gear',
        kind: 'gear',
        title: 'Gear Score auffüllen',
        items: [
          {
            id: 'daevanion',
            text: 'Daevanion-Punkte verteilen – 1 Punkt = 1 GS (ein orangefarbener Knoten kostet 4 Punkte = 4 GS)',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'belt-amulet',
            text: 'Gürtel, Amulett und Armband auf +10, dann per Morph zur nächsten Stufe',
            detail: 'Zum Morphen muss das Teil in allen Presets abgelegt sein – sonst lässt es sich nicht auswählen.',
            sources: ['yt-prog-whelps', 'yt-gear-sog'],
          },
          { id: 'runes', text: 'Clash Runes leicht verstärken (+1 bis +2), nicht riskieren', sources: ['yt-prog-whelps', 'yt-lvl-nobs'] },
          {
            id: 'push',
            text: 'Fehlende GS bis 1.400 über Verstärken (bis +10 sicher) und Intermediate-Mana-Stones auffüllen',
            sources: ['yt-prog-whelps'],
          },
          { id: 'reached', text: 'Main hat 1.400 GS erreicht – ab jetzt Tier-2-Dungeons', sources: ['yt-prog-whelps'] },
        ],
      },
      {
        id: 'minigames',
        kind: 'systems',
        title: 'Jetzt lohnt es sich',
        items: [
          { id: 'shugo', text: 'Die gesparten Shugo-Schlüssel einsetzen', sources: ['yt-mistakes-lucky', 'yt-start-sywo'] },
          {
            id: 'cubes',
            text: 'Hidden Cubes und Dimensional Invasion mitnehmen – wichtig für die frühe Genus-Progression',
            sources: ['yt-start-sywo'],
          },
        ],
      },
    ],
  },
  {
    id: 'main-focus',
    title: '6 · Main-Fokus bis zum Wochenziel',
    description:
      'Jetzt liegt der Fokus auf dem Main. Die Twinks geht es erst weiter, wenn der Main sein Ziel-GS für die erste Woche erreicht hat.',
    sections: [
      {
        id: 'progression',
        kind: 'gear',
        title: 'Gear-Progression',
        items: [
          {
            id: 'tier2',
            text: 'Ab 1.400 GS: Tier-2-Dungeons (Urugugu Canyon, Vakron) statt Tier 1',
            sources: ['yt-prog-whelps', 'yt-gear-sog'],
          },
          {
            id: 'weapon-first',
            text: 'Waffe und Guard zuerst auf +10, dann Accessoires – Rüstung ist zweitrangig',
            sources: ['yt-prog-whelps', 'yt-after45-sen'],
          },
          {
            id: 'transcendence',
            text: 'Transcendence laufen und Arcana nach höchster Stufe einsetzen – für den GS zählen Set und Skills noch nicht',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'transfer',
            text: 'Alte Unique-Teile nicht auflösen: Per Transfer wandern Enhance und Soul Binds mit (Mana Stones nicht)',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'move-speed',
            text: 'Stiefel mit Laufgeschwindigkeit bevorzugen – lieber ein Teil mit Move Speed tauschen als rollen',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'tier3',
            text: 'Ab 2.100 GS: Tier 3 (Fire Temple, Horn Den); ab 2.800 Sanctuary (Ludra)',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'crafted-ring',
            text: 'Erstes Crafting-Ziel: Ringe – Skill-Schwellen 12/16/20 erreichen, zusätzlicher Soul Bind',
            sources: ['yt-prog-whelps'],
          },
        ],
      },
      {
        id: 'routine',
        kind: 'systems',
        title: 'Routine',
        items: [
          {
            id: 'daily',
            text: 'Täglich: 5 Duty-Missionen, Daily Dungeon, Nightmare nicht verfallen lassen',
            sources: ['yt-prog-whelps', 'yt-mistakes-lucky'],
          },
          {
            id: 'weekly',
            text: 'Wöchentlich: 12 Command-Scrolls, Ascension Trial, Shugo Festival, Invasion',
            sources: ['yt-prog-whelps'],
          },
          {
            id: 'abyss',
            text: 'Abyss: Artifact-Kämpfe und die 20 Wochenquests, dazu 2–3 h Mobs grinden',
            detail: 'Alles davon sind PvE-Aktivitäten – auch als PvE-Spieler langfristig sehr lohnend.',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'silentium',
            text: 'Silentium immer verkaufen – füllt das gebundene Kinah und schont das ungebundene',
            sources: ['yt-start-sywo'],
          },
          { id: 'goal', text: 'Wochenziel-GS erreicht' },
        ],
      },
    ],
  },
  {
    id: 'alts-continue',
    title: '7 · Twinks weiterspielen',
    description: 'Wenn der Main sein Wochenziel erreicht hat, geht es mit den Twinks weiter.',
    sections: [
      {
        id: 'alts',
        kind: 'quests',
        title: 'Twinks',
        items: [
          { id: 'to-45', text: 'Twinks auf 45 bringen und ihre Horizontals erledigen', sources: ['yt-prog-whelps'] },
          {
            id: 'energy',
            text: 'Twink-Energie für Dungeons nutzen – z. B. Wings und Gemälde für den Main farmen',
            sources: ['yt-prog-whelps', 'yt-kinah-aselon'],
          },
          {
            id: 'bound-kinah',
            text: 'Gebundenes Kinah der Twinks für Verbrauchsgüter, Crafting-Material oder Genus-Rerolls nutzen und übers Lager teilen',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'silentium',
            text: 'Silentium der Twinks übers Roster-Lager zum Main bringen und dort verkaufen',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'skins',
            text: 'Skins nur auf dem Main kombinieren – Waffen-Skins sind klassenabhängig',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'crafting-mats',
            text: 'Crafting-Material sparen statt billig verkaufen – das Crafting-Set kommt nach 4–6 Wochen',
            sources: ['yt-start-sywo'],
          },
          {
            id: 'roster-size',
            text: 'Ca. 4 Charaktere reichen – Dungeon-Kinah sinkt nach ca. 84 Öffnungen pro Woche und Server',
            sources: ['yt-kinah-aselon'],
          },
        ],
      },
    ],
  },
];
