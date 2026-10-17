import { Active } from "@/app/data/types";

export const dodge: Active = {
  id: "dodge",
  tier: 0,
  name: "Dodge",
  cost: {},
  cooldown: 6000,
  castTime: 250,
  description: [
    "Quickly dash a short distance toward the target location.",
    "Wearing Light armor or Medium armor grants increased Dodge cooldown rate",
  ],
  tags: ["Active", "Movement"],
  modifiers: [
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+1 Cooldown charge",
        },
      ],
    },
    {
      id: "distance",
      label: "Distance",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+30% more Dodge distance",
        },
      ],
    },
    {
      id: "speed",
      label: "Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+25% more Dodge speed",
        },
        {
          id: "description-2",
          label: "+0.05s Intangibility duration",
        },
      ],
    },
    {
      id: "teleport",
      label: "Teleport",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "distance", label: "Distance" }],
      perks: [
        {
          id: "description",
          label:
            "Phase to target location.Travel time 0.1s-0.3s depends on Travel distance",
        },
        {
          id: "description-2",
          label: "On usee cleanse Root",
        },
        {
          id: "description-3",
          label: "+3s Base Cooldown duration",
        },
      ],
    },
    {
      id: "celerity",
      label: "Celerity",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "After Dodge ends gain 15% increased All speed for 1.5s",
        },
        {
          id: "description-2",
          label: "+1s Base cooldown duration",
        },
      ],
    },

    //  Masteries
    {
      id: "fire-explosion",
      label: "Fire explosion",
      maxRank: 3,
      cost: 1,
      perks: [],
      masteries: ["earth"],
    },
    {
      id: "flow",
      label: "Flow",
      maxRank: 1,
      cost: 2,
      perks: [],
      masteries: ["rogue"],
    },
    {
      id: "cold-explosion",
      label: "Cold Explosion",
      maxRank: 3,
      cost: 1,
      perks: [],
      masteries: ["storm"],
    },
    {
      id: "dash-attack",
      label: "Dash Attack",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "After use, gain 20% increased damage and +4% critical hit chance for 1.5s",
        },
        {
          id: "description-2",
          label: "+1s Base Cooldown duration",
        },
      ],
      masteries: ["rogue", "warfare"],
    },
  ],
};
