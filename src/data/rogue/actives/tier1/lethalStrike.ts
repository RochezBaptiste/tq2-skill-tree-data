import { Active } from "@/app/data/types";

export const lethalStrike: Active = {
  id: "lethal-strike",
  tier: 1,
  name: "Lethal Strike",
  description: [
    "Deals 296% Weapon Damage to a single target.",
    "Consumes Flow to deal 25% more Damage.",
    "If this skill consumes Flow or the target is killed, its cooldown is refreshed.",
  ],
  cost: {
    base: 30,
  },
  cooldown: 5000,
  castTime: 600,
  critChance: 0,
  ailmentChance: 5,
  tags: ["Rogue", "Active", "Weapon attack", "Exhaust"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "10% more Damage",
        },
      ],
    },
    {
      id: "enhanced-critical-hit",
      label: "Enhanced Critical Hit",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-chance",
          label: "50% more Critical Hit Chance",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "rupture",
      label: "Rupture",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "rupture-chance",
          label: "On hit, 20% Rupture Chance",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "consume-doom",
      label: "Consume doom",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "doom-damage",
          label:
            "Consumes Doom on target to deal 2% more Damage per Doom consumed",
        },
        {
          id: "doom-spread",
          label: "On kill applies 1 Doom to enemies in a 2m radius",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "mark-focus",
      label: "Mark Focus",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "mark-damage",
          label: "15% more Damage against your Mark",
        },
        {
          id: "cooldown-recovery",
          label: "When hitting your Mark, recover 20% of its Cooldown",
        },
      ],
    },
    {
      id: "gain-flow",
      label: "Gain flow",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "mark-focus", label: "Mark Focus" }],
      perks: [
        {
          id: "flow-mechanic",
          label:
            "Does not consume Flow for a bonus; gain Flow if you kill a marked enemy",
        },
      ],
    },
    {
      id: "poison-explosion",
      label: "Poison Explosion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "poison-damage",
          label:
            "On hit deals 17 Poison Damage + 4 per Plagued stack on target",
        },
        {
          id: "radius",
          label: "Deals damage in a 2m radius",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "shadow-strike",
      label: "Shadow Strike",
      maxRank: 1,
      cost: 2,
      incompatibles: [{ id: "shadow-dagger", label: "Shadow Dagger" }],
      perks: [
        {
          id: "teleport-attack",
          label:
            "Teleport to target before attack (8m Range), +20 Energy cost, +2s Cooldown",
        },
      ],
    },
    {
      id: "shadow-dagger",
      label: "Shadow Dagger",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "shadow-strike", label: "Shadow Strike" }],
      perks: [
        {
          id: "ranged-conversion",
          label: "Turns into a ranged single target spell",
        },
      ],
    },
  ],
};
