import { Passive } from "@/app/data/types";

export const anatomy: Passive = {
  id: "anatomy",
  name: "Anatomy",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "pierce-damage",
      label: "%1% increased pierce damage",
      baseValue: 6,
      perLevel: 6,
    },
    {
      id: "bleed-chance",
      label: "%1% increased bleed chance",
      baseValue: 6,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "bleed-chance",
      name: "Bleed chance",
      details: ["20% increased Bleed chance", "20% increased Bleed power"],
    },
    {
      id: "pierce-damage",
      name: "Pierce damage",
      details: ["20% increased Pierce damage", "+5% Pierce penetration"],
    },
    {
      id: "shadow-spell",
      name: "Shadow spell",
      details: [
        "Converts 100% damage of your Shadow spells to Pierce damage",
        "10% increased Pierce damage",
        "10% increased Burn chance",
      ],
    },
  ],
};
