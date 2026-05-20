import { Passive } from "@/app/data/types";

export const toxinDistillation: Passive = {
  id: "toxin-distillation",
  name: "Toxin distillation",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "poison-damage",
      label: "%1% increased poison damage",
      baseValue: 12,
      perLevel: 6,
    },
    {
      id: "plague-chance",
      label: "%1% increased plague chance",
      baseValue: 12,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "plague-chance",
      name: "Plague chance",
      details: ["20% increased Plagued chance", "20% increased Plagued power"],
    },
    {
      id: "poison-damage",
      name: "Poison damage",
      details: ["20% increased poison damage", "+5% poison penetration"],
    },
    {
      id: "shadow-spell",
      name: "Shadow spell",
      details: [
        "Converts 100% damage of your Shadow spells to Poisong damage",
        "10% increased Poisong damage",
        "10% increased Plagued chance",
      ],
    },
  ],
};
