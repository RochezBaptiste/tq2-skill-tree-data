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
          id: "damage",
          label:
            "Aura grants you and allies +15% Fire resistance and +1% Max Fire resistance",
        },
        {
          id: "energy",
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
          id: "reserve",
          label: "-20 energy reserved",
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
          id: "damage",
          label: "Aura grants you and allies +11 Fire Weapon Damage",
        },
        {
          id: "converted",
          label: "Grants you 30% Weapon Damage converted to Fire Damage",
        },
        {
          id: "cost",
          label: "+30 Energy reserved",
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
          id: "damage",
          label: "Aura grants you and allies +11 Strike Weapon Damage",
        },
        {
          id: "converted",
          label: "Grants you 30% Weapon Damage converted to Strike Damage",
        },
        {
          id: "cost",
          label: "+30 Energy reserved",
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
          label: "Aura grants you and allies +366 Armor and 5% increased Armor",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          id: "ailment",
          label: "Aura grants you and allies +33 Armor and 50% increased Armor",
        },
        {
          id: "cost",
          label: "+15 Energy reserved",
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
            "Aura grants an additional 8% increased Fire and Physical Damage",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
        },
      ],
    },
  ],
};
