import { Passive } from "@/app/data/types";

export const leadership: Passive = {
  id: "leadership",
  name: "Leadership",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summon-damage",
      label: "Your Summons have %1% increased Damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summon-health",
      label: "Your Summons have %1% increased health",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "summon-health",
      name: "Summon health",
      details: ["Your Summons have 50% increased health"],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 35% increased damage"],
    },
    {
      id: "summon-damage-health",
      name: "Damage and Health",
      details: [
        "Your Summons have 20% increased damage",
        "Your Summons have 20% increased health",
      ],
    },
  ],
};
