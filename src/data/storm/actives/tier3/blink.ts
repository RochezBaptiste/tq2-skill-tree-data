import { Active } from "@/app/data/types";

export const blink: Active = {
  id: "blink",
  tier: 3,
  name: "Blink",
  description: [
    "Instantly teleport to target location.",
    "While this ability is on cooldown, you can reactivate it once to teleport back to the start location.",
  ],
  cost: {},
  cooldown: 12000,
  castTime: 10,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Storm", "Active", "Spell", "Movement", "Teleport"],
  modifiers: [
    {
      id: "engage",
      label: "Engage",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "damage-reduction",
          label: "For 1.5s you take 40% reduced Damage",
        },
      ],
    },
    {
      id: "cold-explosion",
      label: "Cold Explosion",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "explosion-stats",
          label:
            "Cause an explosion at your start and end locations dealing 218 Cold Damage in a 2.2m radius",
        },
      ],
    },
    {
      id: "freeze-explosion",
      label: "Freeze Explosion",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "cold-explosion", label: "Cold Explosion" }],
      perks: [
        {
          id: "freeze-chance",
          label: "Cold Explosion has a 50% chance to Freeze for 1s",
        },
      ],
    },
    {
      id: "thundercrash",
      label: "Thundercrash",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crash-damage",
          label:
            "Insted briefly disappear into the sky and crash down on target location dealing 218 Strike Damage in a 2.5m radius",
        },
      ],
    },
    {
      id: "stun-chance",
      label: "Stun Chance",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "thundercrash", label: "Thundercrash" }],
      perks: [
        {
          id: "stun-proc",
          label: "Thundercrash has a 60% chance to Stun for 1.5s",
        },
      ],
    },
    {
      id: "thunderstorm",
      label: "Thunderstorm",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "strike-proc",
          label:
            "Enemies in a 3m radius around the target location have a 60% chance to be hit by Lightning Strikes",
        },
      ],
    },
    {
      id: "repeat",
      label: "Repeat",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "extra-use",
          label:
            "For 3s you can reuse the ability 1 times. the cooldown starts afterwards.",
        },
      ],
    },
  ],
};
