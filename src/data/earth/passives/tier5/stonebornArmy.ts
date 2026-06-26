import { Passive } from "@/app/data/types";

export const stonebornArmy: Passive = {
  id: "stoneborn-army",
  name: "Stoneborn Army",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "summons-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summons-crit",
      label: "Your Summons have +%1% increased critical hit chance",
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
      id: "summons-defense",
      name: "Summon defense",
      details: [
        "Your Summons have 20% increased Health",
        "Your Summons have 10% increased Armor",
      ],
    },
  ],
};
