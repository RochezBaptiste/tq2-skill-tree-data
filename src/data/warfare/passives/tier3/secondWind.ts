import { Passive } from "@/app/data/types";

export const secondWind: Passive = {
  id: "second-wind",
  name: "Second wind",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "health-per-second",
      label:
        "Regenerate %1% Health per second %2% increased Health regeneration",
      baseValue: [0.1, 5],
      perLevel: [0.1, 5],
    },
  ],
  feats: [
    {
      id: "health-regeneration",
      name: "Health regeneration",
      details: ["20% increased Health regeneration"],
    },
    {
      id: "low-health",
      name: "Low health",
      details: ["While below 50% Health, regenerate 1% Health per second"],
    },
    {
      id: "rage",
      name: "Rage",
      details: ["3% increased Health regeneration per Rage"],
    },
  ],
};
