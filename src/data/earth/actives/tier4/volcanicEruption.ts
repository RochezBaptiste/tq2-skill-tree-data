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
  tags: ["Earth", "Active", "Spell", "Area", "Exhaust", "Fire"],
  description: [
    "The ground at target location breaks dealing X Strike Damage in a 3m radius and roots for 1s",
    "Stays active for 3s",
    "After activity ends, create and Eruption dealing X Fire Damage in a 3m radius",
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
          id: "damage",
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
          id: "duration",
          label: "+1s Duration",
        },
        {
          id: "enery",
          label: "+10 Energy Cost",
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
          id: "damage",
          label:
            "turns the broken ground into a Lava Field. While active deals 65 Fire Damage every 0.5 in a 3m radius",
        },
        {
          id: "energy-cost",
          label: "+20 Energy Cost",
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
          id: "damage",
          label:
            "While active, for every 80 Energy you spend globally, cause another Eruption dealing 174 Fire Damage in a 3m radius",
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
          id: "strike-damage",
          label: "Every Eruption deals 131 Strike Damagein a 4m radius",
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
          id: "damage",
          label: "Main Eruption deals 10% more Damage per second of activity",
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
          id: "damage",
          label: "1% more Damage per Overload up to 25%",
        },
      ],
    },
  ],
};
