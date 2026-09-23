import { clericEarlyDetails } from '../details/cleric-early';
import type { ClassDef, Phase, Section } from '../types';

const clericEarlyEssentials: Section = {
  id: 'essentials',
  kind: 'systems',
  title: 'Grundlagen frisch 45',
  items: [
    {
      id: 'combat-mode',
      text: 'Aion-1-Modus (Tab-Target) nutzen – Auto-Attacks in Skill-Lücken laden Mana',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'resurrection',
      text: 'Summon Resurrection als Stigma dabei (Lv. 1, später +5 für 1 s Zauberzeit)',
      detail: 'Wiederbelebungssteine sind anfangs selten – ohne Resurrection fliegt man schnell aus der Gruppe.',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'noble-aura',
      text: 'Noble Aura als Schadens-Stigma einsetzen',
      sources: ['yt-cleric-beginner', 'yt-cleric-skills'],
    },
    {
      id: 'bolt-quickcast',
      text: 'Bolt maxen – Spezialisierung Quick Cast (30 % schneller)',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'offense-passives',
      text: 'Kern-Passives: Offensiv-Passive (Crit/Double Chance), Radiant-Party-Heilung, Healing Enhancement',
      sources: ['yt-cleric-beginner'],
      uncertain: true,
    },
    {
      id: 'stigmas-5',
      text: 'Eingesetzte Stigmas auf 5 (Shards aus Supply Requests oder Abyss-Shop)',
      sources: ['yt-cleric-beginner'],
    },
  ],
};

const clericEarlyDaevanion: Section = {
  id: 'daevanion',
  kind: 'daevanion',
  title: 'Daevanion',
  items: [
    {
      id: 'nezakan',
      text: 'Nezakan: Cooldown-Reduktion → Combat Speed → Defense → Attack',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'zikel',
      text: 'Zikel: erst Damage-Tolerance-Linie, dann Damage-Boost-Linie',
      detail: 'Keine Accuracy, Evasion, Crit-Damage oder Multi-Hit.',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'skill-nodes',
      text: 'Danach auf allen Boards Skill-Knoten für die wichtigen Skills (blau = aktiv, grün = passiv)',
      sources: ['yt-cleric-beginner'],
    },
    {
      id: 'ariel',
      text: 'Ariel: PvE-Damage-Tolerance-Linien',
      sources: ['yt-cleric-beginner'],
    },
  ],
};

