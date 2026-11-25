import { Active } from "@/app/data/types";

export const sentry: Active = {
  id: "sentry",
  tier: 2,
  name: "Sentry",
  description: [
    "Summon a turret that fires bolts at the closest enemy",
    "On Activation deals 461 Pierce Damage automatically activates every 0.8s",
    "Maximum activations 8",
    "Summon Limit 2",
    "1s destroyed when Activation are depleted",
  ],
  cost: {
    divineCore: 5,
  },
  cooldown: 0,
  castTime: 500,
  critChance: 5,
  ailmentChance: 10,
  tags: ["Forge", "Active", "Lesser Summon", "Device"],
  modifiers: [
    {
      id: "summon-limit",
      label: "Summon Limit",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+%1 Summon Limit",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "strong-start",
      label: "Strong Start",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Damage per remaining Activation up to %2%",
          baseValue: [2, 20],
          perLevel: [2, 20],
        },
      ],
    },
    {
      id: "elemental-infusion",
      label: "Elemental Infusion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Consumes Elemental Infusion to grant the Summon +%1 Damage of the consumed type and %1% Damage converted to the consumed type",
          baseValue: [69, 10],
          perLevel: [69, 5],
        },
      ],
    },
    {
      id: "masterwork",
      label: "Masterwork",
      maxRank: 2,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Consume 50% Divine Cores",
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "description-2",
          label: "Deals %1% more Damage per Divine Core spent",
          baseValue: 3,
          perLevel: 1,
        },
      ],
    },
    {
      id: "enhanced-activations",
      label: "Enhanced Activations",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1 Activations",
          baseValue: 2,
          perLevel: 2,
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
          id: "description",
          label: "On hit reduces Damage Resistance by %1% up to %2% for 3s",
          baseValue: [2, 6],
          perLevel: [2, 6],
        },
      ],
    },
    {
      id: "burnout",
      label: "Burnout",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Damage",
          baseValue: 20,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "%1% more Activation Speed",
          baseValue: 100,
          perLevel: 75,
        },
        {
          id: "description-3",
          label: "+%1 Activation Cost",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "explosion",
      label: "Explosion",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "When destroyed the Device explodes dealing %1 Fire Damage in a %2m radius",
          baseValue: [961, 2.5],
          perLevel: [192, 1],
        },
      ],
    },
    {
      id: "final-burst",
      label: "Final Burst",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "The final Activation deals %1% more Damage",
          baseValue: 100,
          perLevel: 50,
        },
      ],
    },
    {
      id: "synchronized-attack",
      label: "Synchronized Attack",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "description",
          label:
            "Whenever you use an active non-channel skill, this device has a 100% chance to activate",
        },
      ],
    },
    {
      id: "double-activation",
      label: "Double Activation",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1% Double Activation Chance",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "+%1% Free Activation Chance",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "recycling",
      label: "Recycling",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "When destroyed, drops 15% of the Divine Cores spent on it plus up to 15% based on remaining Activations",
        },
      ],
    },
  ],
};
