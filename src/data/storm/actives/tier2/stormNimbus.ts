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
          label: "Aura grants you and allies: +2 Energy regeneration",
        },
        {
          id: "energy-reserved",
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
          label: "-20 Energy reserved",
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
          label: "Aura grants you an allies +11 Cold Weapon Damage.",
        },
        {
          id: "cold-damage",
          label: "Grants you 30% Weapon Damage converted to Cold Damage.",
        },
        {
          id: "cost",
          label: "+30 Energy reserved",
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
          label: "Aura grants you an allies +11 Lightning Weapon Damage.",
        },
        {
          id: "lightning-damage",
          label: "Grants you 30% Weapon Damage converted to Lightning Damage.",
        },
        {
          id: "cost",
          label: "+30 Energy reserved",
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
            "Aura grants you and allies +15% Lightning Resistance and +1% Max Lightning Resistance",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
            "Aura grants you and allies +15% Cold Resistance and +1% Max Cold Resistance",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          label: "Aura grants you an allies 10% increased Ailment chance",
        },
        {
          id: "ailment-power",
          label: "Aura grants you an allies 5% increased Ailment power",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
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
          id: "lightning-strike-proc",
          label:
            "Grants you 20% increased Lightning Strike Damage. Every 2s, you have 15% chance to strike random enemy in aura.",
        },
        {
          id: "cost",
          label: "+15 Energy reserved",
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
            "When an ennemy hits you within a 3m range, deal 109 Cold Damage to it with a 20% Ailment chance and 10% chance to Freeze for 1s",
        },
        {
          id: "cost",
          label: "+15 Energy reserved",
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
            "Aura grants an additional 8% increased Cold and Lightning Damage",
        },
        {
          id: "cost",
          label: "+10 Energy reserved",
        },
      ],
    },
  ],
};
