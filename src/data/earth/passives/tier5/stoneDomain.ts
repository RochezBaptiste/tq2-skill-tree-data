import { Passive } from "@/app/data/types";

export const stoneDomain: Passive = {
  id: "stone-domain",
  name: "Stone Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "skill-damage",
      label: "%1% increased Physical damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "physical-penetration",
      label: "+%1% Physical penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "physical-damage",
      name: "Physical damage",
      details: ["25% increased Physical damage"],
    },
    {
      id: "physical-penetration",
      name: "Physical penetration",
      details: ["+10% Physical Penetration"],
    },
    {
      id: "bleed-stagger",
      name: "Bleed and Stagger",
      details: ["25% increased Bleed damage", "15% increased Stagger power"],
    },
  ],
};
