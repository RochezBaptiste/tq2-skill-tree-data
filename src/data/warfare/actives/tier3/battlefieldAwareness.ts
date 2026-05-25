import { Active } from "@/app/data/types";

export const battlefieldAwareness: Active = {
  id: "battlefield-awareness",
  tier: 3,
  name: "Battlefield Awareness",
  description: [
    "Emit an Aura with a 18m radius.",
    "Aura grants you and allies +419 Armor.",
  ],
  cost: {
    reserved: 40,
  },
  cooldown: 0,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Warfare", "Sustained", "Aura", "Buff"],
  modifiers: [
    {
      id: "enhanced-regeneration",
      label: "Enhanced Regeneration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "health-regen",
          label: "+%1 Health Regeneration, %2% increased Health Regeneration",
          baseValue: [5, 5],
          perLevel: [5, 5],
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enhanced-glancing-hits",
      label: "Enhanced Glancing Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "glancing-hit",
          label: "+%1% Glancing Hit Chance",
          baseValue: 5,
          perLevel: 5,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "pierce-retaliation",
      label: "Pierce Retaliation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "retaliation",
          label: "+%1 Pierce Retaliation",
          baseValue: 32,
          perLevel: 32,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enhanced-resistances",
      label: "Enhanced Resistances",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "elemental-resistances",
          label: "+%1% Fire, Cold, Lightning, and Poison Resistance",
          baseValue: 5,
          perLevel: 5,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "vitality-drain",
      label: "Vitality Drain",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "vitality-lifesteal",
          label: "+%1 Weapon Vitality Damage, %2% increased Lifesteal",
          baseValue: [8, 10],
          perLevel: [8, 10],
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "barrier-preservation",
      label: "Barrier Preservation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "barrier-bonus",
          label: "+%1 Free Barrier, +%2 Barrier Decay Threshold",
          baseValue: [40, 40],
          perLevel: [40, 40],
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "inspiration",
      label: "Inspiration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "energy-regen",
          label: "+%1 Energy Regeneration",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "conservation",
      label: "Conservation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "reduced-reservation",
          label: "-%1 Energy Reserved",
          baseValue: 20,
          perLevel: 20,
        },
      ],
    },
    {
      id: "strike-imbuement",
      label: "Strike imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "physical-damage",
          label: "Aura grants you and allies +%1 increased Physical damage",
          baseValue: 15,
          perLevel: 8,
        },
        {
          id: "damage-convertion",
          label: "Grants you %1%% Weapon Damage converted to Physical Damage.",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "enhanced-armor",
      label: "Enhanced armor",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "",
          label:
            "Aura grants you and allies +%1 armor and %2% additional armor",
          baseValue: [503, 5],
          perLevel: [85, 5],
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
  ],
};
