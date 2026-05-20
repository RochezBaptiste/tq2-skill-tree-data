import { Passive } from "@/app/data/types";

export const accuracy: Passive = {
  id: "accuracy",
  name: "Accuracy",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "damage",
      label: "%1% increased damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "crit-chance",
      label: "%1% Critical hit chance",
      baseValue: 0.5,
      perLevel: 0.5,
    },
  ],
  feats: [
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["3% Critical hit chance"],
    },
    {
      id: "critical-hit-damage",
      name: "Critical hit damage",
      details: ["+15% critical damage multiplier"],
    },
    {
      id: "high-critical-hit-chance",
      name: "High critical hit chance",
      details: [
        "20% increased critical hit chance",
        "-50% critical damage multiplier",
      ],
    },
  ],
};
