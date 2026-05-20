import { Passive } from "@/app/data/types";

export const earthAffliction: Passive = {
  id: "earth-affliction",
  name: "Earth affliction",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "ailment-chance",
      label: "%1% increased ailment chance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "ailment-power",
      label: "%1% increased ailment power",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "ailment-amount",
      name: "Ailment amount",
      details: ["+2 maximum stacks to all ailments"],
    },
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["10% increased ailment chance"],
    },
    {
      id: "ailment-power",
      name: "Ailment power",
      details: ["5% increased ailment power"],
    },
  ],
};
