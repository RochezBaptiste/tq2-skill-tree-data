import { Passive } from "@/app/data/types";

export const mortalBlades: Passive = {
  id: "mortal-blades",
  name: "Mortal blades",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "skill-damage",
      label: "%1% increased Skill damage",
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
      details: ["+10% Critical hit damage"],
    },
    {
      id: "high-critical-hit-damage",
      name: "High critical hit chance",
      details: [
        "+20% Critical hit damage multiplier",
        "10% reduced Critical hit chance",
      ],
    },
  ],
};
