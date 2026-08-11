import { Active } from "@/app/data/types";

export const reap: Active = {
  id: "reap",
  tier: 1,
  name: "Reap",
  description: [
    "Deal 100% Weapon Damage in a 120° cone in a 4m radius.",
    "60% of Damage converted to Vitality Damage.",
    "10% Lifesteal.",
  ],
  cost: {
    base: 40,
  },
  cooldown: 0,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Spirit", "Active", "Main", "Spell", "Area"],
  modifiers: [
    {
      id: "vulnerable-on-hit",
      label: "Vulnerable on Hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Applies Vulnerable on hit for 4s",
        },
      ],
    },
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "10% more damage",
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
          id: "damage",
          label: "+15% Ailment chance",
        },
      ],
    },
    {
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "+4% Critical hit chance",
        },
      ],
    },
    {
      id: "execute",
      label: "Execute",
      maxRank: 1,
      cost: 3,
      incompatibles: [
        {
          id: "mortality",
          label: "Mortality",
        },
      ],
      perks: [
        {
          id: "execute",
          label: "Can execute",
        },
        {
          id: "damage",
          label: "30% less damage",
        },
      ],
    },
    {
      id: "mortality",
      label: "Mortality",
      maxRank: 3,
      cost: 1,
      incompatibles: [
        {
          id: "execute",
          label: "Execute",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Applies Mortality equal to 10% of Damage this skill deals",
        },
      ],
    },
    {
      id: "carnage-on-kill",
      label: "Carnage on Kill",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On kill 15% chance to gain 1 Carnage, +10% chance if it was an Execution",
        },
      ],
    },
    {
      id: "doom-on-hit",
      label: "Doom on Hit",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "On hit Applies 1 Doom once per enemy, Applies 1 Doom to enemies without Doom",
        },
      ],
    },
    {
      id: "consume-doom",
      label: "Consume Doom",
      maxRank: 3,
      cost: 1,
      incompatibles: [
        {
          id: "doom-on-hit",
          label: "Doom on hit",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Consumes Doom on hit: 2% more Damage per Doom consumed",
        },
      ],
    },
    {
      id: "doom-explosion",
      label: "Doom Explosion",
      maxRank: 2,
      cost: 2,
      incompatibles: [
        {
          id: "consume-doom",
          label: "Consume doom",
        },
      ],
      perks: [
        {
          id: "description",
          label:
            "Consumes Doom on hit: Deals 64 Vitality Damage per Doom consumed in a 4m radius",
        },
      ],
    },
    {
      id: "exhaust",
      label: "Exhaust",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Tuern into an Exhaust skill",
        },
        {
          id: "description-2",
          label: "140% more damage",
        },
        {
          id: "description-3",
          label: "140% more Ailment chance",
        },
        {
          id: "description-4",
          label: "+30 Energy cost",
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% increased Area size",
        },
      ],
    },
    {
      id: "soul-harvest",
      label: "Soul harvest",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On kill progress Shade generation by 1s. When you deal damage to a Boss, progress Shade generation by 0.4s, only once every 1s",
        },
      ],
    },
    {
      id: "sacrifice",
      label: "Sacrifice",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "40% more damage",
        },
        {
          id: "description-2",
          label: "Costs +10% Current health",
        },
      ],
    },
    {
      id: "health-cost",
      label: "Health cost",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "exhaust",
          label: "Exhaust",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Instead of Energy costs 2% health per 10 Energy (8% total)",
        },
      ],
    },
    {
      id: "weapon-attack",
      label: "Weapon attack",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Instead is an Attack",
        },
        {
          id: "description-2",
          label: "Incompatoble with Bows",
        },
      ],
    },
  ],
};
