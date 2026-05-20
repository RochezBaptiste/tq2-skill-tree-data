import { Active } from "@/app/data/types";

export const sweepingStrike: Active = {
  id: "sweeping-strike",
  tier: 1,
  name: "Sweeping Strike",
  cost: {
    base: 75,
  },
  cooldown: 0,
  castTime: 1000,
  critChance: 5,
  ailmentChance: 5,
  description: [
    "Sweep in a circle dealing 180% weapon damage in a 4m radius around you.",
    "Requires melee.",
  ],
  tags: ["Warfare", "Active", "Weapon attack", "Area", "Exhaust"],
  modifiers: [
    {
      id: "whirlwind",
      label: "Whirlwind",
      maxRank: 1,
      cost: 1,
      incompatibles: [
        { id: "lasting-sweep", label: "Lasting sweep" },
        { id: "concentrated-fury", label: "Concentrated fury" },
        { id: "consume-overwhelm", label: "Consume overwhelm" },
      ],
      perks: [
        {
          id: "transform",
          label:
            "Instead channel to spin dealing 20% weapon damage in a 2.2m radius.",
        },
        {
          id: "speed",
          label: "25% less movement speed while channeling",
        },
      ],
    },
    {
      id: "ramp-up",
      label: "Ramp Up",
      maxRank: 5,
      cost: 1,
      requires: [{ id: "whirlwind", label: "Whirlwind" }],
      perks: [
        {
          id: "damage-area",
          label:
            "Over 3s while channeling, damage increases by up to 10% and area radius increases by up to 10%",
        },
        {
          id: "cost",
          label: "+1 energy cost per second",
        },
      ],
    },
    {
      id: "lasting-whirl",
      label: "Lasting Whirl",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "ramp-up", label: "Ramp Up" }],
      perks: [
        {
          id: "effect",
          label:
            "After you stop channeling, Whirlwind persists for 3s and deals 50% less damage",
        },
        {
          id: "ramp-deplete",
          label: "Ramp Up effects deplete over the duration",
        },
        {
          id: "cost",
          label: "+5 energy cost per second",
        },
      ],
    },
    {
      id: "lasting-sweep",
      label: "Lasting Sweep",
      maxRank: 3,
      cost: 1,
      incompatibles: [{ id: "whirlwind", label: "Whirlwind" }],
      perks: [
        {
          id: "dot",
          label:
            "After ability ends, a whirl deals 8% weapon damage every 0.25s for 1.5s",
        },
        {
          id: "cost",
          label: "+20 energy cost",
        },
        {
          id: "incompatible",
          label: "Incompatible with Whirlwind",
        },
      ],
    },
    {
      id: "rage-gain",
      label: "Rage Gain",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "concentrated-fury", label: "Concentrated fury" }],
      perks: [
        {
          id: "rage",
          label: "Gain Rage on hit (max once every 0.8s)",
        },
        {
          id: "damage-rage",
          label: "1% more damage per Rage stack",
        },
        {
          id: "cost",
          label: "+2 energy cost",
        },
        {
          id: "whirlwind-cost",
          label: "+1 energy cost per second (Whirlwind)",
        },
        {
          id: "multipliers",
          label:
            "-0.1s on Rage gained, +1% damage per Rage, +2 energy cost, +1 Whirlwind energy cost",
        },
      ],
    },
    {
      id: "concentrated-fury",
      label: "Concentrated Fury",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "whirlwind", label: "Whirlwind" }],
      perks: [
        {
          id: "consume-rage",
          label: "Consume all Rage for 10% more damage per Rage consumed",
        },
        {
          id: "damage",
          label: "+4% damage",
        },
        {
          id: "incompatible",
          label: "Incompatible with Whirlwind and Rage Gain",
        },
      ],
    },
    {
      id: "deadly-reach",
      label: "Deadly Reach",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "edge-damage",
          label: "20% more damage on the edge",
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume overwhelm",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "whirlwind", label: "Whirlwind" }],
      perks: [
        {
          id: "effect",
          label:
            "Consumes full Overwhelm for 10% more damage and +80% base Ailment chance",
        },
      ],
    },
    {
      id: "siphon",
      label: "Siphon",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "vitality-dot",
          label:
            "Enemies hit take 13 Vitality damage per second and have -13% Vitality resistance for 4s",
        },
      ],
    },
    {
      id: "sunder",
      label: "Sunder",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "slow-armor",
          label:
            "Enemies hit are slowed by 6% and have -64 armor value for 3s (non-stacking)",
        },
        {
          id: "cost",
          label: "+2 energy cost (+1 for Whirlwind)",
        },
      ],
    },
  ],
};
