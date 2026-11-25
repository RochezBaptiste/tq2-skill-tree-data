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
  tags: ["Earth", "Active", "Main", "Spell", "Fire", "Exhaust"],
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
          id: "desription",
          label:
            "When directly used this skill deals %1 Fire Damage to the target with %2% Ailment Chance.",
          baseValue: [169, 100],
          perLevel: [16, 50],
        },
        {
          id: "desription-2",
          label: "%1% less Damage over Time.",
          baseValue: 15,
          perLevel: 10,
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
          id: "description",
          label: "Ignited enemies have -%1% Fire Resistance",
          baseValue: 4,
          perLevel: 4,
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
          id: "description",
          label:
            "When Ignite ends it triggers an explosion dealing %1 Fire Damage in a %2m radius",
          baseValue: [308, 2],
          perLevel: [76, 0.6],
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
          id: "description",
          label: "When Ignite ends, it jumps to another enemy within 3m",
        },
        {
          id: "description-2",
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
          id: "description",
          label: "Flame Volley has 15% chance to apply Ignite on hit",
        },
      ],
    },
  ],
};
