import { Active } from "@/app/data/types";

export const battlefieldAwareness: Active = {
  id: "battlefield-awareness",
  tier: 3,
  name: "Battlefield Awareness",
  description: [
    "Emit an Aura with a Xm radius.",
    "Aura grants you and allies +305 Armor.",
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
          label: "+2 Health Regeneration, 5% increased Health Regeneration",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "+5% Glancing Hit Chance",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "+4 Pierce Retaliation",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "+5% Fire, Cold, Lightning, and Poison Resistance",
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
          label: "+2 Weapon Vitality Damage, 10% increased Lifesteal",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "+15 Free Barrier, +15 Barrier Decay Threshold",
        },
        {
          id: "cost",
          label: "+10 Energy Reserved",
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
          label: "+2 Energy Regeneration",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "-20 Energy Reserved",
        },
      ],
    },
    {
      id: "strike-imbuement",
      label: "Strike imbuement",
      maxRank: 2,
      cost: 2,
      perks: [],
    },
    {
      id: "enhanced-armor",
      label: "Enhanced armor",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
  ],
};
