import type { BuildDetails } from '../types';

export const rangerPveDpsDetails: BuildDetails = {
  intro:
    'Der Ranger spielt um einen Skill: Deadshot ist ein Charge-Skill, der wichtigste im Kit, und muss immer bis Max geladen werden. Davor kommen die Buffs. Er ist ein Glaskanonen-Fernkämpfer – früh schwach, stark gear-abhängig und mana-hungrig. Grundlage dieser Seite ist der Global-Guide von Wakayashi, ergänzt um die Einsteiger-Videos.',
  sources: ['wakayashi-ranger', 'yt-ranger-ultimate', 'yt-ranger-early', 'yt-ranger-daevanion', 'gege-ranger'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Deadshot (Zielpfeil) immer bis Max laden und auf Cooldown nutzen – der wichtigste Schaden im Kit.',
            'Vor dem Pull buffen: Vaizel’s Authority, Supporting Fire und Bow of Blessing, dann Marking Shot und Gale Arrow für weitere Buff-Stacks.',
            'Danach Linksklick (Snipe) und Makro-Taste halten, Marking Shot von Hand nachlegen, sobald der Buff ausläuft.',
            'Combat Speed und Multi-Hit-Chance bestimmen Gear, Accessoires, Waffe und Daevanion.',
            'Stärken: hohe Reichweite, mobil (Deadshot auch in Bewegung), bester Open-World-Farmer, gute CC. Schwächen: früh sehr schwach, mana-hungrig, nur ein Defensiv-Cooldown.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Auf Global gehen nur vier Skills auf 20',
          text: 'Deadshot, Gale Arrow, Drill Dart und Snipe. Tempest Shot, Burst Arrow und Defiance bleiben auf 16, der Rest auf 12.',
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana & Kampfmodus',
      blocks: [
        {
          type: 'list',
          items: [
            'Snipe ist dein Auto-Attack: Schaden plus Mana. Linksklick zusammen mit der Makro-Taste halten – das ist auch das Weaving (Animation Canceling).',
            'Aion-1-Modus (Tab-Target): Nach jedem Skill schießt der Charakter automatisch Snipe und lädt Mana. Im Aion-2-Modus bleibt er stehen.',
            'Beim Leveln hilft auf Snipe die MP-Spezialisierung; später wechselst du auf die Spezialisierungen unten.',
          ],
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
            ['Deadshot', 'Zielpfeil', '20', '2 (+30 % Fähigkeitstempo) → 4 (Block/Evasion ignorieren, Multi-Hit) → 5 (Zusatzschaden)', '14'],
            ['Gale Arrow', 'Orkanpfeil', '20', '4 (Kampftempo + PvE-Schaden) → 5 (−10 s Cooldown) → 3 (in Bewegung)', '7'],
            ['Drill Dart', 'Bohrpfeil', '20', '5 (+1 Zusatzaktivierung) → 3 (+20 % Tempo) → 4 (garantierter Multi-Hit)', '4'],
            ['Snipe', 'Scharfschuss', '20', '4 (−1 s Deadshot-Cooldown) → 5 (Sturmpfeil als 4. Folge) → 3 (+50 % Multi-Hit)', '1'],
            ['Tempest Shot', 'Schnellschuss', '16', '3 (+12 % Single-Target) → 2 (+10 % Skill-Crit)', '1'],
            ['Burst Arrow', 'Sprengpfeil', '16', '4 (+20 % Single-Target) → 3 (in Bewegung)', '10'],
            ['Defiance', 'Schockaufhebung', '16', '5 (+50 % PvE-Schadensresistenz) → 3 (20 % LP)', '16'],
            ['Marking Shot', 'Markierungsschuss', '12', '1 (+5 % Perfektion) → 3 (+5 s Dauer)', '3'],
            ['Snare Shot', 'Schlingenpfeil', '12', '3 (in Bewegung) → 2 (+20 % Tempo)', '1'],
            ['Explosion Trap', 'Explosionsfalle', '12', '1 (Gegner heranziehen) → 3 (Zusatzschaden nach 3 s)', '8'],
            ['Suppressing Arrow', 'Unterdrückungspfeil', '12', '3 (+20 % Tempo) → 1 (+50 % Multi-Hit)', '12'],
            ['Arrow Scattershot', 'Pfeilhagel', '–', 'Spammen, wenn der Boss gestaggert ist – ab Level 16 gibt er viel Cooldown zurück', '5'],
          ],
        },
        {
          type: 'text',
          text: 'Solo beim Farmen kann auf Drill Dart der HP-Absorb helfen (aLuckyRO) – für Gruppen-Content zurück auf die Schadens-Spezialisierungen.',
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
            'Focused Eye (Fokussiertes Auge)',
            'Hunter’s Resolve (Entschlossenheit des Jägers)',
            'Hunter’s Soul (Jägerseele)',
            'Concentrated Fire (Fokussiertes Feuer)',
            'Rooting Eye (Fesselndes Auge)',
            'Vigilant Eye (Achtsames Auge)',
            'Danach: Melee Fire, Wind Vigor, Revitalization Contract, Unyielding Resolve',
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
          columns: ['Stigma', 'Deutsch', 'Ziel'],
          rows: [
            ['Vaizel’s Authority', 'Vaizels Hoheit', '20'],
            ['Bow of Blessing', 'Segensbogen', '20'],
            ['Supporting Fire', 'Unterstützungsfeuer', '15'],
            ['Griffon Arrow', 'Greifenpfeil', '5'],
          ],
        },
        {
          type: 'text',
          text: 'Musst du mehr aushalten, kann Mother Nature (Defense + Lebensraub) den vierten Slot übernehmen.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Nur für PvE und offenes PvP',
          text: 'Für Arena und 1v1 braucht es einen anderen Build mit manueller Bewegung (Silence, Höhe, Knockdown). Als Neueinsteiger erstmal ignorieren.',
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
            ['1', 'Marking Shot – immer von Hand, nie ins Makro (lange Animation)'],
            ['2', 'Deadshot – auf Max laden'],
            ['3', 'Buff-Kette: Vaizel’s Authority → Supporting Fire → Bow of Blessing'],
            ['5', 'Gale Arrow → Griffon Arrow → Snare Shot'],
            ['7 / 8', 'Explosion Trap / Suppressing Arrow'],
            ['R', 'Drill Dart → Burst Arrow → Tempest Shot (Hauptschaden)'],
            ['E', 'Arrow Scattershot – bei Stagger'],
            ['Linksklick', 'Snipe – Weaving und Mana'],
            ['Rechte Maustaste', 'Makro-Taste: löst die Ketten auf R, 3 und 5 aus'],
          ],
        },
        {
          type: 'steps',
          title: 'Ablauf',
          items: [
            'Vor dem Pull Slot 3 durchdrücken: Vaizel’s Authority, Supporting Fire und Bow of Blessing.',
            'Marking Shot und Gale Arrow für etwas Schaden und weitere Buff-Stacks.',
            'Deadshot bis Max laden und abfeuern.',
            'Linksklick und Makro-Taste (rechte Maustaste) gedrückt halten. Marking Shot von Hand nachlegen, sobald der Buff über der Manaleiste ausläuft.',
            'Deadshot separat drücken, sobald er wieder bereit ist.',
          ],
        },
        {
          type: 'list',
          title: 'Drei typische Fehler',
          items: [
            'Deadshot nicht voll laden – er muss immer bis Max.',
            'Marking Shot ins Makro packen – die Animation ist zu lang.',
            'Ohne Buffs schießen – erst Slot 3, dann Marking Shot und Gale Arrow, dann Deadshot.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Verzögerung',
          text: 'Wakayashi nutzt 10 ms. Bei Ping ab ca. 80 ms eher 40–50 ms. Mit wenig Combat Speed (frisch ca. 34 %) nach ein paar Tagen nachjustieren.',
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion',
      blocks: [
        {
          type: 'table',
          columns: ['Board', 'Nehmen', 'Meiden'],
          rows: [
            ['Nezakan', 'Attack und Combat Speed', 'Defense, Cooldown Reduction (gut für Sorcerer/Templar, nicht für Ranger)'],
            ['Zikel', 'Damage Boost', 'Damage Tolerance, Accuracy Bonus'],
            ['Vaizel', 'Alle 4 Critical-Damage-Boost-Knoten', ''],
            ['Triniel', 'Alle 4 Multi-Hit-Chance-Knoten – schon früh wichtig', 'Multi-Hit-Resist'],
            ['Danach', 'Skill-Knoten (grün = passiv, z. B. Hunter’s Resolve, Focused Eye; blau = aktiv), dann Attack Bonus, dann Crit Bonus', 'Defense und HP erst ganz am Ende'],
            ['Ariel', 'PvE-Damage-Boost-Linien, Boss Attack', 'Tolerance'],
            ['Asphel', 'Nur die PvP-Damage-Boost-Linien (sehr teuer)', ''],
          ],
        },
        {
          type: 'list',
          title: 'Bücher',
          items: [
            'Exploration-Dungeons auf der Heimat- und der Feindkarte (je 2 Bücher).',
            'Regionalquests.',
            'Shugo-Festival-Token gegen ca. 50 Extra-Bücher tauschen.',
            'Nightmare-Dungeon → Growth-System: Daevanion-Kristallbuch (PvE); alternativ craften, morphen oder im Auktionshaus kaufen.',
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats & Gear',
      blocks: [
        {
          type: 'list',
          items: [
            'Combat Speed und Multi-Hit-Chance auf Gear, Accessoires und Waffe.',
            'Gear-Reihenfolge: Bogen → Offensiv-Teile → Accessoires → Abyss → Arcana/Daevanion → Seal.',
            'Den Bogen craftest du über Handicrafting.',
          ],
        },
      ],
    },
  ],
};
