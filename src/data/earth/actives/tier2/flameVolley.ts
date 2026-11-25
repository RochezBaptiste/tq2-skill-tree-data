import { Active } from "@/app/data/types";

export const flammeVolley: Active = {
  id: "flame-volley",
  tier: 2,
  name: "Flame Volley",
  cost: {
    base: 0,
  },
  cooldown: 0,
  castTime: 320,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Earth", "Sustained", "Main", "Aura", "Buff"],
  description: [
    "Fire Projectiles from above your head to target location where they explode dealing 109 fire Damage in a 0.9 radius.",
    "For every 15 energy you spend globally, Flame Volley gains 1 stack of Amplify(Max20)",
    "Flame Volley has 10% more Cas Speed per Amplify. Whenever the ability fires, lose 1 Amplify",
  ],
  modifiers: [
    {
      id: "amplify",
      label: "Enhanced Amplify",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1 maximum Amplify",
          baseValue: 6,
          perLevel: 6,
        },
      ],
    },
    {
      id: "ailment",
      label: "Enhanced Ailment",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+1% added Base Ailment chance",
          baseValue: 8,
          perLevel: 8,
        },
      ],
    },
    {
      id: "orbit",
      label: "Orbit",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Automatically fires at enemies in a 8m radius once every second while it has Amplify.",
        },
        {
          id: "description-2",
          label: "Frequency is affected by Cast Speed.",
        },
        {
          id: "description-3",
          label: "While equipped, loses 1 Amplify every %1s",
          baseValue: 1,
          perLevel: 2,
        },
      ],
    },
    {
      id: "amp-damage",
      label: "Amplified Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Deals %1% more Damage per Amplify",
          baseValue: 2,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "Cost +1 Amplify whenever it fires",
        },
      ],
    },
    {
      id: "mayhem",
      label: "Mayhem",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Spawn 200% more projectiles",
        },
        {
          id: "description-2",
          label: "Additional projectiles don't cost Amplify",
        },
        {
          id: "description-3",
          label: "Target location are random",
        },
        {
          id: "description-4",
          label:
            "You can move while channeling with 20% reduced Movement Speed",
        },
      ],
    },
    {
      id: "conservation",
      label: "Conservation",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "chance",
          label: "%1% chance to not lose Amplify on use",
          baseValue: 25,
          perLevel: 15,
        },
      ],
    },
    {
      id: "overwhelm",
      label: "Overwhelm Gain",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When directly used generates Overwhelm on hit, not more than once every 0.3s",
        },
      ],
    },
    {
      id: "fast",
      label: "Fast Projectiles",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Projectile Speed",
          baseValue: 20,
          perLevel: 20,
        },
        {
          id: "description-2",
          label: "%1% more Damage and Ailment Chance",
          baseValue: 5,
          perLevel: 5,
        },
      ],
    },
  ],
};
