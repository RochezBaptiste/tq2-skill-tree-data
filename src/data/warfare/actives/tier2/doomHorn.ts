import { Active } from "@/app/data/types";

export const doomHorn: Active = {
  id: "doom-horn",
  tier: 2,
  name: "Doom Horn",
  cost: {
    base: 50,
  },
  cooldown: 0,
  castTime: 500,
  critChance: 0,
  ailmentChance: 0,
  description: [
    "The call of your horn weakens enemies in a 4m radius.",
    "Enemies have -12% damage resistance for 4s.",
  ],
  tags: ["Warfare", "Active", "Spell", "Area"],
  modifiers: [
    {
      id: "crushing-spirit",
      label: "Crushing Spirit",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "spirit-damage",
          label:
            "Whenever you hit an enemy affected by Doom Horn, they take %1 Spirit Damage",
          baseValue: 64,
          perLevel: 32,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "follow-up",
      label: "Follow Up",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "buff",
          label:
            "On direct use gain +%1% attack & cast speed and +%2% damage for 1s",
          baseValue: [20, 20],
          perLevel: [10, 20],
        },
      ],
    },
    {
      id: "frail",
      label: "Frail",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage-resistance",
          label:
            "Enemies affected by Doom Horn have an additional -%1% damage resistance",
          baseValue: 4,
          perLevel: 4,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "intensity",
      label: "Intensity",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "thundering-horn", label: "Thundering horn" }],
      perks: [
        {
          id: "damage-radius",
          label:
            "Thundering Horn deals %1% more damage against enemies inside a 2.5m radius",
          baseValue: 25,
          perLevel: 25,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 5,
          perLevel: 5,
        },
      ],
    },
    {
      id: "long-range",
      label: "Long Range",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "radius-cast-speed",
          label: "+%1m radius, 10% less cast speed",
          baseValue: 2,
          perLevel: 1,
        },
      ],
    },
    {
      id: "siphon",
      label: "Siphon",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "vitality-hit",
          label: "Next hit after Doom Horn deals %1 Vitality Damage",
          baseValue: 128,
          perLevel: 65,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "thundering-horn",
      label: "Thundering Horn",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "strike-damage",
          label:
            "When directly used deals %1 Strike Damage with 25% ailment chance",
          baseValue: 6,
          perLevel: 3,
        },
        {
          id: "strike-damage",
          label: "10% clooldown reduction",
          baseValue: 6,
          perLevel: 3,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
  ],
};
