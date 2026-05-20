import { Passive } from "@/app/data/types";

export const heartOfBattle: Passive = {
  id: "heart-of-battle",
  name: "Heart of battle",
  tier: 3,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "per-enemy-damage",
      label:
        "For each enemy in a 12m radius, gain 4% increased damage up to %1%",
      baseValue: 12,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "enhanced-armor",
      name: "Enhanced armor",
      details: [
        "Gain 2% increased armor per enemy up to 2% (half the limit for damage)",
      ],
    },
    {
      id: "enhanced-damage",
      name: "Enhanced damage",
      details: [
        "Gain another 2% increased damage per enemy. The damage increase limit stays the same",
      ],
    },
    {
      id: "enhanced-limit",
      name: "Enhanced limit",
      details: ["12% added to the damage increase limit"],
    },
  ],
};
