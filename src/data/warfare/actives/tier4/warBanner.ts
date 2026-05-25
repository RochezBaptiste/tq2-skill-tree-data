import { Active } from "@/app/data/types";

export const warBanner: Active = {
  id: "war-banner",
  tier: 4,
  name: "War banner",
  description: [
    "Active:",
    "Place a Banner on your location.The Banner has a 6s duration that refreshes while you are inside",
    "-",
    "The Banner emit an aura with a 6m radius that buffs you and allies",
    "Buff grants 15% increased total damage",
  ],
  cost: {
    reserved: 40,
    base: 40,
  },
  cooldown: 3000,
  castTime: 0,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Warfare", "Active", "Sustained", "Aura"],
  modifiers: [
    {
      id: "heal",
      label: "Heal",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "heal",
          label: "Buff heals for %1 every 4s",
          baseValue: 473,
          perLevel: 208,
        },
      ],
    },
    {
      id: "increased-damage",
      label: "Increased Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label:
            "The aura grants allies +%1% total damage per second, up to +%2% after 5 seconds. Lost if the buff expires.",
          baseValue: [1, 5],
          perLevel: [1, 5],
        },
      ],
    },
    {
      id: "increased-speed",
      label: "Increased Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "speed",
          label: "The buff grants +%1% cast speed and activation",
          baseValue: 5,
          perLevel: 5,
        },
      ],
    },
    {
      id: "damage-protection",
      label: "Damage Protection",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "reduce-damage",
          label: "The buff reduce taken damage by +%1%",
          baseValue: 6,
          perLevel: 6,
        },
      ],
    },
    {
      id: "energy-recovery",
      label: "Energy Recovery",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "regenerates",
          label:
            "The buff regenerates %1 energy points for allies every 4 seconds.",
          baseValue: 30,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enfeeble",
      label: "Enfeeble",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "weakens",
          label: "The aura weakens enemies so that they deal %1% less damage.",
          baseValue: 6,
          perLevel: 9,
        },
      ],
    },
    {
      id: "extended-duration",
      label: "Extended Duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "weakens",
          label:
            "Buffs and debuffs applied by the banner persist for %1 seconds after leaving its aura.",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
  ],
};
