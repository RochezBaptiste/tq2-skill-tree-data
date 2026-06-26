import { Passive } from "@/app/data/types";

export const poisonDomain: Passive = {
  id: "poison-domain",
  name: "Poison domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "poison-damage",
      label: "%1% increased Poison damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "plague-damage",
      label: "%1% Increased Plague damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "poison-penetration",
      label: "+%1% Poison penetration",
      baseValue: 0.8,
      perLevel: 0,
    },
  ],
  feats: [
    {
      id: "plague-damage",
      name: "Plague damage",
      details: ["25% increased Plague damage"],
    },
    {
      id: "poison-damage",
      name: "Poison damage",
      details: ["25% increased Poison damage"],
    },
    {
      id: "poison-penetration",
      name: "Poison penetration",
      details: ["+10% poison Penetration"],
    },
  ],
};
