import { Passive } from "@/app/data/types";

export const otherworldlyArmy: Passive = {
  id: "otherworldly-army",
  name: "Otherworldly army",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-damage",
      label: "Your Summons have %4% increased Damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summons-vitality-damage",
      label: "Your Summons have +%4 Skill Vitality damage",
      baseValue: 3,
      perLevel: 0,
    },
  ],
  feats: [
    {
      id: "minion-master",
      name: "Minion master",
      details: [
        "Unlocks Minion Master",
        "Your Summons have 20% increased Damage",
      ],
    },
    {
      id: "summon-critical-hit-chance",
      name: "Summon critical hit chance",
      details: ["Your Summons have +5% Critical hit chance"],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 30% increased damage"],
    },
    {
      id: "damage-for-health",
      name: "Damage for health",
      details: [
        "Your Summons have 50% increased Damage",
        "Your Summons have 20% less maximum Health",
      ],
    },
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["Your Summons have 50% increased Lifesteal"],
    },
    {
      id: "summon-all-speed",
      name: "Summon all speed",
      details: [
        "Your Summons have 20% increased All speed while you are on low Health",
      ],
    },
  ],
};
