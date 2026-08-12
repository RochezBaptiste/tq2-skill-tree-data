import { Active } from "@/app/data/types";

export const darkPact: Active = {
  id: "dark-pact",
  tier: 3,
  name: "Dark Pact",
  description: [
    "Buff yourself for 6s.",
    "6% Current Health Cost per second.",
    "While active gains 20% increased Health Cost every 1s up to 100%.",
    "Cooldown does not recover while active.",
    "Re-use to deactivate early.",
    "While active grants: 10% increased Total Damage, 30% increased Movement Speed, +20 Energy Regeneration.",
  ],
  cost: {
    health: 18.53,
    healthRecurring: -92.64,
  },
  cooldown: 6000,
  castTime: 0,
  tags: ["Spirit", "Active", "Buff", "Spell", "Blessing"],
  modifiers: [
    {
      id: "enhanced-ailments",
      label: "Enhanced Ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While active grants: 30% increased Ailment chance | 8% increased Ailment power",
        },
      ],
    },
    {
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While active grants: +2% Critical hit chance | +6% Critical hit damage multiplier",
        },
      ],
    },
    {
      id: "vitality-retaliation",
      label: "Vitality Retaliation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While active grants: +2,409 Vitality retaliation",
        },
      ],
    },
    {
      id: "unshackled",
      label: "Unshackled",
      maxRank: 1,
      cost: 3,
      incompatibles: [
        {
          id: "enhanced-ailments",
          label: "Enhanced Ailments",
        },
        {
          id: "enhanced-critical-hits",
          label: "Enhanced critical hits",
        },
        {
          id: "vitality-retaliation",
          label: "Vitality retaliation",
        },
      ],
      perks: [
        {
          id: "description",
          label: "No Blessing",
        },
        {
          id: "description-2",
          label: "No Cooldown",
        },
        {
          id: "description-3",
          label: "Lasts until deactivated",
        },
        {
          id: "description-4",
          label: "No Movement Speed bonus",
        },
      ],
    },
    {
      id: "mind-over-body",
      label: "Mind Over Body",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While active grants: +10 Energy regeneration",
        },
        {
          id: "description-2",
          label: "+1% Current health cost per second",
        },
      ],
    },
    {
      id: "unearthly-power",
      label: "Unearthly Power",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While active grants: 10% increased Total damage",
        },
        {
          id: "description-2",
          label: "+1% Current health cost per second",
        },
      ],
    },
    {
      id: "soulburn",
      label: "Soulburn",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "unshackled",
          label: "Unshackled",
        },
      ],
      perks: [
        {
          id: "description",
          label:
            "While active grants: +10 Energy regeneration | 10% increased Total damage",
        },
        {
          id: "description-2",
          label: "Costs +1 Shade",
        },
      ],
    },
    {
      id: "razors-edge",
      label: "Razor's Edge",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "description",
          label:
            "While active grants: 1% increased damage per 1% missing health",
        },
      ],
    },
    {
      id: "gateway",
      label: "Gateway",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "unshackled",
          label: "Unshackled",
        },
      ],
      perks: [
        {
          id: "description",
          label: "While active grants: +1 Maximum Shade",
        },
      ],
    },
  ],
};
