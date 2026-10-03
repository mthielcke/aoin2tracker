import type { BuildDetails, DetailSection } from '../types';
import { gladiatorPveDpsDetails } from './gladiator-pve-dps';

/** Abschnitte aus dem DPS-Guide, die beim Leveln helfen – ohne Hinweise, die Ruinous Blow priorisieren. */
const FROM_DPS = ['core', 'season1', 'mana', 'active', 'passives', 'stigmas', 'rotation', 'daevanion'];
const SKIP_BLOCKS = ['Top-Priorität beim Leveln', 'Faustregel'];

const dpsSections: DetailSection[] = gladiatorPveDpsDetails.sections
  .filter((s) => FROM_DPS.includes(s.id))
  .map((s, i) => ({
    ...s,
    id: `dps-${s.id}`,
    title: `${s.title} (DPS-Guide)`,
    blocks: [
      ...(i === 0
        ? [
            {
              type: 'callout' as const,
              variant: 'primary' as const,
              title: 'Aus dem DPS-Guide übernommen',
              text: 'Die folgenden Abschnitte gelten für den Gladiator allgemein und beziehen sich teils aufs Endgame. Beim Leveln haben die Skillverteilung und die Spielweise oben Vorrang – insbesondere bleibt Ruinous Blow auf Level 1.',
            },
          ]
        : []),
      ...s.blocks.filter((b) => !('title' in b && b.title && SKIP_BLOCKS.includes(b.title))),
    ],
  }));

export const gladiatorPveLevelingDetails: BuildDetails = {
  intro:
    'Leveling-Variante auf Basis der DPS-Guides, mit einer bewussten Abweichung: Ruinous Blow wird beim Leveln nicht gesteigert. Im aktuellen TW-Stand hat er keine eigene Spezialisierung, die seinen Cooldown senkt – die Knoten (Skill Speed, Reichweite, Skill-Crit, Extra-Schaden, Block/Evasion ignorieren) bringen bei dem langen Cooldown wenig. Die Punkte fließen stattdessen in die Skills, die du ständig drückst. Den Cooldown übernimmt Keen Strike: Ab Skill-Level 12 senkt jeder Treffer den Cooldown von Ruinous Blow um 1 s.',
  sources: ['wakayashi-glad', 'yt-glad-arthars', 'yt-glad-montu', 'yt-glad-endgame', 'gege-glad', 'yt-leveling'],
  sections: [
    {
      id: 'level-20',
      title: 'Skillverteilung bis Level 20',
      blocks: [
        {
          type: 'callout',
          variant: 'primary',
          title: 'Spezialisierungen schalten mit dem Skill-Level frei',
          text: 'Skill-Level 8 öffnet die ersten drei Spezialisierungen, Level 12 die vierte, Level 16 die fünfte. Deshalb gehen die Kernskills zuerst genau auf 8.',
        },
        {
          type: 'table',
          columns: ['Skill', 'Ziel', 'Warum'],
          rows: [
            ['Keen Strike', '8', 'Spez. Multi-Hit – Linksklick-Filler, stellt Mana wieder her'],
            ['Rending Blow', '8+', 'Spez. „Bewegen während des Skills“ – Spam-Skill, jetzt mobil'],
            ['Overhead Slam', '8+', 'Spez. Chain-Skill – Hauptschaden bei jedem Proc'],
            ['Crushing Wave', '5', 'AoE für Mob-Gruppen'],
            ['Rush Strike', '5+', 'Gap-Closer, bleibt am Ziel'],
            ['Leaping Slam', '8', 'Spez. 3: Cooldown-Reset bei Kill – von Gruppe zu Gruppe springen. Reichen die Punkte nicht, direkt nach 20'],
            ['Keen Strike (direkt nach 20)', '12', 'Spez. 4: −1 s Cooldown auf Ruinous Blow pro Treffer – der Buff kommt öfter'],
            ['Ruinous Blow', '1', 'Nicht leveln – kein eigener Cooldown-Knoten, lange Abklingzeit'],
            ['Blood Absorption (passiv)', '5', 'Lebensraub – weniger Pausen zwischen Pulls'],
            ['Attack Preparation (passiv)', '4', 'Damage Boost, Defense, Accuracy'],
            ['Impact Hit (passiv)', '3', 'Impact-Chance und Double Hit'],
          ],
        },
      ],
    },
    {
      id: 'level-45',
      title: 'Level 21–45',
      blocks: [
        {
          type: 'text',
          text: 'Ab hier gilt die Priorität der DPS-Guides – nur ohne Ruinous Blow. Die folgenden Schritte sind aus Montu und dem Endgame-Guide abgeleitet und nicht speziell fürs Leveln getestet.',
        },
        {
          type: 'steps',
          items: [
            'Falls bis 20 nicht geschafft: Leaping Slam auf 8 (Cooldown-Reset bei Kill).',
            'Direkt nach Level 20: Keen Strike auf 12 und Spez. 4 wählen – jeder Treffer senkt den Cooldown von Ruinous Blow um 1 s.',
            'Rending Blow und Overhead Slam auf 12: Overhead Slam garantierter Crit, Rending Blow mehr Single-Target-Schaden.',
            'Danach beide auf 16: Overhead Slam ohne Cooldown, Rending Blow MP bei Crit – das löst das Mana-Problem.',
            'Ab Level 22 pro Level ein Stigma Shard: zuerst Focused Block (Gruppen-Buff über Blocken), dann Rage Burst, Lunge Stance und Zikel’s Blessing – auf Global nur 4 Slots.',
            'Daevanion beim Leveln: die Ecken der Boards zuerst, die Mitte mit 45 auffüllen.',
            'Mit 45 im Tracker auf „DPS (Greatsword)“ wechseln und Ruinous Blow neu bewerten – der Endgame-Guide hält Level 20 im PvE für lohnend.',
          ],
        },
      ],
    },
    {
      id: 'rotation',
      title: 'Spielweise beim Leveln',
      blocks: [
        {
          type: 'list',
          items: [
            'Gruppen pullen: Rush Strike oder Leaping Slam rein, Crushing Wave für die AoE. Stirbt ein Gegner, ist Leaping Slam sofort wieder bereit für die nächste Gruppe.',
            'Für Endgame-Dungeons die Punkte aus Leaping Slam ggf. wieder herausnehmen bzw. auf Spez. 1 (Prepare for Battle bei Cast) umstellen.',
            'Rending Blow im Laufen spammen, Overhead Slam bei jedem Proc – der Chain-Skill hängt direkt dran.',
            'Keen Strike zwischen Rending Blows einweben (Links-, Rechtsklick) – bringt Mana und ab Level 12 auch Cooldown für Ruinous Blow.',
            'Ruinous Blow auf Cooldown vor großen Gruppen und Quest-Bossen nutzen – der Buff „Prepare for Battle“ bleibt, und dank Keen Strike ist er schneller wieder da.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Stand prüfen',
          text: 'Die Spezialisierungen stammen aus dem aktuellen TW-Client (Screenshots der Skills). Im Global-Client prüfen, ob Keen Strike Spez. 4 dort gleich funktioniert und ob Ruinous Blow eine eigene Cooldown-Spezialisierung bekommt.',
        },
      ],
    },
    ...dpsSections,
  ],
};
