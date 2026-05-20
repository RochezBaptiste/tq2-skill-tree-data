import { Passive } from "@/app/data/types";

export const heatOfTheForge: Passive = {
  id: "heat-of-the-forge",
  name: "Heat of the forge",
  tier: 4,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "increase-health",
      label: "%1% increased health",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "fire-resistance",
      label: "+%1% Fire resistance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "cold-resistance",
      label: "+%1% Cold resistance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summon-fire-resistance",
      label: "Your Summons have +%1% Fire resistance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summon-cold-resistance",
      label: "Your Summons have +%1% Cold resistance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "health",
      name: "Health",
      details: ["8% increased Health"],
    },
    {
      id: "fire-cold",
      name: "Fire and Cold",
      details: [
        "+3% Maximum Fire resistance",
        "+3% Maximum Cold resistance",
        "-10% Fire resistance",
        "-10% Cold resistance",
      ],
    },
    {
      id: "fire-retaliation",
      name: "Fire retaliation",
      details: ["+64 Fire Retaliation"],
    },
  ],
};
