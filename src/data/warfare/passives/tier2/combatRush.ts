import { Passive } from "@/app/data/types";

export const combatRush: Passive = {
  id: "combat-rush",
  name: "Combat rush",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "rush-damage",
      label:
        "Whenever you hit an enemy with a melee skill, gain %1% increased Damage an 20% increased Movement speed for 1s",
      baseValue: 10,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "armor",
      name: "Armor",
      details: ["While affected by Combat Rush, gain 15% increased armor"],
    },
    {
      id: "damage",
      name: "Damage",
      details: [
        "While affected by Combat Rush, gain 12% increased Weapon damage",
      ],
    },
    {
      id: "regeneration",
      name: "Regeneration",
      details: [
        "While affected by Combat Rush, gain 15% increased health regeneration",
      ],
    },
  ],
};
