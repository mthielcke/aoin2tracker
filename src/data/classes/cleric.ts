import { clericEarlyDetails } from '../details/cleric-early';
import type { ClassDef, Phase, Section } from '../types';

const clericEarlyEssentials: Section = {
  id: 'essentials',
  kind: 'systems',
  title: 'Grundlagen frisch 45',
  items: [
    {
      id: 'combat-mode',
      text: 'Aion-1-Modus (Tab-Target) nutzen – Auto-Attacks in Skill-Lücken laden Mana',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'resurrection',
      text: 'Summon Resurrection als Tausch-Stigma bereithalten (Lv. 1, später +5 für 1 s Zauberzeit)',
      detail: 'Battle-Rez ohne Wiederbelebungsstein. Die sind anfangs selten – ohne Resurrection fliegt man schnell aus der Gruppe.',
      sources: ['yt-cleric-beginner', 'wakayashi-cleric'],
    },
    {
      id: 'bolt-16',
      text: 'Bolt auf 16 – Spezialisierung Fähigkeitstempo +30 %, dann +20 % Single-Target',
      detail: 'Charge-Skill: von Hand voll aufladen, nicht ins Makro.',
      sources: ['wakayashi-cleric', 'yt-cleric-beginner'],
    },
    {
      id: 'stigma-order',
      text: 'Stigmas: alle vier auf 5, dann Earth’s Punishment und Prayer of Amplification über 10 auf 15, danach Light of Protection und Earth’s Punishment auf 20',
      detail: 'Prayer of Amplification bleibt auf 15, Noble Aura auf 5. Shards aus Supply Requests, Abyss-, Nightmare- und Shugo-Shop.',
      sources: ['wakayashi-cleric'],
    },
    {
      id: 'passive-order',
      text: 'Passive: Empyrean Lord’s Grace → Earth’s Grace → Healing Enhancement → Warm Benediction → Immortal Veil',
      sources: ['wakayashi-cleric'],
    },
  ],
};

const clericEarlyDaevanion: Section = {
  id: 'daevanion',
  kind: 'daevanion',
  title: 'Daevanion',
  items: [
    {
      id: 'nezakan',
      text: 'Nezakan: Cooldown-Reduktion → Combat Speed → Defense → Attack',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'zikel',
      text: 'Zikel: erst Damage-Tolerance-Linie, dann Damage-Boost-Linie',
      detail: 'Keine Accuracy, Evasion, Crit-Damage oder Multi-Hit.',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'skill-nodes',
      text: 'Danach auf allen Boards Skill-Knoten für die wichtigen Skills (blau = aktiv, grün = passiv)',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'ariel',
      text: 'Ariel: PvE-Damage-Tolerance-Linien',
      sources: ['yt-cleric-beginner'],
    },
  ],
};

const clericLeveling: Phase = {
  id: 'leveling',
  title: 'Leveling – Cleric',
  description: 'Beim Leveln sind Dungeons solo – man braucht also Schaden, nicht nur Heilung. Dank Selbstheilung ist Solo-Content einfach.',
  sections: [
    {
      id: 'skills',
      kind: 'skills',
      title: 'Skills',
      items: [
        {
          id: 'chain-condemnation',
          text: 'Ab Level 8: Chain of Torment aufs Ziel, dann Condemnation – dein Hauptschaden',
          detail: 'Condemnation trifft nur Ziele mit Chain of Torment. Ab Level 22 lässt Earth’s Punishment sie dauerhaft kritten.',
          sources: ['wakayashi-cleric'],
        },
        {
          id: 'judgment',
          text: 'Judgment Thunder als spambarer Zweitschaden hochziehen',
          sources: ['wakayashi-cleric', 'yt-cleric-skills'],
        },
        {
          id: 'heals-early',
          text: 'Healing Light (ab 10) und Radiant Recovery (ab 12) als Heilungen – Radiant Recovery geht als Erstes auf 20',
          sources: ['wakayashi-cleric', 'yt-cleric-skills'],
        },
        {
          id: 'retribution-weave',
          text: 'Earth’s Retribution (Linksklick) einweben – bringt Mana, später verkürzt es den Bolt-Cooldown',
          sources: ['wakayashi-cleric', 'yt-cleric-skills'],
        },
        {
          id: 'bolt-14',
          text: 'Ab Level 14: Bolt von Hand voll aufladen – nicht ins Makro',
          sources: ['wakayashi-cleric'],
        },
      ],
    },
  ],
};

