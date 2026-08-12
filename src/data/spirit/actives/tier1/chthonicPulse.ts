import { Active } from "@/app/data/types";

export const chthonicPulse: Active = {
  id: "chthonic-pulse",
  tier: 1,
  name: "Chthonic Pulse",
  description: [
    "Fires a slow-moving projectile dealing 378-567 Vitality Damage.",
    "Projectile Penetration: Infinite.",
    "Target Penetration Effectiveness: 60%.",
  ],
  cost: {
    base: 40,
  },
  cooldown: 0,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Spirit", "Active", "Main", "Spell", "Projectile", "Vitality"],
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
          id: "description",
          label: "+15% Ailment Chance",
        },
      ],
    },
    {
      id: "mortality",
      label: "Mortality",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Applies Mortality equal to 10% of damage this skill deals",
        },
      ],
    },
    {
      id: "primed-kill-explosion",
      label: "Primed Kill Explosion",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "On hit debuff enemies for 3s, when you kill the debuffed enemy with another skill you jave 15% chance to cause an explosion dealing 236 Vitality damage in a 2m radius, +10% chance if it was an Execution",
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
            "Deals up to 15% more damage based on traveled distance. Maximum damage at 8m",
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
            "On hit: Applies 1 Doom once per enemy. Applies 1 Doom to enemies without Doom",
        },
      ],
    },
    {
      id: "soul-harvest",
      label: "Soul Harvest",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "On kill progress Shade generation by 1s",
        },
        {
          id: "description-2",
          label:
            "When you deal damage to a Boss, progress Shade generation by 0.4s, only once every 1s",
        },
      ],
    },
    {
      id: "health-cost",
      label: "Health Cost",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Instead of Energy cotsts 2% health per 10 Energy (8% total)",
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
            "The progectiles return to you after reaching maximum range dealing 30% damage",
        },
      ],
    },
    {
      id: "return-explosion",
      label: "Return Explosion",
      maxRank: 1,
      cost: 3,
      requires: [
        {
          id: "returning-projectiles",
          label: "Returning projectiles",
        },
      ],
      perks: [
        {
          id: "description",
          label:
            "When the progectile returns to you, cause an explosion dealing 378 Vitality damage in a 2.5m radius",
        },
      ],
    },
    {
      id: "trigger",
      label: "Trigger",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "description",
          label: "Other skills have 30% chance to trigger this skill",
        },
        {
          id: "description-2",
          label: "Cannot be used directly",
        },
      ],
    },
    {
      id: "cold-conversion",
      label: "Cold conversion",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "poison-conversion",
          label: "Poison conversion",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Damage is converted to Cold damage",
        },
      ],
    },
    {
      id: "poison-conversion",
      label: "Poison conversion",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "cold-conversion",
          label: "Cold conversion",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Damage is converted to Poison damage",
        },
      ],
    },
    {
      id: "soulburn",
      label: "Soulburn",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "soul-harvest",
          label: "Soul harvest",
        },
        {
          id: "trigger",
          label: "Trigger",
        },
      ],
      perks: [
        {
          id: "description",
          label: "80% more damage",
        },
        {
          id: "description-2",
          label: "+1 Shades cost",
        },
      ],
    },
  ],
};
