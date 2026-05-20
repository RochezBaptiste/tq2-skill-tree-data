import { Passive } from "@/app/data/types";

export const fortifiedConstruction: Passive = {
  id: "fortified-construction",
  name: "Fortified construction",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-health",
      label: "Your Summons have %1% increased health",
      baseValue: 10,
      perLevel: 10,
    },
    {
      id: "summons-armor",
      label: "Your Summons have %1% increased armor",
      baseValue: 2,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "health-armor",
      name: "Health and Armor",
      details: [
        "Your Summons have 40% increased health",
        "Your Summons have 10% increased armor",
      ],
    },
    {
      id: "shield",
      name: "Shield",
      details: [
        "Your Summons have 60% in increased health, if you have a shield equipped",
      ],
    },
    {
      id: "health-regeneration",
      name: "Health regeneration",
      details: ["Your Summons regenerate 0.5% health per second"],
    },
  ],
};
