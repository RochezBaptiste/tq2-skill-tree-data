import { Active } from "@/app/data/types";

export const primaryAttack: Active = {
  id: "primary-attack",
  tier: 0,
  name: "Primary attack",
  cost: {
    base: 5,
  },
  cooldown: 0,
  castTime: 980,
  critChance: 5,
  ailmentChance: 5,
  description: [
    "Attack with you weapon dealing 100% Weapon damage.",
    "On use gain Overwhelm while you have an Overwhelm skill equipped",
  ],
  tags: ["Active", "Basic", "Weapon attack"],
  modifiers: [
    {
      id: "tailwind",
      label: "Tailwind",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+1 Projectile penetration",
        },
        {
          id: "description-2",
          label: "15% more projectile speed",
        },
        {
          id: "description-3",
          label: "+1 energy cost",
        },
        {
          id: "description-4",
          label: "Ranged only",
        },
      ],
    },
    {
      id: "volley",
      label: "Volley",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "You have a 40% chance to shoot +2 additional projectiles in a cone.",
        },
        {
          id: "description-2",
          label:
            "Additional projectiles deal 70% less damage and have 70% less Ailment chance",
        },
        {
          id: "description-3",
          label: "+1 Energy cost",
        },
        {
          id: "description-4",
          label: "Ranged only",
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+20% added base Ailment chance",
        },
        {
          id: "description-2",
          label: "100% more Ailment chance",
        },
        {
          id: "description-3",
          label: "+1 Energy cost",
        },
      ],
    },
    {
      id: "punish",
      label: "Punish",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% more damage against Channeling or Incapacited enemies",
        },
      ],
    },
    {
      id: "vitality-damage",
      label: "Vitality Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Deals 10% Weapon damage as extra Vitality Damage",
        },
      ],
    },
    {
      id: "indomitable",
      label: "Indomitable",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On ability start become Indomitable for 1.0s",
        },
        {
          id: "description-2",
          label:
            "Indomitable grants +336 Armor and when an enemy hits you within a 3m range, deal 50% Weapon damage to it.",
        },
        {
          id: "description-3",
          label: "+1 Energy cost",
        },
        {
          id: "description-4",
          label: "Melee only",
        },
      ],
    },
    {
      id: "hamstring",
      label: "Hamstring",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On hit slows enemies by 30% for 1.0s",
        },
        {
          id: "description-2",
          label: "+1 Energy cost",
        },
        {
          id: "description-3",
          label: "Melee only",
        },
      ],
    },
    {
      id: "shield-attack",
      label: "Shield Attack",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Deals 192-289 Strike damage instead (scales with armor)",
        },
        {
          id: "description-2",
          label: "Requires Shield",
        },
      ],
    },
    {
      id: "retaliating-attack",
      label: "Retaliating Attack",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Deals 8% Retaliation damage as extra damage",
        },
        {
          id: "description-2",
          label: "Melee only",
        },
      ],
    },
    {
      id: "gain-flow",
      label: "Gain Flow",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On hit 20% chance to gain Flow. Cannot roll for Flow more than once every 0.5s",
        },
      ],
    },

    //  Masteries
    {
      id: "fire-explosion",
      label: "Fire explosion",
      maxRank: 3,
      cost: 1,
      perks: [],
      masteries: ["earth", "rogue"],
    },
    {
      id: "fragmentation",
      label: "Fragmentation",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "100% Damage converted to Pierce damage.",
        },
        {
          id: "description-2",
          label:
            "On hit 25% chance to deal 32 to 96 Pierce damage in a 1.8m radius with a 30% Ailment chance",
        },
        {
          id: "description-3",
          label: "+2 energy cost",
        },
      ],
      masteries: ["rogue, spirit"],
    },
    {
      id: "toxicity",
      label: "Toxicity",
      maxRank: 5,
      cost: 1,
      perks: [],
      masteries: ["rogue"],
    },
    {
      id: "heavy-impact",
      label: "Heavy impact",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "100% Damage converted to Strike damage",
        },
        {
          id: "description-2",
          label: "On hit 20% chance to deal 128 Strike damage in a 2.0m radius",
        },
        {
          id: "description-3",
          label: "+1 Energy cost",
        },
      ],
      masteries: ["earth", "warfare"],
    },
    {
      id: "onslaught",
      label: "Onslaught",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Gain rage on first enemy hit",
        },
        {
          id: "description-2",
          label: "1% more Attack speed per Rage",
        },
        {
          id: "description-3",
          label: "+1 Energy cost",
        },
      ],
      masteries: ["storm", "warfare"],
    },
    {
      id: "lightning-strike",
      label: "Lightning Strike",
      maxRank: 3,
      cost: 1,
      perks: [],
      masteries: ["storm"],
    },
    {
      id: "frost-explosion",
      label: "Frost Explosion",
      maxRank: 3,
      cost: 1,
      perks: [],
      masteries: ["storm"],
    },
  ],
};
