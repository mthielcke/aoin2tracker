import type { BuildDetails } from '../types';

export const assassinPveDpsDetails: BuildDetails = {
  intro:
    'Der Assassin ist der Burst-Nahkämpfer: Savage Roar setzt Insignien auf das Ziel, Insignia Explosion bringt sie zur Detonation – und alles trifft deutlich härter von hinten. Im Dungeon konkurrierst du nicht um AoE, sondern darum, wie schnell das große Einzelziel fällt.',
  sources: ['yt-assassin-early', 'assassin-manual', 'gege-assassin', 'vortex-assassin', 'yt-assassin-macro'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Insignien: Savage Roar baut den Debuff auf dem Ziel auf, Insignia Explosion bringt ihn zur Detonation – dein definierender Burst.',
            'Rear-Position: Rückenschaden ist ein eigener Multiplikator – Schaden = (1 + Damage + PvE + Boss + Rasse) × (1 + Rear-Boost). Ziel: ca. 80 % der Zeit hinter dem Boss.',
            'Illusive Clone: Solange er aktiv ist, verliert Heart Gore bei Crits seinen Cooldown – du spammst ihn.',
            'Lebensraub-Klasse: Frisch 45 hält dich HP-Absorb über mehrere Spezialisierungen am Leben.',
            'Ketten immer vollständig: Quick-Slice- und Savage-Roar-Kette jeweils alle drei Treffer durchziehen.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Zwei Stände',
          text: 'Das Beginner-Video beschreibt frisch 45 zum Global-Start (ca. 240 Skillpunkte). Das Field Manual beschreibt KR/TW „Chapter 1“ (Level 50, Stigmas bis 25) – dort genannte Level und Stigma-Stufen sind ein Ausblick, global noch nicht erreichbar.',
        },
      ],
    },
    {
      id: 'names',
      title: 'Skill-Namen je Quelle',
      blocks: [
        {
          type: 'text',
          text: 'Die Quellen übersetzen die Skills sehr unterschiedlich. Auf dieser Seite werden die Namen aus GEGEBASE/Field Manual genutzt.',
        },
        {
          type: 'table',
          columns: ['Diese Seite', 'Vortex (KR-Übersetzung)', 'Im Video gehört'],
          rows: [
            ['Quick Slice', 'Quick Slash / Quick Back', '„quick silence“ (Auto-Attack)'],
            ['Savage Roar', 'Roar of the Beast', '„roar“'],
            ['Heart Gore', 'Heart Stab', '„hurt grow“'],
            ['Insignia Explosion', 'Rune Burst / Rune Explosion', '„inside explosion“'],
            ['Shadowstrike', 'Surprise / Stealth Attack', '„shadow strike“'],
            ['Storm Rampage', 'Storm Slash / Storm Blade', '„rampage“'],
            ['Whirlwind Slice', 'Whirlwind Slash', '„world silence“'],
            ['Flash Slice', 'Dazzling Slash', '„flesh silence“'],
            ['Infiltrate', 'Infiltration', 'Sprung-Skill'],
            ['Savage Fang', 'Fangs / Claw of the Beast', '„saving frank“'],
            ['Illusive Clone', 'Phantom Clone', '„illusion clone“'],
            ['Triniel’s Dagger', 'Treniel’s Dagger', '„trailing dagger“'],
            ['Throw Shadowblade', 'Shadow Throw', '„throwing a shadow blade“'],
            ['Rear Smite', 'Backstab', '–'],
            ['Exploit Weakness', 'Exploit Opening', '–'],
          ],
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana & Überleben (frisch 45)',
      blocks: [
        {
          type: 'steps',
          items: [
            'Quick Slice ist dein Auto-Attack: früh Spezialisierung MP – mit ca. 3k Mana ist Mana knapp.',
            'Aion-1-Modus (Tab-Target): Nach jedem Skill läuft Quick Slice automatisch weiter und lädt Mana. Im Aion-2-Modus (Action Combat) bleibt der Charakter stehen.',
            'Überleben über HP-Absorb: Ambush, Storm Rampage und Shadow Fall (10 %) auf HP-Absorb, Heart Gore auf HP.',
            'Mit besserem Gear (mehr Mana, bessere Regeneration) Quick Slice auf HP und Heart Gore auf Crit umstellen.',
          ],
        },
      ],
    },
    {
      id: 'active',
      title: 'Aktive Skills (frisch 45)',
      blocks: [
        {
          type: 'text',
          text: 'Setup aus dem Beginner-Video. Die Spezialisierungen werden dort beim Namen genannt; die Slot-Nummern fürs Endgame stehen weiter unten.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Insignia Explosion',
              priority: 'top',
              target: 'max',
              summary: 'Detoniert die Insignien. Spezialisierung: Multi-Hit (Stun und Stack-Erhalt sind PvP).',
              note: 'Seit 26.08. +10 % PvE-Schaden.',
            },
            {
              name: 'Savage Roar',
              priority: 'top',
              target: 'Lv. 10',
              summary: 'Wird gespammt und baut den Insignien-Debuff auf. Spezialisierung: 30 % Skill-Tempo; alternativ MP-Kosten (wenig Auto-Attack) oder Single-Target-Schaden (Nightmare-Bosse).',
            },
            {
              name: 'Quick Slice',
              priority: 'top',
              summary: 'Auto-Attack. Früh Spezialisierung MP, später HP.',
              note: 'Kette Quick Slice → Breaking Slice → Swift Slice seit 26.08. +20 % PvE.',
            },
            {
              name: 'Heart Gore',
              priority: 'high',
              target: 'Lv. 8–10',
              summary: 'Kommt nach Crits (5 s Cooldown) – mit Illusive Clone ohne Cooldown. Früh Spezialisierung HP, später Crit.',
              note: 'Lebensraub per Patch von 1,5 % auf 0,7 % gesenkt – als Schadensskill nutzen, nicht als Heilung.',
            },
            {
              name: 'Shadowstrike',
              priority: 'high',
              target: 'Lv. 8',
              summary: 'Bringt dich hinter das Ziel. Spezialisierung: Crit-Damage-Buff für 5 s.',
            },
            {
              name: 'Ambush',
              priority: 'high',
              target: 'Lv. 8',
              summary: 'Spezialisierung: HP-Absorb – du nimmst früh viel Schaden.',
            },
            {
              name: 'Shadow Fall',
              priority: 'high',
              summary: 'Sehr hoher Schaden plus 10 % HP-Absorb – so lassen.',
            },
            {
              name: 'Storm Rampage',
              priority: 'mid',
              summary: 'Nur gegen gestaggerte Bosse. Spezialisierung: HP-Absorb.',
            },
            {
              name: 'Whirlwind Slice',
              priority: 'mid',
              summary: 'Zum Farmen AoE, gegen Einzelbosse (Nightmare) Single-Target.',
            },
            {
              name: 'Flash Slice',
              priority: 'mid',
              summary: 'Spezialisierung: mehr Ziele. Die Blind-Dauer ist nur für PvP.',
            },
            {
              name: 'Infiltrate',
              priority: 'mid',
              summary: 'Sprung zum Gegner – Spezialisierung: mehr Reichweite, um die Lücke als Nahkämpfer zu schließen.',
            },
            {
              name: 'Defiance',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Befreit aus CC; Level 8 für die HP-Wiederherstellung.',
            },
          ],
        },
      ],
    },
    {
      id: 'passives',
      title: 'Passive Skills',
      blocks: [
        {
          type: 'skills',
          skills: [
            { name: 'Rear Smite', priority: 'top', summary: 'Rückenschaden – erste Investition.' },
            { name: 'Assault Stance', priority: 'top', summary: 'Offensiv-Buff.' },
            { name: 'Exploit Weakness', priority: 'top', summary: '+0,5 % Attack pro Level.' },
            {
              name: 'Execute-Passive (Boss < 40 % HP)',
              priority: 'high',
              summary: 'Mehr Schaden, wenn der Boss unter 40 % ist – ab 50 % werden Bosse gefährlicher, dann muss es schnell gehen.',
              note: 'Empfehlung aus dem Beginner-Video, Name dort nicht genannt.',
            },
            { name: 'Impact Hit', priority: 'mid', summary: 'Nach den drei Top-Passives.' },
            {
              name: 'Heightened Sixth Sense',
              priority: 'mid',
              summary: 'Recovery/Sustain. Frisch 45 laut Video lieber die HP-Option (+20 % HP bzw. +1.350 HP) statt Poison/Ambush-Passive.',
            },
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'list',
          title: 'Frisch 45 (Beginner-Video)',
          items: [
            'Throw Shadowblade auf 10 – Fernkampf-Skill mit viel Schaden, Cooldown-Reset bei Kills.',
            'Savage Fang – guter Start, setzt sofort Insignien; ab +5 +20 % Schaden.',
            'Swift Contract – Angriffstempo-Buff, etwas höherer Cooldown.',
            'Illusive Clone – wichtigster Buff: Heart Gore ohne Cooldown bei Crits; +5 = 2 s länger, +10 = +20 % Damage Boost.',
            'Triniel’s Dagger auf 1 – der Reset kommt erst bei Level 15.',
            'Evasion Stance erst ab Fire Temple / Research Lab zum Blocken von Boss-Mechaniken.',
          ],
        },
        {
          type: 'table',
          columns: ['Priorität', 'Stigma', 'Ziel (Chapter 1)', 'Hinweis'],
          rows: [
            ['1', 'Illusive Clone', '25', 'Spez. 5: −1 s Cooldown bei Rear-Crit; seit 04.09. 90 s CD, Spez. 4: 50 % Bonusschaden-Chance bei Crit'],
            ['2', 'Swift Contract', '25', 'Kombo mit Illusive Clone'],
            ['3', 'Triniel’s Dagger', '25', 'Cooldown-Effekt und Rear-Fenster'],
            ['4', 'Savage Fang', '20 → 25', 'Offensiv-Buff'],
            ['5', 'Evasion Stance oder Throw Shadowblade', 'variabel', 'Defensive/Progression bzw. Reichweite/Schaden'],
          ],
        },
        {
          type: 'list',
          title: 'Für PvE überspringen',
          items: [
            'Spiral Slice (Buff-Entfernung, 1 min CD), Shadow Walk, Airborne-Skill, Cleanse-/Immunitäts-Skill, Assault-Ambush, Shadowstep – alles PvP.',
          ],
        },
      ],
    },
    {
      id: 'rotation',
      title: 'Rotation & Makro',
      blocks: [
        {
          type: 'steps',
          title: 'Opener',
          items: [
            'Buffs stapeln: Illusive Clone + Swift Contract + Savage Fang.',
            'Triniel’s Dagger einsetzen (höchstens 3–8 s zurückhalten).',
            'Hinter den Boss: Shadowstrike, Ambush oder Infiltrate.',
            'Im Buff-Fenster die vier Kern-Skills: Quick Slice, Heart Gore, Insignia Explosion, Savage Roar.',
          ],
        },
        {
          type: 'list',
          title: 'Hauptschleife',
          items: [
            'Hinter dem Boss bleiben – einen Bewegungs-Skill für Boss-Drehungen zurückhalten.',
            'Quick-Slice-Kette und Savage-Roar-Kette jeweils komplett.',
            'Storm Rampage nur bei Stagger.',
            'Illusive Clone nicht kurz vor Phasenwechsel, Zwangsbewegung oder Unverwundbarkeit zünden.',
          ],
        },
        {
          type: 'table',
          columns: ['Taste', 'Belegung'],
          rows: [
            ['Makro (z. B. Rechtsklick)', 'Quick Slice ↔ Savage Roar im Wechsel (Weaving); laut Field Manual Quick Slice wiederholt + Insignia Explosion'],
            ['E (dauernd drücken)', 'Proc-Skill, der gerade aufleuchtet – „was hochkommt, drückst du“'],
            ['Manuell', 'Buffs, Shadowstrike (hinter das Ziel), Bewegung zur Seite, Block, Evasion, großer Schaden, Storm Rampage'],
          ],
        },
        {
          type: 'list',
          items: [
            'Makro einrichten: Einstellungen → Tastenbelegung → Allgemein/Gameplay → Makro.',
            'Mit Skills auf 20 im Makro Savage Roar und Storm Rampage abwechseln.',
            'Nach Tempo-Änderungen (Gear, Buffs) das Makro-Timing neu testen.',
          ],
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats & Gear',
      blocks: [
        {
          type: 'table',
          columns: ['Kategorie', 'Priorität'],
          rows: [
            ['Stats', 'Crit → Attack/Weapon Damage → Rear/Skill Damage Amp → Attack/Skill Speed → Accuracy → Defensive'],
            ['Runen', 'Back Attack Boost → Weapon Damage Boost → Crit Damage Boost → Attack +25/+30 → Damage Boost'],
            ['Gear-Reihenfolge', 'Waffe → Kern-Gear → Offensive → Accessoires → Arcana/Daevanion → Seal'],
          ],
        },
        {
          type: 'table',
          columns: ['Teil', 'Soul Binds'],
          rows: [
            ['Waffen', 'Combat Speed, Might, Weapon Damage Boost'],
            ['Helm / Umhang', 'Smite, Attack Increase'],
            ['Schultern', 'Critical Damage Boost'],
            ['Brust', 'Damage Boost'],
            ['Hose', 'Damage Tolerance, Attack Increase'],
            ['Handschuhe', 'Combat Speed'],
            ['Schuhe', 'Movement Speed'],
            ['Schmuck', 'Attack, danach Crit (nach Accuracy-Check)'],
          ],
        },
        {
          type: 'table',
          columns: ['Abyss-Set-Teile', 'PvE-Amplifikation'],
          rows: [
            ['2', '15 %'],
            ['5', '20 %'],
            ['8', '30 %'],
            ['12', '40 %'],
          ],
        },
        {
          type: 'list',
          items: [
            'Crit nicht blind stapeln, wenn dafür viel Weapon Damage verloren geht.',
            'Accuracy mit aktiven Gruppen-Buffs prüfen – es gibt keinen festen Zielwert.',
            'Cooldown-Reduktion: ca. 35 % fühlen sich gut an; mit Chanter „Power of the Storm“ wurden 88 % Combat Speed und 56 % CDR getestet.',
          ],
        },
      ],
    },
    {
      id: 'genius',
      title: 'Genius Insight',
      blocks: [
        {
          type: 'table',
          columns: ['Slot', 'Zuerst', 'Später / Minmax'],
          rows: [
            ['1 / 4 / 7', 'Crit Hit (auf ca. 2.200)', 'Accuracy, dann Boss Attack ≥ 18'],
            ['2 / 5 / 8', 'Attack +12', 'Maximum Attack 19/20'],
            ['3 / 9', 'Smite ≥ 2 %', 'oder Back Attack Damage ≥ 2,8 % (Rechner nutzen)'],
            ['6', 'Damage Tolerance', 'PvE Damage Tolerance'],
          ],
        },
      ],
    },
    {
      id: 'arcana',
      title: 'Arcana & Daevanion',
      blocks: [
        {
          type: 'table',
          columns: ['Karte (Upgrade-Reihenfolge)', 'Skills'],
          rows: [
            ['1. Scroll (Parchment)', 'Quick Slice, Heart Gore, Insignia Explosion – Verteilung 4/2 oder 3/3/2'],
            ['2. Compass', 'Savage Roar, Storm Rampage, Defiance'],
            ['3. Chalice', 'Rear Smite, Assault Stance, Exploit Weakness'],
            ['4. Scales', 'Rear Smite, Assault Stance, Exploit Weakness'],
          ],
        },
        {
          type: 'list',
          title: 'Daevanion',
          items: [
            'Skill-Breakpoints (Level 12/16/20) gehen vor der Seltenheits-Regel orange > blau > grün > weiß.',
            'Normale PvE-Knoten: Attack → Crit/Accuracy → HP → Defense.',
            'GEGEBASE: offensive Knoten → Crit → Weapon/Attack Damage → Skill/Damage Amp → Accuracy → Defensive zuletzt.',
          ],
        },
      ],
    },
    {
      id: 'endgame',
      title: 'Endgame-Ziele & Spezialisierungen',
      blocks: [
        {
          type: 'table',
          columns: ['Skill', 'Ziel-Level', 'Spezialisierungen (Vortex)'],
          rows: [
            ['Heart Gore', '20', '2, 4, 5'],
            ['Insignia Explosion', '20 (alternativ 16)', '2, 3, 5'],
            ['Quick Slice', '20', '2, 3, 4 (Spez. 4 senkt Insignia-Explosion-Cooldown)'],
            ['Savage Roar', '20 (12 akzeptabel)', '2, 3, 4 (Spez. 4 senkt Ambush-Cooldown)'],
            ['Storm Rampage', '16', '4, 5'],
            ['Ambush', '16', '2'],
            ['Shadowstrike', '–', '2, 4, 5'],
            ['Whirlwind Slice', '12–16', '3, 5'],
            ['Shadow Fall', '12+', '2'],
            ['Flash Slice', '8+', '2, 4'],
            ['Infiltrate', '8+', '1'],
            ['Defiance', '12–16', '–'],
          ],
        },
        {
          type: 'text',
          text: 'Reihenfolge fürs Endgame laut Field Manual: Heart Gore 20 → Insignia Explosion 20 → Quick Slice 20 → Savage Roar 20 → Storm Rampage 16 → Ambush 16.',
        },
      ],
    },
    {
      id: 'patches',
      title: 'Patch-Historie (KR/TW 2026)',
      blocks: [
        {
          type: 'table',
          columns: ['Datum', 'Änderung'],
          rows: [
            ['25.03.', 'Insignia Explosion +15 %, weniger Verzögerung nach Ambush, 5. Stigma-Slot'],
            ['17.06.', 'Shadowstrike Spez. 2: Crit-Amp +40 % → +20 %'],
            ['01.07.', 'Chapter 1: Level 50, Stigmas bis 25, neue Arcana-Systeme'],
            ['08.07.', 'Illusive Clone Spez. 5: −1 s CD bei Rear-Crit; Throw Shadowblade kostet kein Mana mehr'],
            ['22.07.', 'Evasion Stance Spez. 3: +20 % Laufgeschwindigkeit nach Block'],
            ['29.07.', 'Defiance profitiert nicht mehr von Cooldown-Reduktion'],
            ['26.08.', 'Slice-Kette +20 % PvE, Savage-Kette und Insignia +10 %, Heart-Gore-Lebensraub 1,5 % → 0,7 %'],
            ['04.09.', 'Illusive Clone 120 s → 90 s Cooldown, neue Spez. 4'],
          ],
        },
      ],
    },
  ],
};
