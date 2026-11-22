import { Active } from "@/app/data/types";

export const forceField: Active = {
  id: "force-field",
  tier: 4,
  name: "Force field",
  description: [
    "Create a force field at target location with 6m length",
    "Limit: 1",
    "Enemies affected deal 10% less Damage and have 20% less Movement Speed",
  ],
  cost: {},
  cooldown: 8000,
  castTime: 700,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Spell", "Area"],
  modifiers: [
    {
      id: "reactivation",
      label: "Reactivation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Reactivate once during Cooldown to deal 865 Strike Damage in the Force Field and Stun enemies for 1s.",
        },
      ],
    },
    {
      id: "armor-up",
      label: "Armor Up",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Grants you and your allies in the area +%1 Armor and +%2 Armor per enemy in the area",
          baseValue: [6, 2],
          perLevel: [2, 1],
        },
      ],
    },
    {
      id: "projectile-glancing",
      label: "Projectile Glancing",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Grants you and allies inside the area +%1% Glancing Chance against Projectiles",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enhanced-control-duration",
      label: "Enhanced Control Duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Control effects applied to enemies in the area have %1% increased Duration",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "skill-enhancement",
      label: "Skill Enhancement",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Enemies deal an additional %1% less Damage and have an additional %1% less Movement Speed",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "fragile",
      label: "Fragile",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Enemies inside the area take %1% increased Damage",
          baseValue: 6,
          perLevel: 4,
        },
      ],
    },
    {
      id: "enhanced-device-damage",
      label: "Enhanced Summon Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Summons inside the area deal %1% increased Damage",
          baseValue: 20,
          perLevel: 20,
        },
      ],
    },
  ],
};
