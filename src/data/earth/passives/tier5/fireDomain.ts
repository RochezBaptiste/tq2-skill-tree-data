import { Passive } from "@/app/data/types";

export const fireDomain: Passive = {
  id: "fire-domain",
  name: "Fire Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "fire-damage",
      label: "%1% increased Fire damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "burn-damage",
      label: "%1% Increased Burn damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "fire-penetration",
      label: "+%1% Fire penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "fire-damage",
      name: "Fire damage",
      details: ["25% increased Fire damage"],
    },
    {
      id: "burn-damage",
      name: "Burn damage",
      details: ["25% increased Burn damage"],
    },
    {
      id: "fire-penetration",
      name: "Fire penetration",
      details: ["+10% Fire Penetration"],
    },
  ],
};
