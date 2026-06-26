import { Passive } from "@/app/data/types";

export const annealedwrath: Passive = {
  id: "annealed-wrath",
  name: "Annealed Wrath",
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
      id: "elemental-penetration",
      label: "+%1% Elemental penetration",
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
      details: ["+10% Physical penetration"],
    },
    {
      id: "penetration",
      name: "Penetration",
      details: ["+5% Penetration"],
    },
    {
      id: "elemental-penetration",
      name: "Elemental penetration",
      details: ["+10% Elemental penetration"],
    },
  ],
};
