import { Passive } from "@/app/data/types";

export const stormAdaptation: Passive = {
  id: "storm-adaptation",
  name: "Storm adaptation",
  tier: 3,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "barrier-decay-threshold",
      label: "+%1% barrier decay threshold",
      baseValue: 33,
      perLevel: 33,
    },
    {
      id: "cold-resistance",
      label: "+%1% cold resistance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "lightning-resistance",
      label: "+%1% lightning resistance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "cold-resistance",
      name: "Cold resistance",
      details: ["+3% Maximum Cold resistance", "+10% Cold resistance"],
    },
    {
      id: "lightning-resistance",
      name: "Lightning resistance",
      details: [
        "+3% Maximum Lightning resistance",
        "+10% Lightning resistance",
      ],
    },
    {
      id: "overload",
      name: "Overload",
      details: ["Take 10% less damage form Overload"],
    },
  ],
};
