import { chanterPveHybridDetails } from '../details/chanter-pve-hybrid';
import type { ClassDef } from '../types';

export const chanter: ClassDef = {
  id: 'chanter',
  name: 'Chanter',
  role: 'Support / Hybrid',
  weapon: 'Staff',
  summary: 'Buffs über Mantras, Support-Heilung und solider Nahkampfschaden. „Support first, healer second, melee DPS third.“',
  builds: [
    {
      id: 'chanter-pve-hybrid',
      name: 'Support-Hybrid',
      mode: 'pve',
      summary:
        'Dark Crush als Hauptschaden (frei nach Spinning Strike, Impactful Crush oder Marchutan’s Wrath), beide Invokationen dauerhaft an, Power of the Storm vor jedem Pull. Frisch 45 ist Mana das Hauptproblem.',
      details: chanterPveHybridDetails,
      phases: [
        {
          id: 'leveling',
          title: 'Leveling – Chanter',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'mp-focus',
                  text: 'MP-Probleme einplanen: Auto-Attack mit MP-Regeneration leveln',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'combat-mode',
                  text: 'Kampfmodus wählen: Aion-1-Modus (Tab-Target) greift in Cooldown-Lücken automatisch an und lädt Mana',
                  detail: 'Im Aion-2-Modus (Action Combat) passiert das nicht – dort Auto-Attacks selbst einplanen.',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'recuperation',
                  text: 'Recuperation leveln (Selbstheilung)',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'dark-crush-main',
                  text: 'Dark Crush ist der Hauptschaden – er wird nach Spinning Strike oder Impactful Crush frei',
                  sources: ['wakayashi-chanter', 'yt-chanter-early'],
                },
              ],
            },
          ],
        },
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          description: 'Ca. 230–250 Skillpunkte direkt nach dem Leveln (ohne vollen Monolith).',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'onslaught',
                  text: 'Onslaught (Auto-Attack) früh mit MP-Spezialisierung, später auf 20: Spez. 4 (−1 s Spinning-Strike-Cooldown) → 5 → 3',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
                {
                  id: 'dark-crush-20',
                  text: 'Dark Crush als Erstes auf 20 – bis 16 Spez. 3 (Crit), dann 5 (kein Cooldown) und 4 (Durchschlag)',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
                {
                  id: 'spinning-20',
                  text: 'Spinning Strike auf 20 – Spez. 1 (−5 s Cooldown) → 3 (+20 % Single-Target) → 2',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
                {
                  id: 'recuperation-20',
                  text: 'Recuperation auf 20 – Spez. 4 (+5 % LP) → 1 (2× hintereinander, entfernt Debuffs) → 5 (−3 s)',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
                {
                  id: 'incandescent-16',
                  text: 'Incandescent Blow, Rushing Smash und Defiance auf 16, der Rest auf 12',
                  detail: 'Incandescent Blow früh mit MP-Spezialisierung, später +12 % Single-Target. Im aLuckyRO-Video heißt er Inexorable Blow.',
                  sources: ['wakayashi-chanter'],
                },
                {
                  id: 'gust-stagger',
                  text: 'Gust Rampage bei Stagger spammen – ab Level 16 gibt er viel Cooldown zurück',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'attack-prep',
                  text: 'Attack Preparation maxen',
                  sources: ['yt-chanter-early', 'yt-chanter-rework'],
                },
                {
                  id: 'passive-order',
                  text: 'Danach Wind’s Promise → Impact Hit → Inspiring Spell → Earth’s Promise – Cross Guard zuletzt',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
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
                  text: 'Undefeated Mantra 20, Power of the Storm 20, Sprint Mantra 15, Marchutan’s Wrath 5',
                  detail: 'Mit wenig Shards erst alle vier auf 5, dann Undefeated Mantra hochziehen.',
                  sources: ['wakayashi-chanter'],
                },
                {
                  id: 'swaps',
                  text: 'Tauschen statt Sprint Mantra: Guardian Blessing ohne Cleric, Focused Defense bei hartem Content',
                  sources: ['wakayashi-chanter', 'yt-chanter-ultimate'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation & Makro',
              items: [
                {
                  id: 'combo',
                  text: 'Ablauf: beide Invokationen an → Power of the Storm vor dem Pull → Spinning Strike halten → Linksklick und Makro-Taste halten',
                  sources: ['wakayashi-chanter'],
                },
                {
                  id: 'heal-rule',
                  text: 'Heil-Regel: Chip → Recuperation, Einzelziel → Healing Touch, mehrere Verletzte → beides',
                  sources: ['gege-chanter'],
                },
                {
                  id: 'macro-chain',
                  text: 'Makro (rechte Maustaste): Dark Crush → Impactful Crush → Marchutan’s Wrath → Incandescent Blow',
                  detail: 'Einstellungen → Tastenbelegung → Gameplay → Makro. Verzögerung: 10 ms bei Ping < 50, 40 ms bei Ping ≥ 80.',
                  sources: ['wakayashi-chanter', 'yt-chanter-rework'],
                },
                {
                  id: 'macro-8',
                  text: 'Alternativ 8-Zeilen-Makro: Dark Crush → Rushing Smash → Impactful Crush → Dark Crush → Marchutan’s Wrath → 2× Dark Crush → Auto-Attack',
                  detail: 'Aus dem Frisch-45-Guide; Details in den Build-Details.',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'crit-cdr',
                  text: 'Auto-Attack-Crits verkürzen Spinning Strike (−1 s pro Crit) – Crit Rate lohnt',
                  sources: ['yt-chanter-rework'],
                },
              ],
            },
            {
              id: 'daevanion',
              kind: 'daevanion',
              title: 'Daevanion',
              items: [
                {
                  id: 'dae-parallel',
                  text: 'Alle Boards parallel füllen – nicht eins nach dem anderen',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-nezakan',
                  text: 'Nezakan: Attack Bonus, Umweg über Attack Preparation statt Cross Guard, dann Dark-Crush-Perfection',
                  detail: 'Kein Cooldown-Reduction-Pfad, kein Blessing – stattdessen HP/Crit/MP und Crit Damage.',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-zikel',
                  text: 'Zikel: Damage-Boost-Linie über Inexorable Blow und Rushing Smash (nicht Impact Hit)',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-vaizel',
                  text: 'Vaizel: Critical-Damage-Boost-Linien und Wind Promise',
                  detail: 'Blessing of Life und Whirlwind Blow meiden.',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-triniel',
                  text: 'Triniel: Multi-Hit ignorieren, kürzester Weg zu Attack Preparation',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-ariel',
                  text: 'Ariel/Asphel: nur offensive Knoten (Damage Boost), keine Tolerance',
                  sources: ['yt-chanter-ultimate'],
                },
                {
                  id: 'dae-morph',
                  text: 'Ariel-Bücher: Fragmente aus Merchant-Quest/Duty Missions, beim Morphen 100-%-Option wählen',
                  sources: ['yt-chanter-ultimate'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'stat-order',
                  text: 'Hybrid: Attack Power → PvE Damage → Crit → Crit Damage → Accuracy → HP',
                  detail: 'Blessing of Life skaliert mit Attack Power.',
                  sources: ['gege-chanter'],
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
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'undefeated-20',
                  text: 'Undefeated Mantra auf 20',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'power-storm-20',
                  text: 'Power of the Storm auf 20 – vor jedem Pull zünden',
                  sources: ['wakayashi-chanter'],
                },
              ],
            },
            {
              id: 'gear',
              kind: 'gear',
              title: 'Ausrüstung',
              items: [
                {
                  id: 'gear-order',
                  text: 'Reihenfolge: Staff → Core → Abyss → Accessoires → Arcana → Daevanion → Seal',
                  sources: ['gege-chanter'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
