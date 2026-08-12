import { Passive } from "@/app/data/types";

export const bitterMalice: Passive = {
  id: "bitter-malice",
  name: "Bitter malice",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "increased-skill-damage",
      label: "%1% increase Skill damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "vitality-penetration",
      label: "+%1% Vitality-penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
    {
      id: "cold-penetration",
      label: "+%1% Cold penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
    {
      id: "poison-penetration",
      label: "+%1% Poison penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
  ],
  feats: [
    {
      id: "vitality-penetration",
      name: "Vitality penetration",
      details: ["+10% Vitality penetration"],
    },
    {
      id: "cold-penetration",
      name: "Cold penetration",
      details: ["+10% Cold penetration"],
    },
    {
      id: "poison-penetration",
      name: "Poison penetration",
      details: ["+10% Poison penetration"],
    },
  ],
};
