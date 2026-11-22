import { Active } from "@/app/data/types";

export const metalWelding: Active = {
  id: "metal-welding",
  tier: 3,
  name: "Metal welding",
  description: [
    "Reaches stages every 0.67s as you Channel.",
    "Gain 25% increased Base weapon damage per stage for 5s after the channeling ends",
    "The first weapon attack after you channel ends deal 30% more damage per Stage reached",
    "Charge Time scales with 20% of your attack and cast speed",
  ],
  cost: {
    base: 30,
    divineCore: 5,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Spell", "Area"],
  modifiers: [
    {
      id: "damage-protection",
      label: "Damage Protection",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While Channeling take %1% less Damage",
          baseValue: 15,
          perLevel: 10,
        },
      ],
    },
    {
      id: "channel-heal",
      label: "Channel Heal",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While Channeling heal for %1 Health every 0.5s",
          baseValue: 64,
          perLevel: 39,
        },
      ],
    },
    {
      id: "channel-barrier",
      label: "Channel Barrier",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While Channeling gain %1 Barrier every 0.5s",
          baseValue: 87,
          perLevel: 35,
        },
      ],
    },
    {
      id: "extended-charge",
      label: "Extended Charge",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+1 Maximum Stage.",
        },
        {
          id: "description-2",
          label: "When you gain a Stage, gain Overwhelm.",
        },
      ],
    },
    {
      id: "armor-up",
      label: "Armor Up",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "While active also grants +%1 Armor per Stage",
          baseValue: 581,
          perLevel: 163,
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
            "When you reach a stage, reduce the Armor Eruption cooldown by 2s and Chains Cooldown by 3s",
        },
      ],
    },
    {
      id: "extended-duration",
      label: "Extended Duration",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "When you release at maximum Stages, +3s Duration",
        },
      ],
    },
    {
      id: "fast-channel",
      label: "Fast Channel",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Skill Speed",
          baseValue: 8,
          perLevel: 8,
        },
      ],
    },
    {
      id: "divine-cores-on-hit",
      label: "Divine Cores On Hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "While active, enemies hit by Weapon Attacks have a 20% chance to drop 3 Divine Cores",
        },
      ],
    },
    {
      id: "enhanced-welding",
      label: "Enhanced Welding",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1% increased Base Weapon Damage per Stage",
          baseValue: 15,
          perLevel: 10,
        },
        {
          id: "description-2",
          label: "+3 Divine Core Cost",
        },
      ],
    },
    {
      id: "first-strike",
      label: "First Strike",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "You first Weapon Attack after the Channeling ends deals %1% more damage per Stage reached. -30% less Buff Duration",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
  ],
};
