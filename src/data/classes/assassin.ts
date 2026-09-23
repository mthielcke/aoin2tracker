import { assassinPveDpsDetails } from '../details/assassin-pve-dps';
import type { ClassDef } from '../types';

export const assassin: ClassDef = {
  id: 'assassin',
  name: 'Assassin',
  role: 'Melee-DPS / Burst',
  weapon: 'Dolche',
  summary: 'Burst-Nahkämpfer mit Stealth: Insignien aufbauen und detonieren, möglichst immer von hinten.',
  builds: [
    {
      id: 'assassin-pve-dps',
      name: 'Rear-DPS',
      mode: 'pve',
      summary:
        'Savage Roar baut Insignien auf, Insignia Explosion detoniert sie; Illusive Clone macht Heart Gore bei Crits cooldownfrei. Ziel: ca. 80 % Rear-Uptime.',
      details: assassinPveDpsDetails,
      phases: [
        {
          id: 'leveling',
          title: 'Leveling – Assassin',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills & Mana',
              items: [
                {
                  id: 'combat-mode',
                  text: 'Aion-1-Modus (Tab-Target) nutzen – Quick Slice läuft nach Skills automatisch weiter und lädt Mana',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'quick-slice-mp',
                  text: 'Quick Slice (Auto-Attack): Spezialisierung MP',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'hp-absorb',
                  text: 'Überleben über HP-Absorb: Ambush, Storm Rampage, Shadow Fall',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'from-behind',
                  text: 'Von Anfang an hinter den Gegner stellen – Rückenschaden ist ein eigener Multiplikator',
                  sources: ['assassin-manual', 'gege-assassin'],
                },
              ],
            },
          ],
        },
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          description: 'Ca. 240 Skillpunkte direkt nach dem Leveln.',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'insignia-max',
                  text: 'Insignia Explosion maxen – Spezialisierung Multi-Hit',
                  sources: ['yt-assassin-early', 'gege-assassin'],
                },
                {
                  id: 'roar-10',
                  text: 'Savage Roar auf 10 – Spezialisierung 30 % Skill-Tempo',
                  detail: 'Alternativ MP-Kosten (wenig Auto-Attack) oder Single-Target (Nightmare-Bosse).',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'heart-gore-8',
                  text: 'Heart Gore auf 8–10 – früh Spezialisierung HP, später Crit',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'shadowstrike-8',
                  text: 'Shadowstrike auf 8 – Spezialisierung Crit-Damage-Buff (5 s)',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'ambush-8',
                  text: 'Ambush auf 8 – Spezialisierung HP-Absorb',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'utility',
                  text: 'Whirlwind Slice (AoE zum Farmen), Flash Slice (mehr Ziele), Infiltrate (Reichweite), Defiance auf 8',
                  sources: ['yt-assassin-early'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'top-three',
                  text: 'Rear Smite, Assault Stance, Exploit Weakness zuerst',
                  sources: ['assassin-manual', 'gege-assassin'],
                },
                {
                  id: 'execute',
                  text: 'Execute-Passive (mehr Schaden unter 40 % Boss-HP) mitnehmen',
                  sources: ['yt-assassin-early'],
                  uncertain: true,
                },
                {
                  id: 'hp-option',
                  text: 'Survival-Wahl frisch 45: HP-Option (+20 % HP) statt Poison/Ambush',
                  sources: ['yt-assassin-early'],
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
                  id: 'illusive-clone',
                  text: 'Illusive Clone – wichtigster Buff (Heart Gore ohne Cooldown bei Crits); +5, später +10',
                  sources: ['yt-assassin-early', 'assassin-manual'],
                },
                {
                  id: 'shadowblade-10',
                  text: 'Throw Shadowblade auf 10 (Reset bei Kills)',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'savage-fang',
                  text: 'Savage Fang (setzt Insignien, ab +5 +20 % Schaden)',
                  sources: ['yt-assassin-early', 'assassin-manual'],
                },
                {
                  id: 'swift-contract',
                  text: 'Swift Contract (Angriffstempo-Buff)',
                  sources: ['yt-assassin-early', 'assassin-manual'],
                },
                {
                  id: 'triniel-1',
                  text: 'Triniel’s Dagger vorerst auf 1',
                  sources: ['yt-assassin-early'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation & Makro',
              items: [
                {
                  id: 'macro',
                  text: 'Makro: Quick Slice ↔ Savage Roar im Wechsel; Proc-Skill (E) dauernd drücken',
                  detail: 'Buffs, Shadowstrike, Block, Evasion und großen Schaden separat belegen.',
                  sources: ['yt-assassin-macro', 'assassin-manual'],
                },
                {
                  id: 'opener',
                  text: 'Opener: Illusive Clone + Swift Contract + Savage Fang → Triniel’s Dagger → hinter den Boss → Kern-Skills',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'full-chains',
                  text: 'Quick-Slice- und Savage-Roar-Kette immer komplett durchziehen',
                  sources: ['gege-assassin'],
                },
                {
                  id: 'movement-reserve',
                  text: 'Einen Bewegungs-Skill für Boss-Drehungen zurückhalten',
                  sources: ['assassin-manual'],
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
                  text: 'Crit → Attack/Weapon Damage → Rear/Skill Damage Amp → Tempo → Accuracy',
                  detail: 'Crit nicht auf Kosten von viel Weapon Damage stapeln.',
                  sources: ['gege-assassin'],
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
              id: 'skills',
              kind: 'skills',
              title: 'Skills & Spezialisierungen',
              items: [
                {
                  id: 'swap-specs',
                  text: 'Mit mehr Mana: Quick Slice auf HP, Heart Gore auf Crit umstellen',
                  sources: ['yt-assassin-early'],
                },
                {
                  id: 'skill-20',
                  text: 'Reihenfolge auf 20: Heart Gore → Insignia Explosion → Quick Slice → Savage Roar',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'secondary-16',
                  text: 'Storm Rampage und Ambush auf 16',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'evasion-stance',
                  text: 'Evasion Stance ab Fire Temple / Research Lab für Boss-Mechaniken',
                  sources: ['yt-assassin-early'],
                },
              ],
            },
            {
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana & Daevanion',
              items: [
                {
                  id: 'arcana-order',
                  text: 'Arcana-Upgrades: Scroll → Compass → Chalice → Scales',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'breakpoints',
                  text: 'Daevanion: Skill-Breakpoints (12/16/20) vor Seltenheit, dann Attack → Crit/Accuracy',
                  sources: ['assassin-manual', 'gege-assassin'],
                },
                {
                  id: 'cdr-35',
                  text: 'Cooldown-Reduktion auf ca. 35 %',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'rear-uptime',
                  text: 'Rear-Uptime von ca. 80 % erreichen',
                  sources: ['assassin-manual'],
                },
              ],
            },
          ],
        },
        {
          id: 'late',
          title: 'Spätes Endgame',
          sections: [
            {
              id: 'gear',
              kind: 'gear',
              title: 'Ausrüstung',
              items: [
                {
                  id: 'soulbinds',
                  text: 'Soul Binds nach Tabelle rollen (Waffe: Combat Speed, Might, Weapon Damage Boost)',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'genius',
                  text: 'Genius Insight: Slot 3/9 Smite ≥ 2 %, 1/4/7 Crit, 2/5/8 Attack +12, 6 Damage Tolerance',
                  sources: ['assassin-manual'],
                },
                {
                  id: 'abyss-12',
                  text: 'Abyss-Set Richtung 12 Teile (40 % PvE-Amplifikation)',
                  sources: ['gege-assassin'],
                },
                {
                  id: 'runes',
                  text: 'Runen: Back Attack Boost → Weapon Damage Boost → Crit Damage Boost',
                  sources: ['assassin-manual'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
