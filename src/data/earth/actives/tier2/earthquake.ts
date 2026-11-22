import { Active } from "@/app/data/types";

export const earthquake: Active = {
  id: "earthquake",
  tier: 2,
  name: "Earthquake",
  cost: {
    base: 20,
    reccuring: 3,
  },
  cooldown: 0,
  castTime: 1000,
  critChance: 5,
  ailmentChance: 10,
  tags: ["Earth", "Active", "Main", "Spell", "Area", "Channel"],
  description: [
    "Conjure an Earthquake around you.",
    "Its effect increases in Stages for every 1.0s you channel",
    "Releasing after reaching Stage 1 deals 1,246 Strike Damage in a 4.0m radius",
    "Deals 120% more Damage per additional Stage. Stage 2 stuns for 0.6s",
  ],
  modifiers: [
    {
      id: "barrier",
      label: "Channel Barrier",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While Channeling gain %1 Barrier every 0.5s",
          baseValue: 87,
          perLevel: 35,
        },
      ],
    },
    {
      id: "trembles",
      label: "Trembles",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While Channeling, enemies are slowed by +%1% within 6.0m of you",
          baseValue: 25,
          perLevel: 15,
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-3",
          label: "+%1 Energy Cost per second",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "extended",
      label: "Extended charge",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+1 Maximum Stage",
        },
        {
          id: "description-2",
          label: "When you gain a Stage gain Overwhelm",
        },
      ],
    },
    {
      id: "heavy-impact",
      label: "Heavy impact",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "extended", label: "Extended Charge" }],
      perks: [
        {
          id: "description",
          label: "%1% more damage per Overwhelm",
          baseValue: 7,
          perLevel: 7,
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-3",
          label: "+%1 Energy Cost per second",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "aftershock",
      label: "Aftershock",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Creates an aftershock 1s after release. Deals 87 Strike Damage in a 6.0m radius once per Stage reached",
          baseValue: 154,
          perLevel: 77,
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-3",
          label: "+%1 Energy Cost per second",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "fast-channel",
      label: "Fast channel",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Action Speed",
          baseValue: 8,
          perLevel: 8,
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "description-3",
          label: "+%1 Energy Cost per second",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "stone-protection",
      label: "Stone protection",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "After reaching Stage 1, while charging you gain Unstoppable and take %1% reduced Damage",
          baseValue: 15,
          perLevel: 5,
        },
        {
          id: "cost-flat",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "cost-second",
          label: "+%1 Energy Cost per second",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
  ],
};
