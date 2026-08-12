import { Active } from "@/app/data/types";

export const deathNova: Active = {
  id: "death-nova",
  tier: 4,
  name: "Death nova",
  description: [
    "Cause a ring of otherwordly energy to expand over 1.5s in a 4.5m radius dealing 1062 Vitality Damage",
  ],
  cost: {
    base: 0,
  },
  cooldown: 6000,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Spirit", "Active", "Main", "Spell", "Area", "Vitality"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "10% more damage",
        },
      ],
    },
    {
      id: "mortality",
      label: "Mortality",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Applies Mortality equal to 10% of damage this skill deals",
        },
      ],
    },
    {
      id: "elemental-infusion",
      label: "Elemental infusion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Consumes Elemental infusion",
        },
        {
          id: "description-2",
          label: "+108 damage of the consumed type",
        },
        {
          id: "description-3",
          label: "10% of damage converted to the consumed type",
        },
      ],
    },
    {
      id: "doom-on-hit",
      label: "Doom on hit",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "On hit: Applies 1 Doom, once per enemy | Applies 1 Doom to enemies without Doom",
        },
        {
          id: "description-2",
          label: "Doom",
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% increased Area size",
        },
      ],
    },
    {
      id: "cold-conversion",
      label: "Cold conversion",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "elemental-infusion",
          label: "Elemental infusion",
        },
        {
          id: "poison-conversion",
          label: "Poison conversion",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Instead deals Cold damage",
        },
      ],
    },
    {
      id: "poison-conversion",
      label: "Poison conversion",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "cold-conversion",
          label: "Cold conversion",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Instead deals Poison damage",
        },
      ],
    },
    {
      id: "soul-harvest",
      label: "Soul harvest",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "On kill progress Shade generation by 1s.",
        },
        {
          id: "description-2",
          label:
            "When you deal damage to a Boss, progress Shade generation by 0.4s, only once every 1s",
        },
      ],
    },
    {
      id: "sacrifice",
      label: "Sacrifice",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "40% more damage",
        },
        {
          id: "description-2",
          label: "Costs +10% current health",
        },
      ],
    },
    {
      id: "projectiles",
      label: "Projectiles",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Fire 12 Projectiles in all directions each dealing 189 Vitality damage",
        },
      ],
    },
    {
      id: "soulburn",
      label: "Soulburn",
      maxRank: 1,
      cost: 3,
      incompatibles: [
        {
          id: "soul-harvest",
          label: "Soul harvest",
        },
      ],
      perks: [
        {
          id: "description",
          label: "No Cooldown",
        },
        {
          id: "description-2",
          label: "Area expands over 0.5s",
        },
        {
          id: "description-3",
          label: "0m less radius",
        },
        {
          id: "description-4",
          label: "+1 Shades cost",
        },
      ],
    },
    {
      id: "trigger",
      label: "Trigger",
      maxRank: 1,
      cost: 3,
      incompatibles: [
        {
          id: "soulburn",
          label: "Soulburn",
        },
        {
          id: "athanekros-autonomy",
          label: "Athanekros Autonomy",
        },
        {
          id: "athanekros-command",
          label: "Athanekros Command",
        },
      ],
      perks: [
        {
          id: "description",
          label:
            "For every 300 Energy you spned on other skills, trigger this skill",
        },
        {
          id: "description-2",
          label: "You cannot use this skill directly",
        },
      ],
    },
    {
      id: "athanekros-autonomy",
      label: "Athanekros Autonomy",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "athanekros-command",
          label: "Athanekros Command",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Your Athanekros autonomously uses Death nova",
        },
        {
          id: "description-2",
          label: "You cannot use Death Nova",
        },
      ],
    },
    {
      id: "athanekros-command",
      label: "Athanekros Command",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "soulburn",
          label: "Soulburn",
        },
        {
          id: "trigger",
          label: "Trigger",
        },
        {
          id: "athanekros-autonomy",
          label: "Athanekros Autonomy",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Instead command your Athanekros to use Death Nova",
        },
        {
          id: "description-2",
          label: "10% more damage",
        },
      ],
    },
  ],
};
