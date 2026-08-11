import { Active } from "@/app/data/types";

export const eidolonGuard: Active = {
  id: "eidolon-guard",
  tier: 1,
  name: "Eidolon Guard",
  description: ["Summon 1 Eidolon Guard."],
  cost: {
    base: 60,
  },
  cooldown: 0, // None
  castTime: 700, // 0.70 s
  tags: ["Spirit", "Active", "Lesser Summon", "Spell"],
  modifiers: [
    {
      id: "strong-awakening",
      label: "Strong Awakening",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "empowered-life",
          label:
            "After being Summoned, this Summon is Empowered for 30% of its Lifetime up to 6s",
        },
      ],
    },
    {
      id: "detonation",
      label: "Detonation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "explosion",
          label:
            "When this Summon is reduced to below 20% Health it explodes dealing 38% of its Health as Poison damage in a 6m radius",
        },
      ],
    },

    {
      id: "empowered-assault",
      label: "Empowered Assault",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "empowered-boost",
          label:
            "While this Summon is Empowered it has: 15% more damage, 5% increased Skill speed",
        },
      ],
    },
    {
      id: "doom",
      label: "Doom",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "doom",
          label: "The Summon's basic attacks apply 1 Doom on hit",
        },
      ],
    },
    {
      id: "frenzied",
      label: "Frenzied",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage",
          label: "This summon has 20% more damage",
        },
        {
          id: "speed",
          label: "This summon has 15% increased all speed",
        },
        {
          id: "health",
          label: "This summon has 40% less Maximum health",
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
          label: "This summon has 10% more damage",
        },
      ],
    },
    {
      id: "squad-tactics",
      label: "Squad Tactics",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "empower",
          label:
            "When you consume Flow or Overwhelm you have 50% chance to Empower this Summon for 3s",
        },
      ],
    },
    {
      id: "life-link",
      label: "Life Link",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "max-health",
          label: "While your Health is above 40% maximum health:",
        },
        {
          id: "regenerates",
          label: "This Summon regenerates 5% Health per second",
        },
        {
          id: "health-decay",
          label: "This Summon has 100% less Health Decay",
        },
        {
          id: "lose-health",
          label: "You lose 2% Health per second per Eidolon Guard",
        },
      ],
    },
    {
      id: "mass-summoning",
      label: "Mass Summoning",
      maxRank: 2,
      cost: 1,
      perks: [
        {
          id: "summoning",
          label:
            "Summon 2 additional Summons at once, 50% more Energy cost, 50% moer Health cost",
        },
      ],
    },
    {
      id: "stable-manifestation",
      label: "Stable Manifestation",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "unstable-frenzy",
          label: "Unstable frenzy",
        },
      ],
      perks: [
        {
          id: "health-decay",
          label: "This Summon has 50% less Health Decay",
        },
        {
          id: "max-health",
          label: "This Summon has 50% more Maximum Health",
        },
      ],
    },
    {
      id: "unstable-frenzy",
      label: "Unstable Frenzy",
      maxRank: 1,
      cost: 2,
      incompatibles: [
        {
          id: "stable-manifestation",
          label: "Stable manifestation",
        },
      ],
      perks: [
        {
          id: "damage",
          label: "This Summon has 25% more damage",
        },
        {
          id: "speed",
          label: "This Summon has 15% increased all speed",
        },
        {
          id: "lifesteal",
          label: "This Summon has +10% Lifesteal",
        },
        {
          id: "health-decay",
          label: "This Summon has 100% more Health decay",
        },
      ],
    },
    {
      id: "charge",
      label: "Charge",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage",
          label:
            "This Summon can charge an enemy dealing 100% of its Weapon Damage",
        },
      ],
    },
    {
      id: "essence-drain",
      label: "Essence drain",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage",
          label:
            "Whenever this Summon kills an ennemy, it can drain its essence over 2s to recover 1,158 health, reduce its other Cooldowns by 5s and you recover 139 Health",
        },
      ],
    },
    {
      id: "ether-strike",
      label: "Ether strike",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage",
          label:
            "This Summon can attack dealing 75% of its Weapon damage with +20% Lifesteal",
        },
      ],
    },
  ],
};
