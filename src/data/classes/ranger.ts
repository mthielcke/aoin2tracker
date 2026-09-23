import { rangerPveDpsDetails } from '../details/ranger-pve-dps';
import type { ClassDef } from '../types';

export const ranger: ClassDef = {
  id: 'ranger',
  name: 'Ranger',
  role: 'Fernkampf-DPS',
  weapon: 'Bogen',
  summary: 'Physischer Fernkämpfer (20 m) mit Fallen, Slows und Roots. Wichtigste Stats: Combat Speed und Multi-Hit.',
  builds: [
    {
      id: 'ranger-pve-dps',
      name: 'DPS (Bogen)',
      mode: 'pve',
      summary:
        'Frisch 45: Mana über Snipe und Tab-Target-Modus managen, Combat Speed und Multi-Hit stapeln, mobil bleiben. Endgame: Precision-Fenster über Marking Shot für Deadshot.',
      details: rangerPveDpsDetails,
      phases: [
        {
          id: 'leveling',
          title: 'Leveling – Ranger',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'mp-problem',
                  text: 'MP-Verbrauch im Blick behalten – Ranger hat starke MP-Probleme',
                  sources: ['yt-ranger-early'],
                },
                {
                  id: 'snipe-mp',
                  text: 'Snipe: Spezialisierung MP-Wiederherstellung',
                  sources: ['yt-ranger-early', 'yt-ranger-ultimate'],
                },
                {
                  id: 'combat-mode',
                  text: 'Aion-1-Modus (Tab-Target) nutzen – der Charakter schießt nach jedem Skill automatisch Snipe und lädt Mana',
                  sources: ['yt-ranger-ultimate'],
                },
                {
                  id: 'focused-eye',
                  text: 'Passive Focused Eye zuerst leveln',
                  sources: ['yt-ranger-early', 'gege-ranger'],
                },
              ],
            },
          ],
        },
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'levels',
                  text: 'Drei Kern-Skills auf 10, Rest auf 8',
                  sources: ['yt-ranger-early'],
                },
                {
                  id: 'aoe-spam-mp',
                  text: 'AoE-Spam-Skill (4 Ziele): −20 % MP-Kosten',
                  sources: ['yt-ranger-early'],
                  uncertain: true,
                },
                {
                  id: 'deadshot-charge',
                  text: 'Deadshot: Spezialisierung +30 % Aufladegeschwindigkeit',
                  detail: 'Höchster Einzelschaden (ca. 10–12k voll aufgeladen).',
                  sources: ['yt-ranger-early', 'gege-ranger'],
                },
                {
                  id: 'drill-dart',
                  text: 'Drill Dart: HP-Absorb (Sustain beim Solo-Farmen)',
                  sources: ['yt-ranger-early', 'gege-ranger'],
                },
                {
                  id: 'root-mobility',
                  text: 'Root/Snare-Skill: Mobilitäts-Spezialisierung',
                  sources: ['yt-ranger-early'],
                  uncertain: true,
                },
                {
                  id: 'buff-duration',
                  text: 'Combat-Speed-Buff (+7 %): +5 s Dauer',
                  sources: ['yt-ranger-early'],
                  uncertain: true,
                },
                {
                  id: 'defiance-8',
                  text: 'Defiance auf 8 – 20 % HP-Wiederherstellung',
                  sources: ['yt-ranger-early'],
                },
                {
                  id: 'marking-early',
                  text: 'Marking Shot anfangs auf 1 lassen',
                  detail: 'Früh laut Video kaum wirksam – im Endgame aber S-Tier (siehe Mittleres Endgame).',
                  sources: ['yt-ranger-early'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'buffs',
                  text: 'Zwei Buff-Stigmas: Vaizel’s Authority (Schaden + Perfect) und Crit-/Multi-Hit-Buff',
                  sources: ['yt-ranger-ultimate'],
                  uncertain: true,
                },
                {
                  id: 'mother-nature',
                  text: 'Mother Nature (Defense + Lebensraub) – alternativ Arrow Storm für mehr Schaden',
                  sources: ['yt-ranger-ultimate'],
                },
                {
                  id: 'damage',
                  text: 'Schadens-Stigmas: Exploding Arrow und Supporting Fire (Beschwörung, 50 % Mittreffer)',
                  sources: ['yt-ranger-ultimate'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'macro',
              kind: 'rotation',
              title: 'Makro',
              items: [
                {
                  id: 'macro-setup',
                  text: 'Makro-Taste belegen, Verzögerung nach Ping (10 ms bei < 50, 40–50 ms bei 80+)',
                  sources: ['yt-ranger-ultimate'],
                },
                {
                  id: 'macro-lines',
                  text: '3 Zeilen: Buff-Kette (Marking Shot → Gale Arrow → Drill Dart → Tempest Shot), Root-Kette, Rest-Kette',
                  detail: 'Explosiv-Skill, Schadens-Buff, Deadshot und Heilung manuell drücken.',
                  sources: ['yt-ranger-ultimate'],
                },
              ],
            },
            {
              id: 'daevanion',
              kind: 'daevanion',
              title: 'Daevanion',
              items: [
                {
                  id: 'nezakan',
                  text: 'Nezakan: Attack und Combat Speed',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'zikel',
                  text: 'Zikel: nur Damage Boost (Tolerance/Accuracy ignorieren)',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'vaizel',
                  text: 'Vaizel: alle 4 Critical-Damage-Boost-Knoten',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'triniel',
                  text: 'Triniel: alle 4 Multi-Hit-Chance-Knoten',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'skill-nodes',
                  text: 'Danach Skill-Knoten (grün = passiv, blau = aktiv)',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'attack-crit',
                  text: 'Dann Attack Bonus, Crit Bonus – Defense/HP zuletzt',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'ariel',
                  text: 'Ariel: PvE-Damage-Boost-Linien',
                  sources: ['yt-ranger-daevanion'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'speed-multihit',
                  text: 'Combat Speed und Multi-Hit Chance auf Gear/Accessoires priorisieren',
                  sources: ['yt-ranger-daevanion'],
                },
                {
                  id: 'stat-order',
                  text: 'Crit → Attack/Weapon Damage → Precision-Boni → Damage Amp → Accuracy',
                  sources: ['gege-ranger'],
                  uncertain: true,
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
              title: 'Skills',
              items: [
                {
                  id: 's-tier',
                  text: 'Marking Shot und Deadshot hochziehen (S-Tier)',
                  detail: 'Marking Shot öffnet das Precision-Fenster (10 s), Deadshot ist der Payoff.',
                  sources: ['gege-ranger'],
                },
                {
                  id: 'a-plus',
                  text: 'Burst Arrow und Snipe (Kettenstart) als nächstes',
                  sources: ['gege-ranger'],
                },
                {
                  id: 'a-tier',
                  text: 'Rapid Fire, Spiral Arrow, Gale Arrow, Drill Dart, Explosive Arrow',
                  sources: ['gege-ranger'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'passives-core',
                  text: 'Focused Eye, Concentrated Fire, Vigilant Eye, Hunter’s Resolve',
                  sources: ['gege-ranger', 'yt-ranger-daevanion'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation',
              items: [
                {
                  id: 'opener',
                  text: 'Opener: Marking Shot → Deadshot → Burst Arrow → Snipe → Explosive Arrow',
                  sources: ['gege-ranger'],
                },
                {
                  id: 'sustain',
                  text: 'Sustain: Snipe → Rapid Fire → Spiral Arrow → Burst Arrow → Gale Arrow → Drill Dart',
                  sources: ['gege-ranger'],
                },
                {
                  id: 'no-waste',
                  text: 'Marking Shot nicht in Unverwundbarkeitsphasen verschwenden; Deadshot nur im Precision-Fenster',
                  sources: ['gege-ranger'],
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
                  id: 'gear-order',
                  text: 'Reihenfolge: Bogen → Offensiv-Teile → Accessoires → Abyss → Arcana/Daevanion → Seal',
                  sources: ['gege-ranger'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
