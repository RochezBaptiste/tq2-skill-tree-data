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
      perks: [],
    },
    {
      id: "increased-damage",
      label: "Increased Damage",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
    {
      id: "increased-speed",
      label: "Increased Speed",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "damage-protection",
      label: "Damage Protection",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "energy-recovery",
      label: "Energy Recovery",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
    {
      id: "enfeeble",
      label: "Enfeeble",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "extended-duration",
      label: "Extended Duration",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
  ],
};
