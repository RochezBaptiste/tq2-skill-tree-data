import { Active } from "@/app/data/types";

export const wisp: Active = {
  id: "wisp",
  tier: 2,
  name: "Wisp",
  description: [
    "Sustained Effect:",
    "Automatically summons and restores Wisps",
    "-",
    "Active Effects:",
    "Empower your Wisps for 5s",
    "Reduce the restoration timer by 4s",
    "Heal this Summon for 5% health",
  ],
  cost: {
    reserved: 60,
  },
  cooldown: 4000,
  castTime: 700,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Storm", "Active", "Spell", "Sustained", "Lesser Summon"],
  modifiers: [
    {
      id: "string-awakening",
      label: "Strong awakening",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "d",
          label:
            "After being Summoned, this Summon is Empowered for 30% of its Lifetime up to 6s",
        },
      ],
    },
    {
      id: "detonation",
      label: "Detonation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "2",
          label:
            "When this Summon is reduced to below 20% Health, it explodes dealing 42% of its Health as Lightning",
        },
        {
          id: "1",
          label: "Damage in a 6m radius",
        },
      ],
    },
    {
      id: "autonomous-strength",
      label: "Autonomous strength",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "1",
          label: "This Summon has 20% more Damage",
        },
        {
          id: "2",
          label: "Does not apply Empowered",
        },
        {
          id: "3",
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
          id: "1",
          label: "This Summon has %1% more Damage",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "2",
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
          id: "1",
          label: "This Summon has %1% more All Speed",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "2",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "empowered-assault",
      label: "Empowered assault",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "1",
          label: "While this Summon is Empowered it has:",
        },
        {
          id: "2",
          label: "%1% more Damage",
          baseValue: 15,
          perLevel: 15,
        },
        {
          id: "3",
          label: "%1% increased Skill Speed",
          baseValue: 5,
          perLevel: 5,
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
          id: "2",
          label: "-35% less Restoration Time",
        },
        {
          id: "3",
          label: "This Summon has -10% less Maximum Health",
        },
      ],
    },
    {
      id: "Energized-assault",
      label: "Energized",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "2",
          label: "While this Summon is Empowered it has:",
        },
        {
          id: "3",
          label: "20% increased Total Damage",
        },
        {
          id: "4",
          label: "No Cooldown",
        },
        {
          id: "5",
          label: "-2s Empowered Duration",
        },
        {
          id: "6",
          label: "+30 Energy Cost",
        },
      ],
    },
    {
      id: "summon-limit",
      label: "Summon limit",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "2",
          label: "+%1 Summon Limit",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "wisp-blast",
      label: "Wisp blast",
      maxRank: 1,
      cost: 2,
      perks: [],
    },
    {
      id: "fulminate",
      label: "Fulminate",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "intagible",
      label: "Intangible",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "2",
          label: "Your Wisps are permanently Intangible",
        },
        {
          id: "3",
          label: "This Summon has -15% less Damage",
        },
        {
          id: "4",
          label: "+20 Energy reserved",
        },
      ],
    },
    {
      id: "lightning-strike",
      label: "Lightning strike",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "2",
          label:
            "When your Wisps use their Basic Attack, they have a 15% chance to spend 80 Energy:",
        },
        {
          id: "3",
          label: "You cause a Lightning Strike on the target",
        },
        {
          id: "4",
          label: "+40 Energy reserved",
        },
      ],
    },
  ],
};
