import { Passive } from "@/app/data/types";

export const torment: Passive = {
  id: "torment",
  name: "Torment",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "damage-time",
      label: "%1% increased damage over time",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "crit-damage",
      label: "+%1% increased Ailment chance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["+20% increased Ailment chance"],
    },
    {
      id: "damage-time",
      name: "Damage over time",
      details: ["+20% increased Damage over time with active skills"],
    },
    {
      id: "ailment-amount",
      name: "Ailment amount",
      details: ["+2 Maximum Ailment stacks for all types"],
    },
  ],
};
