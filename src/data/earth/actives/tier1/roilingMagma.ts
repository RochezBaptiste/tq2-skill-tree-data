import { Active } from "@/app/data/types";

export const roilingMagma: Active = {
  id: "roiling-magma",
  tier: 1,
  name: "Roiling magma",
  cost: {
    base: 100,
  },
  cooldown: 0,
  castTime: 1000,
  critChance: 5,
  ailmentChance: 100,
  tags: ["Earth", "Active", "Main", "Spell", "Area", "Projectile", "Fire"],
  description: [
    "Shoot a large ball of magma that explodes on contact with enemies or obstacles",
    "Deals 516 fire damage in 2.2 radius",
  ],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "%1% more Damage",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "fragmentation",
      label: "Fragmentation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "explosion",
          label:
            "On explosion the skill sends %1 to %2 rock fragments in all directions dealing %3 Pierce Damage each.",
          baseValue: [6, 9, 231],
          perLevel: [2, 3, 38],
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost.",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "overload",
      label: "Overload",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Damage",
          baseValue: 15,
          perLevel: 15,
        },
        {
          id: "description-2",
          label: "Refund 30% of Energy spent over 1s",
          baseValue: 30,
          perLevel: 10,
        },
        {
          id: "description-3",
          label: "Gain 1 Overload per 30 Energy spent.",
        },
        {
          id: "description-4",
          label: "+%1 Energy cost",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "overwhelm",
      label: "Consume Overwhelm",
      tags: ["Overwhelm"],
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Consume full Overwhelm for %1% more Damage, %1% more Ailment Chance, %1% more Area Radius and 50% more Projectile Speed.",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
    {
      id: "grandeur",
      label: "Grandeur",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Explosion deals 65% of energy spent on this skill as additional fire damage",
        },
        {
          id: "description-2",
          label: "+%1% of Current Energy as Energy Cost",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
    {
      id: "vortex",
      label: "Vortex",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Does not explode on contact with enemies",
        },
        {
          id: "description-2",
          label: "Deals %1 Fire Damage every 0.5s in a %2m radius.",
          baseValue: [154, 2],
          perLevel: [38, 0.5],
        },
        {
          id: "description-3",
          label: "Limit 1, On use old orb explodes.",
        },
        {
          id: "description-4",
          label: "50% less Explosion damage",
        },
        {
          id: "description-5",
          label: "95% less Projectile speed",
        },
        {
          id: "description-6",
          label: "50% less Projectile Range",
        },
      ],
    },
  ],
};
