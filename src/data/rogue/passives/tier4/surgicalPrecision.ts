import { Passive } from "@/app/data/types";

export const surgicalPrecision: Passive = {
  id: "surgical-precision",
  name: "Surgical precision",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "critical-chance",
      label: "%1% increased critical hit chance",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "crit-damage",
      label: "+%1% critical hit damage multiplier",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% increased critical hit chance"],
    },
    {
      id: "critical-hit-damage",
      name: "Critical hit damage",
      details: ["+20% critical hit damage multiplier"],
    },
    {
      id: "high-critical-strike-damage",
      name: "High critical strike damage",
      details: [
        "+40% critical hit damage multiplier",
        "10% reduced critical hit chance",
      ],
    },
  ],
};
