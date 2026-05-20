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
          label: "8% damage mitigation penetration",
        },
        {
          id: "armor-duration",
          label: "Enemies hit have -67 armor Value for 3s (non-stacking)",
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
          label: "5% more damage",
        },
        {
          id: "stun-chance",
          label: "20% chance to stun for 1.5s",
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
          label: "2% more damage per Rage",
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
          label: "+1 projectile penetration and 20% more projectile speed",
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
          label: "15% more damage but 5% less attack speed",
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
          label: "50% more ailment chance",
        },
        {
          id: "cost",
          label: "+1 energy cost",
        },
      ],
    },
  ],
};
