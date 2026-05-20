import { Passive } from "@/app/data/types";

export const overcharge: Passive = {
  id: "overcharge",
  name: "Overcharge",
  tier: 3,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "overload-damage",
      label: "%1% increased damage with Overload abilities",
      baseValue: 10,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "energy",
      name: "Energy",
      details: ["Recover 5 Energy per Overload cleansed over 1s"],
    },
    {
      id: "duration",
      name: "Duration",
      details: [
        "Overload has 50% increased duration",
        "Take 15% less damage from Overload",
      ],
    },
    {
      id: "damage",
      name: "Lightning damage",
      details: ["2% increased Lightning damage per Overload"],
    },
  ],
};
