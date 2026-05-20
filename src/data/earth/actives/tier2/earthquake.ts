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
  tags: ["Earth", "Active", "Spell", "Area", "Channel"],
  description: [
    "Conjure an Earthquake around you.",
    "Its effect increases in Stages for every 1.0s you channel",
    "Releasing after reaching Stage 1 deals X Strike Damage in a 4.0m radius",
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
          id: "channel",
          label: "While Channeling gain 66 Barrier every 0.5s",
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
          id: "slow",
          label:
            "While Channeling, ennemies are slowed by +25% within 6.0m of you",
        },
        {
          id: "cost-flat",
          label: "+2 Energy Cost",
        },
        {
          id: "cost-second",
          label: "+1 Energy Cost per second",
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
          id: "stage",
          label: "+1 Maximum Stage",
        },
        {
          id: "overwhelm",
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
          id: "damage",
          label: "7% more damage per Overwhelm",
        },
        {
          id: "cost-flat",
          label: "+2 Energy Cost",
        },
        {
          id: "cost-second",
          label: "+1 Energy Cost per second",
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
          id: "strike",
          label:
            "Creates an aftershock 1s after release. Deals 87 Strike Damage in a 6.0m radius once per Stage reached",
        },
        {
          id: "cost-flat",
          label: "+2 Energy Cost",
        },
        {
          id: "cost-second",
          label: "+1 Energy Cost per second",
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
          id: "speed",
          label: "8% more Action Speed",
        },
        {
          id: "cost-flat",
          label: "+2 Energy Cost",
        },
        {
          id: "cost-second",
          label: "+1 Energy Cost per second",
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
          id: "reduce",
          label:
            "After reaching Stage 1, while charging you gain Unstoppable and take 215% reduced Damage",
        },
        {
          id: "cost-flat",
          label: "+2 Energy Cost",
        },
        {
          id: "cost-second",
          label: "+1 Energy Cost per second",
        },
      ],
    },
  ],
};
