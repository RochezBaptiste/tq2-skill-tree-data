import { Active } from "@/app/data/types";

export const stomp: Active = {
  id: "stomp",
  tier: 2,
  name: "Stomp",
  cost: {
    base: 0,
  },
  cooldown: 8000,
  castTime: 370,
  critChance: 5,
  ailmentChance: 100,
  description: [
    "Stomp on the ground, dealing 856 Strike Damage in a 3m radius around you and stun enemies hit for 0.4s.",
  ],
  tags: ["Warfare", "Active", "Area"],
  modifiers: [
    {
      id: "vulnerable-on-hit",
      label: "Vulnerable on hit",
      maxRank: 1,
      cost: 2,
      perks: [],
    },
    {
      id: "enhanced-stun",
      label: "Enhanced Stun",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "stun-duration",
          label: "+%1s stun duration",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "stun-damage",
          label: "%1% less damage,",
          baseValue: 15,
          perLevel: 15,
        },
        {
          id: "stun-cooldown",
          label: "+%1s base cooldown duration",
          baseValue: 4,
          perLevel: 2,
        },
      ],
    },
    {
      id: "quick-stomp",
      label: "Quick Stomp",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "channel-use",
          label: "Can be used during channel skills",
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume overwhelm",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage-radius-stun",
          label:
            "Consumes full Overwhelm for %1% more damage, +%2m radius and +0.4s stun duration",
          baseValue: [25, 0.5],
          perLevel: [25, 0.5],
        },
      ],
    },
    {
      id: "interrupt",
      label: "Interrupt",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "stun-cdr",
          label:
            "Hitting a channeling enemy applies +0.4s stun duration and reduces cooldown by %1% (once per use)",
          baseValue: 20,
          perLevel: 20,
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "ailment-damage",
          label: "+%1% added base ailment chance, %2% less damage",
          baseValue: [50, 10],
          perLevel: [50, 8],
        },
      ],
    },
    {
      id: "raging-stomp",
      label: "Raging Stomp",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "rage-ailment",
          label: "Gain %1 Rage on use, +%2% ailment chance per Rage",
          baseValue: [1, 3],
          perLevel: [1, 2],
        },
      ],
    },
    {
      id: "slow",
      label: "Slow",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "slow-duration",
          label: "Enemies hit are slowed by %1% for %2s",
          baseValue: [40, 2.5],
          perLevel: [10, 1],
        },
      ],
    },
  ],
};
