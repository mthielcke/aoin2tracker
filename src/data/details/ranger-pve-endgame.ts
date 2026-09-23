import type { BuildDetails, SkillSpec, SpecSlot } from '../types';

const RANK = ['1. Wahl', '2. Wahl', '3. Wahl'];

const prio = (...slots: SpecSlot[]): SkillSpec[] =>
  slots.map((slot, i) => ({ slot, text: RANK[i], pick: true }));

export const rangerPveEndgameDetails: BuildDetails = {
  intro:
    'Endgame-orientierter PvE-Guide von Allyria, für Global aufbereitet. Die Skill-Balance entspricht dem aktuellen TW-Patch und gilt ab Tag 1. Schaden kommt vor allem aus Tempest Shot, Gale Arrow, Deadshot und Drill Dart; drei Buff-Stigmas sind fest gesetzt.',
  sources: ['allyria-ranger', 'yt-ranger-macro-showcase'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Drei Stigmas immer: Vaizel’s Authority, Bow of Blessing, Supporting Fire.',
            'Tempest Shot, Gale Arrow, Deadshot und Drill Dart machen den meisten Schaden – langfristig alle auf +20.',
            'Marking Shot nur zum Halten des Buffs nutzen, nicht spammen.',
            'Deadshot Stufe 3 (voll aufgeladen) ist ein großer Teil des Schadens – dafür Makro-Software oder manuelles Aufladen.',
            'Wichtigste Sub-Stats: Double Chance > Perfect Chance, dazu Combat Speed und Cooldown-Reduktion.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Season 1',
          text: 'So viele Skills auf +20 sind in Season 1 kaum erreichbar (weniger Arcana-Karten) – die Tiers sind das langfristige Ziel. Punkte nach Tier verteilen.',
        },
      ],
    },
    {
      id: 'active',
      title: 'Aktive Skills & Spezialisierungen',
      blocks: [
        {
          type: 'text',
          text: 'Die Spezialisierungen stehen in Prioritätsreihenfolge – direkt nach 45 sind noch nicht alle Slots freigeschaltet. Farbe = Slot (grün 1 … rot 5).',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Gale Arrow',
              priority: 'top',
              target: '+20',
              summary: 'Tier 1, höchste Priorität.',
              specs: prio(4, 5, 3),
              note: '+5 s Dauer nur früh zusammen mit Combat Speed. Ab Level 16 auf −10 s Cooldown + Combat Speed wechseln – damit erreichst du später 100 % Uptime.',
            },
            { name: 'Deadshot', priority: 'top', target: '+20', summary: 'Tier 1. Stufe-3-Schuss ist entscheidend.', specs: prio(2, 3, 5), note: 'Orange (Slot 4) ist gut für PvP, in PvE mit Gear schwach – früh in Season 1 ohne viel Multi-Hit evtl. besser als Rot.' },
            { name: 'Drill Dart', priority: 'top', target: '+20', summary: 'Tier 1.', specs: prio(5, 3, 4), note: 'Bei HP-Problemen früh 3 % HP-Regeneration statt Multi-Hit.' },
            { name: 'Tempest Shot', priority: 'top', target: '+20', summary: 'Tier 1 – einer der Hauptschadensskills.', specs: prio(5, 2, 3) },
            { name: 'Burst Arrow', priority: 'top', target: '+20', summary: 'Tier 1.', specs: prio(3, 5, 4), note: 'Bei HP-Problemen 10 % HP-Regeneration statt +20 % Schaden.' },
            { name: 'Snipe', priority: 'high', target: '+16', summary: 'Tier 2, Linksklick.', specs: prio(4, 5, 3), note: 'Bei HP-Problemen früh 0,7 % HP-Regeneration statt Multi-Hit.' },
            { name: 'Marking Shot', priority: 'high', target: '+16', summary: 'Tier 2 – nur für Buff-Uptime, nicht spammen.', specs: prio(1, 3, 5) },
            { name: 'Snare Shot', priority: 'mid', target: '+12', summary: 'Tier 3.', specs: prio(3, 2, 5) },
            { name: 'Explosion Trap', priority: 'mid', target: '+12', summary: 'Tier 3 – in PvE nur zum Zusammenziehen von Mobs.', specs: prio(1, 3, 5) },
            {
              name: 'Arrow Scattershot',
              priority: 'mid',
              target: '+12',
              summary: 'Tier 3 – nur nutzbar, wenn der Gegner ca. 3–4 s „Break“ hat. Für schnelle Cooldown-Reduktion oder HP/MP, sonst ignorieren.',
              specs: prio(5, 4, 1),
            },
            { name: 'Defiance', priority: 'low', summary: 'Tier 4.', specs: prio(5, 3, 2) },
            { name: 'Suppressing Arrow', priority: 'low', summary: 'Tier 4 – in PvE aktuell ungenutzt.', specs: prio(3, 1) },
          ],
        },
      ],
    },
    {
      id: 'passives',
      title: 'Passive Skills',
      blocks: [
        {
          type: 'table',
          columns: ['Tier', 'Passives (in Reihenfolge)'],
          rows: [
            ['S', 'Focused Eye > Hunter’s Resolve'],
            ['1', 'Hunter’s Soul'],
            ['2', 'Rooting Eye / Concentrated Fire > Melee Fire > Vigilant Eye'],
            ['3', 'Revitalization > Wind Vigor > Unyielding Resolve'],
          ],
        },
      ],
    },
    {
      id: 'stagger',
      title: 'Stagger-Werte',
      blocks: [
        {
          type: 'text',
          text: 'Manche Bosse haben eine Stagger-Leiste unter dem HP-Balken, die schnell gebrochen werden muss (z. B. Transcendence 1 – Atiel). Stagger-Skills dafür aufheben.',
        },
        {
          type: 'table',
          columns: ['Skill', 'Stagger'],
          rows: [
            ['Arrow Storm (Stigma)', '50'],
            ['Explosive Arrow', '20'],
            ['Griffon Arrow', '20'],
            ['Burst Arrow', '15'],
            ['Deadshot', '10–16'],
            ['Suppressing Arrow', '10'],
            ['Gale Arrow', '10'],
            ['Explosion Trap', '10'],
            ['Snare Shot', '10'],
            ['Marking Shot', '7'],
            ['Drill Dart', '5'],
            ['Tempest Shot', '1'],
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'steps',
          title: 'Priorität zum Global-Launch',
          items: [
            'Vaizel’s Authority – Haupt-Buff (Spez.: −1 s Cooldown, später 100 % Uptime möglich).',
            'Bow of Blessing – zweiter Buff.',
            'Supporting Fire – dritter Buff.',
            'Flex: Arrow Rain (Break/AoE), Griffon Arrow (DoT/DPS), Mother Nature (Überleben) oder Kick (Bewegung/Überleben).',
          ],
        },
        {
          type: 'list',
          items: [
            'Der vierte Slot kommt erst mit Level 45.',
            'Stigma-Punkte sind knapp: Hauptquelle ist Abyss-Farming (25.000 AP pro Punkt).',
            'Das Stigma-System soll sich nach dem Launch noch ändern.',
          ],
        },
      ],
    },
    {
      id: 'macro',
      title: 'Makro',
      blocks: [
        {
          type: 'list',
          title: 'Nicht ins Makro',
          items: [
            'Marking Shot – manuell zum Halten des Buffs; im Makro verschwendet er Animationen und löst gefährliche Sprünge aus.',
            'Mother Nature – Überlebens-Skill, muss im richtigen Moment kommen.',
            'Arrow Scattershot, Suppressing Arrow, Explosion Trap – situativ bzw. ungenutzt.',
          ],
        },
        {
          type: 'steps',
          title: 'Einrichten',
          items: [
            'Tastenbelegung → Allgemein → Gameplay → Makro: Taste wählen (Allyria: rechte Maustaste).',
            'Skill-Ketten ins In-Game-Makro übernehmen (Buffs dürfen drin sein – du läufst ohnehin von Boss zu Boss).',
            'Makro-Software (z. B. Razer): läuft, solange die Taste gehalten wird, stoppt beim Loslassen. Belegung: Linksklick = Snipe, Rechtsklick = In-Game-Makro, 7 = Deadshot.',
          ],
        },
        {
          type: 'table',
          columns: ['Frage', 'Antwort'],
          rows: [
            ['Makro ab Tag 1?', 'Ja, aber es ist aufs Endgame ausgelegt – bis Combat Speed, CDR und Spezialisierungen stehen, kann die Rotation holpern. Auf dem Netzwerktest lief es ab Level 16.'],
            ['Warum Drittsoftware?', 'Das In-Game-Makro nutzt keinen Deadshot Stufe 3. Ohne Software Deadshot manuell mit gehaltener linker Maustaste aufladen.'],
            ['Bannbar?', 'Nein, solange nichts automatisch läuft (kein Botting).'],
            ['Mob-Farming?', 'Nur die In-Game-Makro-Taste nutzen (ohne Deadshot/Linksklick) – schneller. Bei MP-Problemen zusätzlich Linksklick halten oder ein zweites Makro ohne Deadshot.'],
          ],
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion',
      blocks: [
        {
          type: 'steps',
          items: [
            'Auf allen Boards: orange > blau > grün > weiß.',
            'Mit den wichtigsten Skills und Passives aus den Tiers beginnen.',
            'Weiße Knoten: Attack > Crit > HP > Defense > Crit-Defense > MP.',
            'Blau kann vor Orange gehen, wenn damit ein Skill-Meilenstein (8/12/16/20) erreicht wird.',
            'Kann ein Board nicht voll werden: keine Punkte in Nicht-Offensives, Defense ist zweitrangig.',
            'Boards lassen sich günstig per Kinah zurücksetzen. Alle Boards nach den ersten vier werden ohnehin voll.',
          ],
        },
      ],
    },
    {
      id: 'genus',
      title: 'Pets & Genus Insight',
      blocks: [
        {
          type: 'callout',
          variant: 'primary',
          title: 'Zum Launch: Gear vor Pets',
          text: 'In den ersten Wochen bringt Gear mehr. Pets kommen mit der Zeit (auch über den Daily Dungeon). Level-Priorität: Cogni > Fera > Natura > Varian.',
        },
        {
          type: 'list',
          title: 'Regeln fürs Rollen',
          items: [
            'Zuerst Slot 4, dann Slot 7. Danach entscheiden, ob du HP% willst – sonst direkt Max Attack und Accuracy/Crit.',
            'Max Attack ist besser als Attack (skaliert mit Weapon Damage Boost).',
            'Bis Level 10 nichts locken – außer Slot 4/7 bei gelbem/orangem Wurf mit ca. 80 %+.',
            'Erstes Preset: 75–80 %-Würfe reichen. 90–95 % erst im zweiten Preset jagen – sonst verbrennst du tausende Pet-Kristalle.',
            'Regenbogen-Kristalle nur für Special Genus Insight.',
          ],
        },
        {
          type: 'table',
          columns: ['Slot', 'Cogni', 'Fera', 'Natura', 'Varian', 'Special'],
          rows: [
            ['1', 'Max Atk', 'Max Atk', 'Max Atk', 'Max Atk', 'Max Atk'],
            ['2', 'HP %', 'HP %', 'HP %', 'HP %', 'HP %'],
            ['3', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit'],
            ['4', 'PvE Damage Boost %', 'Weapon Damage Boost', 'PvE Damage Boost', 'PvE Damage Boost / Front- / Back-DMG', 'Double Chance %'],
            ['5', 'Max Atk', 'Max Atk', 'Max Atk', 'Max Atk', 'Max Atk'],
            ['6', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit'],
            ['7', 'PvE Damage Tolerance %', 'PvE Damage Tolerance', 'PvE Damage Tolerance', 'PvE Damage Tolerance', 'Damage Tolerance'],
            ['8', 'HP %', 'HP %', 'HP %', 'HP %', 'HP %'],
            ['9', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit', 'Acc/Crit'],
          ],
        },
        {
          type: 'text',
          text: 'Hinweis: Laut Dev-Stream vom 08.09.2026 soll Front-Schaden generft werden, weil ihn alle stapeln.',
        },
      ],
    },
    {
      id: 'gear',
      title: 'Gear & Soul Binds',
      blocks: [
        {
          type: 'callout',
          variant: 'primary',
          title: 'Crafted Gear ist BiS – aber nicht Pflicht',
          text: 'Nur PvE-Crafting-Gear min-maxen. F2P- und Abo-Spieler können sich in Season 1 die Crafting-Rüstung meist nicht leisten – Dungeon-Rüstung kostet kaum Schaden und ist auch in TW/KR üblich.',
        },
        {
          type: 'table',
          columns: ['Teil', 'Soul Binds (1 → 7)'],
          rows: [
            ['Waffe / Guard', 'Weapon Damage Boost %, Combat Speed %, Might, Precision, Damage Boost %, Multi-Hit %, Atk'],
            ['Brust', 'Damage Boost, Focused Eye, Hunter’s Resolve, Perfect Chance %, Crit, Accuracy, Attack'],
            ['Beine', 'Damage Tolerance, Focused Eye, Hunter’s Resolve, Perfect Chance %, Attack Increase %, Crit, Attack'],
            ['Helm', 'Incoming Heal, Focused Eye, Hunter’s Resolve, Double Chance %, Attack Increase %, Crit, Attack'],
            ['Schultern', 'Crit Damage Boost, Focused Eye, Hunter’s Resolve, Double Chance %, Crit, Attack, Accuracy'],
            ['Handschuhe', 'Combat Speed, Focused Eye, Hunter’s Resolve, Crit, Attack, Accuracy, Hunter’s Soul'],
            ['Stiefel', 'Move Speed, Focused Eye, Hunter’s Resolve, Perfect Chance %, Crit, Attack, Accuracy'],
            ['Umhang', 'Focused Eye, Hunter’s Resolve, Double Chance %, Attack Increase %, Crit, Accuracy, Attack'],
            ['Kette', 'Focused Eye, Hunter’s Resolve, Combat Speed %, Might, Precision, Accuracy, Crit'],
            ['Ohrringe', 'Focused Eye, Hunter’s Resolve, Might, Precision, Accuracy, Crit, Attack'],
            ['Ringe', 'Gale Arrow, Deadshot, Tempest Shot, Drill Dart, Might, Precision, Burst Arrow'],
          ],
        },
        {
          type: 'list',
          items: [
            'Weniger Zeilen auf schwächerem Gear? Einfach die obersten nehmen.',
            'Mehr Crit als Accuracy aus Genus (oder umgekehrt)? Einzelne Zeilen anpassen.',
            'Amulett und Gürtel laufen über die Welt-Progression bis zum Maximum.',
            'Clash Runes: wegen hohem RNG nicht über Stufe 6/7 verstärken.',
            'Später (nicht zum Launch): Pendant (Level-50-Patch), Brooches und Seals (Sanctuary 3/4).',
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats, Divine Stats & Steine',
      blocks: [
        {
          type: 'table',
          columns: ['Kategorie', 'Priorität'],
          rows: [
            ['Haupt-Stats', 'Attack, Crit, Accuracy sowie Might und Precision'],
            ['Sub-Stats', 'Double Chance > Perfect Chance, dazu Combat Speed und Cooldown-Reduktion'],
            ['Divine Stats (Schaden)', 'Wisdom > Destruction > Time > Death > Illusion > Justice > Freedom > Space > Life > Destiny'],
            ['Armband (Divine)', 'Wisdom > Destruction > Time > Illusion > Death > Justice > Life > Space > Freedom > Destiny'],
            ['Brooches (später)', 'Might > Precision > Accuracy > Crit > Constitution'],
            ['Seals (später)', 'Attack > Boss Attack > Max Attack > Crit Attack > PvE Attack > Power Shard Damage Bonus'],
          ],
        },
        {
          type: 'list',
          title: 'Mana- und Soulstones',
          items: [
            'Manastones für Waffe/Rüstung, Soulstones für Accessoires – funktionieren gleich.',
            'Früh in Season 1: Crit/Accuracy rollen (leicht zu bekommen).',
            'Endgear: zwei goldene Zeilen pro Teil – +100 Weapon- oder Front/Back-Attack sind BiS, dann doppelter Attack-Roll (35 Attack ≈ eine +100-Zeile), dann Crit/Acc.',
            'Theostones haben in PvE keinen Einfluss.',
            'Wings: Nightmare-Wings auf +10 geben 2 % Smite als Besitz-Effekt (Wing-Enhancement zum Launch noch nicht verfügbar).',
          ],
        },
      ],
    },
    {
      id: 'arcana',
      title: 'Arcana',
      blocks: [
        {
          type: 'text',
          text: 'Global startet mit 5 Arcana-Slots. Werte sind zufällig – Karten nur auf +1/+2 verstärken und prüfen, ob die gewünschten Werte steigen, statt alles auf +5 zu ziehen. Die Transmute-Vorschau zeigt, welche Skills auf welcher Karte möglich sind.',
        },
        {
          type: 'table',
          columns: ['Karte', 'Skills im Fokus'],
          rows: [
            ['Chalice of Vigor', 'Focused Eye, Hunter’s Resolve, Snipe, Tempest Shot'],
            ['Parchment of Vigor', 'Drill Dart, Snipe, Burst Arrow, Tempest Shot'],
            ['Compass of Magic', 'Burst Arrow, Scattershot, Deadshot, Gale Arrow'],
            ['Bell of Magic', 'Hunter’s Resolve, Revitalization, Vigilant Eye, Rooting Eye'],
            ['Mirror of Magic', 'Focused Eye, Concentrated Fire, Unyielding Resolve, Melee Fire'],
          ],
        },
        {
          type: 'text',
          text: 'Auf dem Grail ist fast jeder Skill möglich – dort ggf. Deadshot oder Gale Arrow, um sie auf +20 zu bringen. Die richtigen Sets sind wichtig, weil verschiedene Arcana-Typen verschiedene Divine Stats geben.',
        },
      ],
    },
    {
      id: 'pantheon',
      title: 'Pantheon',
      blocks: [
        {
          type: 'table',
          columns: ['Typ', 'Ziel'],
          rows: [
            ['Artworks', 'Illusion + Wisdom, dritte Zeile Life (besser) oder Destiny als Übergang'],
            ['Statues', 'Gelb mit Freedom, Death, Space; früh blau mit zwei Zeilen – Allyria empfiehlt Freedom + Space (Laufgeschwindigkeit hilft bei Mechaniken)'],
            ['Colossus', 'Season 1: Zikel / Kromede; ab Season 2 so schnell wie möglich Kaisinel'],
          ],
        },
      ],
    },
    {
      id: 'compare',
      title: 'Unterschiede zur Einsteiger-Variante',
      blocks: [
        {
          type: 'table',
          columns: ['Thema', 'Einsteiger (AluxHero)', 'Endgame (Allyria)'],
          rows: [
            ['Kern-Stigmas', 'Vaizel’s Authority, Crit/Multi-Buff, Mother Nature, Exploding Arrow, Supporting Fire', 'Vaizel’s Authority, Bow of Blessing, Supporting Fire + Flex'],
            ['Marking Shot', 'Level 1, aber in Makro-Zeile 1', 'Tier 2 (+16), nur manuell für Buff-Uptime'],
            ['Deadshot', 'Manuell drücken', 'Stufe 3 über Makro-Software oder manuell aufladen'],
            ['Daevanion', 'Combat Speed, Crit Damage, Multi-Hit zuerst', 'Seltenheit orange > blau > grün > weiß, Skill-Meilensteine'],
          ],
        },
      ],
    },
  ],
};
