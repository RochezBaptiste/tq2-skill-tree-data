import { Passive } from "@/app/data/types";

export const shadowForce: Passive = {
  id: "shadow-force",
  name: "Shadow force",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "skill-damage",
      label: "%1% increased Skill damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summon-increase-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "damage-on-summoning",
      name: "Damage on Summoning",
      details: ["20% increased damage for 5 second on Summoning"],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 25% increased damage"],
    },
    {
      id: "damage-per-missing-shade",
      name: "Damage per missing shade",
      details: ["7% increased damage per missing Shade"],
    },
    {
      id: "summon-damage-per-missing-shade",
      name: "Summon damage per missing shade",
      details: ["Your Summons have 7% increased damage per missing shade"],
    },
    {
      id: "increasing-summon-damage",
      name: "Increasing Summon damage",
      details: [
        "Your Summons have 1% increased damage for every second they were alive up to 35%",
      ],
    },
  ],
};
