import { Active } from "@/app/data/types";

export const soulVortex: Active = {
  id: "soul-vortex",
  tier: 3,
  name: "Soul Vortex",
  description: [
    "Deal 227-340 Vitality Damage in a 4m radius every 0.8s for 4s.",
    "Enemies are pulled towards the center every 0.8s with Displacement Strength 150.",
    "Limit: 1",
    "Disruption skills share their Cooldown.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 10000,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Spirit", "Active", "Spell", "Area", "Vitality", "Disruption"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "10% more damage",
        },
      ],
    },
    {
      id: "enhanced-ailments",
      label: "Enhanced Ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "15% Ailment chance",
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
          label: "Consumes Elemental Infusion",
        },
        {
          id: "description-2",
          label: "+45 damage of the consumed type per second",
        },
        {
          id: "description-3",
          label: "10% of damage converted to the consumed type",
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% increased Area Size",
        },
      ],
    },
    {
      id: "soul-harvest",
      label: "Soul Harvest",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On Kill progress Shade generation by 1s. When you deal damage to a Boss, progress Shade generation by 0.4s, only once every 1s",
        },
      ],
    },
    {
      id: "sacrifice",
      label: "Sacrifice",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "40% more damage",
        },
        {
          id: "description-2",
          label: "Costs +10% current health",
        },
      ],
    },
    {
      id: "soulburn",
      label: "Soulburn",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Costs +1 Shade",
        },
        {
          id: "description-2",
          label: "100% more Damage",
        },
        {
          id: "description-3",
          label: "+10% Lifesteal",
        },
        {
          id: "description-4",
          label: "+30 Displacement Strength",
        },
      ],
    },
    {
      id: "doom",
      label: "Doom",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "80% chance to apply 1 Doom every 0.8s",
        },
      ],
    },
    {
      id: "weaken",
      label: "Weaken",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "50% chance to apply Weakened every 0.8s",
        },
      ],
    },
    {
      id: "gateway",
      label: "Gateway",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "While active you have +1 Maximum Shades",
        },
      ],
    },
    {
      id: "execution-threshold",
      label: "Execution Threshold",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "You have +1,187 Execution Threshold against enemies inside",
        },
      ],
    },
    {
      id: "underworld-force",
      label: "Underworld Force",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Your Summons inside the area have 15% increased damage and 10% increased Lifesteal",
        },
      ],
    },
    {
      id: "intensify",
      label: "Intensify",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Deals up to 15% more damage to enemies closer to the center",
        },
        {
          id: "description-2",
          label: "+30 Energy cost",
        },
      ],
    },
    {
      id: "extended-duration",
      label: "Extended duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+1s Duration",
        },
      ],
    },
  ],
};
