import { gladiatorPveDpsDetails } from '../details/gladiator-pve-dps';
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
                  text: 'Rending Blow → Overhead Slam → Crushing Wave priorisieren',
                  sources: ['gege-glad'],
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
                  id: 'max-core',
                  text: 'Max: Rending Blow, Overhead Slam, Crushing Wave',
                  detail: 'Laut Montu ist Crushing Wave nur zum Mobben wichtig – Ruinous Blow hat Vorrang.',
                  sources: ['gege-glad'],
                  uncertain: true,
                },
                {
                  id: 'high',
                  text: 'Danach: Ruinous Blow, Sword Aura Rampage, Keen Strike',
                  detail: 'Nicht alle Skills gleichmäßig leveln – das ist laut GEGEBASE der häufigste Fehler.',
                  sources: ['gege-glad'],
                },
                {
                  id: 'keen-rending-high',
                  text: 'Keen Strike und Rending Blow hoch leveln (Patch-Buff)',
                  detail: 'Im Endgame-Video: beide ca. 10 + Bonuslevel. Machen einen großen Teil des Schadens aus.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'rampage-12',
                  text: 'Sword Aura Rampage auf 12 (Multi-Hit), später 16',
                  detail: 'Level 16 gibt Cooldown-Reduktion bei Stagger – nutzlos gegen Bosse ohne Stagger.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'ruinous-20',
                  text: 'Ruinous Blow: Level 20 lohnt sich für PvE, 16 kaum',
                  sources: ['yt-glad-endgame'],
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
                  detail: 'Löst das Mana-Problem; danach kann Keen Strike aus der Rotation. Dazu Spez. 3 und 4.',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'spec-overhead-5',
                  text: 'Overhead Slam Spez. 5 (kein Cooldown) + 4 (garantierter Crit) + 3 (Chain)',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'spec-ruinous',
                  text: 'Ruinous Blow Spez. 1, 4 und 5 (Tempo, Buff-Dauer, Multi-Hit)',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'spec-mocking',
                  text: 'Mocking Blade: Absorb HP + Multi-Hit',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-overhead',
                  text: 'Overhead Slam: Absorb HP + 7 % Reset-Chance bei Boss-Angriff',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-aerial',
                  text: 'Aerial Snare: 5 % bzw. 7 % Aktivierungschance + 50 % Cooldown',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-rush',
                  text: 'Rush Strike: Stamina bei Treffer',
                  detail: 'Hält die Ausdauer fürs Ausweichen bei Mechaniken hoch.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-crushing',
                  text: 'Crushing Wave: Pull gegen Mobs, Absorb HP gegen Bosse',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'spec-leaping',
                  text: 'Leaping Slam: Damage Tolerance oder Chance auf Ankle Slice',
                  sources: ['yt-glad-endgame'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
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
                  id: 'blade-toss-5',
                  text: 'Blade Toss auf 5',
                  detail: 'Senkt die Boss-Verteidigung; Level 5 reicht.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'zikel-15',
                  text: 'Zikel’s Blessing auf 15 (so früh wie möglich)',
                  detail: 'Multi-Hit-Chance und mehr Stagger-Schaden für die Gruppe.',
                  sources: ['yt-glad-endgame', 'gege-glad'],
                },
                {
                  id: 'tenacious-15',
                  text: 'Tenaciousness auf 15 (+20 % Attack)',
                  sources: ['yt-glad-endgame'],
                  uncertain: true,
                },
                {
                  id: 'transition',
                  text: 'Übergang: 10 / 5 / 5 verteilen, Lunge Stance auf 5',
                  detail: 'Lunge Stance: −20 % MP-Kosten auf alle Skills.',
                  sources: ['yt-glad-endgame'],
                  uncertain: true,
                },
                {
                  id: 'alt-gege',
                  text: 'Alternative prüfen: Assault Stance, Rage Burst, Lifestealing Blade',
                  detail: 'Empfehlung von GEGEBASE – weicht vom Video ab. Lifestealing Blade für Solo/Sustain.',
                  sources: ['gege-glad'],
                  uncertain: true,
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
                  id: 'opener',
                  text: 'Opener: Lunge Stance → Zikel’s Blessing → Blade Toss → Ruinous Blow',
                  detail:
                    'Ruinous Blow gibt „Prepare for Battle“ (+10 % Schaden). Danach Aerial Snare + Overhead Slam.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'stagger-phase',
                  text: 'Stagger-Phase: Mocking Blade → Leaping Slam → Ankle Slice',
                  detail: 'Mocking Blade = 15 Stagger, Leaping Slam/Ankle Slice = 10, Crushing Wave = 5.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'filler',
                  text: 'Filler: Keen Strike → Rending Blow (Animation Cancel) → Crushing Wave',
                  detail: 'Links-, Rechtsklick, Cancel, Crushing Wave. Lange Animationen nur in sicheren Fenstern.',
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
                  text: 'Skill-Knoten für Rending Blow, Overhead Slam, Crushing Wave',
                  sources: ['gege-glad'],
                },
                {
                  id: 'dae-secondary',
                  text: 'Dann Ruinous Blow, Sword Aura Rampage; danach Offensive, Accuracy, Sustain',
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
                  text: 'Schadens-Passives: Experienced Counterstrike, Attack Preparation, Murderous Burst, Impact Hit',
                  sources: ['yt-glad-montu'],
                },
                {
                  id: 'passives-core',
                  text: 'Identify Weakness, Protection Armor, Survival Stance, Attack Preparation',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'blood-absorption',
                  text: 'Blood Absorption auf 10',
                  detail: 'Sehr stark; Punkte können reduziert werden, wenn Bonuslevel aus anderen Quellen kommen.',
                  sources: ['yt-glad-endgame'],
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
                  detail: 'Magic Armor (2er/4er) für Survival in hohen Stufen und MP-Sustain.',
                  sources: ['yt-glad-endgame'],
                },
                {
                  id: 'illusion-cdr',
                  text: 'Cooldown-Reduktion über den Illusion-Stat ausbauen',
                  sources: ['yt-glad-endgame'],
                  uncertain: true,
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
  ],
};
