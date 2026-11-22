import { Active } from "@/app/data/types";

export const earthEnchantment: Active = {
  id: "earth-enchantment",
  tier: 2,
  name: "Earth Enchantment",
  cost: {
    reserved: 40,
  },
  cooldown: 0,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Earth", "Sustained", "Aura", "Buff"],
  description: [
    "Emit an Aura with a 18m radius.",
    "Aura grants you and allies 20% increased Fire Damage",
    "Aura grants you and allies 20% increased Physical Damage",
  ],
  modifiers: [
    {
      id: "fire-resistance",
      label: "Fire resistance",
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
          label: "-%1 energy reserved",
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
      label: "Fire imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +%1 Fire Weapon Damage",
          baseValue: 9,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "Grants you %1% Weapon Damage converted to Fire Damage",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "description-3",
          label: "+%1 Energy reserved",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "strike",
      label: "Strike Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Aura grants you and allies +18 Strike Weapon Damage",
          baseValue: 18,
          perLevel: 9,
        },
        {
          id: "description-2",
          label: "Grants you %1% Weapon Damage converted to Strike Damage",
          baseValue: 30,
          perLevel: 30,
        },
        {
          id: "description-3",
          label: "+30 Energy reserved",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "armor",
      label: "Enhanced Armor",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "armor",
          label: "Aura grants you and allies +%1 Armor and %2% increased Armor",
          baseValue: [581, 5],
          perLevel: [97, 5],
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
      id: "shield",
      label: "Flame Shield",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When you are hit by an enemy within 3m deals 77 Fire Damage with 50% Ailment Chance.",
          baseValue: [77, 50],
          perLevel: [0, 50],
        },
        {
          id: "description-2",
          label: "+%1 Energy reserved",
          baseValue: 15,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enchancement",
      label: "Earth Enchancement",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "physical",
          label:
            "Aura grants an additional %1% increased Fire and Physical Damage",
          baseValue: 8,
          perLevel: 8,
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
