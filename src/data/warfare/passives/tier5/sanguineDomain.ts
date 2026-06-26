import { Passive } from "@/app/data/types";

export const sanguineDomain: Passive = {
  id: "sanguine-domain",
  name: "Sanguine Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "vitality-damage",
      label: "%2% increased Vitality damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "lifesteal",
      label: "%1% increased Lifesteal",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "vitality-penetration",
      label: "+%1% Vitality penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["25% increased Lifesteal"],
    },
    {
      id: "vitality-damage",
      name: "Vitality damage",
      details: ["25% increased Vitality damage"],
    },
    {
      id: "Vitality-penetration",
      name: "Vitality penetration",
      details: ["+10% Vitality penetration"],
    },
  ],
};
