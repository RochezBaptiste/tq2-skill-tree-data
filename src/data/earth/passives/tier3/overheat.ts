import { Passive } from "@/app/data/types";

export const overheat: Passive = {
  id: "overheat",
  name: "Overheat",
  tier: 3,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "overload-damage",
      label: "%1% increased damage with overload abilities",
      baseValue: 10,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "barrier",
      name: "Barrier",
      details: ["Gain 240 barrier for every overload you cleanse"],
    },
    {
      id: "energy",
      name: "Energy",
      details: ["Recover 3 energy for every overload generated"],
    },
    {
      id: "fire-damage",
      name: "Fire damage",
      details: ["2% increased fire damage per overload"],
    },
  ],
};
