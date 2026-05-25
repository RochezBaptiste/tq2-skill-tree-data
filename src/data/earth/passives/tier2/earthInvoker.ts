import { Passive } from "@/app/data/types";

export const earthInvoker: Passive = {
  id: "earth-invoker",
  name: "Earth Invoker",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-damage",
      label: "%1% increased Summons damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summons-health",
      label: "%1% increased Summons health",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your summons have 30% increased damage"],
    },
    {
      id: "summon-health-armor",
      name: "Summon health and armor",
      details: [
        "Your summons have 40% increased health",
        "Your summons have 10% increased Armor",
      ],
    },
    {
      id: "summon-health-resist",
      name: "Summon health and resist",
      details: [
        "Your summons have 40% increased health",
        "Your summons have +30 Fire resistance",
      ],
    },
  ],
};
