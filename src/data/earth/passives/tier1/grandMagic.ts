import { Passive } from "@/app/data/types";

export const grandMagic: Passive = {
  id: "grand-magic",
  name: "Grand magic",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "spell-damage",
      label: "%1% increased spell damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "max-energy",
      label: "+%1 maximum energy",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased spell ailment chance"],
    },
    {
      id: "spell-damage-and-cost",
      name: "Spell damage and cost chance",
      details: [
        "30% increased spell damage",
        "10% increased energy cost with spells",
      ],
    },
    {
      id: "critical-chance",
      name: "Critical chance",
      details: ["3% increased spell critical hit chance"],
    },
  ],
};
