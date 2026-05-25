import { Active } from "@/app/data/types";

export const rainOfArrows: Active = {
  id: "rain-of-arrows",
  tier: 3,
  name: "Rain of Arrows",
  description: [
    "Multiple waves of arrows rain from the skies around the target location.",
    "Deals 75% Weapon Damage in a 5m radius every 0.6 seconds.",
    "Shoots 3 waves.",
    "Requires Bow.",
  ],
  cost: {
    base: 100,
  },
  cooldown: 0,
  castTime: 620,
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
          label: "Consumes Flow for %1% more Damage",
          baseValue: 50,
          perLevel: 25,
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
          label: "Consumes full Overwhelm for %1% more Damage",
          baseValue: 50,
          perLevel: 25,
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
          label: "+%1 additional wave",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "damage-reduction",
          label: "%1% less Damage",
          baseValue: 5,
          perLevel: 4,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 10,
          perLevel: 10,
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
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "damage-penalty",
          label: "%1% less Damage",
          baseValue: 10,
          perLevel: 8,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
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
          label: "Enemies hit are slowed by %1% for 1s (non-stackable)",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
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
          label:
            "Deals %1% additional damage and increases the chance to inflict an ailment each time the target has already been hit by the rain of arrows (up to %2%)",
          baseValue: [2, 20],
          perLevel: [1, 10],
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
          label:
            "If rain of arrows only hits a single target, deal 30% Damage a second time",
          baseValue: 30,
          perLevel: 20,
        },
      ],
    },
  ],
};
