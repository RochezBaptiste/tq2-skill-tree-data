import { Passive } from "@/app/data/types";

export const netherCurrent: Passive = {
  id: "nether-current",
  name: "Nether current",
  tier: 1,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increased-skill-damage",
      label: "%1% increased Skill damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "increased-energy-regeneration",
      label: "%1% increased Energy regeneration",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "energy-regeneration",
      name: "Energy regeneration",
      details: ["+5 energy regeneration"],
    },
    {
      id: "increased-energy-regen",
      name: "Increased energy regen",
      details: ["10% increased Energy regeneration"],
    },
    {
      id: "skill-damage",
      name: "Skill damage",
      details: [
        "30% increased Skill damage with skills that cost Energy",
        "10% increased energy Cost",
      ],
    },
    {
      id: "energy-gain",
      name: "Energy gain",
      details: ["Gain 10 energy when you gain a Shade"],
    },
  ],
};
