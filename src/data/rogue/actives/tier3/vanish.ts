import { Active } from "@/app/data/types";

export const vanish: Active = {
  id: "vanish",
  tier: 3,
  name: "Vanish",
  description: [
    "Gain 30% increased Movement Speed",
    "30% increased Damage for 6s.",
  ],
  cost: {},
  cooldown: 5000,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Rogue", "Active", "Blessing"],
  modifiers: [
    {
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-stats",
          label:
            "Grants 30% increased Critical Chance and +60% Critical Hit Damage Multiplier",
        },
      ],
    },
    {
      id: "flash-powder",
      label: "Flash Powder",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "stun-effect",
          label: "On use Stuns enemies in a 3m radius for 1s",
        },
        {
          id: "cooldown-increase",
          label: "+05s Base Cooldown Duration",
        },
      ],
    },
    {
      id: "flow-gain",
      label: "Gain flow",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "gain-flow",
          label: "On use gain Flow. +2s Base Cooldown Duration.",
        },
      ],
    },
    {
      id: "apply-doom",
      label: "Apply Doom",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "apply-doom",
          label: "Apply 2 Doom in a 3m radius",
        },
        {
          id: "cooldown-increase",
          label: "+0.5s Base Cooldown Duration",
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
          id: "ailment-stats",
          label:
            "Grants 30% increased Ailment Chance and 8% increased Ailment Power",
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced Duration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "duration",
          label: "+1s Duration",
        },
      ],
    },
    {
      id: "deadly-strike",
      label: "Deadly Strike",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage-cooldown",
          label:
            "Grants additional 20% increased Damage and 5% less Cooldown Duration",
        },
        {
          id: "duration-penalty",
          label: "-50% less Duration",
        },
      ],
    },
    {
      id: "lifesteal",
      label: "Lifesteal",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "lifesteal-stats",
          label: "Grants +4 Vitality Weapon Damage and 20% increased Lifesteal",
        },
        {
          id: "cooldown-increase",
          label: "+0.5s Base Cooldown Duration",
        },
      ],
    },
    {
      id: "burst-of-speed",
      label: "Burst of Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "speed-bonus",
          label:
            "Grants 10% increased Attack & Cast Speed. Gain an additional 30% decaying Move Speed for 3s.",
        },
      ],
    },
  ],
};
