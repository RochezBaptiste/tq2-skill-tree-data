import { Passive } from "@/app/data/types";

export const unlivingDominion: Passive = {
  id: "unliving-dominion",
  name: "Unliving dominion",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "summon-increased-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summon-critical-hit-chance",
      label: "Your Summons have +%1% critical hit chance",
      baseValue: 0.5,
      perLevel: 0.5,
    },
  ],
  feats: [
    {
      id: "minion-master",
      name: "Minion master",
      details: [
        "Unlocks Minion master",
        "Your Summons have 20% increased damage",
      ],
    },
    {
      id: "summon-critical-hit-chance",
      name: "Summon critical hit chance",
      details: ["Your Summons have +5% Critical hit chance"],
    },
    {
      id: "summon-defenses",
      name: "Summon defenses",
      details: [
        "Your Summons have 20% increased Health",
        "Your Summons have 10% increased Armor",
      ],
    },
  ],
};
