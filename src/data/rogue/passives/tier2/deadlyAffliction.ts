import { Passive } from "@/app/data/types";

export const deadlyAffliction: Passive = {
  id: "deadly-affliction",
  name: "Deadly affliction",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "ailment-chance",
      label: "%1% increased Ailment chance",
      baseValue: 3,
      perLevel: 4,
    },
    {
      id: "ailment-power",
      label: "%1% increased Ailment power",
      baseValue: 8,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["20% increased ailment chance"],
    },
    {
      id: "ailment-amount",
      name: "Ailment amount",
      details: ["+2 Maximum stacks to all Ailments"],
    },
    {
      id: "ailment-power",
      name: "Ailment power",
      details: ["20% increased ailment power"],
    },
  ],
};
