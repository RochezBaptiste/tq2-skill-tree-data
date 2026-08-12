import { Passive } from "@/app/data/types";

export const finality: Passive = {
  id: "finality",
  name: "Finality",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-doom-damage",
      label: "%1% increased Doom damage",
      baseValue: 10,
      perLevel: 10,
    },
    {
      id: "increased-doom-lifesteal",
      label: "%1% increased Doom lifesteal",
      baseValue: 5,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "maximum-doom",
      name: "Maximum doom",
      details: ["+5 Maximum Doom"],
    },
    {
      id: "rip-tear",
      name: "Rip & Tear",
      details: ["+2,374 Execution Threshold against Doomed enemies"],
    },
    {
      id: "ailment-exploit",
      name: "Ailment exploit",
      details: [
        "30% increased Doom Damage against enemies affected by an Ailment",
      ],
    },
    {
      id: "doom-explosion",
      name: "Doom explosion",
      details: ["Unlocks Doom explosion"],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% Critical hit chance against Doomed enemies"],
    },
  ],
};
