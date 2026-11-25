import { Active } from "@/app/data/types";

export const chains: Active = {
  id: "chains",
  tier: 2,
  name: "Chains",
  description: [
    "Throw chains in target direction.Deals 461 Pierce Damage and pulls enemies towards you",
    "Enemies hit are Stunned for 0.4s",
    "8m radius, 45 degree angle.",
    "Chain also picks up Divine cores and gold in the area",
  ],
  cost: {},
  cooldown: 10000,
  castTime: 500,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Forge", "Active", "Spell", "Area"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more damage",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enhanced-ailments",
      label: "Enhanced Ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% Ailment Chance",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "long-shot",
      label: "Long Shot",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "Deals up to %1% more Damage based on distance. Maximum Damage at 8m.",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "elemental-infusion",
      label: "Elemental Infusion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Consumes Elemental Infusion",
        },
        {
          id: "description-2",
          label: "+%1 Damage of the consumed type",
          baseValue: 69,
          perLevel: 69,
        },
        {
          id: "description-3",
          label: "%1% of Damage converted to the consumed type",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+%1 Cooldown Charges.",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "sunder",
      label: "Sunder",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Physical Damage",
          baseValue: 10,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "On hit, reduces enemy Armor by %1 for 5s (non-stacking)",
          baseValue: 173,
          perLevel: 173,
        },
      ],
    },
    {
      id: "shaken-on-hit",
      label: "Shaken on Hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "On hit, enemies have 50% less Attack and Cast Speed for 3s",
        },
      ],
    },
    {
      id: "additional-chains",
      label: "Additional Chains",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Throw additional chains for a %1° wider Angle.",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "whirling-chains",
      label: "Whirling Chains",
      maxRank: 1,
      cost: 3,
      requires: [{ id: "additional-chains", label: "Additional Chains" }],
      perks: [
        {
          id: "description",
          label: "Chains are thrown in all directions. 30% less radius.",
        },
      ],
    },
    {
      id: "free-chains",
      label: "Free Chains",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Chains can be used while Channeling",
        },
      ],
    },
    {
      id: "divine-core-generation",
      label: "Divine Core Generation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Enemies drop 2 Divine Cores on Hit",
        },
      ],
    },
  ],
};
