import type { BuildDetails } from '../types';

export const rangerPveDpsDetails: BuildDetails = {
  intro:
    'Der Ranger ist ein Glaskanonen-Fernkämpfer: Wirst du erwischt, bist du tot – also immer in Bewegung bleiben. Frisch auf 45 sind Mana und Skillpunkte knapp; der Build unterscheidet sich deutlich vom Mid- und Endgame. Die zwei wichtigsten Stats sind Combat Speed und Multi-Hit-Chance.',
  sources: ['yt-ranger-ultimate', 'yt-ranger-early', 'yt-ranger-daevanion', 'gege-ranger'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Snipe ist dein Auto-Attack: Er macht Schaden und lädt Mana.',
            'Deadshot ist dein höchster Einzelschaden (voll aufgeladen ca. 10–12k).',
            'Multi-Hit ist beim Ranger „alles“: Viele schnelle Treffer statt eines großen Skills.',
            'Combat Speed und Multi-Hit-Chance bestimmen Gear, Accessoires, Waffe und Daevanion.',
            'Bewegung ist deine Verteidigung – Spezialisierungen für Mobilität und HP-Absorb halten dich am Leben.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Frisch 45: Skill-Level',
          text: 'Drei Kern-Skills mit eigenen Punkten auf 10, alles andere auf 8. Höhere Level kommen später über Daevanion und Arcana.',
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana & Kampfmodus',
      blocks: [
        {
          type: 'text',
          text: 'Mit ca. 2,8k Mana frisch auf 45 ist der Ranger extrem mana-hungrig – vor allem der AoE-Spam-Skill leert den Balken sehr schnell.',
        },
        {
          type: 'steps',
          items: [
            'Snipe: Spezialisierung MP-Wiederherstellung.',
            'AoE-Spam-Skill (trifft bis zu 4 Ziele): Spezialisierung −20 % MP-Kosten.',
            'Aion-1-Modus (Tab-Target) nutzen: Nach jedem Skill schießt der Charakter automatisch Snipe und lädt Mana. Im Aion-2-Modus (Action Combat) bleibt er stehen.',
            'Deshalb muss Snipe im Tab-Target-Modus nicht ins Makro.',
          ],
        },
      ],
    },
    {
      id: 'active',
      title: 'Aktive Skills (frisch 45)',
      blocks: [
        {
          type: 'text',
          text: 'Das Video zeigt viele Skills nur im Bild. Namen ohne Nennung sind aus GEGEBASE zugeordnet und sollten im Spiel geprüft werden.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Deadshot',
              priority: 'top',
              summary: 'Aufgeladener Schuss, höchster Schaden. Spezialisierung: +30 % Aufladegeschwindigkeit.',
              note: 'Im Makro-Setup manuell drücken.',
            },
            {
              name: 'Snipe',
              priority: 'top',
              summary: 'Auto-Attack, Single-Target. Spezialisierung: MP-Wiederherstellung.',
            },
            {
              name: 'AoE-Spam-Skill (Rapid Fire)',
              priority: 'top',
              summary: 'Trifft bis zu 4 Gegner, wird ständig gespammt. Spezialisierung: −20 % MP-Kosten.',
              note: 'Name im Video nicht genannt – vermutlich Rapid Fire.',
            },
            {
              name: 'Explosiv-Skill (Bodenziel)',
              priority: 'high',
              summary: 'Wird platziert, explodiert und explodiert nach 3 s erneut. Spezialisierung: Extra-Explosion nach 3 s. Stark in Kombination mit den Stigmas.',
              note: 'Name im Video nicht genannt – vermutlich Explosive Arrow bzw. Explosion Trap.',
            },
            {
              name: 'Gale Arrow',
              priority: 'high',
              summary: 'Gibt dir den Buff „Gale“: +7 % Combat Speed sowie PvE/PvP Damage Boost (15 s). Spezialisierung: +5 s Dauer.',
              note: 'Zuordnung aus Transkript – im Spiel prüfen.',
            },
            {
              name: 'Drill Dart',
              priority: 'high',
              summary: 'Chance auf HP-Absorb – beim Solo-Farmen deine Heilung. Löst nur nach einem Crit aus.',
            },
            {
              name: 'Stagger-Skill',
              priority: 'mid',
              summary: 'Aktiv, wenn der Boss gestaggert ist. Spezialisierung: HP-Absorb – danach bist du wieder voll.',
            },
            {
              name: 'Root-/Snare-Skill',
              priority: 'mid',
              summary: 'Wenig Schaden, 50 s Cooldown. Spezialisierung: Mobilität (bewegen statt stehen).',
            },
            {
              name: 'Defiance',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Befreit aus CC. Spezialisierung: 20 % HP-Wiederherstellung.',
            },
            {
              name: 'Marking Shot',
              priority: 'low',
              target: 'Lv. 1',
              summary: 'Früh reicht Level 1. Erhöht Perfect-Chance und Crit und ist deshalb trotzdem Teil der ersten Makro-Zeile.',
              note: 'Laut GEGEBASE im Endgame S-Tier (Precision-Fenster für Deadshot) – dann hochziehen.',
            },
            {
              name: 'Single-Target-Skill (Durchschnitt)',
              priority: 'low',
              summary: 'Kein PvE-Skill, durchschnittlicher Cooldown, Stats nicht spielentscheidend – so lassen.',
            },
          ],
        },
      ],
    },
    {
      id: 'passives',
      title: 'Passive Skills',
      blocks: [
        {
          type: 'skills',
          skills: [
            { name: 'Focused Eye', priority: 'top', summary: 'Als Erstes leveln – auch für PvP extrem wichtig.' },
            {
              name: 'Hunter’s Resolve',
              priority: 'top',
              summary: 'Critical Damage Boost – das zweite Kern-Passive.',
              note: 'Name aus Transkript („hunter reservation“) – im Spiel prüfen.',
            },
            { name: 'Wind Vigor', priority: 'low', summary: 'Für PvE nicht wichtig.' },
            { name: 'Revitalization', priority: 'low', summary: 'Für PvE nicht wichtig.', note: 'Name aus Transkript – im Spiel prüfen.' },
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'callout',
          variant: 'warning',
          title: 'Nur für PvE und offenes PvP',
          text: 'Für Arena und 1v1 braucht es einen ganz anderen Build mit manueller Bewegung (Silence, Höhe, Knockdown). Als Neueinsteiger erstmal ignorieren.',
        },
        {
          type: 'text',
          text: 'Der Spiel-Tutor empfiehlt ein anderes Start-Stigma – einfach kostenlos resetten und dem Build folgen.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Vaizel’s Authority',
              priority: 'top',
              summary: 'Buff: mehr Angriffsschaden und Perfect-Chance (Waffe trifft mit Maximalschaden). Laut Video 12 s, +20 % Schaden.',
              note: 'Name aus Transkript („Verizon authority“) – im Spiel prüfen.',
            },
            {
              name: 'Crit-/Multi-Hit-Buff',
              priority: 'top',
              summary: 'Zweiter Buff: Crit und Multi-Hit-Chance – für den Ranger essenziell.',
              note: 'Name im Video nicht genannt.',
            },
            {
              name: 'Mother Nature',
              priority: 'high',
              summary: 'PvE-/PvP-Defense plus Lebensraub – du heilst dich beim Angreifen. Die sichere Wahl für PvE.',
            },
            {
              name: 'Arrow Storm',
              priority: 'mid',
              summary: 'Alternative zu Mother Nature: mehr Schaden, dafür kein Sustain.',
            },
            {
              name: 'Exploding Arrow',
              priority: 'high',
              summary: 'Wichtiger Schadens-Stigma, kombiniert mit dem Explosiv-Skill.',
            },
            {
              name: 'Supporting Fire',
              priority: 'high',
              summary: 'Beschwörung: trifft bei deinen Angriffen mit 50 % Chance mit und gibt Extra-HP.',
            },
            {
              name: 'Survival-Stigma (PvE Damage Tolerance)',
              priority: 'mid',
              summary: 'Erhöht PvE Damage Tolerance – wichtig zum Überleben.',
              note: 'Name im Video nicht genannt.',
            },
          ],
        },
      ],
    },
    {
      id: 'macro',
      title: 'Makro',
      blocks: [
        {
          type: 'steps',
          title: 'Einrichten',
          items: [
            'Einstellungen → Tastenbelegung → Gameplay → Makro: Taste belegen (Tastatur- oder Maustaste).',
            'Skill-Fenster (K) → Makro-Reiter → Zeilen hinzufügen.',
            'Verzögerung: Ping < 50 → 10 ms; Ping 80–100+ → 40–50 ms.',
            '„Schatten“ am Charakter zeigen, dass der Animation Cancel passt. Mit wenig Combat Speed (frisch ca. 34 %) sieht man sie kaum – nach ein paar Tagen nachjustieren.',
          ],
        },
        {
          type: 'table',
          columns: ['Zeile', 'Inhalt', 'Zweck'],
          rows: [
            ['1', 'Buffs (Multi-Hit, Perfect) → Marking Shot → Gale Arrow → Drill Dart → Tempest Shot', 'Buff-Kette; Marking Shot gibt Crit und Perfect-Chance, Drill Dart löst nach Crits aus'],
            ['2', 'Root-Skill → Skills mit Bonus gegen gerootete Ziele', 'Root-Kette für mehr Schaden'],
            ['3', 'Weitere Skill-Kette', 'Füllt Cooldowns'],
            ['Manuell', 'Explosiv-Skill, Schadens-Buff-Stigma, Deadshot, Heilung', 'Hohe Priorität, besser gezielt drücken'],
          ],
        },
        {
          type: 'text',
          text: 'Mehr Schaden gewünscht? Eine weitere Makro-Zeile hinzufügen und ein Stigma mit Cooldown einbauen.',
        },
      ],
    },
    {
      id: 'combos',
      title: 'Kombos & Rotation',
      blocks: [
        {
          type: 'list',
          title: 'Aus dem Video (frisch 45)',
          items: [
            'Burst (Einzelziel oder Gruppe): Schadens-Buff (12 s) → stärkster Skill → Falle → Explosionen spammen.',
            'Einzelziel simpel: Gegner rooten und draufschießen.',
          ],
        },
        {
          type: 'list',
          title: 'Endgame (GEGEBASE)',
          items: [
            'Opener: Marking Shot → Deadshot → Burst Arrow → Snipe → Explosive Arrow.',
            'Sustain: Snipe → Rapid Fire → Spiral Arrow → Burst Arrow → Gale Arrow → Drill Dart.',
            'Deadshot nur im Precision-Fenster nutzen; Marking Shot nicht in Unverwundbarkeitsphasen verschwenden.',
          ],
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
          type: 'table',
          columns: ['Quelle', 'Priorität'],
          rows: [
            ['Video (Gear, Accessoires, Waffe)', 'Combat Speed und Multi-Hit-Chance'],
            ['GEGEBASE (Endgame)', 'Crit → Attack/Weapon Damage → Precision-Boni → Damage Amp → Accuracy'],
          ],
        },
        {
          type: 'list',
          items: ['Gear-Reihenfolge: Bogen → Offensiv-Teile → Accessoires → Abyss → Arcana/Daevanion → Seal.'],
        },
      ],
    },
  ],
};
