import { Active } from "@/app/data/types";

export const flicker: Active = {
  id: "flicker",
  tier: 3,
  name: "Flicker",
  description: [
    "Dash 8m in target direction dealing 581 Pierce Damage to enemies you pass through.",
  ],
  cost: {
    base: 25,
  },
  cooldown: 12000,
  castTime: 250,
  critChance: 0,
  ailmentChance: 5,
  tags: ["Rogue", "Active", "Movement", "Teleport"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "10% more Damage",
        },
      ],
    },
    {
      id: "enhanced-critical-hit",
      label: "Enhanced Critical Hit",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-chance",
          label: "%50 more Critical Hit Chance",
        },
      ],
    },
    {
      id: "rupture",
      label: "Rupture",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "rupture-chance",
          label: "On hit 15% Rupture Chance",
        },
      ],
    },
    {
      id: "punish",
      label: "Punish",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "conditional-damage",
          label:
            "Deals 30% more Damage against Channeling or Incapacitated enemies",
        },
      ],
    },
    {
      id: "apply-doom",
      label: "Apply doom",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "apply-doom",
          label: "Applies 1 Doom to enemies you pass in a 2m wide area",
        },
      ],
    },
    {
      id: "mark-focus",
      label: "Mark Focus",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "mark-damage",
          label: "Deals 15% more Damage against your Mark",
        },
      ],
    },
    {
      id: "gain-flow",
      label: "Gain Flow ",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "mark-flow",
          label:
            "When you hit your Mark, gain Flow. +3s Base Cooldown Duration.",
        },
      ],
    },
    {
      id: "mark-refresh",
      label: "Mark Refresh",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "mark-cooldown",
          label: "When this ability hits your Mark, it recovers 15% Cooldown",
        },
      ],
    },
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "charges",
          label: "+1 Cooldown Charges",
        },
        {
          id: "cooldown-increase",
          label: "+3s Base Cooldown Duration",
        },
      ],
    },
    {
      id: "quick-slash",
      label: "Quick Slash",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "melee-conversion",
          label:
            "Deals 123% Weapon damage instead. 50% less Travel Distance, 40% less Cooldown. Requires Melee.",
        },
      ],
    },
  ],
};
