import { Active } from "@/app/data/types";

export const bladeTrap: Active = {
  id: "blade-trap",
  tier: 1,
  name: "Blade trap",
  description: [
    "Summon a trap with spinning blades",
    "On Activation deals 346 Pierce damage in a 1.5m radius",
    "Automatically activate every 0.8s",
    "Maximum Activation: 6",
    "Summon Limit: 2",
    "Is destroyed when Activations are depleted",
  ],
  cost: {
    divineCore: 5,
  },
  cooldown: 0,
  castTime: 500,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Lesser Summon", "Device"],
  modifiers: [
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% increased Area Size",
          baseValue: 50,
          perLevel: 50,
        },
      ],
    },
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
            "Consumes Elemental Infusion to grant the Summon +%1 Damage of the consumed type and %2% Damage converted to the consumed type",
          baseValue: [51, 10],
          perLevel: [52, 5],
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
          label: "Consume %1% Divine Cores",
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
      id: "enfeeble",
      label: "Enfeeble",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On hit enemies deal %1% less Damage up to %2% for 3s",
          baseValue: [1, 5],
          perLevel: [1, 5],
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
          label: "20% more Damage",
        },
        {
          id: "description-2",
          label: "%1% more Activation Speed",
          baseValue: 100,
          perLevel: 75,
        },
        {
          id: "description-3",
          label: "+1 Activation Cost",
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
            "When destroyed the Device explodes dealing %1 Fire Damage in a 2.5m radius",
          baseValue: 961,
          perLevel: 192,
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
