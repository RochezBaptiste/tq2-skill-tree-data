import { Passive } from "@/app/data/types";

export const openWound: Passive = {
  id: "open-wound",
  name: "Open wound",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "rupture-chance",
      label: "%1% increased Rupture chance",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "rupture-damage",
      label: "+%1% increased Rupture damage",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "rupture-chance",
      name: "Rupture chance",
      details: ["+15% increased Rupture chance"],
    },
    {
      id: "rupture-damage",
      name: "Rupture damage",
      details: ["12% increased Rupture damage"],
    },
    {
      id: "rupture-mark-damage",
      name: "Rupture mark damage",
      details: [
        "+161 Rupture true damage",
        "This bonus is doubled against mark",
      ],
    },
  ],
};
