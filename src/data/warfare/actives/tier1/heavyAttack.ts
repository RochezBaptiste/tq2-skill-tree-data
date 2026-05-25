import { Active } from "@/app/data/types";

export const heavyAttack: Active = {
  id: "heavy-attack",
  tier: 1,
  name: "Heavy Attack",
  cost: {
    base: 70,
  },
  cooldown: 0,
  castTime: 1112,
  critChance: 5,
  ailmentChance: 55,
  description: [
    "Deals 266% weapon damage.",
    "Consumes full Overwhelm for 50% more damage.",
    "Melee: 2.5m range.",
    "Ranged: 100% more projectile speed",
    "+1 Projectile penetration",
  ],
  tags: ["Warfare", "Active", "Weapon attack", "Overwhelm", "Exhaust"],
  modifiers: [
    {
      id: "bulwark-on-hit",
      label: "Bulwark on hit",
      maxRank: 1,
      cost: 1,
      perks: [],
    },
    {
      id: "shatter",
      label: "Shatter",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "penetration",
          label: "%1% damage mitigation penetration",
          baseValue: 8,
          perLevel: 8,
        },
        {
          id: "armor-duration",
          label: "Enemies hit have -%1 armor Value for %2s (non-stacking)",
          baseValue: [1034, 3],
          perLevel: [517, 0.5],
        },
      ],
    },
    {
      id: "second-hit",
      label: "Second Hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "effect",
          label:
            "Hits 2 times in one attack, attack time is 20% longer and deals 30% less damage",
        },
        {
          id: "require",
          label: "Melee only",
        },
      ],
    },
    {
      id: "staggering-force",
      label: "Staggering Force",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "%1% more damage",
          baseValue: 5,
          perLevel: 5,
        },
        {
          id: "stun-chance",
          label: "%1% chance to stun for 1.5s",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
    {
      id: "raging-attack",
      label: "Raging Attack",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "%1% more damage per Rage",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "projectile-penetration",
      label: "Projectile Penetration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "penetration-speed",
          label: "+%1 projectile penetration and %2% more projectile speed",
          baseValue: [1, 20],
          perLevel: [1, 20],
        },
        {
          id: "require",
          label: "Ranged weapons only",
        },
      ],
    },
    {
      id: "wind-up",
      label: "Wind Up",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage-speed",
          label: "%1% more damage but %2% less attack speed",
          baseValue: [15, 5],
          perLevel: [5, 4],
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "ailment",
          label: "%1% more ailment chance",
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "cost",
          label: "+%1 energy cost",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
  ],
};
