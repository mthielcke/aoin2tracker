import { rangerPveDpsDetails } from '../details/ranger-pve-dps';
import { rangerPveEndgameDetails } from '../details/ranger-pve-endgame';
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
      name: 'Einsteiger-DPS (frisch 45)',
      mode: 'pve',
      summary:
        'Deadshot immer auf Max laden, davor buffen (Vaizel’s Authority, Supporting Fire, Bow of Blessing, Marking Shot, Gale Arrow). Linksklick plus Makro halten, Marking Shot von Hand nachlegen.',
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
                  id: 'deadshot-first',
                  text: 'Deadshot als Erstes auf 20 – immer bis Max laden. Spez. 2 (+30 % Tempo) → 4 (Block/Evasion ignorieren) → 5 (Zusatzschaden)',
                  sources: ['wakayashi-ranger', 'yt-ranger-early'],
                },
                {
                  id: 'gale-20',
                  text: 'Gale Arrow auf 20 – Spez. 4 (Kampftempo + PvE-Schaden) → 5 (−10 s Cooldown) → 3 (in Bewegung)',
                  sources: ['wakayashi-ranger', 'allyria-ranger'],
                },
                {
                  id: 'drill-20',
                  text: 'Drill Dart auf 20 – Spez. 5 (+1 Aktivierung) → 3 (+20 % Tempo) → 4 (garantierter Multi-Hit)',
                  detail: 'Solo beim Farmen kann früh der HP-Absorb helfen (aLuckyRO).',
                  sources: ['wakayashi-ranger', 'yt-ranger-early'],
                },
                {
                  id: 'snipe-20',
                  text: 'Snipe auf 20 – Spez. 4 (−1 s Deadshot-Cooldown) → 5 (Sturmpfeil als 4. Folge) → 3 (Multi-Hit)',
                  sources: ['wakayashi-ranger'],
                },
                {
                  id: 'secondary-16',
                  text: 'Tempest Shot, Burst Arrow und Defiance auf 16 – auf Global gehen nur vier Skills auf 20',
                  sources: ['wakayashi-ranger'],
                },
                {
                  id: 'rest-12',
                  text: 'Marking Shot, Snare Shot, Explosion Trap und Suppressing Arrow auf 12',
                  sources: ['wakayashi-ranger'],
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
                  text: 'Vaizel’s Authority 20, Bow of Blessing 20, Supporting Fire 15, Griffon Arrow 5',
                  sources: ['wakayashi-ranger', 'allyria-ranger'],
                },
                {
                  id: 'mother-nature',
                  text: 'Musst du mehr aushalten: Mother Nature (Defense + Lebensraub) im vierten Slot',
                  sources: ['yt-ranger-ultimate'],
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
                  sources: ['yt-ranger-ultimate', 'wakayashi-ranger'],
                },
                {
                  id: 'macro-chains',
                  text: 'Makro (rechte Maustaste halten, dazu Linksklick): Drill Dart → Burst Arrow → Tempest Shot, Buff-Kette Vaizel’s → Supporting Fire → Bow of Blessing, Gale Arrow → Griffon Arrow → Snare Shot',
                  sources: ['wakayashi-ranger'],
                },
                {
                  id: 'manual',
                  text: 'Marking Shot und Deadshot nie ins Makro – Marking Shot nachlegen, wenn der Buff ausläuft, Deadshot voll laden',
                  sources: ['wakayashi-ranger', 'allyria-ranger'],
                },
                {
                  id: 'scattershot',
                  text: 'Arrow Scattershot (E) bei Stagger spammen – ab Level 16 gibt er viel Cooldown zurück',
                  sources: ['wakayashi-ranger'],
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
                  id: 'four-20',
                  text: 'Über Arcana und Daevanion die vier Hauptskills auf 20 bringen: Deadshot, Gale Arrow, Drill Dart, Snipe',
                  sources: ['wakayashi-ranger'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'passives-order',
                  text: 'Passive: Focused Eye → Hunter’s Resolve → Hunter’s Soul → Concentrated Fire → Rooting Eye → Vigilant Eye',
                  sources: ['wakayashi-ranger', 'allyria-ranger'],
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
                  text: 'Vor dem Pull: Buff-Kette (Slot 3), Marking Shot, Gale Arrow – dann Deadshot voll laden',
                  sources: ['wakayashi-ranger'],
                },
                {
                  id: 'no-waste',
                  text: 'Marking Shot nicht in Unverwundbarkeitsphasen verschwenden',
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
    {
      id: 'ranger-pve-endgame',
      name: 'Endgame-DPS (Allyria)',
      mode: 'pve',
      summary:
        'Drei feste Buff-Stigmas (Vaizel’s Authority, Bow of Blessing, Supporting Fire), Tempest Shot / Gale Arrow / Deadshot / Drill Dart als Hauptschaden, Deadshot Stufe 3 per Makro.',
      details: rangerPveEndgameDetails,
      phases: [
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'core-three',
                  text: 'Vaizel’s Authority, Bow of Blessing, Supporting Fire ausrüsten',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'flex',
                  text: '4. Slot (ab 45) nach Inhalt: Arrow Rain, Griffon Arrow, Mother Nature oder Kick',
                  detail: 'Wakayashi setzt standardmäßig Griffon Arrow auf 5 – Vaizel’s und Bow of Blessing auf 20, Supporting Fire auf 15.',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'abyss-points',
                  text: 'Stigma-Punkte im Abyss farmen (25.000 AP pro Punkt)',
                  sources: ['allyria-ranger'],
                },
              ],
            },
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills & Spezialisierungen',
              items: [
                {
                  id: 'tier1',
                  text: 'Tier 1 zuerst: Gale Arrow > Deadshot > Drill Dart > Tempest Shot > Burst Arrow',
                  detail: 'Wakayashi zieht Deadshot als Erstes auf 20 und nimmt Snipe statt Tempest Shot als vierten Level-20-Skill.',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'hp-traits',
                  text: 'Bei HP-Problemen früh HP-Regeneration statt Multi-Hit (Snipe, Drill Dart, Burst Arrow)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'passives-s',
                  text: 'Passives: Focused Eye > Hunter’s Resolve, dann Hunter’s Soul',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'marking-manual',
                  text: 'Marking Shot nur manuell für Buff-Uptime – nicht ins Makro',
                  sources: ['allyria-ranger'],
                },
              ],
            },
            {
              id: 'macro',
              kind: 'rotation',
              title: 'Makro',
              items: [
                {
                  id: 'ingame',
                  text: 'In-Game-Makro mit den Skill-Ketten auf eine Taste legen (z. B. Rechtsklick)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'deadshot-3',
                  text: 'Deadshot Stufe 3 sicherstellen: Makro-Software (halten = läuft) oder manuell aufladen',
                  sources: ['allyria-ranger', 'yt-ranger-macro-showcase'],
                },
                {
                  id: 'stagger-save',
                  text: 'Stagger-Skills für Stagger-Phasen aufheben (Arrow Storm 50, Explosive/Griffon Arrow 20)',
                  sources: ['allyria-ranger'],
                },
              ],
            },
            {
              id: 'systems',
              kind: 'daevanion',
              title: 'Daevanion & Pets',
              items: [
                {
                  id: 'daevanion-rarity',
                  text: 'Daevanion: orange > blau > grün > weiß, Skill-Meilensteine (8/12/16/20) mitnehmen',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'gear-before-pets',
                  text: 'Zum Launch Gear vor Pets – Pets nebenbei (Cogni > Fera > Natura > Varian)',
                  sources: ['allyria-ranger'],
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
                  id: 'gale-16',
                  text: 'Gale Arrow ab Level 16: auf −10 s Cooldown + Combat Speed umstellen',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'tier2',
                  text: 'Snipe und Marking Shot auf +16, Snare Shot / Explosion Trap / Scattershot auf +12',
                  sources: ['allyria-ranger'],
                },
              ],
            },
            {
              id: 'genus',
              kind: 'systems',
              title: 'Genus Insight',
              items: [
                {
                  id: 'slots-4-7',
                  text: 'Genus: zuerst Slot 4, dann Slot 7 rollen (je Pet-Typ laut Tabelle)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'no-lock',
                  text: 'Bis Level 10 nichts locken – außer Slot 4/7 mit ca. 80 %+ Wurf',
                  sources: ['allyria-ranger'],
                },
              ],
            },
            {
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana & Pantheon',
              items: [
                {
                  id: 'arcana-5',
                  text: '5 Arcana-Slots mit den richtigen Sets belegen; Karten nur auf +1/+2 testen',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'artworks',
                  text: 'Pantheon-Artworks mit Illusion + Wisdom sammeln',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'statues',
                  text: 'Statuen mit Freedom/Death/Space – früh Freedom + Space',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'colossus',
                  text: 'Colossus Season 1: Zikel / Kromede',
                  sources: ['allyria-ranger'],
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
              title: 'Gear',
              items: [
                {
                  id: 'crafted-weapon',
                  text: 'Crafting-Waffe und -Guard (Rüstung aus Dungeons ist für F2P völlig okay)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'soulbinds',
                  text: 'Soul Binds pro Teil nach Tabelle rollen (Waffe: Weapon Damage Boost, Combat Speed, Might …)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'manastones',
                  text: 'Endgear: zwei goldene Mana/Soulstone-Zeilen pro Teil (+100 Weapon/Front/Back-Attack)',
                  sources: ['allyria-ranger'],
                },
                {
                  id: 'tier1-20',
                  text: 'Tempest Shot, Gale Arrow, Deadshot, Drill Dart auf +20',
                  sources: ['allyria-ranger'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
