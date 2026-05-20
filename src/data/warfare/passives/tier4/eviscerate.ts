import { Passive } from "@/app/data/types";

export const eviscerate: Passive = {
  id: "eviscerate",
  name: "Eviscerate",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "unlock",
      label:
        "Unlocks Bleeed - Rupture: When you apply Bleed you have a +1% chance per Bleed stack on target to cause Rupture",
    },
    {
      id: "bleed-chance",
      label: "%1 increased Bleed chance",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "bleed-damage",
      label: "%1 increased Bleed damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "rupture-damage",
      label: "%1 increased Rupture damage",
      baseValue: 4,
      perLevel: 8,
    },
  ],
  feats: [
    {
      id: "rage",
      name: "Rage",
      details: ["Rupture deals +64 True damage per Rage"],
    },
    {
      id: "bleed-amount",
      name: "Bleed amount",
      details: ["+3 Maximum Bleed"],
    },
    {
      id: "bleed-duration",
      name: "Bleed duration",
      details: ["50% more Bleed duration", "40% less Bleed damage"],
    },
  ],
};
