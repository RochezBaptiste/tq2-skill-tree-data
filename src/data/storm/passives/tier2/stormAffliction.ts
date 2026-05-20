import { Passive } from "@/app/data/types";

export const stormAffliction: Passive = {
  id: "storm-affliction",
  name: "Storm affliction",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "shock-and-chill-chance",
      label: "%1% increased shock and chill chance",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "shock-and-chill-power",
      label: "%1% increased shock and chill power",
      baseValue: 8,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "shock-power",
      name: "Power",
      details: ["20% increased Chilled and Shocked power"],
    },
    {
      id: "max-chill",
      name: "Max chill",
      details: ["+3 Max Chilled", "20% increased Chill chance"],
    },
    {
      id: "max-shock",
      name: "Max shock",
      details: ["+3 Max Shock", "20% increased Shock chance"],
    },
  ],
};
