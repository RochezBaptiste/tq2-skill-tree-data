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
          id: "description",
          label:
            "Turn the skill into a sustained skill, so it is always active",
        },
        {
          id: "description-2",
          label: "No cooldown. No bonuses on use",
        },
        {
          id: "description-3",
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
          id: "description",
          label:
            "Enemies inside the Aura get -%1% to Cold Resistance, Fire Resistance and Armor Value every second.",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-2",
          label: "Maximum is -%1%",
          baseValue: 6,
          perLevel: 6,
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
          id: "description",
          label: "Deals up to %1% more Damage to enemies closer to the center.",
          baseValue: 60,
          perLevel: 30,
        },
        {
          id: "description-2",
          label: "Permanency: +%1 Energy reserved",
          baseValue: 5,
          perLevel: 5,
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
          id: "description",
          label:
            "While Active grants 100% Weapon Damage converted to Fire and %1% increased Fire Weapon Damage per Amplify.",
          baseValue: 1.5,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "On use gains +%1 Amplify",
          baseValue: 3,
          perLevel: 3,
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
          id: "description",
          label: "+%1 Maximum Amplify",
          baseValue: 4,
          perLevel: 4,
        },
        {
          id: "description-2",
          label: "Permanency: +%1 Energy reserved",
          baseValue: 5,
          perLevel: 5,
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
          id: "description",
          label: "On use gains +%1 Amplify",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-2",
          label: "Buff grants %1% increased Damage",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "%1% increased radius per Overload",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-2",
          label: "%1% increased damage per Overload.",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
  ],
};
