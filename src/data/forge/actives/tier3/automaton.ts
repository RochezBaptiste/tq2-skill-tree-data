import { Active } from "@/app/data/types";

export const automaton: Active = {
  id: "automaton",
  tier: 3,
  name: "Automaton",
  description: [
    "Summon Limit: 1",
    "Restoration Time: 30s",
    "This Summon has 50% more Activation Speed while Empowered",
    "Active Effect",
    "Empower this Summon for 5s",
    "Reduce the restoration timer by 6s",
    "Heal this Summon for 8% health",
  ],
  cost: {
    reserved: 60,
    divineCore: 3,
  },
  cooldown: 4000,
  castTime: 670,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Spell", "Area"],
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
            "When this Summon is reduced to below 20% Health, it explodes dealing 42% of its Health as Fire Damage in a 6m radius",
        },
      ],
    },
    {
      id: "autonomous-strength",
      label: "Autonomous Strength",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has 20% more Damage",
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
      label: "Enhanced Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has %1% more All Speed",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
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
          label: "This Summon has %1% more Maximum Health",
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "description-2",
          label: "This Summon regenerates %1% Health per second",
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
      id: "pierce-retaliation",
      label: "Pierce Retaliation",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1 Pierce Retaliation",
          baseValue: 38,
          perLevel: 39,
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
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
      id: "short-restoration",
      label: "Short Restoration",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "-35% less Restoration Time",
        },
        {
          id: "description-2",
          label: "This Summon has -10% less Maximum Health",
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
          label: "While this Summon is Empowered it has:",
        },
        {
          id: "description-2",
          label: "20% increased Total Damage",
        },
        {
          id: "description-3",
          label: "No Cooldown",
        },
        {
          id: "description-4",
          label: "-2s Empowered Duration",
        },
        {
          id: "description-5",
          label: "+30 Energy Cost",
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
          label: "This Summon has 20% more Damage",
        },
        {
          id: "description-2",
          label: "This Summon has 15% increased All Speed",
        },
        {
          id: "description-3",
          label: "This Summon has -40% less Maximum Health",
        },
      ],
    },
    {
      id: "fire-attachment",
      label: "Fire Attachment",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On Activation this Attachment deals %1 Fire Damage every 0s in a 60° cone in a 5m radius for 2s",
          baseValue: 269,
          perLevel: 192,
        },
        {
          id: "description-2",
          label:
            "Automatically activates every 5s (scales with Activation Speed)",
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 20,
        },
      ],
    },
    {
      id: "cold-attachment",
      label: "Cold Attachment",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On Activation this Attachment releases a Cold Nova dealing %1 Cold Damage with %2% chance to Freeze for 2s",
          baseValue: [769, 15],
          perLevel: [577, 10],
        },
        {
          id: "description-2",
          label:
            "Automatically activates every 6s (scales with Activation Speed)",
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 20,
        },
      ],
    },
    {
      id: "lightning-attachment",
      label: "Lightning Attachment",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On Activation this Attachment releases 3 waves of %1 to %2 erratic Lightning Projectiles dealing %3 Lightning Damage",
          baseValue: [6, 8, 769],
          perLevel: [2, 4, 461],
        },
        {
          id: "description-2",
          label:
            "Automatically activates every 6s (scales with Activation Speed)",
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 20,
        },
      ],
    },
    {
      id: "shield-attachment",
      label: "Shield Attachment",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On Activation this Summon and its allies in a 6m radius recover %1 Barrier and gain %1 Free Barrier for 6s",
          baseValue: 787,
          perLevel: 611,
        },
        {
          id: "description-2",
          label:
            "Automatically activates every 6s (scales with Activation Speed)",
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 20,
        },
      ],
    },
    {
      id: "enhanced-heal",
      label: "Enhanced Heal",
      maxRank: 2,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This Summon has %1% more Maximum Health",
          baseValue: 50,
          perLevel: 50,
        },
        {
          id: "description-2",
          label: "This Summon regenerates %1% Health per second",
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
      id: "elemental-infusion-charged",
      label: "Elemental infusion charge",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "When you consume an Elemental Infusion with another skill:",
        },
        {
          id: "description-2",
          label:
            "Reduce the time until the next activation of the Elemental Attachment of the same type by 25% and this Summon gains +115 Weapon Damage of the same Elemental type for 5s",
        },
      ],
    },
  ],
};
