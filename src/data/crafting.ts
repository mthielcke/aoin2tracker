import type { TipTopic } from './types';

export const CRAFTING_TOPICS: TipTopic[] = [
  {
    id: 'basics',
    title: 'Überblick & Start',
    icon: 'hammer',
    intro:
      'Crafting-Gear ist das beste PvE-Gear: mehr Soul-Bind-Zeilen und bis zu ca. 18 % PvE-Schaden über Waffe, Guard und Accessoires. Zum Global-Launch gibt es in Conquest-Dungeons und Sanctuary-Raids keine Heroic-Drops. Trotzdem gilt für Season 1: nicht hetzen, Berufe nebenbei leveln und Materialien sparen. F2P-Spieler kommen mit Dungeon-Rüstung gut zurecht.',
    blocks: [
      {
        type: 'table',
        columns: ['Beruf', 'Stellt her', 'Wichtig für'],
        rows: [
          ['Blacksmithing', 'Greatsword, Langschwert, Dolche, Streitkolben, Schilde und Guards', 'Templar, Gladiator, Assassin, Cleric – und alle Klassen wegen des Guards'],
          ['Armorsmithing', 'Rüstungsteile inkl. Helm und Umhang', 'Alle Klassen'],
          ['Handicrafting', 'Bögen, Stäbe, Ringe, Ohrringe, Ketten', 'Ranger, Chanter – Accessoires für alle'],
          ['Alchemy', 'Zauberbücher, Orbs, Mana Stones, Scrolls, Tränke', 'Sorcerer, Spiritmaster – Verbrauchsgüter für alle'],
          ['Cooking', 'Essen und Getränke mit 5-Minuten-Buffs', 'Alle – Buff-Food vor Dungeons'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Die „Novice 50“-Wand',
        text: 'Kampflevel endet bei 45, Gathering und Crafting bei Novice 50 – dort friert die EP ein. Die Rang-Aufstiegsquest (u. a. „Upgrade Essence Extraction Specialty Skill“ bei NPC Alzir in Verteron bzw. Altgard) hebt die Grenze auf 100 und schaltet weitere Perks frei. Auch jeder Crafting-Beruf hat bei 50 eine eigene Regionalquest für die nächste Rangstufe.',
      },
    ],
    groups: [
      {
        title: 'Loslegen',
        tips: [
          {
            id: 'pick-profession',
            text: 'Berufe passend zu deiner Ausrüstung wählen – meist brauchst du zwei auf 50',
            detail: 'Beispiel Ranger: Handicrafting für Bogen und Accessoires plus Blacksmithing für den Guard. Alle fünf Berufe sind auf einem Charakter möglich.',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx'],
          },
          {
            id: 'unlock-quests',
            text: 'Freischalt-Quests im Crafting-Viertel der Hauptstadt erledigen',
            sources: ['yt-craft-crusherx'],
          },
          {
            id: 'merchant-materials',
            text: 'Basis-Materialien und Katalysatoren beim Händler des jeweiligen Berufs kaufen – die lassen sich nicht farmen',
            detail: 'Beispiel: 2 Orichalcum Ore + Katalysator → Orichalcum Ingot. Gecraftet wird übers Menü, du musst nicht am Tisch stehen.',
            sources: ['yt-craft-zyaso', 'fextralife-crafting'],
          },
          {
            id: 'level-cheap',
            text: 'Berufe günstig auf 50 leveln: billige Level-1-Rezepte per Max-Craft laufen lassen (z. B. über Nacht)',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'rank-up',
            text: 'Bei Novice 50 die Rang-Aufstiegsquests machen (Gathering und jeder Crafting-Beruf)',
            sources: ['yt-craft-crusherx', 'yt-gather-mr4k', 'yt-craft-zyaso'],
          },
          {
            id: 'daily-supply',
            text: 'Täglich die Supply Requests abgeben – Crafting-EP, Katalysatoren und Kinah zurück',
            detail: 'Die Abgaben erstatten einen großen Teil der Produktionskosten. Abyss-Punkte aus Crafting-Supply-Requests sind saisonal und zählen nicht zum Wochenlimit.',
            sources: ['yt-craft-crusherx', 'yt-kinah-aselon'],
          },
          {
            id: 'one-first',
            text: 'Erst einen Hauptberuf ausbauen, dann die anderen',
            detail: 'Alternative laut Ynoki: mit Alchemy und Cooking beginnen – Verbrauchsgüter bringen sofort Nutzen und verkaufen sich immer.',
            sources: ['yt-craft-crusherx', 'yt-craft-ynoki'],
          },
          {
            id: 'no-rush',
            text: 'Season 1 nicht hetzen: nur Engpass-Teile craften, Materialien sparen',
            detail: 'Ein komplettes Set am ersten Tag zu craften ruiniert dein Kinah – dann fehlt es für Verstärken und Teleports.',
            sources: ['yt-craft-mr4k', 'yt-craft-ynoki'],
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
      'Crafting-Waffen und -Accessoires haben mehr Soul-Bind-Zeilen (Waffe 5 statt 3–4) und einen eingebauten PvE-Bonus. Der Weg läuft über die Proc-Kette bis zum ersten Dragon-Lord-Teil – danach übernimmt das Transfer-Crafting, und du verlierst nichts mehr.',
    blocks: [
      {
        type: 'table',
        columns: ['Teil', 'PvE-Schaden durch Crafting'],
        rows: [
          ['Waffe', '5 %'],
          ['Guard', '5 %'],
          ['Kette', '2,5 %'],
          ['Ohrringe', '2,5 %'],
          ['Gesamt mit weiteren Accessoires', 'bis ca. 18 %'],
        ],
      },
      {
        type: 'steps',
        title: 'Der Weg zur Endgame-Waffe',
        items: [
          'Normales Crafting: Jeder Craft hat 25 % Chance, eine bessere Version zu „proccen“ (weiß → grün → blau → gelb). Das geprocte Teil ist Zutat für die nächste Stufe.',
          'Teile ohne Proc nicht wegwerfen: Sie sind Zutaten oder gehen in Supply Requests.',
          'Das erste Dragon-Lord-Teil (z. B. Level-70-Waffe) ist die einzige riskante Stufe.',
          'Danach Transfer-Crafting: garantiert erfolgreich. Mit Proc springst du eine Stufe höher, ohne Proc zahlst du Kinah für das Upgrade (in KR z. B. 1 Mio., dann 5 Mio., 10 Mio. … bis 100 Mio. für die höchste Stufe).',
          'Enhance, Amplify und Soul Binds wandern mit; bei 6-Zeilen-Teilen folgen 5 Zeilen, eine wird neu gerollt. Das Ergebnis ist an den Charakter gebunden.',
        ],
      },
      {
        type: 'callout',
        variant: 'primary',
        title: 'Garantiert statt Glück: Core + Magical Breath',
        text: 'Global startet mit garantiertem Crafting über einen Core. Dafür brauchst du Magical Breath aus Season Shop → Materials – nur 5 pro Server und Season, nicht übertragbar. Priorität: Waffe, Guard, Kette, Ohrringe.',
      },
    ],
    groups: [
      {
        title: 'Reihenfolge & Entscheidungen',
        tips: [
          {
            id: 'order',
            text: 'Reihenfolge: Waffe → Guard → Kette → Ohrringe, Rüstung zuletzt',
            detail: 'TheWhelps empfiehlt als allererstes Teil Ringe (Skill-Schwellen 12/16/20, extra Soul Bind).',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx', 'yt-gear-freshy', 'yt-prog-whelps'],
          },
          {
            id: 'gamble-vs-guaranteed',
            text: '25-%-Gamble nie ohne Reserve – für das eine Endgame-Teil lieber garantiert',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx'],
          },
          {
            id: 'magical-breath',
            text: 'Magical Breath (nur 5 pro Server) erst einsetzen, wenn klar ist, welches Teil du craftest',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx', 'yt-craft-lucky'],
          },
          {
            id: 'wrong-core',
            text: 'Falschen Core gecraftet? Beim NPC bzw. im Substance Morph in den richtigen tauschen',
            detail: 'Es gibt getrennte Cores für Waffe, Accessoires und Rüstung.',
            sources: ['yt-craft-mr4k'],
          },
          {
            id: 'crafts-can-fail',
            text: 'Beim Rezept steht, ob der Craft fehlschlagen kann – dann sind bei Fehlschlag alle Materialien weg',
            sources: ['yt-craft-zyaso', 'yt-gear-koodoki'],
          },
          {
            id: 'level-vs-tier',
            text: 'Nur Rezepte auf oder unter deinem Berufslevel craften – darüber drohen Abzüge',
            detail: 'Größere Mengen am Stück craften glättet das 25-%-Glück – einzeln kannst du auch 10-mal in Folge scheitern.',
            sources: ['yt-craft-ynoki'],
          },
          {
            id: 'ranger-bow',
            text: 'Klassen-Hinweis Ranger: den Horned-Dragon-Bogen anpeilen (6 Zeilen) – die Ludra-Waffe hat nur 4',
            sources: ['yt-craft-lucky'],
          },
          {
            id: 'ludra',
            text: 'Kein Crafting-Weg? Die Ludra-Heroic-Waffe aus dem Sanctuary ist eine Alternative',
            detail: 'Sie hat weniger Zeilen – je nach Klasse fehlen wichtige Stats.',
            sources: ['yt-craft-mr4k', 'yt-craft-lucky'],
          },
        ],
      },
      {
        title: 'Transfer, Potential & Verkauf',
        tips: [
          {
            id: 'transfer',
            text: 'Transfer-Crafting nutzen: garantiert, Enhance und Soul Binds wandern mit',
            detail: 'Deshalb lohnt sich Kinah in Crafting-Gear mehr als in Dungeon-Gear.',
            sources: ['yt-craft-lucky', 'yt-craft-ynoki', 'yt-gear-freshy'],
          },
          {
            id: 'potential',
            text: 'Auf offenes Potential achten – ausgegraute Potential-Slots bedeuten ein statisches Teil ohne Zukunft',
            detail: 'Potential (PvE-Boni) kommt über Potential-Steine und wird beim Transfer nicht übernommen.',
            sources: ['yt-craft-ynoki', 'yt-gear-freshy', 'yt-gear-koodoki'],
          },
          {
            id: 'sellable',
            text: 'Handelbar erkennst du am Marktplatz-Symbol – bis zum Anlegen; danach ist das Teil gebunden',
            sources: ['yt-craft-ynoki'],
          },
          {
            id: 'sell-proc',
            text: 'Einen unerwarteten gelben/lila Proc in der Launch-Woche verkaufen – die Preise fallen nach dem ersten Monat stark',
            detail: 'Umgekehrt: als Käufer am Anfang nicht überzahlen.',
            sources: ['yt-craft-crusherx', 'yt-craft-mr4k'],
          },
          {
            id: 'old-heroic',
            text: 'Alte Teile nicht blind zerlegen: prüfen, ob sie Transfer- oder Morph-Material sind',
            sources: ['yt-craft-ynoki'],
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
      'Gathering läuft über ein einziges System, die Essence Extraction: Erz, Pflanzen, Holz und Odyl leveln alle denselben Skill. Knoten gibt es in den Qualitäten common, fine und pure. Auch Fehlschläge geben Erfahrung.',
    blocks: [
      {
        type: 'table',
        columns: ['Perk', 'Wirkung'],
        rows: [
          ['Proficient Handling', 'Höhere Erfolgsrate'],
          ['Delicate Touch', 'Fehlschlag-Balken füllt sich langsamer'],
          ['Lady Luck', 'Chance auf kritische Extra-Ausbeute'],
          ['Seeker (Spezial)', 'Zeigt Knoten auf der Minimap'],
          ['Plentiful Harvest (Spezial)', 'Doppelte Ausbeute'],
          ['Appraiser (Spezial)', 'Mehr fine- und pure-Materialien'],
        ],
      },
      {
        type: 'text',
        text: 'Punkte lassen sich für 50.000 Kinah zurücksetzen. MR4KTV empfiehlt die allgemeinen Perks auf 10/10/5, dazu Odyl und den Knotentyp, den du wirklich farmst (z. B. Holz für Handicrafting), auf Maximum.',
      },
    ],
    groups: [
      {
        title: 'Gathering',
        tips: [
          {
            id: 'gather-everything',
            text: 'Unterwegs jeden Knoten mitnehmen – Gathering levelt nebenbei',
            detail: 'Separate Sammel-Sessions lohnen sich nur für gezieltes Farmen.',
            sources: ['yt-gather-mr4k', 'yt-craft-ynoki'],
          },
          {
            id: 'odyl',
            text: 'Odyl immer mitnehmen – fliegt als grüne Ressource über den Städten, am Dungeon-Ende gibt es 3 Knoten pro Person',
            detail: 'Odyl wird für fast jedes Rezept gebraucht.',
            sources: ['yt-gather-mr4k', 'yt-craft-crusherx', 'yt-craft-zyaso'],
          },
          {
            id: 'perks',
            text: 'Perks setzen: allgemeine 10/10/5, dazu Odyl und deinen Haupt-Knotentyp maxen',
            sources: ['yt-gather-mr4k', 'yt-craft-zyaso'],
          },
          {
            id: 'rank-up-gathering',
            text: 'Gathering auf 50 → Aufstiegsquest in der Hauptstadt (u. a. seltene Rubine sammeln) → Rang Professional',
            sources: ['yt-gather-mr4k', 'yt-craft-crusherx'],
            uncertain: true,
          },
          {
            id: 'caps',
            text: 'Tägliche Extraktions-Limits beachten',
            sources: ['yt-craft-crusherx'],
          },
          {
            id: 'artisan-ultimate',
            text: 'Erfolg „Artisan’s Ultimate“: 1.000 Extraktionen – früh nebenbei anfangen',
            sources: ['yt-gather-mr4k'],
          },
        ],
      },
      {
        title: 'Materialquellen',
        tips: [
          {
            id: 'sources',
            text: 'Quellen: Gathering, Dungeon-Bosse, Händler-Katalysatoren, Marktplatz, Season Shop, Trade Shop, Shugo Festival',
            detail: 'Im Rezept zeigt der Button „Sources“, wo es welches Material gibt.',
            sources: ['yt-craft-mr4k', 'yt-craft-crusherx', 'yt-craft-zyaso'],
          },
          {
            id: 'odial-morph',
            text: 'Odyl per Substance Morph 1:1 in seltene Erze, Holz oder Kräuter tauschen – 100 % Erfolg, kein Kinah',
            detail: 'Die Seltenheit des Odyls muss zur gewünschten Materialstufe passen.',
            sources: ['yt-craft-crusherx', 'yt-craft-zyaso'],
          },
          {
            id: 'dungeon-tiers',
            text: 'Jede Dungeon-Stufe liefert eigene Materialien – für höhere Crafts brauchst du 1★-, 2★- und 3★-Material',
            sources: ['yt-gear-koodoki', 'yt-craft-crusherx'],
          },
          {
            id: 'keep-materials',
            text: 'Materialien nicht blind verkaufen – eigenes Lagerfach für Crafting-Zutaten anlegen',
            sources: ['yt-craft-ynoki'],
          },
          {
            id: 'bound',
            text: 'Für eigenes Gear gebundene Materialien nutzen, handelbare für Verkaufs-Crafts',
            detail: 'Wer handelbare Materialien für sein eigenes Gear verbraucht, verschenkt Gewinn.',
            sources: ['yt-craft-crusherx', 'yt-kinah-aselon'],
          },
          {
            id: 'alts',
            text: 'Teure Materialien droppen in Dungeons – mit Twinks mitfarmen und über den Server-Speicher zum Main geben',
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
    intro:
      'Crafting kann viel Kinah bringen – oder unbemerkt kosten. Vor jedem Verkaufs-Craft Materialpreise, Marktgebühr und Steuer gegen den Verkaufspreis rechnen. Zum Verkaufen brauchst du Marktplatz-Zugang (Abo, z. B. 30 Tage im Founder’s Pack).',
    groups: [
      {
        title: 'Lohnende Ideen',
        tips: [
          {
            id: 'consumables',
            text: 'Verbrauchsgüter laufen immer: Tränke, Scrolls, Mana Stones (Alchemy), Accuracy-Food und Ausdauer-Getränke (Cooking)',
            sources: ['yt-craft-ynoki', 'yt-gear-sog', 'yt-kinah-aselon'],
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
            id: 'expensive-materials',
            text: 'Seltene Veredelungsmaterialien sind viel wert – z. B. kostete ein Artisan’s Ultimate Refining Stone über 2 Mio. Kinah',
            sources: ['yt-craft-zyaso'],
          },
          {
            id: 'supply-sell',
            text: 'Nicht benötigte Craft-Varianten nicht zerlegen: für Supply Requests nutzen oder an Spieler verkaufen',
            sources: ['yt-kinah-aselon', 'yt-craft-ynoki'],
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
