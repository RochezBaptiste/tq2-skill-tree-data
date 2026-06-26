import { Active } from "@/app/data/types";

export const stormNimbus: Active = {
  id: "storm-nimbus",
  tier: 2,
  name: "Storm Nimbus",
  description: [
    "Emit an Aura with a 18m radius.",
    "Aura grants you and allies 20% increased Cold Damage.",
    "Aura grants you and allies 20% increased Lightning Damage.",
  ],
  cost: {
    reserved: 40,
  },
  cooldown: 0,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Storm", "Sustained", "Aura", "Buff"],
  modifiers: [
    {
      id: "inspiration",
      label: "Inspiration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "energy-regen",
          label: "Aura grants you and allies: +%1 Energy regeneration",
          baseValue: 2,
          perLevel: 2,
        },
        {
          id: "energy-reserved",
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
          label: "-%1 Energy reserved",
          baseValue: 20,
          perLevel: 20,
        },
      ],
    },
    {
      id: "cold-imbuement",
      label: "Cold Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "cold-conversion",
          label: "Aura grants you an allies +%1 Cold Weapon Damage.",
          baseValue: 15,
          perLevel: 8,
        },
        {
          id: "cold-damage",
          label: "Grants you %1% Weapon Damage converted to Cold Damage.",
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
      id: "lightning-imbuement",
      label: "Lightning Imbuement",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "lightning-conversion",
          label: "Aura grants you an allies +%1 Lightning Weapon Damage.",
          baseValue: 15,
          perLevel: 8,
        },
        {
          id: "lightning-damage",
          label: "Grants you %1% Weapon Damage converted to Lightning Damage.",
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
      id: "lightning-resistance",
      label: "Lightning Resistance",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "lightning-res-stats",
          label:
            "Aura grants you and allies +%1% Lightning Resistance and +%2% Max Lightning Resistance",
          baseValue: [15, 1],
          perLevel: [15, 1],
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
      id: "cold-resistance",
      label: "Cold Resistance",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "cold-res-stats",
          label:
            "Aura grants you and allies +%1% Cold Resistance and +%2% Max Cold Resistance",
          baseValue: [15, 1],
          perLevel: [15, 1],
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
      id: "enhances-ailments",
      label: "Enhanced ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "ailment-chance",
          label: "Aura grants you an allies %1% increased Ailment chance",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "ailment-power",
          label: "Aura grants you an allies %1% increased Ailment power",
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
      id: "thunderstorm",
      label: "Thunderstorm",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "lightning-strike-damage",
          label: "Grants you %1% increased Lightning Strike Damage.",
          baseValue: 20,
          perLevel: 20,
        },
        {
          id: "lightning-strike-proc",
          label:
            "Every 2s, you have %1% chance to strike random enemy in aura.",
          baseValue: 15,
          perLevel: 15,
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "frost-armor",
      label: "Frost Armor",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "retaliation-freeze",
          label:
            "When an ennemy hits you within a 3m range, deal 161 Cold Damage to it with a %1% Ailment chance and %2% chance to Freeze for 1s",
          baseValue: [20, 10],
          perLevel: [10, 5],
        },
        {
          id: "cost",
          label: "+%1 Energy reserved",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "storm-enhancement",
      label: "Storm Enhancement",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "aura-damage",
          label:
            "Aura grants an additional %1% increased Cold and Lightning Damage",
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
