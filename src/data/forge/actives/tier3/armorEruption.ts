import { Active } from "@/app/data/types";

export const armorEruption: Active = {
  id: "armor-eruption",
  tier: 3,
  name: "Armor eruption",
  description: [
    "Your armor explode dealing 269 Strike damage in a 3m radius",
    "You shoot your armor as metal shards in all direction dealing 192 Pierce damage each.",
    "Skill Damage scales with Armor",
  ],
  cost: {},
  cooldown: 6000,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Forge", "Active", "Main", "Area", "Projectile"],
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
          id: "description",
          label: "%1% more Damage",
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
          label: "+%1% Ailment Chance.",
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
          baseValue: 40,
          perLevel: 40,
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
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% increased Area Size",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "divine-core-collector",
      label: "Divine Core Collector",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Generates 4 piles of Divine Cores each containing %1 Divine Cores. For every Divine Core you collect, reduce Cooldown by 0.3s.",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "+2s Cooldown",
        },
      ],
    },
    {
      id: "cooldown-refresh",
      label: "Cooldown Refresh",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "When you hit an enemy with another active skill, reduce Cooldown by 0.3s",
        },
      ],
    },
    {
      id: "returning-projectiles",
      label: "Returning Projectiles",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "The projectiles return to you after reaching maximum range dealing 30% Damage",
        },
      ],
    },
  ],
};
