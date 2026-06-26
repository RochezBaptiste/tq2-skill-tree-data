import { Passive } from "@/app/data/types";

export const relentlessInvoker: Passive = {
  id: "relentless-invoker",
  name: "Relentless Invoker",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "summon-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summon-crit",
      label: "Your Summons have +%1% Critical hit chance",
      baseValue: 0.5,
      perLevel: 0.5,
    },
  ],
  feats: [
    {
      id: "minion-master",
      name: "Minion master",
      details: [
        "Unlocks Minion Master",
        "Your Summons have 20% increased damage",
      ],
    },
    {
      id: "summons-crit",
      name: "Summon critical hit chance",
      details: ["Your Summons have +5% critical hit chance"],
    },
    {
      id: "summons-speed",
      name: "Summon speed",
      details: ["Your Summons have 15% increased all speed"],
    },
  ],
};
