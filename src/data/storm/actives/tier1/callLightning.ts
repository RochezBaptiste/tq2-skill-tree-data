import { Active } from "@/app/data/types";

export const callLightning: Active = {
  id: "call-lightning",
  tier: 1,
  name: "Call Lightning",
  description: [
    "Call down lightning at target location dealing 262 Lightning Damage in a 1.5m radius.",
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
          label: "Consumes Flow for 50% more Damage",
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
          label: "Consumes full Overwhelm for 50% more Damage",
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
          label: "136.8% more damage",
        },
        {
          id: "ailment",
          label: "136.8% more Ailemnt chance",
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
          label: "136.8% more damage",
        },
        {
          id: "ailment",
          label: "136.8% more Ailemnt chance",
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
          label: "+1 Cooldown charges",
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
          label: "Repeats 1 times in 1s intervals",
        },
        {
          id: "repeat-damage",
          label: "35% less damage",
        },
        {
          id: "cost",
          label: "+30 Energy Cost",
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
          label: "25% more Damage",
        },
        {
          id: "delayed-hit",
          label: "Hits after 0.8s",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
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
            "When directly used, enemies in a 3.0m radius around target location have 20% chance to be hit by Lightning Strike",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
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
          label: "Gain 1% Rage on the first hit",
        },
        {
          id: "rage-damage",
          label: "Deals 1% more Damage per Rage",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
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
          label: "+50% added Ailment Chance",
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
          label: "On use gain 1 Overload",
        },
        {
          id: "overload-damage-speed",
          label: "10% more Damage and 10% more Cast speed",
        },
        {
          id: "overload-cost",
          label: "10% less Energy cost",
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
            "Deals 65 Energy damage in a 2.5m radius and enemies hit lose 20 Energy",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
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
