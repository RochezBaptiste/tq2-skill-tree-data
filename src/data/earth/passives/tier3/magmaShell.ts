import { Passive } from "@/app/data/types";

export const magmaShell: Passive = {
  id: "magma-shell",
  name: "Magma shell",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "health",
      label: "%1% increased health",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "armor-value",
      label: "%1% increased armor value",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "fire-resistance",
      label: "%1% fire resistance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "fire-resistance",
      name: "Fire resistance",
      details: ["+3% maximum fire resistance", "+10% fire resistance"],
    },
    {
      id: "fire-retaliation",
      name: "Fire retaliation",
      details: ["+5 fire retaliation", "+20% increased retaliation damage"],
    },
    {
      id: "overload",
      name: "Overload",
      details: ["Take 10% less damage from overload"],
    },
  ],
};
