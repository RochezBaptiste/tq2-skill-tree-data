import { Active } from "@/app/data/types";

export const frostbite: Active = {
  id: "frostbite",
  tier: 4,
  name: "Frostbite",
  description: [
    "Cause Frozen Ground at target location fro 3s and custe enemies with Frostbite for 5s in a 2m radius.",
    "Frozen Ground slows enemies by 25% Cursed enemies take 65 Cold damage every 0.5s.",
    "This damage increases on Frozen ground by up to 30% after 3s",
    "When the limit is reached a cold explosion deals 194 Cold damage in a 1.5m radius",
  ],
  cost: {
    base: 60,
  },
  cooldown: 0,
  castTime: 480,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Storm", "Active", "Spell", "Exhaust", "Cold"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "10% more damage",
        },
      ],
    },
    {
      id: "cold-snap",
      label: "Cold snap",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "explosion",
          label:
            "Consumes Freeze on Frozen enemies to cause an explosion that deals 463 Cold damage in a 2.5m radius",
        },
      ],
    },
    {
      id: "freeze-explosion",
      label: "Freeze Explosion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "freeze-chance",
          label:
            "When the debuffed enemy gets Frozen, deals 218 Cold damage in a 2.5m radius around them.",
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
          id: "stats",
          label: "30% more Area size of Frozen ground and Cursed application",
        },
      ],
    },
    {
      id: "acceleration",
      label: "Acceleration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "100 more damage over time",
        },
        {
          id: "duration",
          label: "50% less duration",
        },
      ],
    },
    {
      id: "enhanced-control-duration",
      label: "Enhanced control duration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "increase-effect",
          label:
            "You have 10% increased Freeze and Stun duration against affected enemies",
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced duration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "duration",
          label: "+1s Duration",
        },
      ],
    },
  ],
};
