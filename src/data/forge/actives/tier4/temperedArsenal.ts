import { Active } from "@/app/data/types";

export const temperedArsenal: Active = {
  id: "tempered-arsenal",
  tier: 4,
  name: "Tempered arsenal",
  description: [
    "Emit an Aura with a 18m radius",
    "Aura grants you and allies +194 Armor",
    "Aura grants you and allies 8% increased Base Weapon Damage",
  ],
  cost: {
    reserved: 40,
  },
  cooldown: 0,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Sustained", "Aura", "Buff"],
  modifiers: [
    {
      id: "enhanced-glancing-hits",
      label: "Enhanced Glancing Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies:",
        },
        {
          id: "description-2",
          label: "%1% Glancing Hit Chance",
          baseValue: 5,
          perLevel: 5,
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
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies:",
        },
        {
          id: "description-2",
          label: "+%1 Pierce Retaliation",
          baseValue: 38,
          perLevel: 38,
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
      id: "fire-resistance",
      label: "Fire Resistance",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Aura grants you and allies +%1% Fire Resistance and +%1% Max Fire Resistance.",
          baseValue: [15, 1],
          perLevel: [15, 1],
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
      id: "conservation",
      label: "Conservation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "-%1 Energy reserved",
          baseValue: 20,
          perLevel: 20,
        },
      ],
    },
    {
      id: "health-reservation",
      label: "Health reservation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Instead of Energy reserves 3% Health per 10 Energy Reservation (12% total)",
        },
      ],
    },
    {
      id: "fire-imbuement",
      label: "Fire Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +%1 Fire Weapon Damage.",
          baseValue: 18,
          perLevel: 9,
        },
        {
          id: "description-2",
          label: "Grants you %1% Weapon Damage converted to Fire Damage.",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved.",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "strike-imbuement",
      label: "Strike Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +%1 Strike Weapon Damage.",
          baseValue: 18,
          perLevel: 9,
        },
        {
          id: "description-2",
          label: "Grants you %1% Weapon Damage converted to Strike Damage.",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved.",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "pierce-imbuement",
      label: "Pierce Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +%1 Pierce Weapon Damage.",
          baseValue: 18,
          perLevel: 9,
        },
        {
          id: "description-2",
          label: "Grants you %1% Weapon Damage converted to Pierce Damage.",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved.",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "enhanced-armor",
      label: "Enhanced Armor",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +%1 Armor and %1% increased Armor",
          baseValue: [581, 5],
          perLevel: [97, 5],
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved.",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
    {
      id: "device-double-activation",
      label: "Device Double Activation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Aura grants allied Devices +%1% Double Activation Chance",
          baseValue: 6,
          perLevel: 12,
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved.",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
  ],
};
