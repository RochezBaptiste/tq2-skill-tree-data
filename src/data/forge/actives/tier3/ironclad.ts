import { Active } from "@/app/data/types";

export const ironclad: Active = {
  id: "ironclad",
  tier: 3,
  name: "Ironclad",
  description: [
    "Toogle to activate",
    "Cost 2 Divines Cores per second",
    "Grants +484 Armor",
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
      perks: [
        { id: "description", label: "While activate gain Bulwark every 1s" },
      ],
    },
    {
      id: "pierce-retaliation",
      label: "Pierce retaliation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "While active grants you +423 Pierce Retaliation, +2 Divine Core Cost per second",
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
          id: "description",
          label:
            "While active, when you get hit, lose 1 Divine Cores and shoot a metal shard towards the attacker dealing 0 Pierce Damage (Scales with Armor)",
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
          id: "description",
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
          id: "description",
          label:
            "Armor Shards deals %1% of your Retaliation Damage as added Pierce Damage",
          baseValue: 20,
          perLevel: 20,
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
          id: "description",
          label:
            "While active, for every Divine Core gained, grants you +%1 Armor up to %2 Armor. this resets on deactivation",
          baseValue: [48, 484],
          perLevel: [14, 271],
        },
      ],
    },
  ],
};
