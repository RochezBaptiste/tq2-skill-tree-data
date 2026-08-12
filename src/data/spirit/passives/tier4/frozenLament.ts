import { Passive } from "@/app/data/types";

export const frozenLament: Passive = {
  id: "frozen-lament",
  name: "Frozen lament",
  tier: 4,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increased-cold-damage",
      label: "%1% increased Cold damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "chill-power",
      label: "%1% Chill power",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "cold-damage",
      name: "Cold damage",
      details: ["25% increased Cold damage"],
    },
    {
      id: "chill-power",
      name: "Chill power",
      details: ["15% Chill power"],
    },
    {
      id: "maximum-chilled",
      name: "Maximum Chilled",
      details: ["+3 maximum Chilled"],
    },
    {
      id: "shared-damage-cold",
      name: "Shared damage - cold",
      details: [
        "Your Summons have increased damage equal to 20% of your increases to Cold Damage",
      ],
    },
    {
      id: "soulburn",
      name: "Soulburn",
      details: ["35% increased Cold damage with Soulburn skills"],
    },
    {
      id: "chill",
      name: "Chill",
      details: [
        "30% increased Damage against Chilled enemies",
        "Your Summons have 30% increased damage against Chilled enemies",
      ],
    },
    {
      id: "ailment-exploit",
      name: "Ailment exploit",
      details: [
        "35% increased Cold damage against enemies affected by Ailments other than Chilled",
      ],
    },
    {
      id: "cold-conversion",
      name: "Cold conversion",
      details: [
        "Your Summons have 20% of their Weapon damage converted to Cold damage",
      ],
    },
  ],
};
