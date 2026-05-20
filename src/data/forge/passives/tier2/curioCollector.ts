import { Passive } from "@/app/data/types";

export const curioCollector: Passive = {
  id: "curio-collector",
  name: "Curio collectior",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "max-divine",
      label: "+%1 Maximum Divine cores",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "divine-drop",
      label: "Ennemies have +%1% chance to drop double Divine cores",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "divine-range",
      label: "%1% increased Divine core collection range",
      baseValue: 2,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "max-divine",
      name: "Maximum Divine cores",
      details: ["+5 Maximum Divine cores"],
    },
    {
      id: "core-generator",
      name: "Divine core generator",
      details: ["while below 10 Divine cores, gain 1 Divine cores every 2s"],
    },
    {
      id: "collection-range",
      name: "Divine core collection range",
      details: ["60% increased Divine core collection range"],
    },
  ],
};
