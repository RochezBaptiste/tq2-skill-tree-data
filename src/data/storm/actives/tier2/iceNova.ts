import { Active } from "@/app/data/types";

export const iceNova: Active = {
  id: "ice-nova",
  tier: 2,
  name: "Ice Nova",
  description: [
    "Deal 387 Cold Damage in a 4.0m radius around you.",
    "25% chance to Freeze for 1.2s.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 6000,
  castTime: 350,
  critChance: 5,
  ailmentChance: 100,
  tags: ["Storm", "Active", "Spell", "Area", "Cold"],
  modifiers: [
    {
      id: "vulnerable-on-hit",
      label: "Vulnerable on hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "stats",
          label: "Applies Vulnerable on hit for 4s",
        },
      ],
    },
    {
      id: "flash-freeze",
      label: "Flash Freeze",
      maxRank: 2,
      cost: 2,
      incompatibles: [{ id: "cooldown-charge", label: "Cooldown Charge" }],
      perks: [
        {
          id: "freeze-guarantee",
          label: "Always Freezes, +1s Base Freeze Duration",
        },
        {
          id: "cooldown-increase",
          label: "+7s Base Cooldown Duration",
        },
      ],
    },
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      incompatibles: [{ id: "flash-freeze", label: "Flash Freeze" }],
      perks: [
        {
          id: "charges",
          label: "+1 Cooldown Charge",
        },
      ],
    },
    {
      id: "enhanced-freeze",
      label: "Enhanced Freeze",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage-freeze-duration",
          label: "20% more Damage and +0.2s Freeze Duration",
        },
        {
          id: "cost",
          label: "+2 Energy Cost",
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "ailment-chance",
          label: "+60% added Base Ailment Chance",
        },
      ],
    },
    {
      id: "double-cast",
      label: "Double Cast",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "second-nova",
          label: "A second ice nova appears at your target location.",
        },
        {
          id: "reduce-freeze",
          label: "25% reduced Base Freeze Duration",
        },
        {
          id: "less-damage",
          label: "30% less Damage and Ailment chance.",
        },
        {
          id: "cooldown",
          label: "+4s Cooldown duration",
        },
      ],
    },
    {
      id: "freezing-blast",
      label: "Freezing Blast",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "cone-conversion",
          label:
            "Turns into a 60 degree cone. +1m radius, 20% more Damage, +5% added chance to Freeze.",
        },
      ],
    },
    {
      id: "counter",
      label: "Counter",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "channeling-bonus",
          label:
            "Deals 50% more Damage to channeling enemies and recovers 20% Cooldown if at least one channeling enemy was hit",
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
          id: "hit-explosion",
          label: "Enemies hit explode for 65 Cold Damage in a 1.2m radius",
        },
      ],
    },
    {
      id: "wisp-nova",
      label: "Wisp nova",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "stats",
          label:
            "When this skill hits a Wisp you control sacrifice 10% of its Health to cause an explosion dealing 262 Cold damage in a 3m radius around it",
        },
      ],
    },
  ],
};
