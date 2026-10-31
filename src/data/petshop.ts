import type { ChecklistItem, Phase } from './types';

export const PET_SCOPE = 'pets';

const ICON_BASE = 'https://elitegrindlab.com/media/aion-2/icons/';

/** Ein Pet zum Sammeln: Haken = Stufe 3 (Sammlung komplett). */
const pet = (id: string, name: string, icon: string): ChecklistItem => ({
  id,
  text: name,
  image: ICON_BASE + icon,
  sources: ['elitegrind-pets'],
});

export const PET_SHOP_PLAN: Phase[] = [
  {
    id: 'black-cloud',
    title: '1 · Black Cloud Merchants: Pets auf Stufe 3',
    description:
      'Diese Pets droppen nicht als Seele von Monstern – du bekommst sie beim Black Cloud Merchant (Shop-Menü, Ware rotiert) oder aus Belohnungskisten. Jedes neue Pet gibt 500 Genus-Insight-EXP, Stufe 2 und 3 je 250. Auf Stufe 3 wirkt der Owned Effect für alle Charaktere im Account, auch ohne das Pet auszurüsten. Haken setzen, wenn das Pet auf Stufe 3 ist.',
    sections: [
      {
        id: 'cogni',
        kind: 'systems',
        title: 'Cogni – Stufe 3: HP +30, Krit +2, STR +1',
        items: [
          pet('aultrosss-doppelganger', 'Aultross’s Doppelganger', 'pet-Owltros_02.webp'),
          pet('urugugu-brawler', 'Urugugu Brawler', 'pet-OwlSoldier_09.webp'),
          pet('sentinel-knash', 'Sentinel K’nash', 'pet-BeritraD_04.webp'),
          pet('mumu-overseer', 'Mumu Overseer', 'pet-SkurvWar_04.webp'),
          pet('dratona-tinkerer', 'Dratona Tinkerer', 'pet-Dratona_01_V01.webp'),
          pet('furious-feruk', 'Furious Feruk', 'pet-Ferk_01.webp'),
        ],
      },
      {
        id: 'fera',
        kind: 'systems',
        title: 'Fera – Stufe 3: Reittempo +3, Genauigkeit +2, DEX +1',
        items: [
          pet('kernon', 'Kernon', 'pet-Keneir_01.webp'),
          pet('aberrant-odyle-spider', 'Aberrant Odyle Spider', 'pet-OdSpider_04.webp'),
          pet('elite-keneire', 'Elite Keneire', 'pet-Keneir_01_V01.webp'),
          pet('elite-ursus', 'Elite Ursus', 'pet-UrsussElite_01.webp'),
          pet('grave-rat', 'Grave Rat', 'pet-GraveRat_01.webp'),
          pet('coradon', 'Coradon', 'pet-Coradon_01.webp'),
          pet('young-tog', 'Young Tog', 'pet-Tog_01_V01.webp'),
          pet('ashen-lupyllini', 'Ashen Lupyllini', 'pet-Lufilini_02_CV01.webp'),
          pet('mutated-insectoid-valka', 'Mutated Insectoid Valka', 'pet-Bug_01.webp'),
          pet('venomous-insect-sram', 'Venomous Insect Sram', 'pet-Bug_02.webp'),
          pet('ashen-basilisk', 'Ashen Basilisk', 'pet-Basilisk_01_CV01.webp'),
          pet('flame-barghest', 'Flame Barghest', 'pet-Balgest_01.webp'),
        ],
      },
      {
        id: 'natura',
        kind: 'systems',
        title: 'Natura – Stufe 3: Ausdauer +900, Krit-Resistenz +2, AGI +1',
        items: [
          pet('ultimate-wind-spirit', 'Ultimate Wind Spirit', 'pet-WindEle_04.webp'),
          pet('ultimate-fire-spirit', 'Ultimate Fire Spirit', 'pet-FireEle_04.webp'),
          pet('ultimate-water-spirit', 'Ultimate Water Spirit', 'pet-WaterEle_04.webp'),
          pet('ultimate-earth-spirit', 'Ultimate Earth Spirit', 'pet-EarthEle_04.webp'),
          pet('dionae', 'Dionae', 'pet-Dionaea_01.webp'),
          pet('forest-dionae', 'Forest Dionae', 'pet-Dionaea_01_CV01.webp'),
          pet('dried-up-forest-guardian', 'Dried Up Forest Guardian', 'pet-ForestArc_01_V01.webp'),
          pet('ancient-spirit', 'Ancient Spirit', 'pet-Gartua_01_V01.webp'),
          pet('elite-poisonous-spore-fungen', 'Elite Poisonous Spore Fungen', 'pet-ToxFungus_01.webp'),
        ],
      },
      {
        id: 'varian',
        kind: 'systems',
        title: 'Varian – Stufe 3: Sprint-Kosten Reittier +30, Ausweichen +2, CON +1',
        items: [
          pet('krao-mutant', 'Krao Mutant', 'pet-KraoElite_01.webp'),
          pet('krao-test-subject', 'Krao Test Subject', 'pet-KraoWar_01.webp'),
          pet('krao-seal-guardian', 'Krao Seal Guardian', 'pet-KraoElite_02.webp'),
          pet('swamp-monster', 'Swamp Monster', 'pet-BigMan_01.webp'),
          pet('gatekeeper-pinopi', 'Gatekeeper Pinopi', 'pet-PinoBoss_01.webp'),
          pet('drana-contaminant', 'Drana Contaminant', 'pet-DranaVar_04.webp'),
          pet('flame-stone-guardian-statue', 'Flame Stone Guardian Statue', 'pet-Gargoyle_01.webp'),
          pet('elite-soulless-corpse-gnat', 'Elite Soulless Corpse Gnat', 'pet-CorpeSpider_01.webp'),
        ],
      },
    ],
  },
  {
    id: 'event',
    title: '2 · Event',
    sections: [
      {
        id: 'halloween',
        kind: 'systems',
        title: 'Halloween',
        items: [
          {
            id: 'halloween-chest',
            text: 'Special Halloween Chest öffnen – 10.000 Pet Soul Crystals',
            detail: 'Nur bis zur Wartung am 03.11.2026. Die Soul Crystals brauchst du für die Genus-Insight-Analysen.',
            sources: ['elitegrind-pets'],
          },
        ],
      },
    ],
  },
];
