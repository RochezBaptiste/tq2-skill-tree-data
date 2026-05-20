import { Active } from "@/app/data/types";

export const lightningBolt: Active = {
  id: "lightning-bolt",
  tier: 2,
  name: "Lightning Bolt",
  description: [
    "Throw a bolt of lightning that deals 262 Lightning Damage.",
    "Infinite Penetration.",
    "Always fires 1 Projectile. Additional Projectiles instead split off on the first hit. Additional Projectiles deal 60% less Damage.",
    "On use gain Overwhelm while you have an Overwhelm skill equipped.",
  ],
  cost: {
    base: 10,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 5,
  ailmentChance: 10,
  tags: ["Storm", "Active", "Spell", "Basic", "Projectile", "Lightning"],
  modifiers: [
    {
      id: "gain-flow",
      label: "Gain Flow",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "flow-chance",
          label:
            "On hit 20% chance to gain Flow. Cannot roll for Flow more than once every 0.5s",
        },
      ],
    },
    {
      id: "weapon-attack",
      label: "Weapon Attack",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "weapon-conversion",
          label:
            "Instead deals 120% Weapon Damage as Lightning Damage. Requires Spear or Ranged.",
        },
      ],
    },
    {
      id: "electric-burst",
      label: "Electric Burst",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "definition",
          label:
            "On first hit applies debuff for 3s. No stack limit. No Duration refresh. When it expires the target takes:",
        },
        {
          id: "lightning-damage",
          label: "44 Lightning damage per stack",
        },
        {
          id: "cost",
          label: "+1 Energy Cost",
        },
      ],
    },
    {
      id: "rage-gain",
      label: "Rage Gain",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "definition",
          label: "On hit gain Rage no more than once every 0.4s",
        },
        {
          id: "rage-damage",
          label: "1% more Damage per Rage",
        },
      ],
    },
    {
      id: "additional-projectiles",
      label: "Additional Projectiles",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "projectiles",
          label: "+1 additional Projectiles",
        },
        {
          id: "cost",
          label: "+1 Energy Cost",
        },
      ],
    },
    {
      id: "lightning-fury",
      label: "Lightning Fury",
      maxRank: 1,
      cost: 1,
      requires: [
        { id: "additional-projectiles", label: "Additional Projectiles" },
      ],
      perks: [
        {
          id: "fury-damage",
          label: "30% more damage",
        },
        {
          id: "fury-projectile",
          label: "100% more additional projectiles",
        },
        {
          id: "fury-cost",
          label: "+5 Energy cost",
        },
        {
          id: "fury-stats",
          label: "Doesn't generate Overwhelm anymore",
        },
      ],
    },
    {
      id: "lightning-strikes",
      label: "Lightning Strikes",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "strike-chance",
          label: "10% chance to trigger Lightning Strike on hit",
        },
        {
          id: "cost",
          label: "+1 Energy Cost",
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
          id: "overload-buff",
          label:
            "On use gain 1 Overload: 10% more Damage, +1 additional Projectiles",
        },
      ],
    },
  ],
};
