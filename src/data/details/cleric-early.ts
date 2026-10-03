import type { BuildDetails } from '../types';

export const clericEarlyDetails: BuildDetails = {
  intro:
    'Der Cleric heilt nicht nur, er macht mit Condemnation auch ordentlich Schaden. Damit Condemnation permanent läuft, muss Chain of Torment auf dem Ziel liegen, und Earth’s Punishment lässt sie durchgehend kritten. Die Heilung skaliert über Healing Enhancement mit der Angriffskraft – deshalb ist Prayer of Amplification Schadens- und Heil-Buff zugleich. Diese Seite gilt für beide Cleric-Varianten; Grundlage ist der Global-Guide von Wakayashi.',
  sources: ['wakayashi-cleric', 'yt-cleric-beginner', 'yt-cleric-skills', 'gege-cleric'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Hauptschaden: Condemnation – braucht Chain of Torment auf dem Ziel und kritet dank Earth’s Punishment garantiert. Spez. 4 setzt bei Crit den Cooldown zurück.',
            'Zweitschaden: Judgment Thunder (spambar) und Bolt (Charge-Skill, von Hand voll laden).',
            'Debuffs mit 100 % Uptime: Chain of Torment (Gegner nimmt mehr Schaden) und Debilitating Mark (Gegner macht weniger Schaden).',
            'Heilung: Radiant Recovery (AoE, entfernt Debuffs), Healing Light (Einzelziel) und Light of Regeneration (HoT im Makro).',
            'Stärken: viel Survivability, einzige Klasse mit Battle-Rez, Solo-Content dank Selbstheilung leicht. Schwächen: wenig DPS, im 1v1 sehr schwach.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Summon Resurrection bereithalten',
          text: 'Wiederbelebungssteine sind am Anfang selten und teuer. Summon Resurrection holt gefallene Gruppenmitglieder ohne Stein zurück – als Tausch-Stigma für schwere Inhalte.',
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
            'Aion-1-Modus (Tab-Target): Nach jedem Skill greift der Charakter automatisch an und lädt Mana auf.',
            'Earth’s Retribution (Linksklick) regeneriert 110 MP pro Treffer und verkürzt mit Spez. 4 den Cooldown von Bolt. Deshalb Linksklick zusammen mit der Makro-Taste halten.',
            'Mana leer? Makro-Taste loslassen, kurz Auto-Attacks laufen lassen, dann weiter.',
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
            ['Radiant Recovery', 'Glanz der Genesung', '20', '5 (+5 % Max-LP-Regeneration) → 2 (1× zusätzlich) → 3 (−3 s)', '12'],
            ['Condemnation', 'Verdammnis', '20', '4 (Cooldown-Reset bei Crit) → 2 (+12 % Single-Target) → 5 (Multi-Hit)', '8'],
            ['Judgment Thunder', 'Blitz des Urteils', '20', '5 (+1 Zusatzaktivierung) → 2 (+12 % Single-Target) → 1 (−20 % MP)', '1'],
            ['Healing Light', 'Licht der Heilung', '20', '4 (+2 % LP) → 1 (+2 Anwendungen) → 5 (−2 s)', '10'],
            ['Light of Regeneration', 'Licht der Regeneration', '16', '5 (Schadensresistenz für die Gruppe) → 4 (Lauftempo)', '7'],
            ['Bolt', 'Donnerschlag', '16', '3 (+30 % Fähigkeitstempo) → 4 (+20 % Single-Target)', '14'],
            ['Divine Aura', 'Heilige Aura', '16', '5 (−10 s Cooldown) → 3 (+50 % Schusstempo)', '3'],
            ['Chain of Torment', 'Kette des Schmerzes', '12', '4 (−10 % PvE-Schadensresistenz) → 2 (+3 s DoT)', '4'],
            ['Debilitating Mark', 'Mal der Schwächung', '12', '4 (−10 % PvE-Schadensverstärkung) → 2 (−15 % Verteidigung)', '1'],
            ['Earth’s Retribution', 'Rache der Erde', '12', '4 (−7 s Bolt-Cooldown) → 2', '1'],
            ['Defiance', 'Schockaufhebung', '12', '3 (+10 % LP) → 4 (+2 s Zähigkeit)', '16'],
            ['Lightning Strike Scattershot', 'Blitzfeuer', '–', 'Spammen, wenn der Boss gestaggert ist', '5'],
          ],
        },
        {
          type: 'list',
          title: 'Hinweise',
          items: [
            'Radiant Recovery geht als Erstes auf 20: größter AoE-Heal mit kurzem Cooldown.',
            'Divine Aura ist stationär und nur kurz da – nur nutzen, wenn der Boss steht. Ideal gegen Gegner mit Treffer-Zähler statt Lebensbalken.',
            'Debilitating Mark ist ein schwacher Schadens-Skill, aber der Debuff hält 100 % Uptime – deshalb im Makro.',
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
            'Empyrean Lord’s Grace (Segen des Gebieters)',
            'Earth’s Grace (Segen der Erde)',
            'Healing Enhancement (Heilungsverstärkung) – je mehr Angriffskraft, desto mehr Heilung',
            'Warm Benediction (Warme Gnade)',
            'Immortal Veil (Schleier der Unsterblichkeit)',
            'Danach: Survival Willpower, Prayer of Concentration, Radiant Benediction, Empyrean Lords’ Benediction, Heal Block',
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
            ['Light of Protection', 'Licht des Schutzes', '20', 'Toggle-Buff: mehr Schaden und Schadensresistenz für dich und die Gruppe. Stackt nicht mit der Invokation der Unbesiegbarkeit vom Kantor.'],
            ['Earth’s Punishment', 'Strafe der Erde', '20', 'Lässt Condemnation garantiert kritten; auf höheren Leveln wichtiger Gruppen-Buff. Stackt nicht mit Hoheit des Sturmwinds vom Kantor.'],
            ['Prayer of Amplification', 'Gebet der Verstärkung', '15', '+20 % Angriffskraft – und damit auch mehr Heilung.'],
            ['Noble Aura', 'Edle Aura', '5', 'Folgt dir, 5 min Laufzeit. Nicht ins Makro (1 min Cooldown).'],
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Reihenfolge beim Leveln der Stigmas',
          text: 'Erst alle vier auf 5, dann Earth’s Punishment und Prayer of Amplification über 10 auf 15, danach Light of Protection und Earth’s Punishment auf 20. Prayer bleibt auf 15, Noble Aura auf 5.',
        },
        {
          type: 'table',
          title: 'Tausch-Stigmas',
          columns: ['Stigma', 'Wofür'],
          rows: [
            ['Absolution', 'AoE-Heal wie Radiant Recovery, stapelbar, entfernt Debuffs'],
            ['Benevolence (Hoheit des Lebens)', 'Langer Heal über Zeit, auf höheren Leveln mit Ausdauer und Reinigung'],
            ['Summon Resurrection', 'Battle-Rez ohne Wiederbelebungsstein'],
            ['Salvation (Erlösung)', 'Immunitäts-Buff – im PvE lassen sich manche Mechaniken teilweise skippen'],
            ['Yustiel’s Power', 'Schild und Tankiness für die Gruppe – nur, wenn du den Inhalt kennst'],
          ],
        },
        {
          type: 'text',
          text: 'Beim Tausch fliegt zuerst Noble Aura raus, mit Kantor in der Gruppe auch Light of Protection.',
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
            ['1 / 2', 'Divine Aura (stationär) / Noble Aura (folgt dir) – beide nicht ins Makro'],
            ['3', 'Bolt – von Hand voll laden'],
            ['4', 'Radiant Recovery (AoE-Heal)'],
            ['6', 'Light of Protection – einmal anschalten'],
            ['7', 'Makro-Kette 1: Prayer of Amplification → Earth’s Punishment → Condemnation → Chain of Torment'],
            ['R', 'Makro-Kette 2: Debilitating Mark → Light of Regeneration → Judgment Thunder'],
            ['Q', 'Healing Light (Einzelziel)'],
            ['E', 'Lightning Strike Scattershot – bei Stagger'],
            ['Linksklick', 'Earth’s Retribution – Weaving und Mana'],
            ['Rechte Maustaste', 'Makro-Taste: löst die Ketten auf 7 und R aus'],
          ],
        },
        {
          type: 'steps',
          title: 'Ablauf',
          items: [
            'Taste 6: Light of Protection aktivieren, falls es nicht schon läuft.',
            'Taste 2 für Noble Aura, dann Taste 1 für die stationäre Divine Aura.',
            'Prayer of Amplification zünden.',
            'Bolt bis Max laden.',
            'Linksklick und Makro-Taste (rechte Maustaste) gedrückt halten.',
            'Verliert jemand LP: Q für ein einzelnes Ziel, 4 für den AoE-Heal.',
          ],
        },
        {
          type: 'list',
          title: 'Drei typische Fehler',
          items: [
            'Alles ins Makro packen: Divine Aura, Noble Aura, Radiant Recovery und Bolt gehören nicht hinein – nur, was 100 % Uptime hält oder Schaden macht.',
            'Mit dem Heilen warten: Radiant Recovery schon für eine Person nutzen, Healing Light nicht geizen.',
            'Buffs mit dem Kantor doppeln: Earth’s Punishment, Chain of Torment und Debilitating Mark stacken nicht mit seinen Gegenstücken – absprechen.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Verzögerung',
          text: 'Wakayashi nutzt 10 ms. Bei Ping ab ca. 80 ms eher 40–50 ms. „Schatten“ am Charakter zeigen, dass das Animation Canceling funktioniert.',
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
      title: 'Heil-Prioritäten',
      blocks: [
        {
          type: 'steps',
          items: [
            'Tank in Gefahr',
            'Ziel einer Mechanik',
            'Mehrere Verletzte → Radiant Recovery',
            'Einzelziel → Healing Light',
            'Dauerschaden → Light of Regeneration (läuft im Makro) bzw. Benevolence',
          ],
        },
        {
          type: 'text',
          text: 'Heil-Reichweite seit Patch 40 m, dafür 20–50 % weniger Heilung – Abstand halten.',
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
