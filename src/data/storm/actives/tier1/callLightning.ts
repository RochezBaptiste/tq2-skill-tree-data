import { Active } from "@/app/data/types";

export const callLightning: Active = {
  id: "call-lightning",
  tier: 1,
  name: "Call Lightning",
  description: [
    "Call down lightning at target location dealing 262 Lightning Damage in a 1.6m radius.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 5,
  ailmentChance: 20,
  tags: ["Storm", "Active", "Spell", "Area", "Lightning"],
  modifiers: [
    {
      id: "consume-flow",
      label: "Consume Flow",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-overwhelm", label: "Consume Overwhelm" }],
      perks: [
        {
          id: "overflow-damage",
          label: "Consumes Flow for %1% more Damage",
          baseValue: 50,
          perLevel: 25,
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume Overwhelm",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-flow", label: "Consume Flow" }],
      perks: [
        {
          id: "overwhelm-damage",
          label: "Consumes full Overwhelm for %1% more Damage",
          baseValue: 50,
          perLevel: 25,
        },
      ],
    },
    {
      id: "exhaust",
      label: "Exhaust",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "cooldown", label: "Cooldown" }],
      perks: [
        {
          id: "change",
          label: "Turn into an Exhaust skill",
        },
        {
          id: "damage",
          label: "140% more damage",
        },
        {
          id: "ailment",
          label: "140% more Ailment chance",
        },
        {
          id: "cost",
          label: "+30 Energy cost",
        },
      ],
    },
    {
      id: "cooldown",
      label: "Cooldown",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "exhaust", label: "Exhaust" }],
      perks: [
        {
          id: "cost",
          label: "No energy cost",
        },
        {
          id: "damage",
          label: "230% more damage",
        },
        {
          id: "ailment",
          label: "230% more Ailment chance",
        },
        {
          id: "duration",
          label: "+6s Cooldown duration",
        },
      ],
    },
    {
      id: "cooldown-chance",
      label: "Cooldown Chance",
      maxRank: 2,
      cost: 2,
      requires: [{ id: "cooldown", label: "Cooldown" }],
      perks: [
        {
          id: "charges",
          label: "+%1 Cooldown charges",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "repetition",
      label: "Repetition",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "repeat-effect",
          label: "Repeats %1 times in 1s intervals",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "repeat-damage",
          label: "35% less damage",
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 30,
          perLevel: 10,
        },
      ],
    },
    {
      id: "delayed-impact",
      label: "Delayed Impact",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "delayed-damage",
          label: "%1% more Damage",
          baseValue: 25,
          perLevel: 25,
        },
        {
          id: "delayed-hit",
          label: "Hits after %1s",
          baseValue: 0.8,
          perLevel: 0.6,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "thunderstorm",
      label: "Thunderstorm",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "lightning-strike-chance",
          label:
            "When directly used, enemies in a 3.0m radius around target location have %1% chance to be hit by Lightning Strike",
          baseValue: 20,
          perLevel: 10,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "rage-gain",
      label: "Rage Gain",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "rage-gain",
          label: "Gain %1% Rage on the first hit",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "rage-damage",
          label: "Deals %1% more Damage per Rage",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "ailment-chance",
          label: "+%1% added Ailment Chance",
          baseValue: 25,
          perLevel: 25,
        },
      ],
    },
    {
      id: "overload",
      label: "Overload",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "overload-gain",
          label: "On use gain %1 Overload",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "overload-damage-speed",
          label: "%1% more Damage and %1% more Cast speed",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "overload-cost",
          label: "%1% less Energy cost",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "energy-drain",
      label: "Energy Drain",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "drain-stats",
          label:
            "Deals %1 Energy damage in a 2.5m radius and enemies hit lose %1 Energy",
          baseValue: [96, 20],
          perLevel: [65, 5],
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "cooldown-refresh-combo",
      label: "Cooldown refresh - Combo",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "cooldown", label: "Cooldown" }],
      incompatibles: [
        { id: "consume-flow", label: "Consume Flow" },
        { id: "consume-overwhelm", label: "Consume Overwhelm" },
      ],
      perks: [
        {
          id: "stats",
          label:
            "When you consume Flow or Overwhelm with another skill, reduce this skill's cooldown by 2s",
        },
      ],
    },
    {
      id: "cooldown-refresh-energy",
      label: "Cooldown refresh - Energy",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "cooldown", label: "Cooldown" }],
      perks: [
        {
          id: "stats",
          label:
            "For every 10 Energy you spend globally reduce this skill's cooldown by 0.15s",
        },
      ],
    },
  ],
};
