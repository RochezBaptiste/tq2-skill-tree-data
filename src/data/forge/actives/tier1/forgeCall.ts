import { Active } from "@/app/data/types";

export const forgeCall: Active = {
  id: "forge-call",
  tier: 1,
  name: "Forge call",
  description: [
    "Create 3 metal orbs orbiting you.",
    "Each Orb deals 231 Strike Damage on contact",
    "4 Projectile Penetration",
    "1.5m orbit range",
  ],
  cost: {
    divineCore: 5,
  },
  cooldown: 8000,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Spell", "Projectile"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more damage",
          baseValue: 10,
          perLevel: 10,
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
          label: "+%1% Ailment Chance",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1% Critical Hit Chance",
          baseValue: 4,
          perLevel: 4,
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
          label: "+%1 Damage of the consumed type",
          baseValue: 34,
          perLevel: 35,
        },
        {
          id: "description-3",
          label: "%1% of Damage converted to the consumed type",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
    {
      id: "weaken-on-hit",
      label: "Weaken on Hit",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On hit, secondary %1% chance to apply Weakened",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
    {
      id: "heat-up",
      label: "Heat Up",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "While orbiting your orbs deal up to +%1 Fire Damage after 8s",
          baseValue: 115,
          perLevel: 115,
        },
      ],
    },
    {
      id: "fire-explosion",
      label: "Fire Explosion",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "heat-up", label: "Heat up" }],
      perks: [
        {
          id: "description",
          label:
            "The bonus Fire Damage from Heat Up is dealt in a 1.5m radius instead",
        },
      ],
    },
    {
      id: "electric-induction",
      label: "Electric Induction",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "On use and every 3 seconds afterwards, your next Lightning Skill deals %1% more Damage per active Orb",
          baseValue: 4,
          perLevel: 1,
        },
      ],
    },
    {
      id: "heavy-impact",
      label: "Heavy Impact",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "description",
          label: "30% more Projectile Speed",
        },
        {
          id: "description-2",
          label: "Enemies are Stunned for 1.5s after 6 hits",
        },
      ],
    },
    {
      id: "cooldown-refresh",
      label: "Cooldown Refresh",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "When Forge Call hits an enemy, its cooldown is reduced by 0.3s",
        },
        {
          id: "description-2",
          label: "+3 Divine Core Cost",
        },
      ],
    },
    {
      id: "enhancing-orbs",
      label: "Enhancing Orbs",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Grants you %1% increased Total Damage per remaining Orb",
          baseValue: 3,
          perLevel: 2,
        },
      ],
    },
    {
      id: "enhanced-glancing",
      label: "Enhanced Glancing",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Grants you %1% Glancing Hits Chance per remaining Orb",
          baseValue: 3,
          perLevel: 5,
        },
      ],
    },
    {
      id: "additional-projectiles",
      label: "Additional Projectiles",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+%1 Projectiles",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "+%1m Orbit Radius",
          baseValue: 0.3,
          perLevel: 0.3,
        },
      ],
    },
    {
      id: "projectile-penetration",
      label: "Projectile Penetration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1 Projectile Penetration",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "empowered-projectiles",
      label: "Empowered Projectiles",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When you use a Projectile Skill consume an Orb for %1% increased Total Damage",
          baseValue: 20,
          perLevel: 5,
        },
      ],
    },
    {
      id: "weaponized-orbs",
      label: "Weaponized orbs",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Orbs deal %1% of your Weapon Damage as additional damage",
          baseValue: 5,
          perLevel: 5,
        },
      ],
    },
  ],
};
