import type { TipTopic } from './types';

export const CRAFTING_TOPICS: TipTopic[] = [
  {
    id: 'basics',
    title: 'Überblick & Start',
    icon: 'hammer',
    intro:
      'Crafting-Gear ist das beste PvE-Gear. Zum Global-Launch gibt es in Conquest-Dungeons und Sanctuary-Raids keine Heroic-Drops – wer Berufe versteht, bestimmt die Wirtschaft. Trotzdem gilt für Season 1: nicht hetzen, Berufe nebenbei leveln und Materialien sparen. F2P-Spieler kommen mit Dungeon-Rüstung gut zurecht.',
    blocks: [
      {
        type: 'table',
        columns: ['Beruf', 'Stellt her', 'Wichtig für'],
        rows: [
          ['Blacksmithing', 'Nahkampfwaffen (Greatsword, Schwert, Dolche, Streitkolben) und Guards/Schilde', 'Nahkämpfer – und später alle Klassen wegen des Guards'],
          ['Armorsmithing', 'Rüstungsteile (Brust, Handschuhe, Stiefel …)', 'Alle Klassen, größter Kundenkreis'],
          ['Handicrafting', 'Bögen, Stäbe, Ringe, Ohrringe, Ketten', 'Ranger, Chanter, Accessoires für alle'],
          ['Alchemy', 'Magie-Waffen (Zauberbücher, Orbs), Tränke, Scrolls, Mana-Stone-Scrolls', 'Caster, Kinah durch Verbrauchsgüter'],
          ['Cooking', 'Essen und Getränke mit Buffs', 'Alle – Buff-Food vor Dungeons'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Die „Novice 50“-Wand',
        text: 'Dein Kampflevel endet bei 45, Gathering und Crafting bei Novice 50. Dort friert die Life-Skill-EP ein – kein Bug. Eine Rang-Aufstiegsquest hebt die Grenze auf.',
      },
    ],
    groups: [
      {
        title: 'Loslegen',
        tips: [
          {
            id: 'pick-profession',
            text: 'Beruf passend zu deiner Waffe wählen – je nach Gear brauchst du zwei',
            detail: 'Alle fünf Berufe sind auf einem Charakter möglich.',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx'],
          },
          {
            id: 'unlock-quests',
            text: 'Freischalt-Quests für Gathering und die Crafting-Stationen erledigen',
            sources: ['yt-craft-crusherx'],
          },
          {
            id: 'level-1-to-50',
            text: 'Mit den Level-1-Rezepten starten und Richtung 50 leveln',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'rank-up',
            text: 'Bei Novice 50 die Rang-Aufstiegsquest machen (u. a. „Upgrade Essence Extraction Specialty Skill“)',
            sources: ['yt-craft-crusherx', 'yt-gather-mr4k'],
          },
          {
            id: 'daily-supply',
            text: 'Tägliche Crafting-Supply-Requests mitnehmen',
            detail: 'Abyss-Punkte aus Crafting-Supply-Requests sind saisonal und zählen nicht zum normalen Wochenlimit.',
            sources: ['yt-craft-crusherx', 'yt-kinah-aselon'],
          },
          {
            id: 'no-rush',
            text: 'Season 1 nicht hetzen: Berufe langsam leveln, wichtige Materialien aufheben',
            sources: ['yt-craft-mr4k'],
          },
        ],
      },
    ],
  },
  {
    id: 'gear',
    title: 'Gear craften',
    icon: 'shield-shaded',
    intro:
      'Crafting-Gear hat gegenüber Dungeon-Gear derselben Stufe einen eingebauten PvE-Bonus (ca. 5 %) und flexiblere Stats. Der Weg dorthin läuft über eine Proc-Kette und kostet viel Material – deshalb schrittweise statt alles auf einmal.',
    blocks: [
      {
        type: 'steps',
        title: 'So funktioniert die Proc-Kette',
        items: [
          'Jeder Craft hat ca. 25 % Chance, eine bessere Version zu „proccen“.',
          'Nur mit dem geprocten Item kannst du die nächste Stufe craften (weiß → grün → blau → …).',
          'Die „Splendid“-Version einer Waffe entspricht laut Koodoki etwa einem 2★-Dungeon, die nächste Stufe einem 3★-Dungeon.',
          'Alternativ garantiertes Craften (100 %) – kostet deutlich mehr Material.',
        ],
      },
      {
        type: 'text',
        text: 'Gear-Namen im Global-Client laut AION2 Hub u. a.: Wise Dragon Lord, Ebony Dragon Lord, White Dragon Lord, Splendent Wise Dragon Lord. Der Crafting-Rechner dort zeigt Rezepte und kompletten Materialbedarf.',
      },
    ],
    groups: [
      {
        title: 'Reihenfolge & Entscheidungen',
        tips: [
          {
            id: 'order',
            text: 'Reihenfolge: Waffe → Guard → Kette → Ohrringe, Rüstung zuletzt',
            detail: 'FRESHY: Waffe → Guard → Accessoires → Rüstung. Accessoires brauchen weniger Material – ein Fehlschlag tut weniger weh.',
            sources: ['yt-craft-mr4k', 'yt-gear-freshy'],
          },
          {
            id: 'gamble-vs-guaranteed',
            text: '25-%-Gamble oder 100 % garantiert bewusst wählen – für das eine Endgame-Teil lieber garantiert',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx'],
          },
          {
            id: 'magical-breath',
            text: 'Magical Breath (Core) aus Season Shop → Materials: nur 5 pro Server – vorher genau prüfen, was du craftest',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'wrong-core',
            text: 'Falschen Core gecraftet? Im Substance Morph prüfen, ob er sich zurückholen lässt',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'crafts-can-fail',
            text: 'Hohe Stufen können fehlschlagen – bei teuren Crafts ggf. lieber das Material verkaufen',
            sources: ['yt-gear-koodoki', 'yt-kinah-aselon'],
          },
          {
            id: 'ludra',
            text: 'Kein Crafting-Weg? Die Ludra-Heroic-Waffe ist eine Alternative',
            sources: ['yt-craft-mr4k'],
            uncertain: true,
          },
        ],
      },
      {
        title: 'Transfer & Potential',
        tips: [
          {
            id: 'transfer',
            text: 'Transfer nutzen: Enhance, Upgrade-Stufe und Soul Binds wandern aufs nächste Crafting-Teil',
            detail: 'Deshalb lohnt sich Kinah in Crafting-Gear mehr als in Dungeon-Gear.',
            sources: ['yt-gear-freshy', 'yt-mistakes-lucky', 'yt-craft-crusherx'],
          },
          {
            id: 'potential',
            text: 'Potential (PvE-Boni) über Potential-Steine hinzufügen – wird beim Transfer nicht übernommen',
            detail: 'Auf Global hat Crafting-Gear die PvE-Werte nicht von Haus aus. Potential-Steine entstehen u. a. aus Dungeon-Gear per Substance Morph.',
            sources: ['yt-gear-sog', 'yt-gear-koodoki', 'yt-gear-freshy'],
          },
          {
            id: 'sell-proc',
            text: 'In der Launch-Woche ist der Markt überhitzt – ein unerwarteter Proc bringt verkauft evtl. mehr als getragen',
            sources: ['yt-craft-crusherx'],
            uncertain: true,
          },
        ],
      },
    ],
  },
  {
    id: 'materials',
    title: 'Gathering & Materialien',
    icon: 'basket',
    intro:
      'Gathering läuft in Aion 2 über ein einziges System, die Essence Extraction. Knoten erlauben mehrere Versuche mit Erfolgs- und Fehlschlag-Balken – auch Fehlschläge geben Erfahrung. Endgame-Crafting braucht sehr viel Material; selbst sammeln spart auf Dauer viel Kinah.',
    groups: [
      {
        title: 'Gathering',
        tips: [
          {
            id: 'gather-everything',
            text: 'Unterwegs jeden Knoten mitnehmen – Gathering levelt nebenbei',
            sources: ['yt-gather-mr4k'],
          },
          {
            id: 'artisan-ultimate',
            text: 'Erfolg „Artisan’s Ultimate“: 1.000 Extraktionen – früh nebenbei anfangen',
            sources: ['yt-gather-mr4k'],
          },
          {
            id: 'perks',
            text: 'Essence-Extraction-Punkte in sinnvolle Perks stecken (Knoten-Stufen beachten)',
            sources: ['yt-craft-crusherx'],
            uncertain: true,
          },
        ],
      },
      {
        title: 'Materialquellen',
        tips: [
          {
            id: 'sources',
            text: 'Quellen: Season Shop, Gathering, Crafting-Händler, Marktplatz, Dungeons, Shugo Festival',
            detail: 'Das Shugo Festival ist besonders ergiebig für Crafting-Ressourcen.',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'catalysts',
            text: 'Katalysatoren beim Händler für Kinah kaufen (z. B. 2 Orichalcum Ore + Katalysator → Orichalcum Ingot)',
            sources: ['fextralife-crafting'],
          },
          {
            id: 'odial-morph',
            text: 'Odial/Odyle am Dungeon-Ende einsammeln und per Substance Morph 1:1 in seltene Materialien tauschen',
            sources: ['yt-craft-crusherx', 'yt-gear-sog'],
          },
          {
            id: 'dungeon-tiers',
            text: 'Jede Dungeon-Stufe liefert eigene Materialien – für höhere Crafts brauchst du 1★-, 2★- und 3★-Material',
            sources: ['yt-gear-koodoki'],
          },
          {
            id: 'bound',
            text: 'Gebundene und handelbare Materialien nicht verwechseln – falsch eingesetzt kostet das Gewinn',
            detail: 'Für riskante Crafts lieber ungebundene Materialien nehmen, die du ohnehin nicht verkaufen kannst.',
            sources: ['yt-craft-crusherx', 'yt-kinah-aselon'],
          },
          {
            id: 'alts',
            text: 'Alts sammeln lassen und Material über den Server-Speicher an den Main geben',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx'],
          },
          {
            id: 'calculator',
            text: 'Materialbedarf vorab im Crafting-Rechner planen',
            sources: ['aion2hub-crafting'],
          },
        ],
      },
    ],
  },
  {
    id: 'kinah',
    title: 'Kinah mit Crafting',
    icon: 'coin',
    intro: 'Crafting kann viel Kinah bringen – oder unbemerkt kosten. Vor jedem Verkaufs-Craft Materialpreise, Marktgebühr und Steuer gegen den Verkaufspreis rechnen.',
    groups: [
      {
        title: 'Lohnende Ideen',
        tips: [
          {
            id: 'consumables',
            text: 'Verbrauchsgüter: Life Serum, Tränke, Mana-Stone-Scrolls (Alchemy), Accuracy-Food und Ausdauer-Getränke (Cooking)',
            sources: ['yt-gear-sog', 'yt-kinah-aselon'],
          },
          {
            id: 'flight-potions',
            text: 'Flug-Tränke verkaufen sich zum Start gut – alle erkunden die Karten',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'stones',
            text: 'Mana/Soul Stones per Alchemie aufwerten – ein Superior-Proc ist immer handelbar',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'artisan-gear',
            text: 'Artisan-Gear craften: braucht keine seltenen Materialien und wird später selbst als Material gebraucht',
            detail: 'Wer das Risiko scheut, verkauft die blauen Vorstufen.',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'supply-sell',
            text: 'Nicht benötigte Craft-Varianten nicht zerlegen: für Supply Requests nutzen oder an Spieler verkaufen',
            sources: ['yt-kinah-aselon'],
          },
          {
            id: 'market-check',
            text: 'Marktpreise vergleichen: Oft bringt das Rohmaterial mehr als das fertige Produkt',
            sources: ['yt-kinah-aselon', 'yt-craft-crusherx'],
          },
        ],
      },
    ],
  },
];
