import { Passive } from "@/app/data/types";

export const inevitability: Passive = {
  id: "inevitability",
  name: "Inevitability",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "execution-threshold",
      label: "+475 Execution Threshold",
    },
  ],
  feats: [
    {
      id: "ailment-mortality",
      name: "Ailment - Mortality",
      details: ["Unlocks Ailment - Mortality"],
    },
    {
      id: "execution-against-incapacitated",
      name: "Execution agains incapacitated",
      details: ["+7,122 Execution Threshold agains Incapacitated enemies"],
    },
    {
      id: "shade-regeneration",
      name: "Shade regeneration",
      details: [
        "On kill, progress Shade generation by 5% if it was an Execution progress Shade generation by 10% instead",
      ],
    },
    {
      id: "mortality-summons",
      name: "Mortality - Summons",
      details: ["Unlocks Mortality - Summons"],
    },
    {
      id: "vulnerable-execution",
      name: "Vulnerable execution",
      details: ["+2,374 execution Threshold against Vulnerable enemies"],
    },
  ],
};
