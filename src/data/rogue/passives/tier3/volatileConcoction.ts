import { Passive } from "@/app/data/types";

export const volatileConcoction: Passive = {
  id: "volatile-concoction",
  name: "Volatile concoction",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "fire-damage",
      label: "%1% increased fire damage",
      baseValue: 10,
      perLevel: 5,
    },
    {
      id: "burn-chance",
      label: "%1% increased burn chance",
      baseValue: 12,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "burn-chance",
      name: "Burn chance",
      details: ["20% increased Burn chance", "20% increased Burn power"],
    },
    {
      id: "fire-damage",
      name: "Fire damage",
      details: ["20% increased Fire damage", "+5% Fire penetration"],
    },
    {
      id: "shadow-spell",
      name: "Shadow spell",
      details: [
        "Converts 100% damage of your Shadow spells to Fire damage",
        "10% increased Fire damage",
        "10% increased Burn chance",
      ],
    },
  ],
};
