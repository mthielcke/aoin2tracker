import type { BuildDetails } from '../types';

export const gladiatorPveDpsDetails: BuildDetails = {
  intro:
    'Der Gladiator ist im Kern simpel: Buffs auf Cooldown halten und dann Rending Blow und Overhead Slam spammen. Der ganze Build dreht sich darum, Overhead Slam so oft wie möglich auszulösen und das Mana-Problem über Rending Blow zu lösen.',
  sources: ['yt-glad-montu', 'yt-glad-endgame', 'gege-glad'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Bread & Butter: Rending Blow (Rechtsklick) spammen, Overhead Slam sofort nutzen, sobald er verfügbar ist.',
            'Overhead Slam geht normal nur gegen umgeworfene Gegner. Gegen Bosse (immun gegen Incapacitate) hat jeder Treffer 7 % Chance, ihn freizuschalten – deshalb ständig drücken.',
            'Rage Burst (Stigma) macht Overhead Slam für 10 s unbegrenzt nutzbar – ohne auf die 7 % zu warten.',
            'Ruinous Blow gibt „Prepare for Battle“ (10 s): +20 % PvE-Schaden, +100 Crit, +15 % Status-Effekt-Chance.',
            'Lunge Stance kann bei jedem Crit alle Cooldowns um 1 s senken – dadurch kommt Rage Burst öfter.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Top-Priorität beim Leveln',
          text: 'Overhead Slam, Rending Blow und Ruinous Blow zuerst auf Level 20. Alles andere ist deutlich weniger wichtig.',
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana-Management',
      blocks: [
        {
          type: 'text',
          text: 'Früh hat der Gladiator echte Mana-Probleme. Die Lösung hat zwei Stufen: erst Keen Strike einweben, später Rending Blow mit der roten Spezialisierung – danach ist Mana praktisch kein Thema mehr.',
        },
        {
          type: 'steps',
          title: 'Fahrplan',
          items: [
            'Keen Strike (Linksklick) früh auf Level 12 – stellt ca. 100 MP pro Treffer wieder her.',
            'Keen Strike zwischen Rending Blows einweben: Linksklick, Rechtsklick – der Rechtsklick bricht die Animation ab und kostet kaum Zeit.',
            'Übergang: Rending Blow grün (weniger MP-Kosten) oder Lunge Stance (senkt MP-Kosten aller Skills) nutzen.',
            'So früh wie möglich Rending Blow rot (Spez. 5) freischalten: MP bei kritischem Treffer. Must-have!',
            'Ab dann kann Keen Strike aus der Rotation – er wird zu einem der unwichtigsten Skills.',
          ],
        },
        {
          type: 'list',
          title: 'Weitere Mana-Quellen',
          items: [
            'Focused Block (Stigma): garantierter Parry, stellt Mana, Ausdauer und HP wieder her.',
            'Keen Strike grün (Extra-Mana) – wird laut Montu selten gebraucht.',
            'Arcana-Set Magic Armor (2er) – mit Keen-Strike-Weaving laut Endgame-Guide kaum noch Mana-Probleme.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Faustregel',
          text: 'Hast du Rending Blow rot noch nicht: Keen Strike weben. Hast du ihn: Keen Strike weglassen und Punkte in Overhead Slam, Rending Blow, Ruinous Blow stecken.',
        },
      ],
    },
    {
      id: 'active',
      title: 'Aktive Skills',
      blocks: [
        {
          type: 'text',
          text: 'Empfohlene Plug-and-Play-Spezialisierungen sind markiert. Lohnt sich trotzdem, je nach Inhalt umzustellen – ein guter Gladiator wechselt situativ.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Overhead Slam',
              priority: 'top',
              target: 'Lv. 20',
              summary: 'Payoff-Skill und Hauptschadensquelle. Gegen Bosse 7 % Proc-Chance pro Treffer.',
              specs: [
                { slot: 1, text: 'Tankier bei Nutzung' },
                { slot: 2, text: 'Wird zum AoE-Skill' },
                { slot: 3, text: 'Zusätzlicher Chain-Skill', pick: true },
                { slot: 4, text: 'Garantierter kritischer Treffer (sehr stark)', pick: true },
                { slot: 5, text: 'Kein Cooldown – macht ihn zur Hauptschadensquelle (Must-have)', pick: true },
              ],
            },
            {
              name: 'Rending Blow',
              priority: 'top',
              target: 'Lv. 20',
              summary: 'Rechtsklick, erster Teil der Kernkombo. Mit Spez. 5 löst er das Mana-Problem.',
              specs: [
                { slot: 1, text: 'Weniger MP-Kosten' },
                { slot: 2, text: 'Block während des Skills' },
                { slot: 3, text: 'Bewegen während des Skills', pick: true },
                { slot: 4, text: 'Mehr Single-Target-Schaden', pick: true },
                { slot: 5, text: 'MP bei kritischem Treffer (Must-have)', pick: true },
              ],
            },
            {
              name: 'Ruinous Blow',
              priority: 'top',
              target: 'Lv. 20',
              summary: 'Kurzer Dash mit Buff „Prepare for Battle“ (10 s): +20 % PvE-Schaden, +100 Crit, +15 % Status-Chance.',
              specs: [
                { slot: 1, text: 'Schnellere Ausführung', pick: true },
                { slot: 2, text: 'Mehr Reichweite' },
                { slot: 3, text: 'Bewegen während des Skills' },
                { slot: 4, text: 'Längere Buff-Dauer', pick: true },
                { slot: 5, text: 'Ignoriert Block/Evasion und wird Multi-Hit', pick: true },
              ],
            },
            {
              name: 'Keen Strike',
              priority: 'mid',
              target: 'früh Lv. 12',
              summary: 'Linksklick-Basisangriff, ca. 100 MP pro Treffer. Später einer der unwichtigsten Skills.',
              specs: [
                { slot: 1, text: 'Mehr Mana-Wiederherstellung' },
                { slot: 2, text: '1 % HP-Absorb' },
                { slot: 3, text: '50 % Multi-Hit bei Treffer', pick: true },
                { slot: 4, text: 'Ruinous Blow −1 s Cooldown (längere Buff-Uptime)', pick: true },
                { slot: 5, text: 'Zusätzlicher Chain-Skill', pick: true },
              ],
            },
            {
              name: 'Rush Strike',
              priority: 'mid',
              summary: 'Gap-Closer nach dem Ausweichen. Wird genutzt, hat aber keine hohe Level-Priorität.',
              specs: [
                { slot: 1, text: 'Stellt Ausdauer wieder her', pick: true },
                { slot: 2, text: 'Mehr Reichweite', pick: true },
                { slot: 3, text: 'Charge-Skill mit AoE' },
                { slot: 4, text: 'Kürzerer Cooldown', pick: true },
                { slot: 5, text: '25 % Knockdown-Chance' },
              ],
            },
            {
              name: 'Defiance',
              priority: 'mid',
              summary: 'Leertaste – befreit aus CC. Niedrige Priorität, wird aber irgendwann gelevelt.',
              specs: [
                { slot: 1, text: 'Schadens-Chain-Skill' },
                { slot: 2, text: 'Stellt Ausdauer wieder her' },
                { slot: 3, text: 'Stellt HP wieder her', pick: true },
                { slot: 4, text: 'Längere Tenacity-Dauer', pick: true },
                { slot: 5, text: 'Damage Tolerance während Tenacity', pick: true },
              ],
            },
            {
              name: 'Leaping Slam',
              priority: 'low',
              summary: 'Gap-Closer für Bosse; mit den richtigen Spezialisierungen extrem gut zum Mob-Farmen.',
              specs: [
                { slot: 1, text: 'Prepare for Battle bei Cast (gut bei niedrigem Ping) – für Bosse' },
                { slot: 2, text: 'Chance, Ankle Slice auszulösen' },
                { slot: 3, text: 'Cooldown-Reset bei Kill (Farmen)', pick: true },
                { slot: 4, text: 'Tankier nach Nutzung' },
                { slot: 5, text: 'AoE-Sog (Farmen)', pick: true },
              ],
              note: 'Beim Bossen einen der beiden gegen Spez. 1 tauschen.',
            },
            {
              name: 'Mocking Blade',
              priority: 'low',
              summary: 'Selten genutzt, vor allem für Stagger-Schaden.',
            },
            {
              name: 'Sword Aura Rampage',
              priority: 'low',
              summary: 'Nur gegen gestaggerte Gegner. Früher Standard, nach Nerfs seltener gespielt.',
            },
            {
              name: 'Ankle Slice',
              priority: 'low',
              summary: 'AoE mit Root (100 % gegen NPCs, Chance bei Block). Wenig genutzt.',
            },
            {
              name: 'Crushing Wave',
              priority: 'low',
              summary: 'AoE, hauptsächlich zum Mob-Farmen.',
            },
            {
              name: 'Aerial Snare',
              priority: 'low',
              summary: 'Schaden gegen umgeworfene Ziele mit Airborne-Chance. Laut Montu praktisch ungenutzt.',
              note: 'Der Endgame-Guide nutzt ihn dagegen mit Reset-Chance-Spezialisierung – siehe „Abweichende Meinungen“.',
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
          type: 'callout',
          variant: 'primary',
          title: 'Fokus',
          text: 'Experienced Counterstrike, Attack Preparation, Murderous Burst und Impact Hit – alle vier bringen Schaden für dich bzw. die Gruppe.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Experienced Counterstrike',
              priority: 'top',
              summary: 'Frontaler Damage Boost; erhöht bei Block den Damage Boost der ganzen Gruppe.',
            },
            {
              name: 'Attack Preparation',
              priority: 'top',
              summary: 'Damage Boost, Defense und Accuracy.',
            },
            {
              name: 'Murderous Burst',
              priority: 'top',
              summary: 'Stapelnder Buff bei Treffer; bei vollen Stacks Schaden und mehr Crit-Schaden.',
              note: 'Laut Endgame-Guide wurde die Stack-Grenze per Patch von 5 auf 10 erhöht.',
            },
            {
              name: 'Impact Hit',
              priority: 'top',
              summary: 'Mehr Impact-Chance und Double Hit – mehr DPS.',
            },
            {
              name: 'Identify Weakness',
              priority: 'mid',
              summary: 'Crit und Perfect-Chance; wird durch Lunge Stance verstärkt.',
            },
            {
              name: 'Blood Absorption',
              priority: 'mid',
              summary: 'Lebensraub, mehr Überlebensfähigkeit.',
            },
            {
              name: 'Survival Stance',
              priority: 'low',
              summary: 'Erhöht die defensiven Stats.',
            },
            {
              name: 'Protection Armor',
              priority: 'low',
              summary: 'Macht tankier.',
            },
            {
              name: 'Destructive Impulse',
              priority: 'low',
              summary: 'Mehr Schaden gegen gestaggerte Gegner.',
            },
            {
              name: 'Survival Willpower',
              priority: 'low',
              summary: 'Status-Effekt-Resistenz und Damage Tolerance, wenn du CC’d bist (eher PvP).',
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
          type: 'text',
          text: 'Im Global-Launch sind vermutlich 4–6 Stigmas gleichzeitig ausrüstbar, und nur wenige lassen sich über Level 20 hinaus steigern. Die Kosten steigen mit dem Level stark – daher die gewählten Stigmas eher gleichmäßig leveln.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Rage Burst',
              priority: 'top',
              summary: '10 s unbegrenzt Overhead Slam, verursacht Schaden, „Wounded“ (−20 % Gegner-Angriff) und mehr Damage Boost.',
              note: 'Auf Cooldown nutzen und den Cooldown über Lunge Stance drücken.',
            },
            {
              name: 'Lunge Stance',
              priority: 'top',
              summary: 'Combat Speed, Laufgeschwindigkeit, Double-Chance, weniger MP-Kosten. Verstärkt Identify Weakness; Crits können alle Cooldowns um 1 s senken und Bonusschaden verursachen.',
            },
            {
              name: 'Zikel’s Blessing',
              priority: 'high',
              summary: 'Attack, Accuracy, Stagger-Schaden, Damage Boost, Multi-Hit- und Status-Chance.',
            },
            {
              name: 'Lifestealing Blade',
              priority: 'high',
              summary: 'Starker Schadensskill, heilt dich und gibt dir und der Gruppe Bonusschaden plus Lebensraub.',
            },
            {
              name: 'Wave Armor',
              priority: 'mid',
              summary: 'Absorbiert HP, reflektiert Schaden, verstärkt Experienced Counterstrike und Blood Absorption, macht Schaden über Zeit in der Nähe.',
            },
            {
              name: 'Focused Block',
              priority: 'mid',
              summary: 'Garantierter Parry – stellt Mana, Ausdauer, HP wieder her und gibt Laufgeschwindigkeit.',
            },
            {
              name: 'Blade Toss',
              priority: 'low',
              summary: 'Debuff: −30 % Defense und Heilung des Gegners für 10 s. Der am wenigsten gespielte der sieben.',
              note: 'Im Endgame-Guide dagegen fester Bestandteil (Level 5 reicht).',
            },
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
          items: [
            'Buffs auf Cooldown: Lunge Stance, Zikel’s Blessing, Wave Armor, Lifestealing Blade.',
            'Ruinous Blow für Prepare for Battle (+20 % PvE-Schaden, +100 Crit).',
            'Rage Burst → 10 s Overhead Slam spammen.',
            'Sonst Rending Blow spammen und Overhead Slam sofort drücken, wenn der 7-%-Proc kommt.',
            'Keen Strike nur einweben, solange Rending Blow Spez. 5 (MP bei Crit) fehlt.',
            'Mit Leaping Slam und Rush Strike (nach Ausweichen) am Boss bleiben; Defiance gegen CC – Uptime ist alles.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Makro',
          text: 'Makros hängen stark vom Ping ab. Mit Leuten mit ähnlichem Ping vergleichen und selbst feintunen – Montus Makro ist auf hohen Ping (TW-Server) ausgelegt.',
        },
      ],
    },
    {
      id: 'stats',
      title: 'Stats',
      blocks: [
        {
          type: 'table',
          columns: ['Kategorie', 'Priorität'],
          rows: [
            ['Hauptattribute', 'Might → Precision → Intelligence → Constitution → Willpower → Dexterity'],
            [
              'Götter-Stats',
              'Wisdom → Destruction → Time → Illusion → Space → Death → Freedom → Life → Destiny → Justice',
            ],
            ['Armband (Götter-Stats)', 'Wisdom → Destruction → Time → Illusion → Justice → Freedom'],
          ],
        },
      ],
    },
    {
      id: 'soulbinds',
      title: 'Soul Binds pro Ausrüstungsteil',
      blocks: [
        {
          type: 'text',
          text: 'Abgeleitet aus den Top-Gladiatoren nach PvE-Rating und Combat Power. Oben möglichst die vorderen Stats, die hinteren füllen weitere Slots bei besserem Gear.',
        },
        {
          type: 'table',
          columns: ['Teil', 'Priorität'],
          rows: [
            ['Waffe', 'Combat Speed, Weapon Damage Boost, Damage Boost, Might, Precision, Multi-Hit, Attack'],
            ['Guard (Offhand)', 'Combat Speed, Weapon Damage Boost, Damage Boost, Might, Precision, Multi-Hit, Attack'],
            ['Helm', 'Smite Attack Increase, Exp. Counterstrike, Attack Preparation, Attack, Murderous Burst, Impact Hit'],
            [
              'Schultern',
              'Crit Damage Boost, Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit, Attack, Identify Weakness',
            ],
            [
              'Brust',
              'Damage Boost, Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit, Attack, Identify Weakness / Defense',
            ],
            [
              'Beine',
              'Damage Tolerance, Perfect Attack Increase, Exp. Counterstrike, Attack Preparation, Impact Hit / Attack, Murderous Burst / Attack',
            ],
            ['Handschuhe', 'Combat Speed, Perfect, Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit, Attack'],
            [
              'Umhang',
              'Smite, Perfect Attack Increase, Exp. Counterstrike, Murderous Burst, Attack, Attack Preparation, Impact Hit',
            ],
            ['Stiefel', 'Perfect, Move Speed, Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit / Attack'],
            [
              'Ohrringe',
              'Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit, Identify Weakness, Attack, Accuracy / Crit',
            ],
            [
              'Kette',
              'Exp. Counterstrike, Attack Preparation, Murderous Burst, Impact Hit, Identify Weakness, Attack, Accuracy / Crit',
            ],
            [
              'Ringe',
              'Overhead Slam, Rending Blow, Ruinous Blow, Attack, Accuracy, Crit, Leaping Slam / Sword Aura Rampage / Crushing Wave',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Ringe hängen von deinen Arcana ab: Damit Lücken füllen, bis Overhead Slam, Rending Blow und Ruinous Blow auf 20 sind.',
            'Manastones: ordentlichen Wurf nehmen und weitermachen – kein Pity, kein Transfer, nicht all-in gehen.',
          ],
        },
      ],
    },
    {
      id: 'arcana',
      title: 'Arcana – Skills pro Karte',
      blocks: [
        {
          type: 'text',
          text: 'Reihenfolge = Priorität. Karten wie Key und Hourglass fehlen zum Global-Launch vermutlich; Set-Boni ändern sich mit neuen Dungeons.',
        },
        {
          type: 'table',
          columns: ['Karte', 'Skills nach Priorität'],
          rows: [
            ['Grail (Chalice)', 'Attack Preparation, Exp. Counterstrike, Impact Hit, Murderous Burst, Overhead Slam, Ruinous Blow'],
            ['Parchment', 'Overhead Slam, Ruinous Blow, Leaping Slam, Keen Strike, Ankle Slice'],
            ['Compass', 'Rending Blow, Defiance, Crushing Wave, Sword Aura Rampage, Rush Strike'],
            ['Bell', 'Attack Preparation, Survival Stance, Blood Absorption, Survival Willpower, Destructive Impulse'],
            ['Mirror', 'Murderous Burst, Impact Hit, Exp. Counterstrike, Identify Weakness, Protection Armor'],
            ['Scales', 'Exp. Counterstrike, Murderous Burst, Attack Preparation, Impact Hit, Overhead Slam'],
          ],
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion',
      blocks: [
        {
          type: 'list',
          items: [
            'Faustregel: orange > blau > grün > weiß.',
            'Offensive Stats zuerst.',
            'Skill-Knoten nach der Skill-Priorität: Overhead Slam, Rending Blow, Ruinous Blow.',
          ],
        },
      ],
    },
    {
      id: 'genius',
      title: 'Genius Insight',
      blocks: [
        {
          type: 'callout',
          variant: 'warning',
          title: 'Zuerst – bevor du irgendetwas lockst',
          text: 'Auf allen fünf Genius-Insight-Boards Slot 3 und Slot 9 auf Smite ≥ 2 % rollen. Erst danach andere Slots rollen und locken.',
        },
        {
          type: 'table',
          columns: ['Slot', 'Ziel'],
          rows: [
            ['1', 'Accuracy ≥ 35 / Crit ≥ 25 / Boss Attack ≥ 14'],
            ['2', 'Attack Bonus ≥ 14'],
            ['3', 'Smite ≥ 2 %'],
            ['4', 'Accuracy ≥ 35 / Crit ≥ 25 / Boss Attack ≥ 14'],
            ['5', 'Attack Bonus ≥ 14'],
            ['6', 'Accuracy ≥ 35 / Crit ≥ 25 / PvE Damage Tolerance ≥ 2,5 / Boss Attack ≥ 14'],
            ['7', 'Accuracy ≥ 35 / Crit ≥ 25 / Boss Attack ≥ 14'],
            ['8', 'Attack Bonus ≥ 14'],
            ['9', 'Smite ≥ 2 %'],
            ['Special Genius (letztes Board)', 'Slot 1, 4 und 7: Attack Bonus ≥ 14'],
          ],
        },
      ],
    },
    {
      id: 'cosmetics',
      title: 'Wings & Titel',
      blocks: [
        {
          type: 'list',
          items: [
            'Wings (Langzeitziel der Top-Gladiatoren): Void Telestera, Redeemed Fallen Wings – zum Launch vermutlich noch nicht erreichbar.',
            'Titel: Playing God (Angriff), Rule All Creation (Verteidigung), Empty Closet (Utility).',
            'Endgame-Guide: für PvE Wings mit Boss Attack (Forest / Valkron Sky Island) und Titel Golden Glow.',
          ],
        },
      ],
    },
    {
      id: 'differences',
      title: 'Abweichende Meinungen',
      blocks: [
        {
          type: 'text',
          text: 'Die beiden ausführlichen Video-Guides sind sich bei den Grundlagen einig (Overhead Slam, Rending Blow, Ruinous Blow; Animation Cancel), unterscheiden sich aber im Detail:',
        },
        {
          type: 'table',
          columns: ['Thema', 'Montu', 'Endgame-Guide'],
          rows: [
            ['Aerial Snare', 'Praktisch ungenutzt', 'Mit 5–7 % Reset-Chance fester Teil des Openers'],
            ['Kern-Stigmas', 'Rage Burst, Lunge Stance, Zikel’s Blessing, Lifestealing Blade', 'Zikel’s Blessing, Tenaciousness, Lunge Stance, Blade Toss'],
            ['Blade Toss', 'Am wenigsten gespielt', 'Fester Bestandteil (Lv. 5 reicht)'],
            ['Keen Strike', 'Später unwichtig (nach Rending Blow Spez. 5)', 'Hoch leveln (Patch-Buff, viel Filler-Schaden)'],
          ],
        },
      ],
    },
  ],
};
