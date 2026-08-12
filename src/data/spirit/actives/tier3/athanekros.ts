import { Active } from "@/app/data/types";

export const athanekros: Active = {
  id: "athanekros",
  tier: 3,
  name: "Athanekros",
  description: [
    "Sustained: Automatically summons and restores Athanekros.",
    "Active: Empower this Summon for 5s. Reduce the Restoration Timer by 6s.",
  ],
  cost: {
    shades: 1,
    reserved: 60,
  },
  cooldown: 4000,
  castTime: 700,
  tags: ["Spirit", "Active", "Sustained", "Greater Summon", "Spell"],
  modifiers: [
    {
      id: "autonomous-strength",
      label: "Autonomous Strength",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 20% more damage",
        },
        {
          id: "description-2",
          label: "Does not apply Empowered",
        },
        {
          id: "description-3",
          label: "+30 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 10% more damage",
        },
        {
          id: "description-2",
          label: "+5 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-speed",
      label: "Enhanced Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 10% more All speed",
        },
        {
          id: "description-2",
          label: "+10 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-health",
      label: "Enhanced Health",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 50% more Maximum health",
        },
        {
          id: "description-2",
          label: "This Summon regenerates 0.5% Health per second",
        },
        {
          id: "description-3",
          label: "+10 Energy reserved",
        },
      ],
    },
    {
      id: "mental-link",
      label: "Mental Link",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 15% increased Cooldown rate",
        },
        {
          id: "description-2",
          label: "+20 Energy reserved",
        },
        {
          id: "description-3",
          label: "+2 Energy Upkeep",
        },
      ],
    },
    {
      id: "empowered-assault",
      label: "Empowered Assault",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While this Summon is Empowered it has: 15% more damage | 5% increased Skill speed",
        },
      ],
    },
    {
      id: "short-restoration",
      label: "Short Restoration",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "35% less Restoration Time",
        },
        {
          id: "description-2",
          label: "This Summon has 10% less Maximum health",
        },
      ],
    },
    {
      id: "energized",
      label: "Energized",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While this Summon is Empowered it has: 20% increased Total domage",
        },
        {
          id: "description-2",
          label: "No Cooldown",
        },
        {
          id: "description-3",
          label: "-2s Empowered duration",
        },
        {
          id: "description-4",
          label: "+30 Energy cost",
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
          label: "The Summon's basic Attacks apply 1 Doom on hit",
        },
      ],
    },
    {
      id: "weaken",
      label: "Weaken",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "This Summon has a secondary 50% Weaken chance on hit",
        },
      ],
    },
    {
      id: "frenzied",
      label: "Frenzied",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "This Summon has 20% more damage",
        },
        {
          id: "description-2",
          label: "This Summon has 15% increased All speed",
        },
        {
          id: "description-3",
          label: "This Summon has 40% less Maximum health",
        },
      ],
    },
    {
      id: "power-transfer",
      label: "Power Transfer",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "On use reduce this Summon's cooldowns by 4s",
        },
        {
          id: "description-2",
          label: "+100 Energy cost",
        },
      ],
    },
    {
      id: "arcane-blast",
      label: "Arcane blast",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "This Summon can fire 3 projectiles towards its target each dealing 289 combined Vitality, Fire, Cold and Lightning damage in a 1.2m radius on impact",
        },
        {
          id: "description-2",
          label: "+20 Energy reserved",
        },
      ],
    },
    {
      id: "soul-blight",
      label: "Soul blight",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "This Summon can fire a projectile towards its target dealing 385 Vitality damage in a 5m radius on impact.",
        },
        {
          id: "description-2",
          label:
            "Enemies hit take 241 Poison damage every 0.5s for 3s with 50% Ailment chance",
        },
        {
          id: "description-3",
          label: "+20 Energy reserved",
        },
      ],
    },
    {
      id: "wraith-shell",
      label: "Wraith shell",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "This Summon can recover 2,505 Barrier for itself and you",
        },
        {
          id: "description-2",
          label: "This Summon has +1,670 Free Barrier",
        },
        {
          id: "description-3",
          label: "+20 Energy reserved",
        },
      ],
    },
  ],
};