const clericLeveling: Phase = {
  id: 'leveling',
  title: 'Leveling – Cleric',
  description: 'Beim Leveln sind Dungeons solo – man braucht also Schaden, nicht nur Heilung.',
  sections: [
    {
      id: 'skills',
      kind: 'skills',
      title: 'Skills',
      items: [
        {
          id: 'dps-core',
          text: 'Judgment, Thunder, Divine Aura, Condemnation Richtung 20',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
        {
          id: 'heals-early',
          text: 'Healing Light und Radiant Recovery als frühe Heilungen',
          detail: 'Light of Regeneration kann anfangs warten.',
          sources: ['yt-cleric-skills'],
        },
        {
          id: 'earth-retribution-8',
          text: 'Earth Retribution auf 8 (Mana-Spezialisierung, Filler)',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
        {
          id: 'lightning-strike-8',
          text: 'Lightning Strike auf 8 (HP-Regeneration bei Stagger)',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
        {
          id: 'secondary-12',
          text: 'Debilitating Mark, Chain of Torment, Defiance bis max. 12',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
      ],
    },
    {
      id: 'passives',
      kind: 'passives',
      title: 'Passives',
      items: [
        {
          id: 'warm-benediction',
          text: 'Warm Benediction (HP + MP) zuerst',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
        {
          id: 'immortal-veil',
          text: 'Immortal Veil (Defense, Crit-Resist)',
          sources: ['yt-cleric-skills'],
          uncertain: true,
        },
      ],
    },
  ],
};

export const cleric: ClassDef = {
  id: 'cleric',
  name: 'Cleric',
  role: 'Heiler / Hybrid',
  weapon: 'Mace + Schild / Orb',
  summary: 'Vielseitigster Heiler; kann als reiner Heiler oder als DPS-Hybrid gespielt werden.',
  builds: [
    {
      id: 'cleric-pve-heal',
      name: 'Heiler',
      mode: 'pve',
      summary: 'Heilung > Notfall-Mechaniken > Buffs/Debuffs > Schaden. Heal-Stärke skaliert inzwischen mit Attack Power.',
      details: clericEarlyDetails,
      phases: [
        clericLeveling,
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            clericEarlyEssentials,
            clericEarlyDaevanion,
            {
              id: 'skills',
              kind: 'skills',
              title: 'Kern-Skills',
              items: [
                {
                  id: 's-tier',
                  text: 'S-Tier: Light of Regeneration, Healing Light, Radiant Recovery, Absolution, Benevolence, Salvation',
                  sources: ['gege-cleric'],
                },
                {
                  id: 'spec-regeneration',
                  text: 'Light of Regeneration: Spezialisierungen 1 / 4 / 5 (Lv. 20)',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'spec-healing',
                  text: 'Light of Healing: Spezialisierungen 3 / 4 / 5 (Lv. 20)',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'spec-radiance',
                  text: 'Radiance of Joy/Recovery: Spezialisierungen 1 / 3 / 5 (Lv. 20)',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'healing-enhancement',
                  text: 'Healing Enhancement (Healing Boost) für Dungeons',
                  detail: 'Skaliert seit Patch mit Attack Power (26 % → 30 % → 34 %).',
                  sources: ['yt-cleric-skills', 'gege-cleric'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'light-protection',
                  text: 'Light of Protection (nur ohne Chanter in der Gruppe)',
                  sources: ['yt-cleric-skills', 'gege-cleric'],
                },
                {
                  id: 'yustiel-power',
                  text: 'Yustiel’s Power',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'benevolence',
                  text: 'Benevolence',
                  sources: ['yt-cleric-skills', 'gege-cleric'],
                },
                {
                  id: 'absolution',
                  text: 'Absolution (Gruppenheilung, 40 m)',
                  sources: ['vortex-cleric', 'gege-cleric'],
                },
                {
                  id: 'power-of-life',
                  text: 'Power of Life',
                  sources: ['vortex-cleric'],
                },
                {
                  id: 'earth-punishment',
                  text: 'Earth’s Punishment',
                  sources: ['vortex-cleric'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Heil-Prioritäten',
              items: [
                {
                  id: 'heal-prio',
                  text: 'Tank in Gefahr → Mechanik-Ziel → mehrere Verletzte (AoE) → Einzelziel (Healing Light) → HoTs gegen Dauerschaden',
                  sources: ['gege-cleric'],
                },
                {
                  id: 'range-40',
                  text: 'Heil-Reichweite 40 m nutzen – Abstand halten',
                  detail: 'Seit Patch: Reichweite 25 → 40 m, dafür Heilung reduziert.',
                  sources: ['gege-cleric'],
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'main-stats',
                  text: 'Hauptattribute: Constitution und Willpower',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'pantheon',
                  text: 'Pantheon: Wisdom (Lumiel) und Life (Yustiel)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'stat-order',
                  text: 'Attack Power / Heal-Skalierung → HP → Defensive → Cooldown → Crit',
                  sources: ['gege-cleric'],
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
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana',
              items: [
                {
                  id: 'arcana-heal-cards',
                  text: 'Arcana-Karten mit Boni auf Kern-Heilungen wählen',
                  detail: 'z. B. Healing Light, Radiant Recovery, Light of Regeneration.',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'arcana-gold',
                  text: 'Gold-Karten gezielt über Fragmente transmutieren',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas (situativ)',
              items: [
                {
                  id: 'salvation-hard',
                  text: 'Für Hall of Illusions / Sanctuary: Salvation einbauen',
                  detail: 'Power of Uriel als Option.',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'skills-16-20',
                  text: 'Kern-Heilungen über Arcana und Daevanion auf 16 bzw. 20 bringen',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cleric-pve-dps',
      name: 'DPS-Hybrid',
      mode: 'pve',
      summary: 'Schadensorientierter Cleric mit Gruppen-Buffs. Burst: Debilitating Mark → Prayer of Amplification → Bolt → Divine Aura.',
      details: clericEarlyDetails,
      phases: [
        clericLeveling,
        {
          id: 'early',
          title: 'Frisch 45 / Early Endgame',
          sections: [
            clericEarlyEssentials,
            clericEarlyDaevanion,
            {
              id: 'skills',
              kind: 'skills',
              title: 'Skills & Spezialisierungen',
              items: [
                {
                  id: 'a-tier',
                  text: 'Offensiv-Kern: Debilitating Mark, Bolt, Divine Aura',
                  detail: 'Bolt seit Patch +20 % PvE; Divine Aura +100 % PvE.',
                  sources: ['gege-cleric'],
                },
                {
                  id: 'spec-retribution',
                  text: 'Divine Retribution: 2 / 3 / 4',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'spec-judgment',
                  text: 'Judgment Bolt: 2 / 4 / 5',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'spec-condemnation',
                  text: 'Condemnation: 2 / 3 / 4',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
                {
                  id: 'spec-sacred',
                  text: 'Sacred Energy: 3 / 4 / 5',
                  sources: ['vortex-cleric'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'stigmas',
              kind: 'stigmas',
              title: 'Stigmas',
              items: [
                {
                  id: 'amplification',
                  text: 'Prayer of Amplification (Attack-Buff, CD jetzt 60 s)',
                  sources: ['yt-cleric-skills', 'gege-cleric'],
                },
                {
                  id: 'earth-punishment',
                  text: 'Earth’s Punishment',
                  sources: ['yt-cleric-skills', 'vortex-cleric'],
                },
                {
                  id: 'noble-aura',
                  text: 'Noble Aura (anfangs alternativ Power Burst)',
                  sources: ['yt-cleric-skills', 'vortex-cleric'],
                },
                {
                  id: 'light-possession',
                  text: 'Light of Possession',
                  sources: ['vortex-cleric'],
                },
                {
                  id: 'power-of-life',
                  text: 'Power of Life',
                  sources: ['vortex-cleric'],
                },
                {
                  id: 'light-protection',
                  text: 'Light of Protection (nur ohne Chanter in der Gruppe)',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
            {
              id: 'passives',
              kind: 'passives',
              title: 'Passives',
              items: [
                {
                  id: 'dps-passives',
                  text: 'DPS-Passives: Empyrean Lord’s Grace und Earth’s Grace',
                  sources: ['yt-cleric-skills'],
                  uncertain: true,
                },
              ],
            },
            {
              id: 'stats',
              kind: 'stats',
              title: 'Stats',
              items: [
                {
                  id: 'main-stats',
                  text: 'Hauptattribute: Precision und Intelligence (Magic Accuracy)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'pantheon',
                  text: 'Pantheon: Destruction (Zikel) und Death (Triniel)',
                  sources: ['yt-cleric-skills'],
                },
                {
                  id: 'stat-order',
                  text: 'Attack Power → Crit → Crit Damage → PvE Damage → Accuracy → HP',
                  sources: ['gege-cleric'],
                },
              ],
            },
            {
              id: 'rotation',
              kind: 'rotation',
              title: 'Rotation',
              items: [
                {
                  id: 'burst',
                  text: 'Burst: Debilitating Mark → Prayer of Amplification → Bolt → Divine Aura',
                  sources: ['gege-cleric'],
                },
                {
                  id: 'heal-first',
                  text: 'Heilung und Notfall-Mechaniken haben trotzdem Vorrang',
                  sources: ['gege-cleric'],
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
              id: 'arcana',
              kind: 'arcana',
              title: 'Arcana',
              items: [
                {
                  id: 'arcana-dps-cards',
                  text: 'Arcana-Karten mit Boni auf Bolt / Judgment / Condemnation wählen',
                  sources: ['yt-cleric-skills'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
