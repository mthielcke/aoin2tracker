import { gladiatorPveDpsDetails } from '../details/gladiator-pve-dps';
import { gladiatorPveLevelingDetails } from '../details/gladiator-pve-leveling';
import type { ClassDef } from '../types';

export const gladiator: ClassDef = {
  id: 'gladiator',
  name: 'Gladiator',
  role: 'Melee-DPS / Bruiser',
  weapon: 'Greatsword',
  summary: 'Robuster Nahkämpfer mit starkem AoE. Gilt als sicherste Wahl für einen ersten Main.',
  builds: [
    {
      id: 'gladiator-pve-dps',
      name: 'DPS (Greatsword)',
      mode: 'pve',
      summary:
        'Rending Blow spammen, Overhead Slam bei jedem Proc; Rage Burst und Ruinous Blow als Burst. Mana-Problem über Rending Blow Spez. 5 lösen.',
      details: gladiatorPveDpsDetails,
      phases: [
        {
          id: 'leveling',
          title: 'Leveling – Gladiator',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'core-three',
                  text: 'Overhead Slam und Rending Blow priorisieren, Ruinous Blow ab Level 14 dazu',
                  sources: ['wakayashi-glad', 'gege-glad'],
                },
                {
                  id: 'leaping-slam',
                  text: 'Leaping Slam für Mobilität und AoE nutzen',
                  sources: ['gege-glad'],
                },
                {
                  id: 'keen-12',
                  text: 'Keen Strike auf 12 und zwischen Rending Blows einweben (Mana)',
                  detail: 'Ca. 100 MP pro Treffer. Links-, Rechtsklick – der Rechtsklick bricht die Animation ab.',
                  sources: ['yt-glad-montu', 'yt-glad-endgame'],
                },
                {
                  id: 'play-aoe',
                  text: 'Beim Leveln Gruppen pullen statt einzeln kämpfen',
                  detail: 'Die Klasse ist auf Gruppen-Fights ausgelegt – so übt man direkt das Endgame-Spiel.',
                  sources: ['gege-glad'],
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
              title: 'Skill-Prioritäten',
              items: [
                {
                  id: 'top-three',
                  text: 'Auf Lv. 20: Overhead Slam, Rending Blow, Ruinous Blow',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'season1-levels',
                  text: 'Global Season 1: die drei Kernskills über zwei Ringe auf 16 (Basis 14), per Arcana auf 20 – zuerst Overhead Slam und Rending Blow',
                  sources: ['yt-glad-arthars', 'wakayashi-glad', 'yt-plan-madsin'],
                },
                {
                  id: 'secondary',
                  text: 'Danach: Mocking Blade und Defiance auf 16, alle übrigen Skills auf 12',
                  detail: 'Nicht alle Skills gleichmäßig leveln – nur die drei Kernskills brauchen hohe Level. Sword Aura Rampage braucht kein Ziel-Level.',
                  sources: ['wakayashi-glad', 'yt-glad-arthars', 'gege-glad'],
                },
              ],
            },
            {
              id: 'specs',
              kind: 'skills',
              title: 'Skill-Spezialisierungen',
              items: [
                {
                  id: 'spec-rending-5',
                  text: 'Rending Blow Spez. 5 (rot): MP bei Crit – so früh wie möglich',
                  detail: 'Löst das Mana-Problem; danach kann Keen Strike aus der Rotation. Priorität: Spez. 3 (Bewegen) → 5 (MP bei Crit) → 4 (Single-Target).',
                  sources: ['yt-glad-montu', 'wakayashi-glad', 'yt-glad-arthars'],
                },
                {
                  id: 'spec-overhead-5',
                  text: 'Overhead Slam Spez. 5 (kein Cooldown) + 4 (garantierter Crit) + 3 (Chain)',
                  sources: ['yt-glad-montu', 'wakayashi-glad', 'yt-glad-arthars'],
                },
                {
                  id: 'spec-ruinous-global',
                  text: 'Ruinous Blow: Spez. 4 (Extra-Schaden) → 5 (Block/Evasion ignorieren, Multi-Hit) → 3 (+30 % Skill-Crit)',
                  sources: ['wakayashi-glad', 'yt-glad-arthars'],
                },
                {
                  id: 'spec-mocking-global',
                  text: 'Mocking Blade: HP-Absorb als Notfall-Heilung',
                  sources: ['yt-glad-arthars'],
                },
                {
                  id: 'spec-rush',
                  text: 'Rush Strike: Stamina bei Treffer',
                  detail: 'Hält die Ausdauer fürs Ausweichen bei Mechaniken hoch.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-crushing-global',
                  text: 'Crushing Wave: HP-Absorb + Cooldown-Reset bei Crit – zum Farmen, nicht im Boss-Kampf',
                  sources: ['yt-glad-arthars'],
                },
                {
                  id: 'spec-leaping-global',
                  text: 'Leaping Slam: Prepare for Battle bei Cast + Cooldown-Reset bei Kill',
                  sources: ['yt-glad-arthars'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'stigma-core',
                  text: 'Fest: Lunge Stance 20 und Rage Burst 5',
                  detail: 'Lunge Stance: Crits senken mit 50 % Chance alle Cooldowns um 1 s – dadurch laufen Rage Burst und Overhead Slam praktisch dauerhaft.',
                  sources: ['wakayashi-glad', 'yt-glad-arthars'],
                },
                {
                  id: 'stigma-presets',
                  text: 'Zwei Presets: mit Templar Zikel’s Blessing + Lifestealing Blade – ohne Templar Focused Block statt Zikel’s',
                  detail: 'Ohne Block löst Experienced Counterstrike nicht aus. Focused Block (Lv. 5) übernimmt das, wenn kein Templar blockt.',
                  sources: ['wakayashi-glad', 'yt-glad-arthars'],
                },
                {
                  id: 'rage-burst',
                  text: 'Rage Burst ausrüsten – 10 s Overhead Slam ohne Proc',
                  detail: 'Auf Cooldown nutzen; Lunge Stance senkt Cooldowns bei Crits.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'lifesteal-blade',
                  text: 'Lifestealing Blade – Schaden und Lebensraub für die Gruppe',
                  sources: ['yt-glad-montu', 'gege-glad'],
                },
                {
                  id: 'zikel-global',
                  text: 'Zikel’s Blessing auf 10–20, Lifestealing Blade auf 15–20',
                  detail: 'Wakayashi: Zikel’s 20, Lifestealing 15. Arthars: Zikel’s 10.',
                  sources: ['wakayashi-glad', 'yt-glad-arthars'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats & Gear',
              items: [
                {
                  id: 'stat-order',
                  text: 'Stat-Reihenfolge: Damage Amp → Weapon Damage Amp → Power → Accuracy → Crit → Attack Speed',
                  detail: 'Accuracy nicht vernachlässigen – Misses kosten echten DPS.',
                  sources: ['gege-glad'],
                },
                {
                  id: 'greatsword',
                  text: 'Greatsword als Waffe',
                  sources: ['gege-glad'],
                },
                {
                  id: 'block-armor',
                  text: 'Auf Rüstung Block statt Evasion bevorzugen',
                  sources: ['yt-glad-endgame'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation',
              items: [
                {
                  id: 'core-loop',
                  text: 'Grundschleife: Buffs auf Cooldown → Ruinous Blow → Rage Burst → Rending Blow spammen, Overhead Slam bei jedem Proc',
                  detail: 'Overhead Slam hat gegen Bosse 7 % Proc-Chance pro Treffer – ständig drücken.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'macro',
                  text: 'Makro (rechte Maustaste halten): Lunge Stance → Ruinous Blow → Rage Burst, je 10 ms',
                  detail: 'Bis ca. Level 16 zusätzlich Linksklick (Keen Strike) halten – Mana ist knapp und Overhead Slam läuft noch nicht dauerhaft. Danach nur noch das Makro. Immer von vorn angreifen.',
                  sources: ['wakayashi-glad'],
                },
                {
                  id: 'stagger-phase',
                  text: 'Stagger-Phase: Mocking Blade → Leaping Slam → Ankle Slice',
                  detail: 'Mocking Blade = 15 Stagger, Leaping Slam/Ankle Slice = 10, Crushing Wave = 5.',
                  sources: ['yt-glad-endgame'],
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
              id: 'daevanion',
              kind: 'daevanion',
              title: 'Daevanion',
              items: [
                {
                  id: 'dae-core',
                  text: 'Skill-Knoten für Overhead Slam, Rending Blow, Ruinous Blow',
                  sources: ['gege-glad'],
                },
                {
                  id: 'dae-secondary',
                  text: 'Danach Offensive, Accuracy und Sustain',
                  sources: ['gege-glad'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'passives-dmg',
                  text: 'Schadens-Passives: Experienced Counterstrike, Murderous Burst, Attack Preparation, Impact Hit – Protection Armor und Destructive Impulse weglassen',
                  sources: ['wakayashi-glad', 'yt-glad-arthars', 'yt-glad-montu'],
                },
              ],
            },
            {
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana & Sonstiges',
              items: [
                {
                  id: 'arcana-set',
                  text: 'Arcana: Primal Vigor 4er-Set für die meisten Inhalte',
                  detail: 'Reicht das Mana nicht: 3er Primal Vigor plus 2er Magic Armor. Karten mit Illusion (Cooldown-Reduktion) nie für den Gladiator.',
                  sources: ['yt-glad-endgame', 'yt-glad-arthars'],
                },
                {
                  id: 'runes',
                  text: 'PvE-Damage-Tolerance-Runen bis +4 (danach hohe Bruchgefahr)',
                  sources: ['yt-glad-endgame'],
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
                  id: 'pve-weapon',
                  text: 'PvE-Waffe mit PvE Damage Boost (True Dragon / Splendid White Dragon)',
                  detail: 'Ohne Marktplatz-Zugang sehr zeitaufwendig – dann Abyss-Gear weiter nutzen.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'accessories-15',
                  text: 'DPS-Accessoires auf +15',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'pve-wings',
                  text: 'BiS-PvE-Wings (Forest / Valkron Sky Island, 95 Boss Attack)',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'soulbinds',
                  text: 'Soul Binds pro Teil nach Priorität rollen (Tabelle in den Build-Details)',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'genius-smite',
                  text: 'Genius Insight: Slot 3 und 9 auf allen fünf Boards Smite ≥ 2 % – vor allem anderen',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'arcana-multi',
                  text: 'Mehrere Arcana-Sets für verschiedene Inhalte aufbauen',
                  sources: ['yt-glad-endgame'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gladiator-pve-leveling',
      name: 'Leveling (ohne Ruinous Blow)',
      mode: 'pve',
      summary:
        'Zum Hochleveln: Keen Strike, Rending Blow und Overhead Slam auf 8 für die ersten Spezialisierungen, danach Keen Strike 12 für −1 s Ruinous-Blow-Cooldown pro Treffer. Ruinous Blow bleibt auf 1. Mit 45 auf den DPS-Build wechseln.',
      details: gladiatorPveLevelingDetails,
      phases: [
        {
          id: 'to-20',
          title: 'Level 1–20 – Skillverteilung',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Aktive Skills',
              items: [
                {
                  id: 'keen-8',
                  text: 'Keen Strike auf 8 – Spezialisierung Multi-Hit',
                  detail: 'Linksklick-Filler zwischen Rending Blows, stellt Mana wieder her.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'rending-8',
                  text: 'Rending Blow auf 8+ – Spezialisierung „Bewegen während des Skills“',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'overhead-8',
                  text: 'Overhead Slam auf 8+ – Spezialisierung Chain-Skill',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'crushing-5',
                  text: 'Crushing Wave auf 5 – AoE für Mob-Gruppen',
                  sources: ['gege-glad'],
                },
                {
                  id: 'rush-5',
                  text: 'Rush Strike auf 5+ – Gap-Closer',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'leaping-8',
                  text: 'Leaping Slam auf 8 – Spezialisierung Cooldown-Reset bei Kill (zum Leveln und Farmen)',
                  detail: 'Wenn die Punkte bis 20 nicht reichen, direkt danach. Für Endgame-Dungeons später ggf. wieder herausnehmen oder auf Spez. 1 (Prepare for Battle bei Cast) umstellen.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'ruinous-skip',
                  text: 'Ruinous Blow nicht leveln – im TW-Stand keine eigene Cooldown-Spezialisierung',
                  detail: 'Die Knoten (Skill Speed, Reichweite, Skill-Crit, Extra-Schaden, Block/Evasion ignorieren) lohnen sich bei dem langen Cooldown kaum. Den Buff trotzdem vor Gruppen und Bossen nutzen – den Cooldown senkt ab Level 21 Keen Strike 12.',
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passive Skills',
              items: [
                {
                  id: 'blood-5',
                  text: 'Blood Absorption auf 5 – Lebensraub, weniger Pausen',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'attack-prep-4',
                  text: 'Attack Preparation auf 4 – Damage Boost, Defense, Accuracy',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'impact-3',
                  text: 'Impact Hit auf 3 – Impact-Chance und Double Hit',
                  sources: ['yt-glad-montu'],
                },
              ],
            },
            {
              id: 'play',
              kind: 'rotation',
              title: 'Spielweise',
              items: [
                {
                  id: 'pull-groups',
                  text: 'Gruppen pullen: Rush Strike oder Leaping Slam rein, Crushing Wave, dann Rending Blow im Laufen spammen',
                  sources: ['gege-glad'],
                },
                {
                  id: 'weave-keen',
                  text: 'Keen Strike zwischen Rending Blows einweben, solange Mana fehlt',
                  detail: 'Links-, Rechtsklick – der Rechtsklick bricht die Animation ab.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'daevanion-corners',
                  text: 'Daevanion-Punkte in die Ecken der Boards – die Mitte erst mit 45',
                  sources: ['yt-leveling'],
                },
              ],
            },
          ],
        },
        {
          id: 'to-45',
          title: 'Level 21–45',
          sections: [
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills',
              items: [
                {
                  id: 'keen-12',
                  text: 'Direkt nach Level 20: Keen Strike auf 12 – Spez. 4 „−1 s Cooldown auf Ruinous Blow bei Treffer“',
                  detail: 'Da Keen Strike ständig zwischen Rending Blows eingewebt wird, ist der Buff „Prepare for Battle“ deutlich öfter oben.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'core-12',
                  text: 'Rending Blow und Overhead Slam auf 12',
                  detail: 'Spez. 4: Overhead Slam garantierter Crit, Rending Blow mehr Single-Target-Schaden.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'core-16',
                  text: 'Danach beide auf 16 – Overhead Slam ohne Cooldown, Rending Blow MP bei Crit',
                  detail: 'Rending Blow Spez. 5 löst das Mana-Problem; danach kann Keen Strike aus der Rotation.',
                  sources: ['yt-glad-montu'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'stigma-shards',
                  text: 'Ab Level 22 pro Level ein Stigma Shard – Stigmas sofort ausrüsten',
                  sources: ['yt-lvl-krix', 'yt-gear-dankrng'],
                },
                {
                  id: 'block-first',
                  text: 'Erster Stigma: Focused Block – Blocken buffet über Experienced Counterstrike dich und die Gruppe (+15 %)',
                  sources: ['yt-glad-arthars'],
                },
                {
                  id: 'rage-lunge',
                  text: 'Danach Rage Burst (Lv. 5 reicht zunächst), Lunge Stance und Zikel’s Blessing – Global hat nur 4 Slots',
                  detail: 'Rage Burst: 10 s Overhead Slam ohne Proc. Lunge Stance ist später der wichtigste Level-20-Stigma.',
                  sources: ['yt-glad-arthars', 'yt-glad-montu'],
                },
              ],
            },
            {
              id: 'switch',
              kind: 'quests',
              title: 'Mit 45',
              items: [
                {
                  id: 'switch-build',
                  text: 'Im Tracker auf „DPS (Greatsword)“ wechseln und Ruinous Blow neu bewerten',
                  detail: 'Der Endgame-Guide hält Ruinous Blow Level 20 im PvE für lohnend – sobald genug Punkte da sind.',
                  sources: ['yt-glad-endgame'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
