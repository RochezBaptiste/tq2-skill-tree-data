import { Passive } from "@/app/data/types";

export const stategos: Passive = {
  id: "stategos",
  name: "Stategos",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-skill",
      label: "%3% increased skill damage",
      baseValue: 3,
      perLevel: 6,
    },
    {
      id: "summon-damage",
      label: "Your Summons have %1% increase damage",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "skill-damage",
      name: "Skill damage",
      details: ["20% increased skill damage"],
    },
    {
      id: "rage-for-death",
      name: "Rage for summon death",
      details: [
        "When a greater Summon you control dies, gain 3 Rage",
        "When a lesser Summon you control dies, gain 1 Rage",
      ],
    },
    {
      id: "damage-ally",
      name: "Damage per ally",
      details: ["+4% increased damage for every ally you have, up to 36%"],
    },
  ],
};
