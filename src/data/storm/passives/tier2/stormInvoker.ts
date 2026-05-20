import { Passive } from "@/app/data/types";

export const stormInvoker: Passive = {
  id: "storm-invoker",
  name: "Storm invoker",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summon-increase-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summon-inncrease-speed",
      label: "Your Summons have %1% increased all speed",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 30% increased damage"],
    },
    {
      id: "summon-resistances",
      name: "Summon resistances",
      details: [
        "Your Summons have 30% increased health",
        "Your Summons have +30% cold resistance",
        "Your Summons have +30% lightning resistance",
      ],
    },
    {
      id: "summon-speed",
      name: "Summon speed",
      details: ["You Summons have 15% increased all speed"],
    },
  ],
};
