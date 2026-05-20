import { Passive } from "@/app/data/types";

export const studyArmor: Passive = {
  id: "study-armor",
  name: "Study armor",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increase-health",
      label: "%1% increased health",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "increased-armor",
      label: "%1% increased armor",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "summon-health",
      label: "Your Summons have %1% increased health",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summon-armor",
      label: "Your Summons have %1% increased armor",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "armor",
      name: "Armor",
      details: ["+251 Armor"],
    },
    {
      id: "summon-health",
      name: "Summon health",
      details: ["Your Summons have 40% increased health"],
    },
    {
      id: "health",
      name: "Health",
      details: ["8% increased health"],
    },
  ],
};
