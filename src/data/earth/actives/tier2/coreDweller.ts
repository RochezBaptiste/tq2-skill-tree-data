import { Active } from "@/app/data/types";

export const coredweller: Active = {
  id: "core-dweller",
  tier: 2,
  name: "Core Dweller",
  cost: {
    reserved: 60,
    reccuring: 40,
  },
  cooldown: 0,
  castTime: 200,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Earth", "Active", "Sustained", "Greater Summon", "Spell", "Channel"],
  description: [
    "Sustained Effect",
    "Automatically summons and restores Core Dweller.",
    "-",
    "Active Effet:",
    "Empower your Core Dweller while Channeling and for as long as you Channeled up to 2s, heal this Summon for 8% Health per second. 300% more Restoration Rate",
  ],
  modifiers: [
    {
      id: "detonation",
      label: "Detonation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "base",
          label:
            "When this Summon is reduced to below 20% Health, it explodes dealing 32% of its Health as Fire Damage in a 6m radius",
        },
      ],
    },
    {
      id: "auto",
      label: "Autonomous Strength",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "This Summon has 20% more Damage",
        },
        {
          id: "reserve",
          label: "+30 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-damage",
      label: "Enhanced damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "This Summon has 10% more Damage",
        },
        {
          id: "energy",
          label: "+5 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-speed",
      label: "Enhanced speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "speed",
          label: "This Summon has 10% more All speed",
        },
        {
          id: "damage",
          label: "+10 Energy reserved",
        },
      ],
    },
    {
      id: "enhanced-health",
      label: "Enhanced health",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "maximum",
          label: "This Summon has 50% more Maximum health",
        },
        {
          id: "regeneration",
          label: "This Summon regenerates 0.5% health per second",
        },
        {
          id: "energy",
          label: "+%10Energy reserved",
        },
      ],
    },
    {
      id: "empower-assault",
      label: "Empower Assault",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "empower",
          label:
            "While this Summon is empowered it has 15% more damage, 5% increased Skill Speed",
        },
      ],
    },
    {
      id: "channel",
      label: "Augmenting channel",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "channeled",
          label:
            "While Channeled this Summon has 30% more damage, 10% increased Skill Speed",
        },
      ],
    },
    {
      id: "protective",
      label: "Protective channel",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "channel",
          label:
            "active Effect: Heal this Summon for +10% Health per second. While Channeled thissummon takes 30% less Damage",
        },
      ],
    },
    {
      id: "short-restoration",
      label: "Short restoration",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "time",
          label: "35% less Restoration Time",
        },
        {
          id: "summon",
          label: "This Summon has 10% less maximum health",
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
          id: "damage",
          label: "This summon has 20% more Damage",
        },
        {
          id: "speed",
          label: "This Summon has 15% increased All Speed",
        },
        {
          id: "health",
          label: "This Summon has 40% less maximum health",
        },
      ],
    },
    {
      id: "slam",
      label: "Slam",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage",
          label:
            "On every third attack the Core Dweller now slams the ground dealing 200% of its Weapon Damage",
        },
      ],
    },
  ],
};
