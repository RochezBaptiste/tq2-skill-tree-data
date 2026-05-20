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
          id: "regeneration",
          label:
            "On use for 1s grants: +79 Health regeneration, 100% increased Health regeneration",
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
          id: "duration",
          label: "+1s Duration",
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
          id: "damage",
          label:
            "When Stoneform ends it deals 387 Strike Damage ine a 2.5m radius",
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
          id: "damage",
          label:
            "While active deals 153 Strike Damage every second in a 4m radius",
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
          id: "retaliation",
          label: "While active grands you: +131 Strike Retaliation",
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
          id: "overload",
          label:
            "On use cleanse 30 Overload, recover 10 Energy for every Overload cleansed",
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
          id: "channel",
          label: "You can channel other abilitiers during Stoneform",
        },
        {
          id: "damage-reduction",
          label: "50% less Damage reduction",
        },
      ],
    },
  ],
};
