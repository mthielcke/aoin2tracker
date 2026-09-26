import type { BuildDetails } from '../types';

export const gladiatorPveLevelingDetails: BuildDetails = {
  intro:
    'Leveling-Variante auf Basis der DPS-Guides, mit einer bewussten Abweichung: Ruinous Blow wird beim Leveln nicht gesteigert. Im aktuellen TW-Stand gibt es keine Spezialisierung, die seinen Cooldown senkt – die Knoten (Skill Speed, Reichweite, Skill-Crit, Extra-Schaden, Block/Evasion ignorieren) bringen bei dem langen Cooldown wenig. Die Punkte fließen stattdessen in die Skills, die du ständig drückst.',
  sources: ['yt-glad-montu', 'yt-glad-endgame', 'gege-glad', 'yt-leveling'],
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
            ['Ruinous Blow', '1', 'Nicht leveln – kein Cooldown-Knoten, lange Abklingzeit'],
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
            'Rending Blow und Overhead Slam auf 12: Overhead Slam garantierter Crit, Rending Blow mehr Single-Target-Schaden.',
            'Danach beide auf 16: Overhead Slam ohne Cooldown, Rending Blow MP bei Crit – das löst das Mana-Problem.',
            'Keen Strike bleibt auf 8, solange das Mana reicht. Wird es knapp, Richtung 12 (Montu).',
            'Ab Level 22 pro Level ein Stigma Shard: Rage Burst und Lifestealing Blade zuerst.',
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
            'Gruppen pullen: Rush Strike rein, Crushing Wave für die AoE.',
            'Rending Blow im Laufen spammen, Overhead Slam bei jedem Proc – der Chain-Skill hängt direkt dran.',
            'Keen Strike zwischen Rending Blows einweben (Links-, Rechtsklick), solange Mana fehlt.',
            'Ruinous Blow trotzdem vor großen Gruppen und Quest-Bossen nutzen – der Buff „Prepare for Battle“ bleibt.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Stand prüfen',
          text: 'Die Ruinous-Blow-Spezialisierungen stammen aus dem aktuellen TW-Client (Screenshot vom Skill). Kommt im Global-Client eine Cooldown-Spezialisierung dazu, lohnt sich Ruinous Blow wieder früher.',
        },
      ],
    },
  ],
};
