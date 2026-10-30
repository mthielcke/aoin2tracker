import type { Phase } from './types';

export const PET_SCOPE = 'pets';

const PET_SOURCES = ['keengamer-pets', 'roonby-pets', 'expcarry-pets'];
const MERCHANT_SOURCES = ['keengamer-pets', 'roonby-pets', 'aion2tierlist-pets'];

export const PET_SHOP_PLAN: Phase[] = [
  {
    id: 'fixed',
    title: '1 · Feste Shops',
    description:
      'Diese Spezial-Pets droppen nicht als Seele von Monstern – du bekommst sie nur über den Shop. Pets zählen accountweit für Genus Insight.',
    sections: [
      {
        id: 'atelier',
        kind: 'systems',
        title: 'Atelier-Shop',
        items: [
          { id: 'white-bunny', text: 'White Bunny kaufen', sources: PET_SOURCES },
          { id: 'chonky-hamster', text: 'Chonky Hamster kaufen', sources: PET_SOURCES },
        ],
      },
      {
        id: 'shugo',
        kind: 'systems',
        title: 'Shugo Festival',
        items: [
          {
            id: 'wandering-lugi',
            text: 'Wandering Merchant Lugi im Pets-Tauschshop des Shugo Festivals kaufen',
            detail: 'Bezahlt wird mit der Festival-Währung – Preis im Shop prüfen.',
            sources: PET_SOURCES,
          },
        ],
      },
      {
        id: 'tsenka',
        kind: 'systems',
        title: 'Tsenka-Händler',
        items: [
          {
            id: 'pagati',
            text: 'Pagati beim Tsenka-Händler kaufen',
            detail:
              'Laut Roonby 2 Mio. gebundene Kinah. Kann auch aus der „Advance: Pet Chest“ kommen – vorher prüfen, ob du ihn schon hast.',
            sources: ['keengamer-pets', 'roonby-pets'],
          },
        ],
      },
    ],
  },
  {
    id: 'event',
    title: '2 · Event-Shop (Halloween)',
    description:
      'Nur eine Quelle nennt diese Pets, und Start- und Enddatum des Events stehen nirgends. Im Spiel prüfen, ob der Shop gerade offen ist.',
    sections: [
      {
        id: 'halloween',
        kind: 'systems',
        title: 'Saisonaler Halloween-Shop',
        items: [
          { id: 'little-ghost', text: 'Little Ghost kaufen', sources: ['expcarry-pets'], uncertain: true },
          { id: 'pumpkin-carriage', text: 'Pumpkin Carriage kaufen', sources: ['expcarry-pets'], uncertain: true },
        ],
      },
    ],
  },
  {
    id: 'black-cloud',
    title: '3 · Black Cloud Merchants (optional)',
    description:
      'Diese Pets droppen nicht als Seele, kommen aber außer beim Händler auch aus Belohnungskisten. Die Ware der Black Cloud Merchants wechselt – beim Vorbeikommen reinschauen. Hier stehen nur Pets, bei denen sich KeenGamer und AION2 Tierlist einig sind.',
    sections: [
      {
        id: 'merchant',
        kind: 'systems',
        title: 'Händler-/Kisten-Pets nach Genus',
        items: [
          {
            id: 'cogni',
            text: 'Cogni: Aultross’s Doppelganger, Dratona Tinkerer, Furious Feruk, Mumu Overseer, Sentinel K’nash, Urugugu Brawler',
            sources: MERCHANT_SOURCES,
          },
          {
            id: 'fera',
            text: 'Fera: Aberrant Odyle Spider, Ashen Basilisk, Ashen Lupyllini, Coradon, Elite Keneire, Elite Ursus, Flame Barghest, Grave Rat, Kernon, Mutated Insectoid Valka, Venomous Insect Sram, Young Tog',
            sources: MERCHANT_SOURCES,
          },
          {
            id: 'natura',
            text: 'Natura: Ancient Spirit, Dionae, Forest Dionae, Dried Up Forest Guardian, Elite Poisonous Spore Fungen, Ultimate Earth/Fire/Water/Wind Spirit',
            sources: MERCHANT_SOURCES,
          },
          {
            id: 'varian',
            text: 'Varian: Drana Contaminant, Elite Soulless Corpse Gnat, Flame Stone Guardian Statue, Gatekeeper Pinopi, Krao Mutant, Krao Seal Guardian, Krao Test Subject, Swamp Monster',
            sources: MERCHANT_SOURCES,
          },
        ],
      },
    ],
  },
];
