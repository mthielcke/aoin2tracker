import type { BuildDetails } from '../types';

export const chanterPveHybridDetails: BuildDetails = {
  intro:
    'Der Chanter ist „Support first, healer second, melee DPS third“: Mantras für die Gruppe, Recuperation als Heilung und Schaden über Spinning Strike und Dark Crush. Direkt nach dem Leveln sind Skillpunkte, Stigma Shards und Daevanion-Punkte knapp – und Mana ist das größte Problem.',
  sources: ['yt-chanter-ultimate', 'yt-chanter-rework', 'gege-chanter'],
  sections: [
    {
      id: 'core',
      title: 'Kernkonzept',
      blocks: [
        {
          type: 'list',
          items: [
            'Dark Crush ist der Kern-Proc: Er wird durch deine Ranged-Skills ausgelöst (seit dem Rework garantiert, dafür nur noch Single-Target).',
            'Spinning Strike ist dein stärkster Schadensskill; seit dem Rework stapelt er Crit-Damage bis +30 %.',
            'Marchutan’s Wrath und Impactful Crush lösen Dark Crush erneut aus – darauf baut das Makro auf.',
            'Undefeated Mantra (+100 Accuracy für dich und die Gruppe) ist das wichtigste Stigma und wird langfristig auf 20 gezogen.',
            'Obliterate macht 50 Stagger-Schaden – als „offensiver Chanter“ bei Stagger-Phasen helfen.',
          ],
        },
        {
          type: 'callout',
          variant: 'primary',
          title: 'Frisch 45: Budget',
          text: 'Nach dem Leveln ca. 230–250 Skillpunkte (ohne vollen Monolith). Keine Skills auf 12 oder 16 – deshalb fehlen Cooldown-Reduktionen, und Makro sowie Mana leiden. Das ist normal und wird mit mehr Punkten besser.',
        },
      ],
    },
    {
      id: 'mana',
      title: 'Mana-Management',
      blocks: [
        {
          type: 'text',
          text: 'Am Anfang ist Mana beim Chanter ein massives Problem, später kaum noch. Anders als andere Klassen hat der Chanter nur zwei Stellschrauben dafür.',
        },
        {
          type: 'steps',
          title: 'Fahrplan',
          items: [
            'Auto-Attack auf Level 8 mit MP-Wiederherstellungs-Spezialisierung.',
            'Inexorable Blow auf Level 8 mit MP-Spezialisierung (−20 % MP-Kosten).',
            'Kampfmodus prüfen: Im Aion-1-Modus (Tab-Target) greift der Charakter in Cooldown-Lücken automatisch an und lädt so Mana auf – im Aion-2-Modus (Action Combat) nicht.',
            'Im Makro Auto-Attack-Zeilen einplanen – im Aion-2-Modus unbedingt mehrfach.',
            'Später (mehr Punkte, Nightmare) Inexorable Blow auf die Single-Target-Spezialisierung (+12 %) umstellen.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Ohne Mana kein Schaden',
          text: 'Ohne Mana bleibt nur der schwache Auto-Attack. Wenn die Rotation stockt, bewusst ein paar Auto-Attacks spammen, bis das Mana wieder da ist.',
        },
      ],
    },
    {
      id: 'active',
      title: 'Aktive Skills (frisch 45)',
      blocks: [
        {
          type: 'text',
          text: 'Setup für direkt nach dem Leveln. Die Spezialisierungen nennt das Video nur beim Namen, nicht nach Slot – deshalb stehen sie hier im Text. Einige Skill-Namen stammen aus dem Transkript und sollten im Spiel geprüft werden.',
        },
        {
          type: 'skills',
          skills: [
            {
              name: 'Dark Crush',
              priority: 'top',
              target: 'max',
              summary: 'Kern-Proc, ausgelöst durch Ranged-Skills. Spezialisierung: Critical Hit. HP-Regeneration ist unnötig (du heilst dich selbst).',
            },
            {
              name: 'Spinning Strike',
              priority: 'top',
              summary: 'Höchster Schaden. Spezialisierung: −5 s Cooldown – extrem wichtig, damit er öfter kommt.',
              note: 'Rework: Crit-Damage-Stacks bis +30 %; Auto-Attack-Crits senken seinen Cooldown um je 1 s.',
            },
            {
              name: 'Recuperation',
              priority: 'top',
              target: 'max',
              summary: 'Heilung. Spezialisierung: Continuous Cast – zweimal nutzbar, jeder Cast entfernt einen Debuff.',
            },
            {
              name: 'Auto-Attack',
              priority: 'high',
              target: 'Lv. 8',
              summary: 'Spezialisierung: MP-Wiederherstellung – wichtigste Mana-Quelle.',
            },
            {
              name: 'Inexorable Blow',
              priority: 'high',
              target: 'Lv. 8',
              summary: 'Erst MP-Spezialisierung (−20 % Kosten), später Single-Target-Schaden (+12 %, wichtig für Nightmare).',
            },
            {
              name: 'Rushing Smash',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Gap-Closer, gut für Quests. Übrige Punkte laut Video hierhin und in Inexorable Blow.',
            },
            {
              name: 'Impactful Crush',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Löst Dark Crush erneut aus – fester Bestandteil des Makros.',
            },
            {
              name: 'Defiance',
              priority: 'mid',
              target: 'Lv. 8',
              summary: 'Befreit aus CC; Level 8 wegen der HP-Wiederherstellung.',
            },
            {
              name: 'Gust Rampage',
              priority: 'mid',
              target: 'Lv. 8 (nur Bosse)',
              summary: 'Wirkt nur gegen Bosse. Random-Gruppe: HP-Absorb; mit Cleric in der Gruppe: MP-Wiederherstellung.',
              note: 'Kein Boss-Content geplant? Resetten und Punkte sparen – zusammen mit dem Passive Raging Spell.',
            },
            {
              name: 'Heaving Blow',
              priority: 'low',
              target: 'Lv. 8 (Rest-Punkte)',
              summary: 'Anfangs überspringen, mit übrigen Punkten auf 8 für etwas mehr Quest-Schaden.',
              note: 'Name aus Transkript („head blowing blow“) – im Spiel prüfen.',
            },
            {
              name: 'Tremor Crush',
              priority: 'low',
              summary: 'Früh überspringen – kein hoher Schaden.',
            },
            {
              name: 'Whirlwind Blow',
              priority: 'low',
              summary: 'PvP-Skill, für PvE überspringen.',
              note: 'Name aus Transkript („way blow“) – im Spiel prüfen.',
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
            { name: 'Attack Preparation', priority: 'top', target: 'max', summary: 'Alle Punkte hier – wichtigstes Schadens-Passive.' },
            { name: 'Wind Promise', priority: 'top', target: 'max', summary: 'Crit-Damage-Boost, ebenfalls maxen.' },
            {
              name: 'Inspiring Spell',
              priority: 'high',
              target: 'max',
              summary: 'Viel Crit- und Perfect-Chance.',
              note: 'Name aus Transkript („inex spell“) – im Spiel prüfen.',
            },
            {
              name: 'Raging Spell',
              priority: 'mid',
              target: 'max (nur Bosse)',
              summary: 'Wirkt mit Gust Rampage zusammen. Ohne Boss-Content resetten.',
            },
            {
              name: 'Heil-/HP-Passive',
              priority: 'mid',
              summary: 'Erhöht Healing Boost. Kann gemaxt werden – bei PvE-Problemen Punkte lieber in die DPS-Passives.',
            },
            { name: 'Impact Hit', priority: 'low', summary: 'Reines PvP-Passive.' },
            { name: 'Cross Guard', priority: 'low', summary: 'Laut Video „completely garbage“ – keine Punkte.' },
          ],
        },
      ],
    },
    {
      id: 'stigmas',
      title: 'Stigmas',
      blocks: [
        {
          type: 'steps',
          title: 'Reihenfolge mit wenig Stigma Shards',
          items: [
            'Sprint Mantra auf 5 – Tempo brauchst du immer (+10 ist später okay).',
            'Incandescent Blow auf 5 – Cooldown-Bonus; 30-s-Skill mit 20 m Reichweite.',
            'Marchutan’s Wrath auf 5 – löst Dark Crush aus, +20 % Schaden auf Ziele.',
            'Obliterate auf 1 – 50 Stagger-Schaden für die Gruppe.',
            '6. Slot: Guardian Blessing (solo, dauerhafter HP-Buff) oder Power Storm (Gruppen-Buff).',
            'Alle restlichen Shards in Undefeated Mantra – erst 10, dann 20.',
          ],
        },
        {
          type: 'skills',
          skills: [
            { name: 'Undefeated Mantra', priority: 'top', target: '10 → 20', summary: '+100 Accuracy für dich und die Gruppe. Das Stigma, das du am höchsten ziehst.' },
            { name: 'Marchutan’s Wrath', priority: 'high', target: 'Lv. 5', summary: 'Kombo mit Dark Crush, +20 % Schaden auf Ziele.' },
            { name: 'Incandescent Blow', priority: 'high', target: 'Lv. 5', summary: 'Cooldown-Bonus ab +5; 30 s CD, 20 m Reichweite.', note: 'Name aus Transkript („freshen blow“) – im Spiel prüfen.' },
            { name: 'Sprint Mantra', priority: 'high', target: 'Lv. 5', summary: 'Bewegungstempo für die Gruppe.' },
            { name: 'Obliterate', priority: 'mid', target: 'Lv. 1', summary: '50 Stagger-Schaden bei Stagger-Phasen.' },
            { name: 'Guardian Blessing', priority: 'mid', summary: 'Dauerhafter HP-Buff – beste Wahl solo.' },
            { name: 'Power Storm', priority: 'mid', summary: 'Gruppen-Buff (ca. 1,5–2 min CD) – für Gruppencontent statt Guardian Blessing.' },
          ],
        },
      ],
    },
    {
      id: 'daevanion',
      title: 'Daevanion (frisch 45)',
      blocks: [
        {
          type: 'callout',
          variant: 'primary',
          title: 'Grundregel',
          text: 'Alle Boards parallel füllen, nicht eins nach dem anderen. Lieber ein paar Punkte mehr für einen Umweg ausgeben, als nutzlose Knoten (Cross Guard, Blessing, Multi-Hit) mitzunehmen.',
        },
        {
          type: 'table',
          columns: ['Board', 'Nehmen', 'Meiden'],
          rows: [
            [
              'Nezakan',
              'Attack Bonus; Pfad über Attack Preparation +1 Richtung Attack Speed; danach Dark-Crush- und Spinning-Strike-Perfection-Linie; HP/Crit/MP und Crit-Damage-Knoten',
              'Cross Guard, Cooldown-Reduction-Pfad, Blessing (Healing Boost)',
            ],
            [
              'Zikel',
              'Damage-Boost-Linie über Inexorable Blow und Rushing Smash',
              'Impact Hit (Double Chance); Tremor Crush – wenn nötig den günstigeren Knoten nehmen',
            ],
            [
              'Vaizel',
              'Critical-Damage-Boost-Linien, Wind Promise, Rushing Smash',
              'Blessing of Life, Whirlwind Blow, Defense-Knoten, Impactful/Tremor-Crush-Linien',
            ],
            ['Triniel', 'Kürzester Weg zu Attack Preparation', 'Multi-Hit-Chance – früh nicht nötig'],
            ['Ariel / Asphel', 'Nur offensive Knoten: Damage Boost', 'Damage Tolerance und andere defensive Knoten'],
          ],
        },
      ],
    },
    {
      id: 'books',
      title: 'Daevanion-Bücher beschaffen',
      blocks: [
        {
          type: 'list',
          title: 'Standard-Bücher',
          items: [
            'Regionalquests – eine der Hauptquellen.',
            'Exploration-Dungeons auf der Heimatkarte.',
            'Dieselben Dungeons im Feindgebiet.',
          ],
        },
        {
          type: 'list',
          title: 'Ariel-Bücher (PvE)',
          items: [
            'Aus Ascension-Dungeons und per Morph.',
            'Fragmente aus der wöchentlichen Common-Merchant-Quest (NPC in den Hauptstädten, 12 pro Server für den Main).',
            'Fragmente aus Duty Missions – dafür das Board neu würfeln.',
            'Beim Morphen die 100-%-Option wählen, nicht die 10-%-Option.',
          ],
        },
        {
          type: 'list',
          title: 'Asphel-Bücher (PvP)',
          items: ['Common-Merchant-Quest.', 'Battlefield (3 Einträge): ein zusätzliches Buch pro Woche craftbar.'],
        },
      ],
    },
    {
      id: 'macro',
      title: 'Makro',
      blocks: [
        {
          type: 'steps',
          title: 'Einrichten',
          items: [
            'Einstellungen → Tastenbelegung → Gameplay → Makro: Taste (Tastatur oder Maus) belegen.',
            'Skill-Fenster → Makro-Reiter → Zeilen hinzufügen. Eine aktive Zeile führt alle Skills darin nacheinander aus.',
            'Ziel wählen: im Action-Combat-Modus Rechtsklick, im Aion-1-Modus Tab.',
            'Verzögerung: Ping < 50 → 10 ms; Ping ≥ 80–100 → 40–50 ms.',
            'Kontrolle: „Schatten“ am Charakter bedeuten, dass der Animation Cancel funktioniert.',
          ],
        },
        {
          type: 'table',
          columns: ['#', 'Skill', 'Zweck'],
          rows: [
            ['1', 'Dark Crush (+ Spinning Strike)', 'Start, Proc-Kette'],
            ['2', 'Rushing Smash', 'Überbrückt den Dark-Crush-Cooldown'],
            ['3', 'Impactful Crush', 'Löst Dark Crush erneut aus'],
            ['4', 'Dark Crush', ''],
            ['5', 'Marchutan’s Wrath', 'Löst Dark Crush erneut aus'],
            ['6', 'Dark Crush', ''],
            ['7', 'Dark Crush', 'Doppelt, damit der Proc nicht verloren geht'],
            ['8', 'Auto-Attack', 'Mana'],
          ],
        },
        {
          type: 'text',
          text: 'Die erste Runde ist oft nicht perfekt, ab der zweiten steuern die Cooldowns das Makro sauber. Ideal von Hand: Spinning Strike → Dark Crush → auf Rushing Smash warten → Impactful Crush → Auto-Attacks → Dark Crush.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Stand nach dem Dark-Crush-Rework',
          text: 'Im Rework-Video nutzt derselbe Creator nur zwei Zeilen: Zeile 1 die Dark-Crush-Kette, Zeile 2 Spinning Strike + Inexorable Blow. Beide Varianten ausprobieren und nach Ping anpassen.',
        },
      ],
    },
    {
      id: 'rotation',
      title: 'Rotation & Heilung',
      blocks: [
        {
          type: 'list',
          title: 'Opener (GEGEBASE)',
          items: [
            'Undefeated Mantra → Spinning Strike → Dark Crush → Incandescent Blow → Bursting Blow → Impactful Crush → Onslaught-Kette.',
            'Sustain: Spinning Strike → Dark Crush → große Burst-Skills → Impactful Crush → Filler.',
          ],
        },
        {
          type: 'list',
          title: 'Heil-Regel',
          items: [
            'Kleiner Schaden: Recuperation.',
            'Ein Ziel stark verletzt: Healing Touch.',
            'Mehrere Verletzte: beides.',
            'Heil-Reichweite seit Patch 40 m, dafür 20–50 % weniger Heilung.',
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
          columns: ['Ausrichtung', 'Priorität'],
          rows: [
            ['Hybrid (Standard)', 'Attack Power → PvE Damage → Crit → Crit Damage → Accuracy → HP'],
            ['Support / Heal', 'Attack Power → HP → Heal-Skalierung → Defense → Accuracy'],
            ['DPS', 'PvE Damage → Attack → Crit → Crit Damage → Accuracy'],
          ],
        },
        {
          type: 'list',
          items: [
            'Blessing of Life skaliert mit Attack Power – Attack hilft also auch dem Support.',
            'Gear-Reihenfolge: Staff → Core → Abyss → Accessoires → Arcana → Daevanion → Seal.',
          ],
        },
      ],
    },
  ],
};
