import { Active } from "@/app/data/types";

export const doomHorn: Active = {
  id: "doom-horn",
  tier: 2,
  name: "Doom Horn",
  cost: {
    base: 50,
  },
  cooldown: 0,
  castTime: 480,
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
            "Whenever you hit an enemy affected by Doom Horn, they take 9 Spirit Damage",
        },
        {
          id: "cost",
          label: "+2 energy cost",
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
            "On direct use gain +20% attack & cast speed and +20% damage for 1s",
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
            "Enemies affected by Doom Horn have an additional -4% damage resistance",
        },
        {
          id: "cost",
          label: "+2 energy cost",
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
            "Thundering Horn deals 25% more damage against enemies inside a 2.5m radius",
        },
        {
          id: "cost",
          label: "+5 energy cost",
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
          label: "+2m radius, 10% less cast speed",
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
          label: "Next hit after Doom Horn deals 18 Vitality Damage",
        },
        {
          id: "cost",
          label: "+2 energy cost",
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
            "When directly used deals 6 Strike Damage with 6% ailment chance",
        },
        {
          id: "cost",
          label: "+10 energy cost",
        },
      ],
    },
  ],
};
