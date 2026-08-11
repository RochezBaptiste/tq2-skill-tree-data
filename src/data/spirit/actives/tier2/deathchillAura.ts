import { Active } from "@/app/data/types";

export const deathchillAura: Active = {
  id: "deathchill-aura",
  tier: 2,
  name: "Deathchill Aura",
  description: [
    "Sustained Effect: Emit an aura with 4m radius. 30% Chill chance within the aura every 0.5s.",
    "Active Effect: While active, also deals 189 Vitality Damage within the aura every 0.5s.",
  ],
  cost: {
    base: 20,
    reccuring: 40,
    reserved: 40,
  },
  cooldown: 0,
  castTime: 0,
  tags: ["Spirit", "Active", "Sustained", "Aura", "Spell", "Vitality", "Area"],
  modifiers: [
    {
      id: "health-reservation",
      label: "Health Reservation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "Instead of Energy reserves 3% Health per 10 Energy Reservation (12% total)",
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% increased Area Size",
        },
      ],
    },
    {
      id: "intensify",
      label: "Intensify",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Deals up to 20% more damage to enemies closer to the center",
        },
        {
          id: "description-2",
          label: "Applied in Active state",
        },
        {
          id: "description-3",
          label: "+4 Energy cost per second",
        },
      ],
    },
    {
      id: "weaken",
      label: "Weaken",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "15% Weaken chance against enemies inside the aura every 0.5s",
        },
        {
          id: "description-2",
          label: "Applied in passive and active states",
        },
        {
          id: "description-3",
          label: "+10 Energy reserved",
        },
      ],
    },
    {
      id: "entropy",
      label: "Entropy",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Affected enemies take 4% increased Ailment damage",
        },
        {
          id: "description-2",
          label: "Applied in passive and active states",
        },
        {
          id: "description-3",
          label: "+5 Energy reserved",
        },
      ],
    },
    {
      id: "focused-power",
      label: "Focused Power",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "30% more damage",
        },
        {
          id: "description-2",
          label: "Applied in Active state",
        },
        {
          id: "description-3",
          label: "+20 energy Cost per second",
        },
      ],
    },
    {
      id: "execution-threshold",
      label: "Execution Threshold",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "You have +1,187 Execution Threshold against enemies within the aura per second up to +3,561",
        },
        {
          id: "description-2",
          label: "Applied in passive and active states",
        },
        {
          id: "description-3",
          label: "+10 Energy reserved",
        },
      ],
    },
    {
      id: "spirit-world",
      label: "Spirit World",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "5% more damage per Shade you have consumed in the past 5s",
        },
        {
          id: "description-2",
          label: "Applied in Active state",
        },
      ],
    },
  ],
};
