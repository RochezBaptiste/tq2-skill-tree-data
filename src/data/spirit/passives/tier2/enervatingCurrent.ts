import { Passive } from "@/app/data/types";

export const enervatingCurrent: Passive = {
  id: "enervating-current",
  name: "Enervating current",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increased-vitality-damage",
      label: "%1% increased Vitality damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "increased-lifesteal",
      label: "%1% increased lifesteal",
      baseValue: 6,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "ailment-exploit",
      name: "Ailment exploit",
      details: [
        "35% increased Vitality Damage against enemies affected by Ailments other than Staggered",
      ],
    },
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["25% increased Lifesteal"],
    },
    {
      id: "stagger",
      name: "Stagger",
      details: [
        "30% increased Damage against Staggered enemies",
        "your Summons have 30% increased Damage against Staggered enemies",
      ],
    },
    {
      id: "vitality-damage",
      name: "Vitality damage",
      details: ["25% increased Vitality Damage"],
    },
    {
      id: "soulburn",
      name: "Soulburn",
      details: ["35% increased Vitality Damage with Soulburn skills"],
    },
    {
      id: "shared-damage-vitality",
      name: "Shared damage - Vitality",
      details: [
        "Your Summons have increased Damage equal to 20% of your increases to Vitality Damage",
      ],
    },
    {
      id: "vitality-conversion",
      name: "Vitality conversion",
      details: [
        "Your Summons have 20% of their Weapon Damage converted to Vitality Damage",
      ],
    },
  ],
};
