import { Passive } from "@/app/data/types";

export const umbralRites: Passive = {
  id: "umbral-rites",
  name: "Umbral rites",
  tier: 1,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "increased-damage",
      label: "%1% increased damage with Soulburn skills",
      baseValue: 5,
      perLevel: 10,
    },
    {
      id: "shade-generation",
      label: "%1% increased Shade generation Rate",
      baseValue: 3,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "maximum-shades",
      name: "Maximum shades",
      details: ["+1 Maximum Shades"],
    },
    {
      id: "combo",
      name: "Combo",
      details: [
        "When you consume Elemental Infusion, Flow or Overwhelm, gain 25% Shade generation",
      ],
    },
    {
      id: "shades-for-energy-spent",
      name: "Shades for energy spent",
      details: ["For every 20 Energy spent globally, gain 1% Shade generation"],
    },
    {
      id: "shades-for-summon-death",
      name: "Shades for Summon death",
      details: [
        "When a Lesser Summon you control dies, gain 10% Shade generation",
        "When a Greater Summon you control dies, gain 50% Shade generation",
      ],
    },
    {
      id: "shade-generation",
      name: "Shade generation",
      details: ["20% increased Shade generation rate"],
    },
    {
      id: "critical-soulburn",
      name: "Critical soulburn",
      details: [
        "+5% Critical hit chance with Soulburn skills",
        "+5% Critical hit damage multiplier",
      ],
    },
  ],
};
