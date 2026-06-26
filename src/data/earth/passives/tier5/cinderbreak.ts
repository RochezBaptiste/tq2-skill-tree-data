import { Passive } from "@/app/data/types";

export const cinderbreak: Passive = {
  id: "cinderbreak",
  name: "Cinderbreak",
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
      id: "fire-penetration",
      label: "+%1% Fire penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
    {
      id: "physical-penetration",
      label: "+%1% Physical penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
  ],
  feats: [
    {
      id: "physical-penetration",
      name: "Physical penetration",
      details: ["+10% Physical Penetration"],
    },
    {
      id: "penetration",
      name: "Penetration",
      details: ["+5% Penetration"],
    },
    {
      id: "fire-penetration",
      name: "Fire penetration",
      details: ["+10% Fire penetration"],
    },
  ],
};
