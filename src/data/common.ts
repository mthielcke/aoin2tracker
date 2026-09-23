import type { Phase } from './types';

export const COMMON_PHASES: Phase[] = [
  {
    id: 'leveling',
    title: 'Leveling 1–45 (alle Klassen)',
    description:
      'Leveling geht sehr schnell – einen echten Leveling-Build gibt es nicht. Ziel: zügig auf 45, nichts verschwenden.',
    sections: [
      {
        id: 'quests',
        kind: 'quests',
        title: 'Quests & Fortschritt',
        items: [
          {
            id: 'msq',
            text: 'Main Story Quest (gelbe Questreihe) bis Level 45 folgen',
            detail: 'Nebenquests nur, wenn man mit der MSQ feststeckt. Regionalquests später im Endgame.',
            sources: ['yt-leveling'],
          },
          {
            id: 'feathers',
            text: 'Empyrean Traces („Federn“) unterwegs einsammeln',
            detail: 'Am Monolith in der Stadt gegen Wisdom Stones tauschen – die braucht man zum Skill-Leveln.',
            sources: ['yt-cleric-skills', 'yt-chanter-early'],
          },
          {
            id: 'hidden-dungeons',
            text: 'Versteckte Dungeons mitnehmen',
            detail: 'Geben Daevanion-Kristalle bzw. -Bücher.',
            sources: ['yt-leveling'],
          },
          {
            id: 'reach-45',
            text: 'Level 45 erreicht',
          },
        ],
      },
      {
        id: 'gear',
        kind: 'gear',
        title: 'Ausrüstung',
        items: [
          {
            id: 'max-plus5',
            text: 'Gear höchstens auf +5 verstärken',
            detail: 'Keine Enhancement Stones oder Kinah ins Leveling-Gear stecken – das echte Gearing startet mit 45.',
            sources: ['yt-leveling'],
          },
          {
            id: 'swap-extract',
            text: 'Besseres Gear direkt anlegen, altes extrahieren',
            sources: ['yt-leveling'],
          },
        ],
      },
      {
        id: 'skills',
        kind: 'skills',
        title: 'Skills',
        items: [
          {
            id: 'lmb',
            text: 'Linksklick-Skill leveln',
            detail: 'Regeneriert MP – bei allen Klassen wichtig.',
            sources: ['yt-leveling'],
          },
          {
            id: 'rmb',
            text: 'Rechtsklick-Skill leveln',
            detail: 'Stärkere Variante des Basis-Skills, kein Cooldown.',
            sources: ['yt-leveling'],
          },
          {
            id: 'stagger',
            text: 'Stagger-Skill leveln',
            sources: ['yt-leveling'],
          },
          {
            id: 'reset-info',
            text: 'Verstanden: Skills & Stigmas lassen sich kostenlos zurücksetzen',
            detail: 'Fehlverteilungen sind kein Problem – jederzeit resetten und neu verteilen.',
            sources: ['yt-leveling'],
          },
        ],
      },
      {
        id: 'daevanion',
        kind: 'daevanion',
        title: 'Daevanion-Board',
        items: [
          {
            id: 'nezakan-corners',
            text: 'Nezakan: zuerst die Ecken',
            detail: 'Ecken geben z. B. Combat Speed, Defense Bonus, Cooldown Reduction. Mitte erst im Endgame.',
            sources: ['yt-leveling'],
          },
          {
            id: 'zikel-corners',
            text: 'Zikel: zuerst die Ecken',
            detail: 'Damage Boost, Accuracy Bonus, Damage Tolerance.',
            sources: ['yt-leveling'],
          },
          {
            id: 'vaizel-corners',
            text: 'Vaizel: zuerst die Ecken',
            sources: ['yt-leveling'],
          },
          {
            id: 'triniel-corners',
            text: 'Triniel: zuerst die Ecken',
            detail: 'U. a. Multi-Hit Chance.',
            sources: ['yt-leveling'],
          },
        ],
      },
    ],
  },
  {
    id: 'endgame-basics',
    title: 'Endgame-Grundlagen (alle Klassen)',
    description: 'Systeme, die mit 45 freischalten und für jede Klasse gelten.',
    sections: [
      {
        id: 'gear',
        kind: 'gear',
        title: 'Ausrüstung',
        items: [
          {
            id: 'decide-gear-path',
            text: 'Gear-Weg festlegen: PvE-Gear (Crafting) oder Abyss-Gear',
            detail:
              'Bestes PvE-Gear kommt aus Crafting (PvE Damage Boost). Laut Gladiator-Video ist für F2P das Abyss-Gear (Abyss-Punkte) aktuell oft effizienter.',
            sources: ['yt-leveling', 'yt-glad-endgame'],
          },
          {
            id: 'dungeon-gear',
            text: 'Dungeon-Gear als Übergang nutzen',
            sources: ['yt-leveling'],
          },
          {
            id: 'enhance-stones',
            text: 'Enhancement Stones systematisch farmen',
            sources: ['yt-leveling'],
          },
          {
            id: 'weapon-first',
            text: 'Waffe (und Offhand) zuerst hochziehen, Accessoires zuletzt',
            detail: 'Richtwert aus dem Gladiator-Guide: Waffe/Offhand auf +15, erst dann Ringe, Ohrringe, Kette.',
            sources: ['yt-glad-endgame'],
          },
        ],
      },
      {
        id: 'systems',
        kind: 'systems',
        title: 'Systeme',
        items: [
          {
            id: 'daevanion-45',
            text: 'Daevanion-Boards Ariel und Asphel beginnen',
            detail: 'Ab 45 verfügbar (Marchutan und Yustiel folgen später). Ariel eher PvE, Asphel eher PvP.',
            sources: ['yt-leveling', 'yt-ranger-daevanion'],
          },
          {
            id: 'daevanion-books',
            text: 'Daevanion-Bücher sammeln',
            detail:
              'Exploration-Dungeons (Heimat- und Feindkarte), Regionalquests, Shugo-Festival-Token, Nightmare-Shop.',
            sources: ['yt-ranger-daevanion'],
          },
          {
            id: 'monolith',
            text: 'Monolith weiter ausbauen (Wisdom Stones)',
            sources: ['yt-cleric-skills', 'yt-chanter-early'],
          },
          {
            id: 'stigma-shards',
            text: 'Stigma Shards sammeln',
            detail: 'Ascension-Quests, PvP-/Abyss-Shop, Regional-Rift-Quests; Fragmente aus Conquest/Transcendence.',
            sources: ['yt-cleric-skills', 'yt-leveling'],
          },
          {
            id: 'arcana-unlock',
            text: 'Arcana freischalten und erste Karten einsetzen',
            detail:
              'Karten v. a. aus Transcendence. Chalice/Parchment/Compass = aktive Skills, Bell/Mirror/Scale = passive Skills.',
            sources: ['yt-cleric-skills'],
          },
          {
            id: 'arcana-feed',
            text: 'Doppelte Arcana-Karten in aktive Karten verfüttern',
            detail: 'Karten nach Skill-Boni für die eigenen Kernskills wählen, nicht nur nach Combat Power.',
            sources: ['yt-cleric-skills'],
          },
          {
            id: 'wings',
            text: 'Wings sammeln (Besitz-Effekte zählen)',
            detail: 'Für PvE Wings mit Boss Attack ausrüsten; Skin kann separat gewählt werden.',
            sources: ['yt-glad-endgame'],
          },
          {
            id: 'title',
            text: 'PvE-Titel ausrüsten',
            sources: ['yt-glad-endgame'],
          },
        ],
      },
    ],
  },
];
