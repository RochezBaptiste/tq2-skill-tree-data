import { Passive } from "@/app/data/types";

export const tollOfPassage: Passive = {
  id: "toll-of-passage",
  name: "Toll of passage",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-shade-generation-rate",
      label: "%1% increased Shade generation rate",
      baseValue: 8,
      perLevel: 8,
    },
  ],
  feats: [
    {
      id: "maximum-shades",
      name: "Maximum Shades",
      details: ["+1 Maximum Shades"],
    },
    {
      id: "shade-generation",
      name: "Shade generation",
      details: ["20% increased Shade generation rate"],
    },
    {
      id: "low-health-shade-regeneration",
      name: "Low health shade regeneration",
      details: ["30% increased Shade generation rate while on low Health"],
    },
    {
      id: "shade-regeneration",
      name: "Shade regeneration",
      details: [
        "30% increased Shade generation rate if you have consumed a Shade in the past 5s",
      ],
    },
    {
      id: "shade-consumption-damage",
      name: "Shade consumption damage",
      details: [
        "20% increased Damage per Shade you have consumed in the past 5s",
      ],
    },
  ],
};
