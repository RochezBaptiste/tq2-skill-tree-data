import { Active } from "@/app/data/types";

export const ironclad: Active = {
  id: "ironclad",
  tier: 3,
  name: "Ironclad",
  description: [
    "Toogle to activate",
    "Cost 2 Divines Cores per second",
    "Grants +419 Armor",
    "Grants 20% increased total Armor",
    "Grants +50% Disruption and Stun resistance",
    "Grants +40% less movement speed",
    "-",
    "Using a movement skill cancels Ironclad.Cooldown starts after deactivation.",
  ],
  cost: {
    divineCore: 2,
  },
  cooldown: 0,
  castTime: 150,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Forge", "Active", "Blessing"],
  modifiers: [
    {
      id: "bulwark-generation",
      label: "Bulwark generation",
      maxRank: 1,
      cost: 2,
      perks: [{ id: "stat", label: "While activate gain Bulwark every 1s" }],
    },
    {
      id: "pierce-retaliation",
      label: "Pierce retaliation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "stat",
          label:
            "While activate grants you +353 Pierce retaliation, +2 Divine core cost per second",
        },
      ],
    },
    {
      id: "armor-shards",
      label: "Armor shards",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "stat",
          label:
            "While active, when you get hit. lose 1 Divine Cores and shoot a metal shard towards the attacker dealing x Pierce damage (Scales with Armor)",
        },
      ],
    },
    {
      id: "unstoppable",
      label: "Unstoppable",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "stat",
          label:
            "Grants you Unstoppable while active. +3 Initial Divine Core cost",
        },
      ],
    },
    {
      id: "retaliation-damage",
      label: "Retaliation damage",
      maxRank: 5,
      cost: 1,
      requires: [{ id: "armor-shards", label: "Armor shards" }],
      perks: [
        {
          id: "stat",
          label:
            "Armor shards deals 20% of you Retaliation damage as added Pierce damage",
        },
      ],
    },
    {
      id: "armor-stacking",
      label: "Armor stacking",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "stats",
          label:
            "While active, for every Divine Core gained, grants you +42 Armor up to 419 Armor. this resets on deactivation",
        },
      ],
    },
  ],
};
