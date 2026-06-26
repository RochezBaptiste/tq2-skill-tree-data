import { Passive } from "@/app/data/types";

export const unerringStorm: Passive = {
  id: "unerring-storm",
  name: "Unerring Storm",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "light-damage",
      label: "%1% increased Lightning damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "cold-damage",
      label: "%1% increased Cold damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "crit-multiplier",
      label: "+%1% Critical hit damage multiplier",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "crit-chance",
      name: "Critical hit chance",
      details: ["+3% Critical hit chance"],
    },
    {
      id: "crit-damage",
      name: "Critical hit damage",
      details: ["+10% Critical hit damage multiplier"],
    },
    {
      id: "high-crit",
      name: "High critical hit damage",
      details: [
        "+20% Critical hit damage multiplier",
        "10% reduced Critical hit chance",
      ],
    },
  ],
};
