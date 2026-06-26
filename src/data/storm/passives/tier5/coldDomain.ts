import { Passive } from "@/app/data/types";

export const coldDomain: Passive = {
  id: "cold-domain",
  name: "Cold Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "cold-damage",
      label: "%1% increased Cold damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "chill-power",
      label: "%1% increased Chill power",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "cold-penetration",
      label: "%1% Cold penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "cold-damage",
      name: "Cold damage",
      details: ["25% increased Cold damage"],
    },
    {
      id: "chill-power",
      name: "Chilled power",
      details: ["15% increased Chill power"],
    },
    {
      id: "cold-penetration",
      name: "Cold penetration",
      details: ["+10% Cold penetration"],
    },
  ],
};
