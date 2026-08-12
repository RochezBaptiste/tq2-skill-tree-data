import { Active } from "@/app/data/types";

export const iceNova: Active = {
  id: "ice-nova",
  tier: 2,
  name: "Ice Nova",
  description: [
    "Deal 578 Cold Damage in a 4.0m radius around you.",
    "25% chance to Freeze for 1.0s.",
  ],
  cost: {
    base: 50,
  },
  cooldown: 6000,
  castTime: 370,
  critChance: 5,
  ailmentChance: 152,
  tags: ["Storm", "Active", "Main", "Spell", "Area", "Cold"],
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
          label: "Always Freezes, +%1s Base Freeze Duration",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "cooldown-increase",
          label: "+%1s Base Cooldown Duration",
          baseValue: 7,
          perLevel: 3,
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
          label: "+%1 Cooldown Charge",
          baseValue: 1,
          perLevel: 1,
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
          id: "damage",
          label: "%1% more Damage",
          baseValue: 20,
          perLevel: 20,
        },
        {
          id: "freeze-duration",
          label: "+%1s Freeze Duration",
          baseValue: 0.2,
          perLevel: 0.2,
        },
        {
          id: "cost",
          label: "+%1 Energy Cost",
          baseValue: 2,
          perLevel: 2,
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
          label: "+%1% added Base Ailment Chance",
          baseValue: 60,
          perLevel: 60,
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
          label: "Turns into a 60 degree cone",
        },
        {
          id: "radius",
          label: "+%1m radius",
          baseValue: 1,
          perLevel: 0.5,
        },
        {
          id: "damage",
          label: "%1% more Damage",
          baseValue: 20,
          perLevel: 10,
        },
        {
          id: "chance-freeze",
          label: "+%1% added chance to Freeze.",
          baseValue: 5,
          perLevel: 5,
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
            "Deals %1% more Damage to channeling enemies and recovers %2% Cooldown if at least one channeling enemy was hit",
          baseValue: [50, 20],
          perLevel: [50, 20],
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
          label: "Enemies hit explode for 96 Cold Damage in a %1m radius",
          baseValue: 1.2,
          perLevel: 0.6,
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
            "When this skill hits a Wisp you control sacrifice 10% of its Health to cause an explosion dealing 385 Cold damage in a 3m radius around it",
        },
      ],
    },
  ],
};
