import { Active } from "@/app/data/types";

export const ignite: Active = {
  id: "ignite",
  tier: 3,
  name: "Ignite",
  cost: {
    base: 60,
  },
  cooldown: 0,
  castTime: 500,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Earth", "Active", "Spell", "Fire", "Exhaust"],
  description: [
    "Target ennemy is Ignited for 4s",
    "Ignited enemies takes 131 Fire Damage every 0.5 seconds",
  ],
  modifiers: [
    {
      id: "flame-burst",
      label: "Flame burst",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "base",
          label: "When directly used this skill deals",
        },
        {
          id: "damage-flat",
          label: "96 Fire Damage to the target with 100 Ailment chance",
        },
        {
          id: "damage-time",
          label: "25% less Damage over time",
        },
      ],
    },
    {
      id: "resistance-reduction",
      label: "Resistance reduction",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "fire-resistance",
          label: "Ignited enemies have -4% Fire Resistance",
        },
      ],
    },
    {
      id: "fire-explosion",
      label: "Fire explosion",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "trigger",
          label:
            "When Ignite ends it triggers an explosion dealing 174 Fire Damage in a 2.0m radius",
        },
      ],
    },
    {
      id: "proliferation",
      label: "Proliferation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "jump",
          label: "When Ignite ends, it jumps to another enemy within 3m",
        },
        {
          id: "less-damage",
          label: "40% less Damage",
        },
      ],
    },
    {
      id: "flame-volley",
      label: "Flame Volley trigger",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "apply",
          label: "Flame Volley has 15% chance to apply Ignite on hit",
        },
      ],
    },
  ],
};
