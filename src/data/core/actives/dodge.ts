import { Active } from "@/app/data/types";

export const dodge: Active = {
  id: "dodge",
  tier: 0,
  name: "Dodge",
  cost: {},
  cooldown: 6000,
  castTime: 250,
  description: [
    "Wuickly dash a short distance toward the target location.",
    "Wearing Light armor or Medium armor grants increased Dodge cooldown rate",
  ],
  tags: ["Active", "Movement"],
  modifiers: [
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      perks: [],
    },
    {
      id: "distance",
      label: "Distance",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "speed",
      label: "Speed",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "teleport",
      label: "Teleport",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "distance", label: "Distance" }],
      perks: [],
    },
    {
      id: "celerity",
      label: "Celerity",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
    {
      id: "cold-explosion",
      label: "Cold Explosion",
      maxRank: 3,
      cost: 1,
      perks: [],
    },
  ],
};
