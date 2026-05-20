import { Active } from "@/app/data/types";

export const iceShards: Active = {
  id: "ice-shards",
  tier: 1,
  name: "Ice Shards",
  description: [
    "Fire 5 ice shards in a cone dealing 116-160 Cold Damage each.",
    "Additional hits against the same enemy deals 80% less Damage.",
    "On use gain Overwhelm while you have an Overwhelm skill equipped.",
  ],
  cost: {
    base: 10,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 5,
  ailmentChance: 10,
  tags: ["Storm", "Active", "Spell", "Basic", "Projectile", "Cold"],
  modifiers: [
    {
      id: "torrent",
      label: "Torrent",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "extra-projectiles",
          label: "+1 additional Projectiles",
        },
        {
          id: "cost",
          label: "+1 Energy Cost",
        },
      ],
    },
    {
      id: "projectile-penetration",
      label: "Projectile Penetration",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "penetration-stats",
          label: "+1 projectile penetration",
        },
        {
          id: "penetration-damage",
          label: "50% less damage after the first hit",
        },
      ],
    },
    {
      id: "frost-explosion",
      label: "Frost Explosion",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "freeze-proc",
          label:
            "When you hit a Frozen target, it cause an explosion dealing 131 Cold damage in a 2.0m radius",
        },
      ],
    },
    {
      id: "chaos",
      label: "Chaos",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "torrent", label: "Torrent" }],
      perks: [
        {
          id: "projectile-direction",
          label:
            "Projectiles are fired in random directions and spiral outwards",
        },
        {
          id: "projectile-number",
          label: "100% more projectiles",
        },
        {
          id: "energy-cost",
          label: "+20 Energy cost",
        },
      ],
    },
    {
      id: "homing",
      label: "Homing",
      maxRank: 1,
      cost: 3,
      perks: [
        {
          id: "homing-strength",
          label: "+100 homing Strength",
        },
        {
          id: "homing-speed",
          label: "30% less Projectile speed",
        },
      ],
    },
    {
      id: "orbit",
      label: "Orbit",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "homing", label: "Homing" }],
      perks: [
        {
          id: "return-mechanic",
          label: "Homing projectiles without targets return to circle you",
        },
        {
          id: "prejectile-range",
          label: "120% more projectile range",
        },
        {
          id: "cost",
          label: "+20 Energy Cost",
        },
      ],
    },
    {
      id: "infused-shard",
      label: "Infused Shard",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "energy-scaling",
          label: "Deals additional Cold Damage equal to 7.3% reserved Energy",
        },
      ],
    },
  ],
};
