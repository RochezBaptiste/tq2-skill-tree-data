import { Passive } from "@/app/data/types";

export const precisionStrikes: Passive = {
  id: "precision-strikes",
  name: "Precision Strikes",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "physical-damage",
      label: "%1% increased Physical damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "vitality-damage",
      label: "%1% Vitality damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "critical-hit",
      label: "+%1% Critical hit damage multiplier",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% Critical hit chance"],
    },
    {
      id: "critical-hit-damage",
      name: "Critical hit damage",
      details: ["+10% Critical hit damage multiplier"],
    },
    {
      id: "high-critical-hit-damage",
      name: "High critical hit damage",
      details: [
        "+20% Critical hit damage multiplier",
        "10% reduced Critical hit chance",
      ],
    },
  ],
};
