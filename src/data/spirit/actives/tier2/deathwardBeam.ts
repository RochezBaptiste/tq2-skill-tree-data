import { Active } from "@/app/data/types";

export const deathwardBeam: Active = {
  id: "deathward-beam",
  tier: 2,
  name: "Deathward Beam",
  description: [
    "Channel a beam dealing 779-1039 Vitality Damage per second.",
    "Target Penetration: 2.",
    "Target Penetration Effectiveness: 30%.",
    "Doesn't scale with Cast Speed.",
  ],
  cost: {
    reccuring: 40,
  },
  cooldown: 0,
  castTime: 300,
  ailmentChance: 1,
  tags: ["Spirit", "Active", "Main", "Spell", "Channel", "Vitality"],
  modifiers: [
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
          label: "+15% Ailment chance",
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
          label: "Applies Mortality equal to 10% damage this skill deals",
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
            "Deals up to 15% more damage based on distance. Maximum damage at 8m",
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
          label: "Consumes Elemental infusion",
        },
        {
          id: "description-2",
          label: "+84 Damage of the consumed type per second",
        },
        {
          id: "description-3",
          label: "10% of damage converted to the consumed type",
        },
      ],
    },
    {
      id: "cold-conversion",
      label: "Cold Conversion",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        {
          id: "elemental-infusion",
          label: "Elemental infusion",
        },
        {
          id: "poison-conversion",
          label: "Poison conversion",
        },
      ],
      perks: [
        {
          id: "description",
          label: "Instead deals Cold damage",
        },
      ],
    },
    {
      id: "poison-conversion",
      label: "Poison Conversion",
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
          label: "Instead deals Poison damage",
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
          label: "On Kill progress Shade generation by 1s.",
        },
        {
          id: "description-2",
          label:
            "When you deal damage to a Boss, progress Shade generation by 0.4s, only once every 1s",
        },
      ],
    },
    {
      id: "apply-doom",
      label: "Apply Doom",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "20% chance to apply 1 Doom every 0.3s",
        },
      ],
    },
    {
      id: "empowering-beam",
      label: "Empowering Beam",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Your Summons inside the Beam are Empowered",
        },
        {
          id: "description-2",
          label: "Your Summons count in the amount of targets you can hit.",
        },
        {
          id: "description-3",
          label: "+15 Energy Cost per second",
        },
      ],
    },
    {
      id: "energy-siphon-exhaust",
      label: "Energy Siphon - Exhaust",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "200% more damage",
        },
        {
          id: "description-2",
          label: "+2 Target Penetration",
        },
        {
          id: "description-3",
          label: "+10% Lifesteal",
        },
        {
          id: "description-4",
          label: "+60 Energy Cost per second",
        },
        {
          id: "description-5",
          label: "Exhaust",
        },
      ],
    },
    {
      id: "healing-beam",
      label: "Healing Beam",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Heals allies for 417 Health per second Costs 5% of your current health per second",
        },
        {
          id: "description-2",
          label: "+10 Energy Cost per second",
        },
      ],
    },
    {
      id: "penetration",
      label: "Penetration",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+2 Target Penetration",
        },
        {
          id: "description-2",
          label: "-10% penetration damage penalty",
        },
      ],
    },
    {
      id: "ramp-up",
      label: "Ramp up",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While Channeling this skill it gains up to 15% more damage over 3s",
        },
        {
          id: "description-2",
          label: "2s after you stopped Channeling this bonus decays rapidly",
        },
      ],
    },
    {
      id: "soulburn",
      label: "Soulburn",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Costs 1 on use",
        },
        {
          id: "description-2",
          label: "For 3s after activation, deals 40% more damage",
        },
        {
          id: "description-3",
          label: "Re-casting during that time doesn't cost a Shade",
        },
      ],
    },
  ],
};
