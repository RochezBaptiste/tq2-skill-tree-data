import { Passive } from "@/app/data/types";

export const stormPiercer: Passive = {
  id: "storm-piercer",
  name: "Storm Piercer",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "skill-damage",
      label: "+%1% increased Skill damage",
      baseValue: 2,
      perLevel: 4,
    },
    {
      id: "lightning-penetration",
      label: "+%1% Lightning penetration",
      baseValue: 0.3,
      perLevel: 0.3,
    },
    {
      id: "cold-penetration",
      label: "+%1% Cold penetration",
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
      id: "cold-penetration",
      name: "Cold penetration",
      details: ["+10% Cold penetration"],
    },
    {
      id: "lightning-penetration",
      name: "Lightning penetration",
      details: ["+10% Lightning penetration"],
    },
  ],
};
