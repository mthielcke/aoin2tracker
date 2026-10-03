import type { BuildDetails } from '../types';

export const chanterPveHybridDetails: BuildDetails = {
  intro:
    'Der Chanter ist der Buff-Motor der Gruppe: „Support first, healer second, melee DPS third“. Dark Crush ist die Hauptschadensquelle, wird aber nur kurz nach Spinning Strike, Impactful Crush oder Marchutan’s Wrath frei. Beide Invokationen (Mantras) laufen dauerhaft, und vor jedem Pull kommt Power of the Storm. Grundlage sind der Global-Guide von Wakayashi und das Chanter-Video von aLuckyRO.',
  sources: ['wakayashi-chanter', 'yt-chanter-ultimate', 'yt-chanter-rework', 'gege-chanter'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Dark Crush ist der Hauptschaden und wird durch Spinning Strike, Impactful Crush oder Marchutan’s Wrath freigeschaltet – darauf baut das Makro auf.',
            'Spinning Strike: Schaden plus Schadens-Buff; seit dem Rework stapelt er Crit-Damage bis +30 %. Auto-Attack-Treffer senken seinen Cooldown.',
            'Invokationen (Undefeated Mantra, Sprint Mantra) sind Permabuffs für die Gruppe, solange sie leuchten.',
            'Power of the Storm vor dem Pull zünden – senkt die Cooldowns der noch nicht gedrückten Skills.',
            'Stärken: beste Team-Synergie, gute Survivability, einfaches Pet-Farming dank Rushing Smash mit Reset. Schwächen: früh wenig Dark-Crush-Uptime, keine starken Heals und kein Battle-Rez.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Frisch 45: Budget',
          text: 'Nach dem Leveln ca. 230–250 Skillpunkte (ohne vollen Monolith). Die Level-16-Spezialisierungen (z. B. Dark Crush ohne Cooldown) fehlen noch, deshalb leiden Makro und Mana. Das ist normal und wird mit mehr Punkten besser.',
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana-Management',
      blocks: [
        {
          type: 'steps',
          items: [
            'Onslaught (Auto-Attack, Linksklick) früh mit MP-Spezialisierung – später auf die Spezialisierungen aus der Tabelle unten umstellen.',
            'Incandescent Blow früh mit MP-Spezialisierung (−20 % Kosten), später +12 % Single-Target (wichtig für Nightmare).',
            'Aion-1-Modus (Tab-Target): Der Charakter greift in Cooldown-Lücken automatisch an und lädt Mana.',
            'Linksklick in der Kombo dauerhaft halten – das ist Weaving (Animation Canceling) und Mana-Rückgewinnung zugleich.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Ohne Mana kein Schaden',
          text: 'Wenn die Rotation stockt, bewusst ein paar Auto-Attacks spammen, bis das Mana wieder da ist.',
        },
      ],
    },
    {
      id: 'active',
      title: 'Skills & Spezialisierungen',
      blocks: [
        {
          type: 'table',
          columns: ['Skill', 'Deutsch', 'Ziel', 'Spezialisierungen (Priorität)', 'Ab Lv.'],
          rows: [
            ['Dark Crush', 'Finsterbruch', '20', '5 (kein Cooldown, ab 16) → 4 (Durchschlag als 2. Folge) → 3 (garantierter Crit) – bis 16 zuerst Crit', '4'],
            ['Spinning Strike', 'Wirbelschlag', '20', '1 (−5 s Cooldown) → 3 (+20 % Single-Target) → 2 (+10 % Heilungsverstärkung)', '14'],
            ['Recuperation', 'Zauber der Genesung', '20', '4 (+5 % LP-Regeneration) → 1 (2× hintereinander, HoT) → 5 (−3 s)', '8'],
            ['Onslaught (Auto-Attack)', 'Zerschmetterungsschlag', '20', '4 (−1 s Spinning-Strike-Cooldown) → 5 (Orkanschlag als 4. Folge) → 3 (Multi-Hit)', '1'],
            ['Incandescent Blow', 'Gleißschlag', '16', '3 (+12 % Single-Target) → 5 (Block/Evasion ignorieren, Multi-Hit)', '1'],
            ['Rushing Smash', 'Sturmschlag', '16', '4 (Cooldown-Reset bei Kill – Pet-Farming) → 5', '1'],
            ['Defiance', 'Schockaufhebung', '16', '5 (+50 % PvE-Schadensresistenz) → 3 (10 % LP)', '16'],
            ['Impactful Crush', 'Wuchtschlag', '12', '3 (in Bewegung) → 4 (+30 % Tempo)', '3'],
            ['Heat Wave Blow', 'Hitzewellenschlag', '12', '4 (Multi-Hit) → 3', '7'],
            ['Tremor Crush', 'Erschütterungsschlag', '12', '2 (+10 m Reichweite) → 3', '10'],
            ['Wave Blow', 'Wellenschlag', '12', '4 (−15 % PvE-Schaden des Ziels) → 1', '12'],
            ['Gust Rampage', 'Sturmraserei', '–', 'Spammen, wenn der Boss gestaggert ist – ab 16 gibt er viel Cooldown zurück', '5'],
          ],
        },
        {
          type: 'list',
          title: 'Hinweise',
          items: [
            'Dark Crush geht als Erstes auf 20.',
            'Inexorable Blow aus dem aLuckyRO-Video entspricht Incandescent Blow (gleiche Spezialisierungen).',
            'Gust Rampage: in Random-Gruppen HP-Absorb, mit Cleric in der Gruppe MP-Wiederherstellung (aLuckyRO).',
          ],
        },
      ],
    },
    {
      id: 'passives',
      title: 'Passive Skills',
      blocks: [
        {
          type: 'steps',
          title: 'Reihenfolge',
          items: [
            'Attack Preparation (Angriffsvorbereitung)',
            'Wind’s Promise (Gelübde des Windes) – Crit-Damage',
            'Impact Hit (Schocktreffer)',
            'Inspiring Spell (Zauber der Eingebung) – Crit- und Perfect-Chance',
            'Earth’s Promise (Gelübde der Erde)',
            'Danach: Blessing of Life, Protection Circle, Survival Willpower, Raging Spell – Cross Guard zuletzt',
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'table',
          title: 'Grund-Setup (4 Slots)',
          columns: ['Stigma', 'Deutsch', 'Ziel', 'Warum'],
          rows: [
            ['Undefeated Mantra', 'Invokation der Unbesiegbarkeit', '20', 'Permabuff für die Gruppe (u. a. +100 Accuracy). Stackt nicht mit Light of Protection vom Cleric.'],
            ['Power of the Storm', 'Hoheit des Sturmwinds', '20', 'Vor jedem Pull – senkt die Cooldowns. Stackt nicht mit Earth’s Punishment vom Cleric.'],
            ['Sprint Mantra', 'Invokation des Sprints', '15', 'Bewegungstempo für die Gruppe'],
            ['Marchutan’s Wrath', 'Marchutans Zorn', '5', 'Schaltet Dark Crush frei, +20 % Schaden aufs Ziel'],
          ],
        },
        {
          type: 'list',
          title: 'Tauschen',
          items: [
            'Ohne Cleric im Team statt Sprint Mantra: Guardian Blessing (dauerhafte Tankiness).',
            'Bei hartem Content statt Sprint Mantra: Focused Defense (aktiver Block, der Schaden negiert).',
            'Mit wenig Shards: erst alle vier auf 5, dann Undefeated Mantra hochziehen.',
          ],
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion (frisch 45)',
      blocks: [
        {
          type: 'callout',
          variant: 'primary',
          title: 'Grundregel',
          text: 'Alle Boards parallel füllen, nicht eins nach dem anderen. Lieber ein paar Punkte mehr für einen Umweg ausgeben, als nutzlose Knoten (Cross Guard, Blessing, Multi-Hit) mitzunehmen.',
        },
        {
          type: 'table',
          columns: ['Board', 'Nehmen', 'Meiden'],
          rows: [
            [
              'Nezakan',
              'Attack Bonus; Pfad über Attack Preparation +1 Richtung Attack Speed; danach Dark-Crush- und Spinning-Strike-Perfection-Linie; HP/Crit/MP und Crit-Damage-Knoten',
              'Cross Guard, Cooldown-Reduction-Pfad, Blessing (Healing Boost)',
            ],
            ['Zikel', 'Damage-Boost-Linie über Incandescent Blow und Rushing Smash', 'Tremor Crush – wenn nötig den günstigeren Knoten nehmen'],
            [
              'Vaizel',
              'Critical-Damage-Boost-Linien, Wind’s Promise, Rushing Smash',
              'Blessing of Life, Wave Blow, Defense-Knoten, Impactful/Tremor-Crush-Linien',
            ],
            ['Triniel', 'Kürzester Weg zu Attack Preparation', 'Multi-Hit-Chance – früh nicht nötig'],
            ['Ariel / Asphel', 'Nur offensive Knoten: Damage Boost', 'Damage Tolerance und andere defensive Knoten'],
          ],
        },
      ],
    },
    {
      id: 'books',
      title: 'Daevanion-Bücher beschaffen',
      blocks: [
        {
          type: 'list',
          title: 'Standard-Bücher',
          items: ['Regionalquests – eine der Hauptquellen.', 'Exploration-Dungeons auf der Heimatkarte.', 'Dieselben Dungeons im Feindgebiet.'],
        },
        {
          type: 'list',
          title: 'Ariel-Bücher (PvE)',
          items: [
            'Aus Ascension-Dungeons und per Morph.',
            'Fragmente aus der wöchentlichen Common-Merchant-Quest (NPC in den Hauptstädten, 12 pro Server für den Main).',
            'Fragmente aus Duty Missions – dafür das Board neu würfeln.',
            'Beim Morphen die 100-%-Option wählen, nicht die 10-%-Option.',
          ],
        },
        {
          type: 'list',
          title: 'Asphel-Bücher (PvP)',
          items: ['Common-Merchant-Quest.', 'Battlefield (3 Einträge): ein zusätzliches Buch pro Woche craftbar.'],
        },
      ],
    },
    {
      id: 'macro',
      title: 'Hotbar, Makro & Rotation',
      blocks: [
        {
          type: 'table',
          title: 'Hotbar',
          columns: ['Taste', 'Belegung'],
          rows: [
            ['1 / 2', 'Rushing Smash / Tremor Crush – Bewegung und Dashes'],
            ['3', 'Recuperation – Heilung und Debuff-Entferner'],
            ['4', 'Power of the Storm – vor dem Pull'],
            ['5', 'Spinning Strike – Schaden plus Buff, gedrückt halten'],
            ['7 / 8', 'Sprint Mantra / Undefeated Mantra – müssen leuchten'],
            ['R', 'Makro-Kette: Dark Crush → Impactful Crush → Marchutan’s Wrath → Incandescent Blow'],
            ['E', 'Gust Rampage – bei Stagger'],
            ['Linksklick', 'Onslaught – Weaving und Mana, dauerhaft halten'],
            ['Rechte Maustaste', 'Makro-Taste'],
          ],
        },
        {
          type: 'steps',
          title: 'Ablauf',
          items: [
            'Beide Invokationen aktivieren, wenn sie nicht schon leuchten.',
            'Power of the Storm vor dem Pull zünden.',
            'Spinning Strike gedrückt halten für Schaden und Buff.',
            'Linksklick (Onslaught) gedrückt halten.',
            'Makro-Taste (rechte Maustaste) gedrückt halten.',
          ],
        },
        {
          type: 'list',
          title: 'Drei typische Fehler',
          items: [
            'Ohne Buffs pullen: Power of the Storm muss vor dem Pull laufen, sonst bleiben die Cooldowns lang.',
            'Invokationen vergessen: Beide müssen leuchten.',
            'Gust Rampage liegen lassen: Bei Stagger spammen.',
          ],
        },
        {
          type: 'list',
          title: 'Einrichten & Alternative',
          items: [
            'Einstellungen → Tastenbelegung → Gameplay → Makro: Taste belegen. Verzögerung 10 ms, bei Ping ab ca. 80 ms eher 40–50 ms.',
            'aLuckyRO nutzte frisch 45 ein längeres Makro: Dark Crush → Rushing Smash → Impactful Crush → Dark Crush → Marchutan’s Wrath → 2× Dark Crush → Auto-Attack. Hilft, solange Dark Crush noch einen Cooldown hat.',
          ],
        },
      ],
    },
    {
      id: 'rotation',
      title: 'Heilung',
      blocks: [
        {
          type: 'list',
          items: [
            'Kleiner Schaden: Recuperation.',
            'Ein Ziel stark verletzt: Healing Touch.',
            'Mehrere Verletzte: beides.',
            'Heil-Reichweite seit Patch 40 m, dafür 20–50 % weniger Heilung.',
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats & Gear',
      blocks: [
        {
          type: 'table',
          columns: ['Ausrichtung', 'Priorität'],
          rows: [
            ['Hybrid (Standard)', 'Attack Power → PvE Damage → Crit → Crit Damage → Accuracy → HP'],
            ['Support / Heal', 'Attack Power → HP → Heal-Skalierung → Defense → Accuracy'],
            ['DPS', 'PvE Damage → Attack → Crit → Crit Damage → Accuracy'],
          ],
        },
        {
          type: 'list',
          items: [
            'Blessing of Life skaliert mit Attack Power – Attack hilft also auch dem Support.',
            'Gear-Reihenfolge: Staff → Core → Abyss → Accessoires → Arcana → Daevanion → Seal. Den Stab craftest du über Handicrafting.',
          ],
        },
      ],
    },
  ],
};
