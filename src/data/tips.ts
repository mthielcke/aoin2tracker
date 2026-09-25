import type { TipTopic } from './types';

export const TIP_TOPICS: TipTopic[] = [
  {
    id: 'leveling',
    title: 'Leveling',
    icon: 'signpost-2',
    intro:
      'Level 1–45 dauert ca. 4–10 Stunden: Profis schaffen es unter 5 h, beim ersten Mal eher 7–10 h. 1–21 ist der langsamste Abschnitt, 38–45 geht sehr schnell. Achtung: Mit Level 45 skaliert die ganze Karte auf 45 – wer mit niedrigem Item-Level ankommt, tut sich schwer.',
    blocks: [
      {
        type: 'callout',
        variant: 'primary',
        title: 'Zwei Strategien – beide sind okay',
        text: 'A) Unterwegs mitnehmen, was nah an der Route liegt (Federn, Sealed Dungeons, Side Quests – vor allem 1–21), damit du nie undergeared bist. B) Die Main Story Quest durchziehen und alles andere mit 45 und vollem Kit nachholen. Gemeinsam gilt: Stirbst du an einem Quest-Boss, bist du undergeared – dann Side Quests und Sealed Dungeons machen.',
      },
    ],
    groups: [
      {
        title: 'Route & Wege',
        tips: [
          {
            id: 'msq-backbone',
            text: 'Main Story Quest (gelb) als Rückgrat – sie gibt die meiste EP',
            sources: ['yt-lvl-spid', 'yt-gear-dankrng'],
          },
          {
            id: 'city-sidequests',
            text: 'Mit Level 16–17 in der Hauptstadt die 4–5 Side Quests mitnehmen',
            detail: 'Sie geben Gear und Accessoires mit Schadenswerten. Ab Level 32/33 reichen ein, zwei weitere Side Quests.',
            sources: ['yt-lvl-spid'],
          },
          {
            id: 'energy-gates',
            text: 'Bei Level 22 und 33 verlangt die Story volle Energie – ein paar Quests bzw. Dungeon-Einträge reichen',
            sources: ['yt-mistakes-lucky'],
            uncertain: true,
          },
          {
            id: 'kisks',
            text: 'Kisks und Teleporter unterwegs freischalten; ab ca. 600 m Entfernung teleportieren',
            sources: ['yt-lvl-spid'],
          },
          {
            id: 'instance-teleport',
            text: 'Nach Sealed Dungeons / Instanz-Quests nicht rauslaufen: M → oben rechts teleportieren',
            sources: ['yt-lvl-krix'],
          },
          {
            id: 'flight',
            text: 'Flug-Technik üben: Shift für Boost, Schwung ausnutzen, Flugausdauer sparen',
            sources: ['yt-lvl-krix', 'yt-lvl-spid'],
          },
        ],
      },
      {
        title: 'Charakter unterwegs stärken',
        tips: [
          {
            id: 'weapon-plus5',
            text: 'Waffe und Accessoires auf +5 – Rüstung nicht',
            detail: 'Nur Waffe und Accessoires geben Schaden. Sie werden 4–5-mal ersetzt, deshalb nicht höher.',
            sources: ['yt-lvl-spid', 'yt-lvl-krix'],
          },
          {
            id: 'skills-8-12',
            text: 'Hauptskills zuerst auf 8, dann auf 12 – dort gibt es neue Spezialisierungs-Slots',
            sources: ['yt-lvl-krix', 'yt-beginner-nobs'],
          },
          {
            id: 'spend-points',
            text: 'Skill- und Daevanion-Punkte nie liegen lassen',
            detail: 'Daevanion zuerst in Schadens-Knoten (Ecken).',
            sources: ['yt-gear-dankrng', 'yt-lvl-spid'],
          },
          {
            id: 'stigma-22',
            text: 'Ab Level 22 gibt es pro Level einen Stigma Shard – Stigmas ausrüsten und leveln',
            sources: ['yt-lvl-krix', 'yt-gear-dankrng'],
          },
          {
            id: 'titles',
            text: 'Titel ausrüsten (vom Monolith) und Erfolge regelmäßig abholen',
            sources: ['yt-lvl-krix', 'yt-lvl-spid'],
          },
          {
            id: 'downtime',
            text: 'Wartezeiten (Ladebildschirm, Autopfad, Federn einsammeln) für Upgrades nutzen',
            sources: ['yt-lvl-krix'],
          },
        ],
      },
      {
        title: 'Nichts verschwenden',
        tips: [
          {
            id: 'no-exploration-loot',
            text: 'Truhen der Story-Dungeons (Kro Cave, Urugugu …) nicht öffnen – Energie sparen',
            detail: 'Die Beute ist für später wertlos, die Energie brauchst du für echte Dungeon-Runs.',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'fire-temple-once',
            text: 'Fire Temple (Exploration) nur einmal für die Level-57-Waffe',
            sources: ['yt-mistakes-lucky'],
            uncertain: true,
          },
          {
            id: 'shugo-keys',
            text: 'Shugo-Festival-Schlüssel sparen und erst mit Level 45 einsetzen',
            detail: '3 Schlüssel pro Tag. Auf 45 sind die Belohnungen deutlich besser (u. a. Gold-Items, Radiant Odium) – selbst eine Niederlage auf 45 lohnt mehr als ein Sieg auf 30.',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
    ],
  },
  {
    id: 'gearscore',
    title: 'Gear Score & Dungeons',
    icon: 'graph-up-arrow',
    intro:
      'Der Gear Score (GS) entscheidet, welche Dungeons du betreten kannst. Mit 45 ist dein Leveling-Gear wertlos: Erst kommt Dungeon-Gear, danach Crafting-Gear (PvE) bzw. Abyss-Gear (PvP). Die meiste Kraft kommt aber aus den dauerhaften Systemen rund ums Gear.',
    blocks: [
      {
        type: 'table',
        columns: ['Stufe', 'Inhalt', 'GS (Richtwert)', 'Laut'],
        rows: [
          ['Frisch 45', 'Nach der Story, vor den Horizontals', 'ca. 1.000', 'TheWhelps'],
          ['Tier 1', 'Kro Cave, Draupnir Cave (Conquest)', 'niedrig, Draupnir Conquest ca. 700', 'aLuckyRO'],
          ['Wöchentlich', 'Ascension Trial', '1.000 leicht · 1.500 normal · 2.000 schwer', 'DankRNG, aLuckyRO'],
          ['Tier 2', 'Urugugu Canyon (Waffe, Accessoires), Vakron Sky Island (Rüstung, Guard)', '1.400 (Global); ältere Angaben 1.500–1.800', 'TheWhelps, Society of Gaming, Sen'],
          ['Arcana', 'Transcendence (Stufe 4 ca. 2.400)', '1.600–1.800 für den Einstieg', 'Sen, Koodoki, TheWhelps'],
          ['Tier 3', 'Fire Temple (Extend-Waffe), Horn Den', '2.100 (Global); ältere Angaben bis 2.400', 'TheWhelps, Society of Gaming, Sen'],
          ['Top', 'Sanctuary / Ludra (10 Spieler)', '2.800', 'TheWhelps, Koodoki'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Richtwerte',
        text: 'Die neuesten Global-Werte (TheWhelps, 24.09.2026) sind 1.400 für Tier 2, 2.100 für Tier 3 und 2.800 für Ludra. Ältere Zahlen stammen aus KR/TW – im Spiel prüfen.',
      },
      {
        type: 'steps',
        title: 'Roadmap nach Level 45',
        items: [
          'Kostenlose Systeme: Sealed Dungeons, Strongholds, Federn, Amulett, Daevanion, Runen, Pantheon.',
          'Tägliche und wöchentliche Routine aufbauen.',
          'Ab ca. 1.600: Abyss-Punkte farmen und Abyss-Accessoires kaufen (Ringe, Ohrringe, Kette), dann Waffe.',
          'Ab ca. 1.700: Transcendence – alle fünf Arcana-Karten auf grün.',
          'Ab ca. 1.800: Vakron Sky Island farmen; Waffe und Guard auf +10, dann die übrige Rüstung auf +10.',
          'Ab ca. 2.200: blaue Arcana-Karten (Ziel 4) und eine Unique-Arcana craften (5 Mysterious Crystals + 5 Mio. Kinah).',
          'Ab ca. 2.400: Fire Temple – zuerst die Waffe, dann Accessoires.',
        ],
      },
    ],
    groups: [
      {
        title: 'Kostenloser Gear Score – zuerst!',
        tips: [
          {
            id: 'feathers-monolith',
            text: 'Alle Federn sammeln und am Monolith abgeben (bis Stufe 30)',
            detail: 'Der Monolith gibt Amulett-Scrolls. Danach tauschst du überschüssige Federn per Substance Morph gegen Enhance Stones.',
            sources: ['yt-lvl-nobs', 'yt-beginner-nobs'],
          },
          {
            id: 'strongholds',
            text: 'Alle Strongholds abschließen – Material für den Gürtel',
            detail: 'Fragezeichen auf der Karte in der Nähe eines Lagers sind Strongholds.',
            sources: ['yt-lvl-nobs', 'yt-beginner-nobs', 'yt-gear-sog'],
          },
          {
            id: 'sealed-dungeons',
            text: 'Alle Sealed Dungeons abschließen (60+ pro Gebiet) – jeder Daevanion-Punkt ≈ 1 GS',
            sources: ['yt-lvl-nobs', 'yt-gear-sog'],
          },
          {
            id: 'regional-quests',
            text: 'Regionalquests erledigen – geben Daevanion-Kristalle',
            sources: ['yt-lvl-nobs', 'yt-beginner-nobs'],
          },
          {
            id: 'enemy-territory',
            text: 'Über den Riss (alle ca. 3 h) ins Feindgebiet: dort nochmal Sealed Dungeons und Strongholds',
            detail: 'Bringt mehrere hundert GS. Laut Koodoki ergeben alle grünen Quests plus Sealed Dungeons beider Seiten ca. 507 Daevanion-Punkte.',
            sources: ['yt-gear-dankrng', 'yt-gear-sog', 'yt-gear-koodoki'],
          },
          {
            id: 'exploration-tab',
            text: 'Fortschritt prüfen: Karte → „Exploration“ zeigt offene Sealed Dungeons und Strongholds',
            sources: ['yt-gear-dankrng', 'yt-lvl-nobs'],
          },
          {
            id: 'amulet-belt',
            text: 'Amulett und Gürtel hochziehen: +10, dann per Morph zur nächsten Seltenheit (grün → blau → Unique → Heroic)',
            detail: 'Beide behältst du das ganze Spiel über – sichere Investition.',
            sources: ['yt-gear-sog', 'yt-beginner-nobs'],
          },
          {
            id: 'runes',
            text: 'Klassenrunen aus Regionalquests holen (2 Slots), nur auf +1 verstärken',
            detail: 'Höhere Stufen können brechen – früh hast du keinen Ersatz.',
            sources: ['yt-lvl-nobs', 'yt-after45-sen'],
          },
          {
            id: 'pantheon-genus',
            text: 'Pantheon (Statuen, Gemälde) und Genus Insight (Monster-Typen töten) nebenbei füllen',
            sources: ['yt-after45-sen', 'yt-gear-dankrng'],
          },
        ],
      },
      {
        title: 'Günstige GS-Hebel',
        tips: [
          {
            id: 'enhance-10',
            text: 'Dungeon-Gear bis +10 verstärken – bis dahin 100 % Erfolg, danach teuer und riskant',
            sources: ['yt-mistakes-lucky', 'yt-gear-sog'],
          },
          {
            id: 'extract',
            text: 'Beim Extrahieren kommen Enhance Stones zurück, Kinah nicht',
            sources: ['yt-gear-sog'],
          },
          {
            id: 'manastones-once',
            text: 'Mana Stones einmal günstig einsetzen – das hebt den GS; nicht auf Übergangs-Gear optimieren',
            sources: ['yt-gear-sog', 'yt-mistakes-lucky'],
          },
          {
            id: 'ascension-gate',
            text: 'Ascension Trial: Die GS-Grenze prüft nur die Zahl – „Mana-Stone-GS“ reicht zum Freischalten',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
      {
        title: 'Dungeon-Gear aufbauen',
        tips: [
          {
            id: 'skip-low',
            text: 'Kro Cave und Draupnir überspringen, wenn dein GS schon für Urugugu/Vakron reicht',
            sources: ['yt-gear-sog', 'yt-gear-dankrng'],
          },
          {
            id: 'all-bosses',
            text: 'In Dungeons alle Bosse töten, bevor du die Belohnung öffnest – mehr und bessere Beute',
            sources: ['yt-beginner-nobs', 'yt-kinah-aselon'],
          },
          {
            id: 'pity',
            text: 'Garantie-/Pity-Belohnungen gezielt für die letzten fehlenden Teile nutzen',
            sources: ['yt-gear-freshy', 'yt-mistakes-lucky'],
          },
          {
            id: 'weapon-first',
            text: 'Die Waffe zuerst verbessern – mehr Schaden, schnellere Runs',
            sources: ['yt-gear-freshy'],
          },
          {
            id: 'invest-crafted',
            text: 'Kinah in Crafting-Gear stecken, nicht über +10 in Dungeon-Gear',
            detail: 'Transfer übernimmt Enhance, Upgrade-Stufe und Soul Binds aufs nächste Crafting-Teil.',
            sources: ['yt-mistakes-lucky', 'yt-gear-freshy'],
          },
          {
            id: 'potential',
            text: 'Potential (PvE-Boni) nur auf Teile, die bleiben – es wird nicht übertragen',
            sources: ['yt-gear-freshy', 'yt-gear-koodoki'],
          },
          {
            id: 'keep-duplicates',
            text: 'Doppelte Dungeon-Teile nicht sofort zerlegen – Material für Potential und Substance Morph',
            sources: ['yt-gear-freshy'],
          },
        ],
      },
      {
        title: 'Langfristig',
        tips: [
          {
            id: 'craft-order',
            text: 'Crafting-Reihenfolge: Waffe → Guard → Accessoires → Rüstung',
            sources: ['yt-gear-freshy'],
          },
          {
            id: 'pve-or-pvp',
            text: 'Entscheiden: PvE (Crafting) oder PvP (Abyss) – beide Sets gleichzeitig sind sehr teuer',
            sources: ['yt-gear-sog'],
          },
          {
            id: 'crafting-profession',
            text: 'Beruf wählen: Blacksmithing/Armorsmithing/Handicrafting für Gear, Alchemie für Tränke und Mana-Stone-Scrolls',
            sources: ['yt-gear-sog'],
          },
          {
            id: 'stats-over-gs',
            text: 'Nicht blind GS jagen – die Stats müssen zu deiner Klasse passen',
            sources: ['yt-gear-freshy', 'yt-after45-sen'],
          },
        ],
      },
    ],
  },
  {
    id: 'general',
    title: 'Allgemein',
    icon: 'lightbulb',
    intro: 'Die häufigsten Fehler von Neueinsteigern und eine sinnvolle Tages- und Wochenroutine.',
    groups: [
      {
        title: 'Häufige Fehler vermeiden',
        tips: [
          {
            id: 'class-choice',
            text: 'Klasse nach Spielstil wählen, nicht nach Meta oder Tier-Liste',
            detail: 'Die Balance ändert sich in KR fast wöchentlich – jede Klasse hat ihre starken Phasen.',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'keep-gold',
            text: 'Gold-Items nicht auflösen – du brauchst sie, um Soul Binds neu zu würfeln',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'genus-lock',
            text: 'Genus-Insight-Stats erst locken, wenn das Board auf Maximal-Level ist',
            detail:
              'Jeder Lock verteuert jedes weitere Leveln deutlich. Ausnahme laut Allyria: Slot 4/7 mit gelbem/orangem Wurf ab ca. 80 %. Im ersten Preset reichen 75–80 %-Würfe.',
            sources: ['yt-mistakes-lucky', 'allyria-ranger'],
          },
          {
            id: 'accessory-manastones',
            text: 'Nie teure Accessoire-Mana-Stones auf Übergangs-Gear verbrauchen',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
      {
        title: 'Täglich',
        tips: [
          {
            id: 'duty',
            text: '5 Duty-Missionen erledigen (Limit pro Server) – Hidden-Cube-Schlüssel bevorzugen',
            detail: 'Das Board lässt sich neu würfeln; laut aLuckyRO lohnt das bis ca. 85.000 Kinah. Belohnungen weiter oben haben höhere Chancen.',
            sources: ['yt-mistakes-lucky', 'yt-lvl-nobs'],
          },
          {
            id: 'nightmare',
            text: 'Nightmare: 2 Einträge pro Tag, max. 14 gespeichert – nicht verfallen lassen',
            detail: 'Kommst du nicht weiter, alte Bosse wiederholen – die Punkte gehen in Statuen.',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'daily-dungeon',
            text: 'Daily Dungeon: Pet-Boxen (Genus, accountweit) oder Enhance Stones (nur Main)',
            sources: ['yt-daily-mr4k', 'yt-gear-dankrng'],
          },
          {
            id: 'supply-commands',
            text: 'Supply Requests und Command-Scrolls – geben Abyss-Punkte, auch für PvE-Spieler',
            sources: ['yt-lvl-nobs', 'yt-beginner-nobs', 'yt-mistakes-lucky'],
          },
          {
            id: 'field-bosses',
            text: 'Feldbosse mitnehmen – ein Treffer reicht für die Beitrags-Truhe',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
      {
        title: 'Wöchentlich',
        tips: [
          {
            id: 'ascension-last-day',
            text: 'Ascension Trial (3 Einträge) erst am letzten Tag vor dem Reset laufen',
            detail: 'So wählst du die höchste Stufe, die dein GS bis dahin erlaubt.',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'abyss-corridors',
            text: 'Abyss Corridors (kurzer Solo-Inhalt) für Abyss-Punkte',
            sources: ['yt-gear-sog', 'yt-kinah-aselon'],
          },
          {
            id: 'alts-22',
            text: 'Alts auf Level 22 bringen, damit sie Odile-Energie sammeln',
            detail: 'Kinah aus Dungeons sinkt nach ca. 84 Belohnungsöffnungen pro Woche und Server – etwa 4 Charaktere reichen.',
            sources: ['yt-gear-dankrng', 'yt-kinah-aselon'],
          },
        ],
      },
    ],
  },
  {
    id: 'settings',
    title: 'Einstellungen',
    icon: 'sliders',
    intro: 'Ein paar Einstellungen, die das Spielen spürbar angenehmer machen – am besten direkt beim ersten Einloggen.',
    groups: [
      {
        title: 'Direkt einstellen',
        tips: [
          {
            id: 'camera-shake',
            text: 'Kamera-Wackeln im Kampf ausschalten (Foto-Symbol)',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'helper-speech',
            text: 'Ab Level 10: Helfer-Sprechblasen im UI-Editor ausblenden',
            sources: ['yt-mistakes-lucky'],
          },
          {
            id: 'auto-target',
            text: 'Kampf → Steuerung: „Auto Target Upon Skill Use“ und „Pursue Targets with Skill Activation“ an',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'target-scan',
            text: 'Target Scanning: Richtung „vor der Kamera“, Priorität feindliche Spieler > Angreifer > markierte Ziele',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'buff-auto',
            text: 'Buff-Auto-Use auf „Im Kampf“',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'boss-orientation',
            text: 'Info-Anzeige → Kampf: Boss-Ausrichtung „Alle“ – zeigt, wohin der Boss schaut',
            detail: 'Hilft, Frontal-AoEs zu meiden und den Rücken für Backstabs zu finden.',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'defiance-key',
            text: 'Defiance auf eine eigene Taste legen – sonst springst du mit der Leertaste und fährst die Flügel aus',
            sources: ['yt-beginner-nobs'],
          },
          {
            id: 'tab-target',
            text: 'Kampfmodus prüfen: Aion-1-Modus (Tab-Target) greift in Skill-Lücken automatisch an und lädt Mana',
            sources: ['yt-mistakes-lucky', 'yt-cleric-beginner'],
          },
        ],
      },
    ],
  },
  {
    id: 'kinah',
    title: 'Kinah',
    icon: 'coin',
    intro: 'Kinah wird für fast alles gebraucht: Verstärken, Crafting, Stats würfeln, Marktplatz. Der Marktplatz setzt das Abo voraus.',
    groups: [
      {
        title: 'Grundlagen',
        tips: [
          {
            id: 'bound',
            text: 'Gebundenes Kinah wird zuerst verbraucht; nur ungebundenes Kinah ist handelbar',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'odial',
            text: 'Odial am Ende jedes Dungeons einsammeln – braucht man für Energie, Wings und Morphs',
            sources: ['yt-kinah-aselon', 'yt-gear-sog'],
          },
          {
            id: 'calc-crafting',
            text: 'Vor dem Crafting zum Verkauf Materialpreise, Gebühr und Steuer durchrechnen',
            sources: ['yt-kinah-aselon'],
          },
        ],
      },
      {
        title: 'Einnahmequellen',
        tips: [
          {
            id: 'early-consumables',
            text: 'Früh gefragt: Ausdauer-Getränke, Accuracy-Food und Flug-Tränke',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'alchemy-stones',
            text: 'Alchemie: Mana/Soul Stones aufwerten – mit Glück entsteht ein handelbarer Superior-Stein',
            sources: ['yt-kinah-aselon', 'yt-gear-sog'],
          },
          {
            id: 'wings-paintings',
            text: 'Dungeon-Wings und Gemälde verkaufen, statt sie zu zerlegen',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'hidden-cubes',
            text: 'Hidden Cubes mit Schlüssel öffnen – doppelte Belohnung, teils wertvolle Skins und Godstones',
            sources: ['yt-kinah-aselon', 'yt-mistakes-lucky'],
          },
          {
            id: 'abyss-mobs',
            text: 'Abyss-Mobs haben kein Tageslimit für Kinah (offene Welt: 1 Mio./Tag) – aber PvP-Zone',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'tiles',
            text: 'Ariel-/Asphel-Tiles sind zum Start sehr teuer – übrige Tiles lassen sich gut verkaufen',
            sources: ['yt-kinah-aselon'],
          },
        ],
      },
    ],
  },
];
