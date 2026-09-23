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
        'Spinning Strike und Dark Crush als Schaden, Undefeated Mantra als wichtigstes Stigma. Frisch 45 ist Mana das Hauptproblem – Auto-Attack und Inexorable Blow auf MP spezialisieren.',
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
                  id: 'spinning',
                  text: 'Spinning Strike als Hauptschaden nutzen',
                  sources: ['yt-chanter-early', 'gege-chanter'],
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
                  id: 'auto-8',
                  text: 'Auto-Attack auf 8 – MP-Regeneration',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'dark-crush-max',
                  text: 'Dark Crush maxen – Spezialisierung Critical Hit',
                  detail: 'Nach Rework: garantierte Auslösung durch Ranged-Skills, nur noch Single-Target.',
                  sources: ['yt-chanter-early', 'yt-chanter-rework'],
                },
                {
                  id: 'spinning-cd',
                  text: 'Spinning Strike: Spezialisierung −5 s Cooldown',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'recuperation-max',
                  text: 'Recuperation maxen – Continuous Cast (2×, entfernt Debuffs)',
                  sources: ['yt-chanter-early'],
                },
                {
                  id: 'inexorable-8',
                  text: 'Inexorable Blow auf 8 – erst MP, später Single-Target-Schaden',
                  detail: 'Single-Target-Spezialisierung (+12 %) lohnt sich für Nightmare.',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
                {
                  id: 'misc-8',
                  text: 'Rushing Smash, Impactful Crush, Defiance auf 8',
                  detail: 'Defiance wegen HP-Regeneration.',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
                {
                  id: 'gust-rampage',
                  text: 'Gust Rampage auf 8 – nur für Boss-Content',
                  detail: 'Random-Gruppe: HP-Absorb; mit Cleric: MP. Kein Boss-Content → resetten, Punkte sparen.',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
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
                  id: 'wind-promise',
                  text: 'Wind Promise maxen',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
                {
                  id: 'crit-passive',
                  text: 'Crit-/Perfect-Chance-Passive maxen',
                  sources: ['yt-chanter-early', 'yt-chanter-rework'],
                  uncertain: true,
                },
                {
                  id: 'raging-spell',
                  text: 'Raging Spell nur zusammen mit Gust Rampage (Boss-Content)',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'sprint-5',
                  text: 'Sprint Mantra auf 5',
                  sources: ['yt-chanter-early', 'gege-chanter'],
                },
                {
                  id: 'undefeated-10',
                  text: 'Undefeated Mantra auf 10',
                  detail: 'Wichtigstes Stigma (+100 Accuracy für die Gruppe) – langfristig auf 20.',
                  sources: ['yt-chanter-early', 'gege-chanter'],
                },
                {
                  id: 'incandescent-5',
                  text: 'Incandescent Blow auf 5 (Cooldown-Bonus)',
                  sources: ['yt-chanter-early', 'gege-chanter'],
                  uncertain: true,
                },
                {
                  id: 'marchutan-5',
                  text: 'Marchutan’s Wrath auf 5 (Synergie mit Dark Crush, +20 % Schaden)',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
                {
                  id: 'obliterate-1',
                  text: 'Obliterate auf 1 (50 Stagger-Schaden)',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
                {
                  id: 'sixth-slot',
                  text: '6. Slot: Guardian Blessing (solo) oder Power Storm (Gruppe)',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation & Makro',
              items: [
                {
                  id: 'opener',
                  text: 'Opener: Undefeated Mantra → Spinning Strike → Dark Crush → Incandescent Blow → Bursting Blow → Impactful Crush',
                  sources: ['gege-chanter'],
                },
                {
                  id: 'heal-rule',
                  text: 'Heil-Regel: Chip → Recuperation, Einzelziel → Healing Touch, mehrere Verletzte → beides',
                  sources: ['gege-chanter'],
                },
                {
                  id: 'macro',
                  text: 'Makro einrichten: Zeile 1 Dark-Crush-Kette, Zeile 2 Spinning Strike + Inexorable Blow',
                  detail:
                    'Einstellungen → Tastenbelegung → Gameplay → Makro. Verzögerung: 10 ms bei Ping < 50, 40 ms bei Ping ≥ 80.',
                  sources: ['yt-chanter-rework'],
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
                  id: 'power-storm',
                  text: 'Power Storm für Gruppencontent freischalten',
                  sources: ['yt-chanter-early'],
                  uncertain: true,
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
                {
                  id: 'abyss-amp',
                  text: 'Abyss-Set Richtung 12 Teile (bis 40 % PvE-Amplifikation)',
                  sources: ['gege-chanter'],
                  uncertain: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
