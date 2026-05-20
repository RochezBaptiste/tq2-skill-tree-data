import { Passive } from "@/app/data/types";

export const unyielding: Passive = {
  id: "unyielding",
  name: "Unyielding",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-health",
      label: "%1% increased health",
      baseValue: 1.5,
      perLevel: 1.5,
    },
    {
      id: "vitality-resistance",
      label: "+%1% Vitality resistance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "health",
      name: "Health",
      details: ["5% increased Health"],
    },
    {
      id: "health-for-vigor",
      name: "Health for vigor",
      details: ["+1 Health per 5 Vigor"],
    },
    {
      id: "vitality-resistance",
      name: "Vitality resistance",
      details: ["+10% Vitality resistance", "+3 Maximum vitality resistance"],
    },
  ],
};
