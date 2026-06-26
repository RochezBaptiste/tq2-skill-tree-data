import { Passive } from "@/app/data/types";

export const carnage: Passive = {
  id: "carnage",
  name: "Carnage",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "skill-damage",
      label: "%1 increased Skill damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "physical-penetration",
      label: "+%1% Physical penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
    {
      id: "vitality-penetration",
      label: "+%1% Vitality penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
  ],
  feats: [
    {
      id: "penetration",
      name: "Penetration",
      details: ["+5% Penetration"],
    },
    {
      id: "physical-penetration",
      name: "Physical penetration",
      details: ["+10% Physical penetration"],
    },
    {
      id: "vitality-penetration",
      name: "Vitality penetration",
      details: ["+10% Vitality penetration"],
    },
  ],
};
