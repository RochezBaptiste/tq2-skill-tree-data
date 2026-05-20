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
          id: "stun-damage-cooldown",
          label:
            "+1s stun duration, 15% less damage, +4s base cooldown duration",
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
            "Consumes full Overwhelm for 25% more damage, +0.5m radius and +0.4s stun duration",
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
            "Hitting a channeling enemy applies +0.4s stun duration and reduces cooldown by 20% (once per use)",
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
          label: "+50% added base ailment chance, 10% less damage",
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
          label: "Gain 1 Rage on use, +3% ailment chance per Rage",
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
          label: "Enemies hit are slowed by 40% for 2.5s",
        },
      ],
    },
  ],
};