export const cleric: ClassDef = {
  id: 'cleric',
  name: 'Cleric',
  role: 'Heiler / Hybrid',
  weapon: 'Mace + Schild / Orb',
  summary: 'Vielseitigster Heiler mit Battle-Rez; macht über Condemnation auch ordentlich Schaden.',
  builds: [
    {
      id: 'cleric-pve-heal',
      name: 'Heiler',
      mode: 'pve',
      summary:
        'Heilung > Notfall-Mechaniken > Buffs/Debuffs > Schaden. Heal-Stärke skaliert mit der Angriffskraft – Prayer of Amplification ist Schadens- und Heil-Buff zugleich.',
      details: clericEarlyDetails,
      phases: [
        clericLeveling,
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            clericEarlyEssentials,
            clericEarlyDaevanion,
            {
              id: 'skills',
              kind: 'skills',
              title: 'Heil-Skills',
              items: [
                {
                  id: 'radiant-20',
                  text: 'Radiant Recovery zuerst auf 20 – Spez. 5 (+5 % Max-LP-Regeneration) → 2 (1× zusätzlich) → 3 (−3 s Cooldown)',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'healing-light-20',
                  text: 'Healing Light auf 20 – Spez. 4 (+2 % LP) → 1 (+2 Anwendungen) → 5 (−2 s Cooldown)',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'regeneration-16',
                  text: 'Light of Regeneration auf 16 – Spez. 5 (Schadensresistenz für die Gruppe) → 4 (Lauftempo); läuft im Makro',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'damage-too',
                  text: 'Schaden trotzdem mitnehmen: Chain of Torment, Condemnation und Judgment Thunder wie in der DPS-Variante',
                  sources: ['wakayashi-cleric'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'healing-enhancement',
                  text: 'Healing Enhancement – je mehr Angriffskraft, desto mehr Heilung',
                  detail: 'Skaliert seit Patch mit Attack Power (26 % → 30 % → 34 %).',
                  sources: ['wakayashi-cleric', 'gege-cleric'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'core-four',
                  text: 'Grund-Setup: Light of Protection 20, Earth’s Punishment 20, Prayer of Amplification 15, Noble Aura 5',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'heal-swaps',
                  text: 'Für schwere Inhalte tauschen: zuerst Noble Aura raus, mit Kantor auch Light of Protection – rein kommen Absolution oder Benevolence',
                  detail: 'Absolution: AoE-Heal, stapelbar, entfernt Debuffs. Benevolence: langer Heal über Zeit, auf höheren Leveln mit Ausdauer und Reinigung.',
                  sources: ['wakayashi-cleric', 'gege-cleric'],
                },
                {
                  id: 'situational',
                  text: 'Situativ: Salvation (Immunität, manche Mechaniken skippen) und Yustiel’s Power (Gruppenschild – nur, wenn du den Inhalt kennst)',
                  sources: ['wakayashi-cleric', 'yt-cleric-skills'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Heil-Prioritäten',
              items: [
                {
                  id: 'heal-prio',
                  text: 'Tank in Gefahr → Mechanik-Ziel → mehrere Verletzte (AoE) → Einzelziel (Healing Light) → HoTs gegen Dauerschaden',
                  sources: ['gege-cleric'],
                },
                {
                  id: 'heal-early',
                  text: 'Radiant Recovery schon für eine Person nutzen und Healing Light nicht geizen – beide haben kurze Cooldowns',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'range-40',
                  text: 'Heil-Reichweite 40 m nutzen – Abstand halten',
                  detail: 'Seit Patch: Reichweite 25 → 40 m, dafür Heilung reduziert.',
                  sources: ['gege-cleric'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'main-stats',
                  text: 'Hauptattribute: Constitution und Willpower',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'pantheon',
                  text: 'Pantheon: Wisdom (Lumiel) und Life (Yustiel)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'stat-order',
                  text: 'Attack Power / Heal-Skalierung → HP → Defensive → Cooldown → Crit',
                  sources: ['gege-cleric'],
                },
              ],
            },
          ],
        },
        {
          id: 'mid',
          title: 'Mittleres Endgame',
          sections: [
            {
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana',
              items: [
                {
                  id: 'arcana-heal-cards',
                  text: 'Arcana-Karten mit Boni auf Kern-Heilungen wählen',
                  detail: 'z. B. Healing Light, Radiant Recovery, Light of Regeneration.',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'arcana-gold',
                  text: 'Gold-Karten gezielt über Fragmente transmutieren',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'skills-16-20',
                  text: 'Kern-Heilungen über Arcana und Daevanion auf 16 bzw. 20 bringen',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cleric-pve-dps',
      name: 'DPS-Hybrid',
      mode: 'pve',
      summary:
        'Condemnation als Hauptschaden: Chain of Torment aufs Ziel, Earth’s Punishment lässt sie dauerhaft kritten. Beschwörungen, Heals und Bolt von Hand, der Rest über zwei Makro-Ketten.',
      details: clericEarlyDetails,
      phases: [
        clericLeveling,
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            clericEarlyEssentials,
            clericEarlyDaevanion,
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills & Spezialisierungen',
              items: [
                {
                  id: 'condemnation-20',
                  text: 'Condemnation auf 20 – Spez. 4 (Cooldown-Reset bei Crit) → 2 (+12 % Single-Target) → 5 (garantierter Multi-Hit)',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'judgment-20',
                  text: 'Judgment Thunder auf 20 – Spez. 5 (+1 Zusatzaktivierung) → 2 (+12 % Single-Target) → 1 (−20 % MP)',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'debuffs-12',
                  text: 'Chain of Torment und Debilitating Mark auf 12 – jeweils Spez. 4 (stärkerer Debuff) → 2',
                  detail: 'Beide Debuffs halten 100 % Uptime und machen die ganze Gruppe stärker.',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'divine-aura-16',
                  text: 'Divine Aura auf 16 (Spez. 5 → 3) – nur bei stehendem Boss, nicht ins Makro',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'rest-12',
                  text: 'Earth’s Retribution auf 12 (Spez. 4: −7 s Bolt-Cooldown → 2), Defiance auf 12',
                  sources: ['wakayashi-cleric'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'core-four',
                  text: 'Light of Protection 20, Earth’s Punishment 20, Prayer of Amplification 15, Noble Aura 5',
                  detail: 'Earth’s Punishment lässt Condemnation garantiert kritten. Light of Protection läuft dauerhaft als Toggle.',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'chanter-overlap',
                  text: 'Mit Kantor absprechen: Light of Protection, Earth’s Punishment und die beiden Debuffs stacken nicht mit seinen Gegenstücken',
                  detail: 'Earth’s Punishment ↔ Hoheit des Sturmwinds, Chain of Torment ↔ Gelübde der Erde, Debilitating Mark ↔ Wellenschlag. Beim Tausch fliegt zuerst Noble Aura raus, mit Kantor auch Light of Protection.',
                  sources: ['wakayashi-cleric'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'dps-passives',
                  text: 'Empyrean Lord’s Grace und Earth’s Grace zuerst, dann Healing Enhancement',
                  sources: ['wakayashi-cleric', 'yt-cleric-skills'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'main-stats',
                  text: 'Hauptattribute: Precision und Intelligence (Magic Accuracy)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'pantheon',
                  text: 'Pantheon: Destruction (Zikel) und Death (Triniel)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'stat-order',
                  text: 'Attack Power → Crit → Crit Damage → PvE Damage → Accuracy → HP',
                  sources: ['gege-cleric'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation',
              items: [
                {
                  id: 'pull',
                  text: 'Vor dem Pull: Light of Protection an, Noble Aura (folgt dir), Divine Aura (stationär), Prayer of Amplification',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'macro-chains',
                  text: 'Makro (rechte Maustaste halten, dazu Linksklick): Kette 1 Prayer → Earth’s Punishment → Condemnation → Chain of Torment, Kette 2 Debilitating Mark → Light of Regeneration → Judgment Thunder',
                  detail: 'Bolt vorher von Hand voll laden. Lightning Strike Scattershot (E) spammen, wenn der Boss gestaggert ist.',
                  sources: ['wakayashi-cleric'],
                },
                {
                  id: 'heal-first',
                  text: 'Heilung und Notfall-Mechaniken haben trotzdem Vorrang – Q für Einzelziel, 4 für den AoE-Heal',
                  sources: ['gege-cleric', 'wakayashi-cleric'],
                },
              ],
            },
          ],
        },
        {
          id: 'mid',
          title: 'Mittleres Endgame',
          sections: [
            {
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana',
              items: [
                {
                  id: 'arcana-dps-cards',
                  text: 'Arcana-Karten mit Boni auf Condemnation, Judgment Thunder und Bolt wählen',
                  sources: ['yt-cleric-skills', 'wakayashi-cleric'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
