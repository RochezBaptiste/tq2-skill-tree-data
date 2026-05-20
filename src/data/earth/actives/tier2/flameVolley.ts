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
  tags: ["Earth", "Sustained", "Aura", "Buff"],
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
          id: "max",
          label: "+6 maximum Aplify",
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
          id: "chance",
          label: "+8% added Base Ailment chance ",
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
          id: "auto",
          label:
            "Automatically fires at enemies in a 8m radius once every second while it has Amplify.",
        },
        {
          id: "cast-speed",
          label: "Frequency is affected by Cast Speed",
        },
        {
          id: "lose",
          label: "While equipped, loses 1 Amplify every 1s",
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
          id: "damage",
          label: "Deals 2% more Damage per Amplify",
        },
        {
          id: "cost",
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
          id: "spawn",
          label: "Spawn 200% more projectiles",
        },
        {
          id: "additional",
          label: "Additional projectiles don't cost Amplify",
        },
        {
          id: "target",
          label: "Target location are random",
        },
        {
          id: "channeling",
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
          label: "25% chance to not lose Amplify on use",
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
          id: "physical",
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
          id: "speed",
          label: "20% more Projectile Speed",
        },
        {
          id: "ailment-chance",
          label: "2% more Damage and Ailment Chance",
        },
      ],
    },
  ],
};
