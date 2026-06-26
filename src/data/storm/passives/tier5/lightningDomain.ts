import { Passive } from "@/app/data/types";

export const lightningDomain: Passive = {
  id: "lightning-domain",
  name: "Lightning Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "lightning-damage",
      label: "%1% increased Lightning damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "shock-damage",
      label: "%1% increased Shock damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "lightning-penetration",
      label: "%1% Lightning penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "lightning-damage",
      name: "Lightning damage",
      details: ["25% increased Lightning damage"],
    },
    {
      id: "shock-damage",
      name: "Shocked damage",
      details: ["25% increased Shocked damage"],
    },
    {
      id: "lightning-penetration",
      name: "Lightning penetration",
      details: ["+10% Lightning penetration"],
    },
  ],
};
