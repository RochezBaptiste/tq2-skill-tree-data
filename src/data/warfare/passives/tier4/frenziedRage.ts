import { Passive } from "@/app/data/types";

export const frenziedRage: Passive = {
  id: "frenzied-rage",
  name: "Frenzied rage",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "rage-effect",
      label: "%1 increased Rage effect",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "rage-duration",
      label: "%1 increased Rage duration",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "rage-overflow",
      name: "Rage overflow",
      details: [
        "Whenever Rage overflows, gain +17 weapon Pierce and Strike damage and 20% increased movement speed for 2s",
      ],
    },
    {
      id: "rage-stacks",
      name: "Rage stacks",
      details: ["+3 Minimum rage", "-2 Maximum Rage"],
    },
    {
      id: "rage-duration",
      name: "Rage duration",
      details: ["30% increased Rage duration"],
    },
  ],
};
