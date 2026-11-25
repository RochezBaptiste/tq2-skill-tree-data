import { Active } from "@/app/data/types";

export const volcaniceruption: Active = {
  id: "volcanic-eruption",
  tier: 4,
  name: "Volcanic Eruption",
  cost: {
    base: 80,
  },
  cooldown: 0,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Earth", "Active", "Main", "Spell", "Area", "Exhaust", "Fire"],
  description: [
    "The ground at target location breaks dealing 308 - 461 Strike Damage in a 3m radius and roots for 1s",
    "Stays active for 3s",
    "After activity ends, create and Eruption dealing 461 - 923  Fire Damage in a 3m radius",
    "Can be reactivated to end activity early",
  ],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more damage",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1s Duration",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "+%1 Energy Cost",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "lava-flied",
      label: "Lava Field",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Turns the broken ground into a Lava Field.",
        },
        {
          id: "description-2",
          label: "While active deals %1 Fire Damage every 0.5s in a %2m radius",
          baseValue: [115, 3],
          perLevel: [20, 0.5],
        },
        {
          id: "description-3",
          label: "+%1 Energy Cost",
          baseValue: 20,
          perLevel: 5,
        },
      ],
    },
    {
      id: "forced-eruption",
      label: "Forced eruption",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "While active, for every 80 Energy you spend globally, cause another Eruption dealing %1 Fire Damage in a 3m radius",
          baseValue: 308,
          perLevel: 76,
        },
      ],
    },
    {
      id: "aftershocks",
      label: "Aftershocks",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Every Eruption deals %1 Strike Damage in a %2m radius",
          baseValue: [231, 4],
          perLevel: [38, 0.5],
        },
      ],
    },
    {
      id: "escalating-erpution",
      label: "Escalating eruption",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Main Eruption deals %1% more Damage per second of activity",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
    {
      id: "overload",
      label: "Overload",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Damage per Overload up to %2%",
          baseValue: [1, 25],
          perLevel: [1, 25],
        },
      ],
    },
  ],
};
