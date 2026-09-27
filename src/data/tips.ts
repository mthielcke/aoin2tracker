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
            text: 'Bei Level 22 und 33 verlangt die Story einen vollen Fortschrittsbalken (nicht die Odyle-Energie) – ein paar Quests bzw. Dungeon-Einträge reichen',
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
            sources: ['yt-mistakes-lucky', 'yt-dungeon-lucky'],
          },
          {
            id: 'story-dungeons-solo',
            text: 'Story-Dungeons (Kro Cave, Urugugu, Fire Temple, Draupnir) solo laufen – in der Gruppe wird der Boss stärker',
            detail: 'Einfach selbst einen Raum erstellen und reingehen, statt auf eine Gruppe zu warten. Die Kugeln der Bosse aufheben: rot = HP, blau = Mana, grün = Ausdauer.',
            sources: ['yt-dungeon-lucky'],
          },
          {
            id: 'odyle-energy',
            text: 'Odyle-Energie öffnet die Belohnungs-Cubes in Dungeons (ca. 40 pro Cube) – nicht für Inhalte verschwenden, aus denen du rausgewachsen bist',
            detail:
              'Nur die Basis-Energie lädt sich selbst auf. Die Angaben zur Rate gehen auseinander: TW ca. 15 alle 48 Min., EU-Playtest 15 alle 3 Std.; Obergrenze im EU-Playtest 560 bzw. 840 mit Abo. Extra-Energie gibt es über Substance Morph, Duty-Missionen und mit Abo beim Händler.',
            sources: ['yt-odyle-mr4k', 'kodex-odyle', 'mmo-codex-dungeons'],
            uncertain: true,
          },
          {
            id: 'fire-temple-once',
            text: 'Fire Temple (Exploration) nur einmal für die Level-57-Waffe',
            detail: 'Die Waffe droppt nur mit ca. 10–20 % Chance. Klappt es nicht, weiterziehen, statt den Dungeon zu wiederholen.',
            sources: ['yt-mistakes-lucky', 'yt-dungeon-lucky'],
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
        title: 'Breakpoints: welcher Inhalt welchen GS erwartet',
        columns: ['GS', 'Inhalt', 'Beute', 'Verstärken', 'Laut'],
        rows: [
          ['ca. 900–1.000', 'Frisch 45, Story beendet', 'Gelbe Story-Waffe; 2 Quests mit Clash-Rune-Truhe (je +40 GS)', 'Waffe +5, Runen max. +2', 'FRESHY, TheWhelps'],
          ['ab 1.000', 'Ascension Trial – neue Stufe alle 500 GS (1.000 / 1.500 / 2.000 …)', 'Silentium (gebundenes Kinah)', '–', 'FRESHY, DankRNG'],
          ['ca. 700', 'Tier 1: Kro Cave, Draupnir', 'Bakarma-Set (Pity-Box), Level-68-Accessoires', 'höchstens +5 bis +10 – überspringen, wenn der GS schon für Tier 2 reicht', 'aLuckyRO, TheWhelps'],
          ['1.400 (FRESHY: ca. 1.500)', 'Tier 2: Urugugu Canyon, Vakron Sky Island', 'Urugugu: Waffe, Accessoires · Vakron: Rüstung, Guard', 'neue Teile sofort +5; Waffe und Guard +10, Rest +7 bis +10', 'TheWhelps, FRESHY, Sen'],
          ['ca. 1.600–1.800', 'Transcendence Stufe 1–2', 'Arcana-Karten (nur hier)', '–', 'Sen, Koodoki'],
          ['2.100–2.200', 'Tier 3: Fire Temple, Ferocious Horn Den', 'Fire Temple: beste PvE-Accessoires, Extend-Waffe · Horn Den: Nuakum-Rüstung (bestes Nicht-Crafting-Gear in Season 1)', 'Endstücke: +10 und höher, Soul Binds und Potential optimieren', 'FRESHY, TheWhelps'],
          ['2.400–2.700', 'Transcendence Stufe 4', 'Bessere Arcana', '–', 'Koodoki (2.400), FRESHY (2.700)'],
          ['2.800', 'Sanctuary Ludra (10 Spieler, 1× pro Woche)', 'Waffen, Guards, Armbänder', 'Amplify: Waffe, Guard, dann Accessoires', 'TheWhelps, FRESHY'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Richtwerte',
        text: 'Die Global-Werte von TheWhelps (24.09.2026) sind 1.400 für Tier 2, 2.100 für Tier 3 und 2.800 für Ludra; FRESHY (23.09.) nennt ca. 1.500 und 2.200. Ältere Zahlen stammen aus KR/TW – im Spiel prüfen.',
      },
      {
        type: 'list',
        title: 'Wie hoch verstärken?',
        items: [
          'Bis +10 gelingt Verstärken immer. Darüber kann es scheitern – das Teil bleibt, aber Kinah und Material sind weg.',
          'Beim Auflösen bzw. Extrahieren bekommst du die Enhance Stones zurück, nur das Kinah nicht. +10 auf Übergangs-Gear ist also günstig.',
          'Unique-Teile gehen bis +15, danach 5× Amplify mit Amplify Stones (je +5 GS). Jeder Enhance-Schritt gibt +1 GS.',
          'Übergangs-Gear (Tier 1 und 2): neue Teile sofort +5, Waffe und Guard +10, den Rest +7 bis +10. Keine teuren Mana Stones, kein Potential.',
          'Endstücke (Tier 3, Crafting-Gear): über +10 gehen, Soul Binds rollen, Potential für PvE Damage Boost.',
        ],
      },
      {
        type: 'table',
        title: 'Dungeon- vs. Crafting-Gear',
        columns: ['', 'Dungeon-Gear', 'Crafting-Gear'],
        rows: [
          ['PvE Damage Boost (über Potential)', 'halb (z. B. 2,5 %)', 'voll (z. B. 5 %)'],
          ['Soul-Bind-Zeilen', '4 + 1 über Soul Fusion (Fire-Temple-Waffe nur 3 + 1)', '5 + 1 über Soul Fusion'],
          ['Nächste Stufe', 'neues Teil farmen', 'per Material upgraden (100 %) – Enhance, Amplify und Soul Binds bleiben'],
          ['Engpass', 'Odyle-Energie und Drop-Glück', 'Artisan-Stein (Shugo Festival, Saison-Shop 10 pro Server, Sammeln); Marktplatz nur mit Abo'],
          ['Empfehlung', 'Weg ohne Abo – bis zur Ludra-Waffe', 'Weg mit Abo – Crafting ab dem Draupnir- bzw. Tier-2-Gear'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Übertragen beim Wechsel – im Spiel prüfen',
        text: 'TheWhelps zeigt, wie ein Tier-2-Teil per Transfer auf das neue Tier-3-Teil übergeht: Enhance und Soul Binds wandern mit, Mana Stones, Potential und Theo Stones nicht. aLuckyRO sagt dagegen, dass Dungeon-Gear bei jedem Wechsel bei null anfängt und nur Crafting-Gear mitwächst. Beim ersten Wechsel prüfen, ob die Transfer-Option angeboten wird – bis dahin nicht über +10 gehen.',
      },
      {
        type: 'steps',
        title: 'Unser Fahrplan (PvE zuerst)',
        items: [
          'Frisch 45 (ca. 900 GS): beide Clash-Rune-Quests, Story zu Ende, Story-Waffe +5 → 1.000.',
          'Kostenlose Systeme: Sealed Dungeons, Strongholds, ca. 190 Federn, Side Quests, Feindgebiet per Rift. Gürtel und Amulett per Morph auf Gelb, nächste Ascension gibt das gelbe Armband (+5) → ca. 1.400–1.500.',
          'Tier 2: Vakron dreimal in Exploration → Condensed Cube freischalten und aufheben, bis ein Teil fehlt. Dann Conquest: nach 21 Clears gibt es die Condensed Chest mit 2 garantierten Teilen. Urugugu für Waffe und Accessoires.',
          'Ca. 1.800–1.900: Mana-Stone-Stats würfeln (1–2 grüne reichen), Theo Stone auf Waffe und Guard, alles auf +7, Waffe und Guard +10. Transcendence für Arcana.',
          '2.100–2.200: Tier 3 – ab hier sind die Teile Endstücke. Jetzt optimieren und parallel das Crafting leveln (Waffe → Guard → Accessoires → Rüstung).',
          'Ab 2.200: Combat Power statt GS jagen; nächste Ziele 2.700 (Transcendence 4) und 2.800 (Ludra).',
          'PvP-Gear erst, wenn das Kinah-Einkommen stabil ist – Abyss-Gear ist ein eigenes, teures Set.',
        ],
      },
      {
        type: 'callout',
        variant: 'primary',
        title: 'Optional: Abyss-Accessoires als GS-Brücke',
        text: 'FRESHY und Sen kaufen ab ca. 1.600 GS mit rund 200.000 Abyss-Punkten Tier-1-Abyss-Accessoires (2 Ringe, 2 Ohrringe, Kette) und verstärken sie auf +5. Das sind PvP-Teile, bringen aber schnell GS für Tier 2/3 – passt zu „PvE zuerst“, wenn die AP ohnehin aus den Wochenquests kommen.',
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
            detail: 'Verstärken bis +10 kostet also unterm Strich nur Kinah – beim Auflösen gibt es die Steine zurück, teils sogar mehr.',
            sources: ['yt-gear-sog', 'yt-dungeon-lucky'],
          },
          {
            id: 'manastones-once',
            text: 'Mana Stones einmal günstig einsetzen – das hebt den GS; nicht auf Übergangs-Gear optimieren',
            detail: 'Früh reicht jeder grüne Mana Stone, egal welcher Stat – es geht nur darum, die GS-Grenze des nächsten Dungeons zu erreichen.',
            sources: ['yt-gear-sog', 'yt-mistakes-lucky', 'yt-dungeon-lucky'],
          },
          {
            id: 'ascension-gate',
            text: 'Ascension Trial: Die GS-Grenze prüft nur die Zahl – „Mana-Stone-GS“ reicht zum Freischalten',
            sources: ['yt-mistakes-lucky'],
          },
        ],
      },
      {
        title: 'Exploration & Conquest',
        tips: [
          {
            id: 'exploration-pity',
            text: 'Exploration ist der Helfer-Modus: Nach 3 geöffneten Belohnungen gibt es eine Pity-Box mit einem wählbaren Gear-Teil',
            detail: 'Mit Abo öffnest du pro Run doppelt – dann reichen 2 Runs statt 3. Viele übersehen diese kostenlose Wahl und gehen direkt in Conquest.',
            sources: ['yt-dungeon-lucky'],
          },
          {
            id: 'draupnir-exploration',
            text: 'Nach dem Leveln Draupnir (Exploration) für die Pity-Box wiederholen – Bakarma-Teil als Start-Gear, am besten das Oberteil',
            sources: ['yt-dungeon-lucky'],
          },
          {
            id: 'tier1-conquest',
            text: 'Dann Conquest: Kro Cave für ein Level-68-Accessoire, danach alle Energie in Draupnir (Rüstung, Guard)',
            detail: 'Laut aLuckyRO ca. 7 Runs mit Abo bzw. 14 ohne bis zur Pity-Box. Droppt eine Waffe, auf +10 bringen.',
            sources: ['yt-dungeon-lucky'],
            uncertain: true,
          },
          {
            id: 'tier2-route',
            text: 'Ab 1.400 GS: fehlende Bakarma-Teile über die Vakron-Exploration holen, dann Urugugu Conquest für Waffe und Accessoires',
            detail: 'Vakron-Rüstung musst du nicht farmen. Draupnir-Gear +10, Urugugu-Waffe und -Accessoires +10 plus Arcana reichen für 2.100 GS (Tier 3).',
            sources: ['yt-dungeon-lucky'],
          },
          {
            id: 'tier3-pity',
            text: 'Ab 2.100 GS lohnt die Fire-Temple-Exploration wieder – vor allem ohne Abo für die Pity-Box',
            sources: ['yt-dungeon-lucky'],
          },
          {
            id: 'craft-early-abo',
            text: 'Mit Abo schon nach dem Draupnir-Gear mit Crafting starten (erste Stufe z. B. Star-Dragon-Rüstung)',
            detail: 'Enhance, Amplification und Soul Binds wandern beim Upgrade auf die nächste Crafting-Stufe mit – Dropp-Gear nur auf +10.',
            sources: ['yt-dungeon-lucky', 'yt-gear-freshy'],
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
        title: 'Systeme richtig angehen',
        tips: [
          {
            id: 'upgrade-enough',
            text: 'Nur so weit upgraden, wie du für den nächsten Inhalt brauchst – teure Optimierung erst für Gear, das bleibt',
            detail: 'Gilt besonders für seltene Transfer-Materialien und hochwertige Mana Stones.',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'no-kr-copy',
            text: 'Endgame-Builds und Stat-Ziele aus Korea nicht blind kopieren',
            detail: 'Global startet mit weniger Systemen, Arcana-Karten und Stats. KR-Builds als Orientierung nutzen, aber prüfen, was auf deinem Server verfügbar ist.',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'key-skills',
            text: 'Skill-Ressourcen auf die Kernskills deiner Klasse konzentrieren, nicht gleichmäßig verteilen',
            detail: 'Auch Arcana und Daevanion geben Skill-Level – sie sollten dieselben Kernskills stärken.',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'arcana-feed',
            text: 'Arcana: Alte Karten lassen sich in bessere verfüttern – aber nicht 1:1, also nicht jede Karte voll ausbauen',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'daevanion-respec',
            text: 'Daevanion umzuskillen ist einfach – erst die wichtigen Skill-Knoten, dann Stat-Knoten drumherum',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'closet',
            text: 'Ausgemusterte Ausrüstung zerlegen schaltet ihr Aussehen im Closet frei – die Sammlung gibt dauerhafte Stats',
            detail: 'Genauso geben Pantheon, Wings und Pets (Genus) permanente Stats – nebenbei mitnehmen, nicht vor Gear priorisieren.',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'presets',
            text: 'Presets für Gear, Arcana, Skills, Titel und Wings anlegen, sobald du zwischen PvE und PvP wechselst',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'rifts',
            text: 'Dimensional Rifts: alle 3 Std. (8× am Tag), 10 Min. Eintrittsfenster, ab Level 45 – standardmäßig mit PvE-Flag',
            detail: 'Im Feindgebiet gibt es Quests, Weltbosse und Material. Das PvP-Flag lässt sich umschalten.',
            sources: ['yt-beginner-freshy'],
          },
          {
            id: 'no-checklist-stress',
            text: 'Nicht jeden Tag alles abhaken wollen – die Systeme sind auf langfristigen Fortschritt ausgelegt',
            sources: ['yt-beginner-freshy', 'yt-after45-sen'],
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
            detail:
              'Command-Scrolls kaufst du beim Händler in der Hauptstadt, 12 pro Woche. Eine aktivierte Rolle schaltet eine kleine Mission frei (Journal → Duty → Command). Abyss-Befehle sind wegen PvP umkämpft.',
            sources: ['yt-lvl-nobs', 'yt-beginner-nobs', 'yt-mistakes-lucky', 'yt-prog-whelps'],
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
            text: 'Alts per Story bis Kro Cave (ca. Level 22) bringen – erst der Boss schaltet die Odyle-Energie frei',
            detail: 'Kinah aus Dungeons sinkt nach ca. 84 Belohnungsöffnungen pro Woche und Server – etwa 4 Charaktere reichen.',
            sources: ['yt-gear-dankrng', 'yt-kinah-aselon', 'yt-odyle-mr4k'],
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
