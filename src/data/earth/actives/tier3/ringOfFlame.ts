import { Active } from "@/app/data/types";

export const ringOfFlame: Active = {
  id: "ring-of-flame",
  tier: 3,
  name: "Ring of Flame",
  cost: {
    base: 0,
  },
  cooldown: 6000,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Earth", "Active", "Spell", "Fire", "Area"],
  description: [
    "Active",
    "On use grants 20% increased movement speed and 30% increased Fire Damage for 6s",
    "-",
    "Passive:",
    "While Ring of Flame has Amplify, deals 38 Fire Damage every 0.5s in a 2.0m radius around you.This deals 15% more damage and has 5% increased radius per Amplify",
    "Gains 5 Amplify on use and while active gains Amplify for every 15 Energy you spend globally. Max 20 stacks. Stacks last 3s",
  ],
  modifiers: [
    {
      id: "permanency",
      label: "Permanency",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        { id: "scorching-weapon", label: "Scorching Weapon" },
        { id: "empowering-flame", label: "Empowering Flame" },
      ],
      perks: [
        {
          id: "base",
          label:
            "Turn the skill into a sustained skill, so it is always active",
        },
        {
          id: "cooldown",
          label: "No cooldown. No bonuses on use",
        },
        {
          id: "reserved",
          label: "Reserves +60 Energy",
        },
      ],
    },
    {
      id: "weakening-heat",
      label: "Weakening heat",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "cold-resistance",
          label:
            "Enemies inside the Aura get -2% to Cold resistance, Fire resistance and Armor value every second.",
        },
        {
          id: "max-stack",
          label: "Maximum is -6%",
        },
      ],
    },
    {
      id: "blazing-heat",
      label: "Blazing Heat",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "Deals up to 60% more Damage to enemies close to the center",
        },
        {
          id: "permanency",
          label: "Permanency: +5 Energy reserved",
        },
      ],
    },
    {
      id: "scorching-weapon",
      label: "Scorching weapon",
      incompatibles: [{ id: "permanency", label: "Permanency" }],
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "damage-converted",
          label:
            "While Active grants 100% Weapon Damage converted to Fire and 1.5% increased Fire Weapon Damage per Amplify",
        },
        {
          id: "amplify",
          label: "On use gains +3 Amplify",
        },
      ],
    },
    {
      id: "enhanced-amplify",
      label: "Enhanced amplify",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "max-amplify",
          label: "+4 Maximum Amplify",
        },
        {
          id: "permanency",
          label: "Permanency: +5 Energy reserved",
        },
      ],
    },
    {
      id: "empowering-flame",
      label: "Empowering flame",
      maxRank: 3,
      cost: 1,
      incompatibles: [{ id: "permanency", label: "Permanency" }],
      perks: [
        {
          id: "max-amplify",
          label: "On use gains +2 Amplify",
        },
        {
          id: "damage",
          label: "Buff grants 10% increased Damage",
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
          id: "radius",
          label: "2% increased radius per Overload",
        },
        {
          id: "damage",
          label: "1% increased damage per Overload.",
        },
      ],
    },
  ],
};
