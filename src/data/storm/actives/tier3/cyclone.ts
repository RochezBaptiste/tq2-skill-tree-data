import { Active } from "@/app/data/types";

export const cyclone: Active = {
  id: "cyclone",
  tier: 3,
  name: "Cyclone",
  description: [
    "Creates a Cyclone that deals 4 Cold Damage at target location in a 3.5m radius for 4s. Consumes 8 Energy per second while active.",
    "Deals 5% more Damage per Amplify.",
    "Cyclone gains Amplify whenever you use a Fire, Cold or Lightning skill (max 10 stacks).",
    "When Cyclone ends or is recast it loses all Amplify stacks.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Storm", "Active", "Spell", "Area", "Cold"],
  modifiers: [
    {
      id: "blizzard",
      label: "Blizzard",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "blizzard-stats",
          label:
            " Turns Cyclone into a Blizzard. 10% more Damage, +20% added Base Ailment Chance. Adds chance to Freeze for 0.8s. Chance is 2% + 0.5% per Chill stack on target(up to 15%)",
        },
      ],
    },
    {
      id: "thunderstorm",
      label: "Thunderstorm",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "strike-proc",
          label:
            "Every 2s, enemies inside the Thunderstorm have a 8% chance to be hit by a Lightning Strike (+10% frequency per Amplify)",
        },
      ],
    },
    {
      id: "personal-storm",
      label: "Personal Storm",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "aura-cyclone",
          label:
            "An additional smaller Cyclone 3.5m radius persists around you. +%2 Energy Degeneration.",
        },
      ],
    },
    {
      id: "localized-storm",
      label: "Localized Storm",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "localized-stats",
          label:
            "Instead you create up to 3 smaller storms with a 3.5m radius. 20% more Damage, 4s duration. +30 Energy Cost. No energy degeneration. Placing a new localized storm instead only clears 30% Amplify stacks",
        },
      ],
    },
    {
      id: "escalation",
      label: "Escalation",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "amplify-gain",
          label: "Gains 1 Amplify every 2s while a cyclone is present",
        },
        {
          id: "inside-buff",
          label:
            "While inside a cyclone gain 2% increased Physical, Cold and Lightning Damage per Amplify",
        },
      ],
    },
    {
      id: "violent-resolution",
      label: "Violent Resolution",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "end-explosion",
          label:
            "When a cyclone naturally ends it deal 87 Cold Damage inside it radius.This deals 8% more Damage per Amplify",
        },
      ],
    },
  ],
};
