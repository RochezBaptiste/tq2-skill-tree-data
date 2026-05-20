import { Active } from "@/app/data/types";

export const rainOfArrows: Active = {
  id: "rain-of-arrows",
  tier: 3,
  name: "Rain of Arrows",
  description: [
    "Multiple waves of arrows rain from the skies around the target location.",
    "Deals 74% Weapon Damage in a 5m radius every 0.6 seconds.",
    "Shoots 3 waves.",
    "Requires Bow.",
  ],
  cost: {
    base: 100,
  },
  cooldown: 0,
  castTime: 800,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Warfare", "Active", "Ranged attack", "Area", "Exhaust"],
  modifiers: [
    {
      id: "consume-flow",
      label: "Consume Flow",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-overwhelm", label: "Consume Overwhelm" }],
      perks: [
        {
          id: "flow-damage",
          label: "Consumes Flow for 50% more Damage",
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume Overwhelm",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-flow", label: "Consume Flow" }],
      perks: [
        {
          id: "overwhelm-damage",
          label: "Consumes full Overwhelm for 50% more Damage",
        },
      ],
    },
    {
      id: "downpour",
      label: "Downpour",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "extra-waves",
          label: "+1 additional wave",
        },
        {
          id: "damage-reduction",
          label: "5% less Damage",
        },
        {
          id: "cost",
          label: "+10 Energy Cost",
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "ailment-bonus",
          label: "+10% added Base Ailment Chance and 50% more Ailment Chance",
        },
        {
          id: "damage-cost-penalty",
          label: "10% less Damage and +2 Energy Cost",
        },
      ],
    },
    {
      id: "slow",
      label: "Slow",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "slow-effect",
          label: "Enemies hit are slowed by 10% for 1s (non-stackable)",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
        },
      ],
    },
    {
      id: "pincushion",
      label: "Pincushion",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "stacking-damage-ailment",
          label: "2% more Damage and Ailment Chance per hit taken (up to 20%)",
        },
      ],
    },
    {
      id: "focused-damage",
      label: "Focused Damage",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "single-target-bonus",
          label: "If hitting a single target, deal 30% Damage a second time",
        },
      ],
    },
  ],
};
