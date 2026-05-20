import { Passive } from "@/app/data/types";

export const ragingStorm: Passive = {
  id: "raging-storm",
  name: "Raging storm",
  tier: 3,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "damage",
      label: "%1% increased damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "rage-effect",
      label: "%1% increased Rage effect",
      baseValue: 5,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "rage-amount",
      name: "Rage amount",
      details: ["+3 maximum Rage"],
    },
    {
      id: "rage-duration",
      name: "Rage duration",
      details: ["30% increased Rage duration"],
    },
    {
      id: "rage-overflow",
      name: "Rage overflow",
      details: [
        "Whenever Rage overflows, you have a 20% chance to recover 80 Energy",
      ],
    },
  ],
};
