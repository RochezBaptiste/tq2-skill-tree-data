import { Passive } from "@/app/data/types";

export const etherealReach: Passive = {
  id: "ethereal-reach",
  name: "Ethereal reach",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "increased-vitality-damage",
      label: "%1% increased Vitality damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "increased-lifesteal",
      label: "%1% increased Lifesteal",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "vitality-penetration",
      label: "+%1% Vitality penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "vitality-penetration",
      name: "Vitality penetration",
      details: ["+10% Vitality penetration"],
    },
    {
      id: "vitality-damage",
      name: "Vitality damage",
      details: ["25% increased Vitality damage"],
    },
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["25% increased Lifesteal"],
    },
  ],
};
