import { Active } from "@/app/data/types";

export const tempest: Active = {
  id: "tempest",
  tier: 4,
  name: "Tempest",
  description: [
    "Active:",
    "Gain 30% increased Movement speed, 10% increased Total damage for 6s",
    "-",
    "Passive:",
    "When you hit enemies with other skills, Tempest gains Amplify. Maximum Amplify 50",
    "When used with at least 30 Amplify, consume it to hit up to 5 enemies in a 6m radius dealing 196-262 Lightning damage. deals 5% more damage per Amplify consumed",
  ],
  cost: {},
  cooldown: 6000,
  castTime: 0,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Storm", "Active", "Spell", "Blessing", "Lightning"],
  modifiers: [
    {
      id: "burst-of-speed",
      label: "Burst of speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "speed",
          label: "Grants 10% increased attack and cast speed",
        },
        {
          id: "direct-stats",
          label:
            "When directly used, gain an additional 30% increased movement speed that decay over 3s",
        },
      ],
    },
    {
      id: "enhanced-ailments",
      label: "Enhanced ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "active",
          label: "While active grants:",
        },
        {
          id: "ailment-chance",
          label: "30% increased Ailment chance",
        },
        {
          id: "ailment-power",
          label: "8% increased Ailment power",
        },
      ],
    },
    {
      id: "enhanced-critical",
      label: "Enhanced critical hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "active",
          label: "While active grants:",
        },
        {
          id: "critical-chance",
          label: "+2% increased critical hit chance",
        },
        {
          id: "critical-multiplier",
          label: "+6% critical hit damage multiplier",
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "duration",
          label: "+2s Duration",
        },
      ],
    },
    {
      id: "discharge",
      label: "Discharge",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "lightning-damage",
          label:
            "With at least 50 Amplify, deals 153 Lightning damage to the closest enemy in a 5m radius every 1s",
        },
        {
          id: "damage",
          label: "This deals 3% more damage per Amplify",
        },
      ],
    },
    {
      id: "enhanced-amplify",
      label: "Enhanced Amplify",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "maximum",
          label: "+20% maximum Amplify",
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "target",
          label: "+1 additional Curse targets ",
        },
        {
          id: "area-size",
          baseValue: 20,
          perLevel: 20,
          label: "20% increased Area Size",
        },
      ],
    },
    {
      id: "accelerated-amplify",
      label: "Accelerated amplify",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "amplify",
          label: "while active hits generate + 1 Amplify",
        },
      ],
    },
  ],
};
