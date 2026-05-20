import { Passive } from "@/app/data/types";

export const cremation: Passive = {
  id: "cremation",
  name: "Cremation",
  tier: 4,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "burn-chance",
      label: "%1% increased burn chance",
      baseValue: 10,
      perLevel: 5,
    },
    {
      id: "burn-power",
      label: "%1% increased burn power",
      baseValue: 10,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "ignite",
      name: "Ignite",
      details: [
        "When you apply burn, 2% chance per burn stack on target to trigger Ignite",
      ],
    },
    {
      id: "chance",
      name: "Chance",
      details: ["50% increased burn chance", "20% reduced burn power"],
    },
    {
      id: "power",
      name: "Power",
      details: ["50% increased burn power", "20% reduced burn chance"],
    },
  ],
};
