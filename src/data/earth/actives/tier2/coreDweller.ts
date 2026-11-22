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
          id: "description",
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
          id: "descritpion",
          label: "This Summon has 20% more Damage",
        },
        {
          id: "description-2",
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
          id: "description",
          label: "This Summon has %1% more Damage",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved",
          baseValue: 5,
          perLevel: 5,
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
          label: "This Summon has %1% more All speed",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "damage",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "This Summon has %1% more Maximum health",
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "description-2",
          label: "This Summon regenerates %1% health per second",
          baseValue: 0.5,
          perLevel: 0.5,
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "While this Summon is Empowered it has:",
        },
        {
          id: "description-2",
          label: "%1% more Damage",
          baseValue: 15,
          perLevel: 15,
        },
        {
          id: "description-3",
          label: "%1% increased Skill Speed",
          baseValue: 5,
          perLevel: 5,
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
          id: "description",
          label: "While Channeled this Summon has:",
        },
        {
          id: "description-2",
          label: "%1% more Damage",
          baseValue: 30,
          perLevel: 20,
        },
        {
          id: "description-3",
          label: "%1% increased Skill Speed",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "Active Effect:",
        },
        {
          id: "description-2",
          label: "Heal this Summon for +%1% Health per second",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "description-3",
          label: "While Channeled this Summon takes %1% less Damage",
          baseValue: 30,
          perLevel: 30,
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
          id: "description",
          label: "35% less Restoration Time",
        },
        {
          id: "description-2",
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
          id: "description",
          label: "This summon has 20% more Damage",
        },
        {
          id: "description-2",
          label: "This Summon has 15% increased All Speed",
        },
        {
          id: "description-3",
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
          id: "description",
          label:
            "On every third attack the Core Dweller now slams the ground dealing 200% of its Weapon Damage",
        },
      ],
    },
  ],
};
