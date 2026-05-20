import { Passive } from "@/app/data/types";

export const tasteForBlood: Passive = {
  id: "taste-for-blood",
  name: "Taste for blood",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "vitality-damage",
      label: "%1% increased vitality damage",
      baseValue: 10,
      perLevel: 5,
    },
    {
      id: "lifesteal",
      label: "%1% increased lifesteal",
      baseValue: 12,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: [
        "+2% added base Lifesteal with Vitality damage",
        "20% increased Lifesteal",
      ],
    },
    {
      id: "shadow-spell",
      name: "Shadow spell",
      details: [
        "Converts 100% damage of your Shadow spells to Vitality damage",
        "10% increased Vitality damage",
        "10% increased Lifesteal",
      ],
    },
    {
      id: "vitality-damage",
      name: "Vitality damage",
      details: ["20% increased Vitality damage", "+5% Vitality penetration"],
    },
  ],
};
