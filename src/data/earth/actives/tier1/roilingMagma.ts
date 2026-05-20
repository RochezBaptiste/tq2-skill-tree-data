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
  tags: ["Earth", "Active", "Spell", "Area", "Projectile", "Fire"],
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
          label: "10% more damage",
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
            "On explosion the skill sends 6 to 12 rock fragments in all direction",
        },
        {
          id: "damage",
          label: "131 pierce damage each",
        },
        {
          id: "energy",
          label: "+2 energy",
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
          id: "damage",
          label: "15% more damage",
        },
        {
          id: "refund",
          label: "Refund 30% of Energy spent over 1s",
        },
        {
          id: "overload",
          label: "Gain 1 Overload per 30 Energy spent",
        },
        {
          id: "energy",
          label: "+10 Energy cost",
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
          id: "damage",
          label:
            "Consume full overwhelm for %1 more Damage, 20% more ailment chance %1% more aread radius and 50% more projectile speed",
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
          id: "damage",
          label:
            "Explosion deals 65% of energy spent on this skill as additional fire damage",
        },
        {
          id: "energy-cost",
          label: "10% of current energy as energy cost Explosion",
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
          id: "desc",
          label: "Does not explode on contact with enemies",
        },
        {
          id: "damage",
          label: "Deals 87 fire damage every 0.5s in 2.5m radius",
        },
        {
          id: "explode",
          label: "On use old orb explodes",
        },
        {
          id: "less-damage",
          label: "50% less Explosion damage",
        },
        {
          id: "less-projectil-speed",
          label: "95% less Projectile speed",
        },
        {
          id: "less-projectil-range",
          label: "50% less Projectile Range",
        },
      ],
    },
  ],
};
