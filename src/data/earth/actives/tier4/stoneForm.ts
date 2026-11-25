import { Active } from "@/app/data/types";

export const stoneForm: Active = {
  id: "stone-form",
  tier: 4,
  name: "Stone Form",
  cost: {
    base: 0,
  },
  cooldown: 1200,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Earth", "Active", "Spell"],
  description: [
    "You are encased in stone for 2s",
    "While encased you take 100% less Damage and cannot act",
    "Recast or use Movement Skill to cancel early",
  ],
  modifiers: [
    {
      id: "rapid-regeneration",
      label: "Rapid regeneration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On use, for 1s grants:",
        },
        {
          id: "description-2",
          label: "+%1 Health Regeneration",
          baseValue: 98,
          perLevel: 82,
        },
        {
          id: "description-3",
          label: "%1% increased Health Regeneration",
          baseValue: 100,
          perLevel: 25,
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1s Duration",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "rocket-explosion",
      label: "Rocket Explosion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When Stoneform ends it deals %1 Strike Damage ine a %2m radius",
          baseValue: [692, 2.5],
          perLevel: [115, 0.5],
        },
      ],
    },
    {
      id: "shockwave",
      label: "Shockwave",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While active deals %1 Strike Damage every second in a %2m radius",
          baseValue: [269, 4],
          perLevel: [77, 0.5],
        },
      ],
    },
    {
      id: "strike-retaliation",
      label: "Strike retaliation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While active grands you: +%1 Strike Retaliation",
          baseValue: 231,
          perLevel: 77,
        },
      ],
    },
    {
      id: "overload-cleanse",
      label: "Overload Cleanse",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On use cleanse 30 Overload, recover 10 Energy for every Overload cleansed",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "unshackled",
      label: "Unshackled",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "You can channel other abilitiers during Stoneform",
        },
        {
          id: "description-2",
          label: "50% less Damage reduction",
        },
      ],
    },
  ],
};
