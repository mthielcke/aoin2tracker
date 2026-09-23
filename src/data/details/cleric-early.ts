import type { BuildDetails } from '../types';

export const clericEarlyDetails: BuildDetails = {
  intro:
    'In Aion 2 heilt der Cleric nicht nur, er macht auch Schaden. Frisch auf 45 farmst du zwei bis drei Wochen die ersten Dungeons im Normal-Modus – dafür brauchst du keinen „harten“ Heiler, sondern einen offensiven Cleric, der die Gruppe schneller macht. Diese Seite gilt für beide Cleric-Varianten.',
  sources: ['yt-cleric-beginner', 'yt-cleric-skills', 'gege-cleric', 'vortex-cleric'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Die ersten Dungeons (im Video u. a. „Kro Cave“ und „Draupnir Cave“) im Normal-Modus sind leicht zu heilen – Punkte lieber in Schaden und Party-Support stecken.',
            'Für die nächsten Dungeons (u. a. Fire Temple) brauchst du ca. 2,2k Gear Score – bis dahin wird gefarmt.',
            'Schaden: Bolt, Judgment/Condemnation, Divine Aura, Lightning Strike und das Stigma Noble Aura.',
            'Party-Support: Debuff auf den Boss, Radiant-Passive (Gruppe heilt sich beim Angreifen selbst) und Summon Resurrection.',
            'Du und der Tank müssen überleben – deshalb im Daevanion Defense und Damage Tolerance statt Crit.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Summon Resurrection immer dabei',
          text: 'Wiederbelebungssteine sind am Anfang selten und teuer; Gruppen sparen sie für die schweren Dungeons. Ein Cleric ohne Resurrection-Stigma fliegt schnell aus der Gruppe.',
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
            'Aion-1-Modus (Tab-Target): Nach jedem Skill greift der Charakter automatisch an und lädt Mana auf. Laut Video der überlegene Modus.',
            'Aion-2-Modus (Action Combat): Der Charakter bleibt nach dem Skill stehen – kein Mana durch Auto-Attacks.',
            'Earth’s Retribution auf Level 8 mit Mana-Spezialisierung – mehr nicht.',
            'Mana leer? Makro-Taste loslassen, kurz Auto-Attacks laufen lassen, dann weiter.',
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
          text: 'Die Spezialisierungen nennt das Video beim Namen, nicht nach Slot. Die Slot-Nummern aus dem KR-Guide stehen unten unter „Spezialisierungen fürs Endgame“.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Bolt',
              priority: 'top',
              target: 'max',
              summary: 'Stärkster Schadensskill. Spezialisierung: Quick Cast (30 % schneller zaubern).',
              note: 'Seit Patch +20 % PvE-Schaden.',
            },
            {
              name: 'Judgment',
              priority: 'top',
              target: 'max',
              summary: 'Spezialisierung: +12 % Schaden – du triffst meistens einen Boss.',
            },
            {
              name: 'Condemnation',
              priority: 'top',
              target: 'max',
              summary: 'Voll stapeln; Spezialisierung +12 % Single-Target-Schaden.',
              note: 'Name aus Transkript („conclusion“) – eventuell mit Judgment verwechselt, im Spiel prüfen.',
            },
            {
              name: 'Divine Aura',
              priority: 'top',
              target: 'max',
              summary: 'Spezialisierung: im Dungeon 50 % Angriffstempo (mehr Treffer in 5 s); gegen viele Ziele die AoE-Variante.',
            },
            {
              name: 'Lightning Strike',
              priority: 'high',
              target: 'max',
              summary: 'Stagger-Skill – den Boss in Stagger-Phasen bursten. Früh Mobilität (oder HP), ab Level 12 Multi-Hit-Chance.',
            },
            {
              name: 'Debuff-Skill (Debilitating Mark)',
              priority: 'high',
              summary: 'Starker Boss-Debuff (−50 % laut Video, senkt u. a. die Verteidigung) – die ganze Gruppe macht mehr Schaden.',
              note: 'Name im Video nicht genannt; laut GEGEBASE ist Debilitating Mark der zentrale Offensiv-Debuff.',
            },
            {
              name: 'Radiant Recovery',
              priority: 'high',
              summary: 'Wichtige Heilung. Spezialisierung: −3 s Cooldown.',
              note: 'Wenn Wisdom Stones knapp sind, anfangs sparen und erst offensiv investieren.',
            },
            {
              name: 'Light of Regeneration',
              priority: 'mid',
              target: 'Lv. 10',
              summary: 'Spezialisierung: +20 % Heilung, wenn das Ziel ≤ 50 % HP hat.',
              note: 'Name aus Transkript („lightning restoration“) – im Spiel prüfen.',
            },
            {
              name: 'Healing Light',
              priority: 'mid',
              summary: 'Einzelheilung. Wenn gelevelt: zwei aufeinanderfolgende Heilungen.',
              note: 'Für die ersten Dungeons laut Video unnötig – wichtig erst für schweren PvE-Content und PvP.',
            },
            {
              name: 'Earth’s Retribution',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Filler; nur wegen der Mana-Spezialisierung.',
            },
            {
              name: 'Defiance',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Befreit aus CC; Spezialisierung: 10 % HP.',
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
          type: 'callout',
          variant: 'primary',
          title: 'Die drei Kern-Passives',
          text: 'Eines offensiv (Crit/Double Chance), zwei für die Gruppe (Radiant-Passive und Healing Enhancement).',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Empyrean Lord’s Grace',
              priority: 'top',
              summary: 'Crit, Double Chance und Extra-Schaden – dein Offensiv-Passive.',
              note: 'Name aus Transkript („empire lord“) – im Spiel prüfen.',
            },
            {
              name: 'Radiant-Passive (Party-Heilung)',
              priority: 'top',
              summary: 'Gruppenmitglieder heilen sich alle 5 s um ca. 800–900 HP, wenn sie angreifen.',
              note: 'Genauer Name im Transkript unklar („radiant blending“).',
            },
            {
              name: 'Healing Enhancement',
              priority: 'top',
              summary: 'Healing Boost – so hoch wie möglich. Skaliert seit Patch mit Attack Power.',
            },
            {
              name: 'Earth’s Grace',
              priority: 'mid',
              summary: 'Crit – auch deine Heilungen profitieren von Crits.',
            },
            {
              name: 'Warm Benediction',
              priority: 'low',
              summary: 'Mehr HP und MP. Gut mit Tank, bei knappen Punkten verzichtbar.',
            },
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'skills',
          skills: [
            {
              name: 'Noble Aura',
              priority: 'top',
              summary: 'Dein stärkster Schaden: dauerhaft aktiv, gibt Crit und macht alle 2 s viel Schaden.',
            },
            {
              name: 'Summon Resurrection',
              priority: 'top',
              target: 'Lv. 1 → 5',
              summary: 'Pflicht. Lv. 1 reicht zum Start (2 s Zauberzeit), ab +5 nur noch 1 s.',
            },
            {
              name: 'Earth’s Punishment',
              priority: 'high',
              summary: 'Niedriger Cooldown, guter Debuff, am Ende sehr viel Schaden.',
            },
            {
              name: 'Benevolence',
              priority: 'mid',
              target: 'Lv. 5',
              summary: 'Vorab casten, zeitgesteuerte Gruppenheilung; läuft sie aus, neu casten und DPS-Skills darum herum ketten.',
            },
            {
              name: 'Absolution',
              priority: 'mid',
              target: 'Lv. 5',
              summary: 'Für Notfälle mit viel Schaden auf der Gruppe.',
            },
            {
              name: 'Light of Protection',
              priority: 'mid',
              target: 'Lv. 5',
              summary: 'PvE Damage Boost/Tolerance, Heilung und Accuracy für die Gruppe.',
              note: 'Nur ohne Chanter in der Gruppe – dessen Mantras sind besser.',
            },
          ],
        },
        {
          type: 'list',
          title: 'Stigma Shards besorgen',
          items: [
            'Supply-Request-Lieferungen erledigen.',
            'Im Abyss Mobs farmen und im Shop Shards kaufen.',
            'Ziel: die eingesetzten Stigmas auf 5 bringen.',
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
          items: [
            'Einstellungen → Tastenbelegung → Gameplay → In-Game-Makro: Taste belegen.',
            'Im Makro-Fenster mehrere Zeilen anlegen. Die Reihenfolge richtet sich nach deinen Cooldowns – frisch 45 hast du kaum Cooldown-Reduktion.',
            'Die Zeilen am Ende wiederholen, weil das Makro manchmal einen Skill überspringt.',
            'Verzögerung: Ping < 50 → 10 ms; Ping 80–100+ → 40–50 ms. „Schatten“ am Charakter = Animation Cancel funktioniert.',
            'Heilung manuell dazwischen drücken (z. B. Taste 2) – das Makro lässt Vorrang-Eingaben durch.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Kein Auto-Attack im Makro nötig',
          text: 'Im Aion-1-Modus füllt der Charakter Lücken selbst mit Auto-Attacks und lädt Mana. Nur im Aion-2-Modus musst du Auto-Attacks ins Makro einbauen.',
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion (frisch 45)',
      blocks: [
        {
          type: 'table',
          columns: ['Reihenfolge', 'Board', 'Fokus'],
          rows: [
            ['1', 'Nezakan', 'Cooldown-Reduktion → Combat Speed → Defense → Attack (Attack erhöht auch die Heilung)'],
            ['2', 'Zikel', 'Erst die Damage-Tolerance-Linie, dann die Damage-Boost-Linie'],
            ['3', 'Nezakan', 'Skill-Knoten: blau = aktiver Skill +1, grün = Passive +1; nur gute Skills, schwache überspringen'],
            ['4', 'Vaizel, Triniel', 'Ebenfalls Skill-Knoten statt Stat-Linien'],
            ['5', 'Ariel', 'PvE-Damage-Tolerance-Linien'],
          ],
        },
        {
          type: 'list',
          title: 'Nicht nehmen',
          items: ['Accuracy, Evasion', 'Critical Damage Boost (früh crittest du kaum)', 'Crit-Damage-Resist', 'Multi-Hit-Chance und Multi-Hit-Resist'],
        },
        {
          type: 'list',
          title: 'Bücher',
          items: [
            'Ariel-Bücher: morphen (Fragmente aus Duty-Quests/-Dungeons) oder kaufen – global zum Start ca. 2–3 Mio. Kinah.',
            'Asphel-Bücher (PvP) sind extrem teuer (ca. 35–45 Mio. Kinah).',
            'Kostenlose Bücher aus der Abyss-Federsammlung in zwei Tolerance-Linien stecken.',
          ],
        },
      ],
    },
    {
      id: 'healing',
      title: 'Heilung & Burst',
      blocks: [
        {
          type: 'steps',
          title: 'Heil-Prioritäten (GEGEBASE)',
          items: [
            'Tank in Gefahr',
            'Ziel einer Mechanik',
            'Mehrere Verletzte → AoE-Heilung',
            'Einzelziel → Healing Light',
            'Dauerschaden → HoTs',
          ],
        },
        {
          type: 'list',
          items: [
            'Burst-Fenster: Debilitating Mark → Prayer of Amplification → Bolt → Divine Aura.',
            'Heil-Reichweite seit Patch 40 m, dafür 20–50 % weniger Heilung – Abstand halten.',
          ],
        },
      ],
    },
    {
      id: 'specs',
      title: 'Spezialisierungen fürs Endgame',
      blocks: [
        {
          type: 'text',
          text: 'Aus dem übersetzten KR-Guide (Vortex Gaming): empfohlene Spezialisierungs-Slots bei Skill-Level 20. Die Skill-Namen sind dort anders übersetzt und können vom Spiel abweichen.',
        },
        {
          type: 'table',
          columns: ['Skill', 'Lv. 20', 'unter Lv. 20'],
          rows: [
            ['Divine Retribution', '2, 3, 4', '2, 4'],
            ['Judgment Bolt', '2, 4, 5', '2, 5'],
            ['Curse of Weakness', '2, 4', '2, 4'],
            ['Sacred Energy', '3, 4, 5', '3, 4'],
            ['Chain of Suffering', '2, 4', '2, 4'],
            ['Lightning Barrage', '4, 5 (ab Lv. 16)', '3, 4'],
            ['Light of Regeneration', '1, 4, 5', '3, 4, 5'],
            ['Condemnation', '2, 3, 4', '2, 3, 4'],
            ['Light of Healing', '3, 4, 5', '4, 5'],
            ['Radiance of Joy', '1, 3, 5', '3, 5'],
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats',
      blocks: [
        {
          type: 'table',
          columns: ['Ausrichtung', 'Attribute', 'Pantheon', 'Priorität'],
          rows: [
            ['Heiler', 'Constitution, Willpower', 'Wisdom (Lumiel), Life (Yustiel)', 'Attack/Heal-Skalierung → HP → Defensive → Cooldown → Crit'],
            ['DPS-Hybrid', 'Precision, Intelligence', 'Destruction (Zikel), Death (Triniel)', 'Attack → Crit → Crit Damage → PvE Damage → Accuracy → HP'],
          ],
        },
      ],
    },
  ],
};
