import { Passive } from "@/app/data/types";

export const livingArmament: Passive = {
  id: "living-armament",
  name: "Living Armament",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "summons-damage",
      label: "Your Summons have %1% increase damage",
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
        "Unlocks Minion master",
        "Your Summons have 20% increased damage",
      ],
    },
    {
      id: "summons-crit",
      name: "Summon critical hit chance",
      details: ["Your Summons have +5% Critical hit chance"],
    },
    {
      id: "summon-defenses",
      name: "Summon defenses",
      details: [
        "Your Summons have 20% increase Health",
        "Your Summons have 10% increase Armor",
      ],
    },
  ],
};
