import { Passive } from "@/app/data/types";

export const forgedLegion: Passive = {
  id: "forged-legion",
  name: "Forged legion",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summons-speed",
      label: "Your Summons have %1% increased all speed",
      baseValue: 1,
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
      id: "summon-crit",
      name: "Summon critical hit chances",
      details: ["Your Summons have +5% critical hit chance"],
    },
    {
      id: "minion-master",
      name: "Minion master",
      details: [
        "Unlock Minion master",
        "Your Summons have 30% increased damage",
      ],
    },
  ],
};
