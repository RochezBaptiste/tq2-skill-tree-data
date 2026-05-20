import { Active } from "@/app/data/types";

export const trickShot: Active = {
  id: "trick-shot",
  tier: 1,
  name: "Trick Shot",
  description: [
    "Throws a hidden blade dealing 354-483 Pierce Damage.",
    "Infinite Penetration.",
    "10m Projectile Range.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 0,
  castTime: 500,
  critChance: 0,
  ailmentChance: 10,
  tags: ["Rogue", "Active", "Ranged attack", "Projectile", "Exhaust"],
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
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-chance",
          label: "50% more Critical Hit Chance",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "doom-on-hit",
      label: "Doom on hit",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "consume-doom",
      label: "Consume Doom",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "doom-on-hit", label: "Doom on hit" }],
      perks: [
        {
          id: "doom-damage",
          label:
            "Consumes Doom on target to deal 2% more Damage to it per Doom consumed",
        },
      ],
    },
    {
      id: "doom-explosion",
      label: "Doom explosion",
      maxRank: 2,
      cost: 2,
      requires: [{ id: "consume-doom", label: "Consume Doom" }],
      perks: [],
    },
    {
      id: "interrupt",
      label: "Interrupt",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "stun-duration",
          label: "Stuns Channeling enemies for 1.5s",
        },
      ],
    },
    {
      id: "counter",
      label: "Counter",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "channeling-damage",
          label: "Deals 50% more Damage to Channeling enemies",
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
          label: "100% more Ailment Chance",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "critical-rupture",
      label: "Critical Rupture",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-rupture-chance",
          label:
            "+2% added Base Critical Hit Chance. On Critical Hit, 10% chance to cause Rupture.",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
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
          label: "Deals 15% more Damage to your Mark",
        },
      ],
    },
    {
      id: "shrapnel",
      label: "Shrapnel",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "shrapnel-debuff",
          label:
            "On hit apply a debuffer for 2s with a 30% Bleed Chance every second",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "ranged-weapon",
      label: "Ranged Weapon",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "shadow-dagger", label: "Shadow Dagger" }],
      perks: [
        {
          id: "weapon-projectile",
          label:
            "Fires Weapon Projectile dealing 159% Weapon Damage. 200% more Projectile Speed. Requires spear, dagger or ranged weapon.",
        },
      ],
    },
    {
      id: "shadow-dagger",
      label: "Shadow Dagger",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "ranged-weapon", label: "Ranged Weapon" }],
      perks: [
        {
          id: "spell-conversion",
          label:
            "Turns into a spell and fires a Shadow Dagger dealing Pierce Damage",
        },
      ],
    },
    {
      id: "shadow-clone-copy",
      label: "Shadow clone copy",
      maxRank: 1,
      cost: 1,
      perks: [],
    },
  ],
};
