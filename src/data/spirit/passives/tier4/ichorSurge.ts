import { Passive } from "@/app/data/types";

export const ichorSurge: Passive = {
  id: "ichor-surge",
  name: "Ichor surge",
  tier: 4,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increased-poison-damage",
      label: "%1% increased poison damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "increased-plague-damage",
      label: "%1% increased plague damage",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "poison-damage",
      name: "Poison damage",
      details: ["25% increased Poison damage"],
    },
    {
      id: "plagued-damage",
      name: "Plagued damage",
      details: ["25% increased Plague damage"],
    },
    {
      id: "maximum-plagued",
      name: "Maximum plagued",
      details: ["+3 Maximum plagued"],
    },
    {
      id: "shared-damage-poison",
      name: "Shared damage - Poison",
      details: [
        "Your Summons have increased damage equal to 20% of your increases to Poison damage",
      ],
    },
    {
      id: "soulburn",
      name: "Soulburn",
      details: ["35% increased Poison damage with Soulburn skills"],
    },
    {
      id: "plague",
      name: "Plague",
      details: [
        "30% increased damage agains Plagued enemies",
        "Your Summons have 30% increased damage against Plagued enemies",
      ],
    },
    {
      id: "ailment-exploit",
      name: "Ailment exploit",
      details: [
        "35% increased Poison damage against enemies affected by Ailments other than Plagued",
      ],
    },
    {
      id: "poison-conversion",
      name: "Poison conversion",
      details: [
        "Your Summons have 20% of their Weapon damage converted to Poison damage",
      ],
    },
  ],
};
