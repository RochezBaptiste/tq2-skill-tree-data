import { Passive } from "@/app/data/types";

export const arcaneInflux: Passive = {
  id: "arcane-influx",
  name: "Arcane influx",
  tier: 1,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "energy-regen",
      label: "%1% increased energy regeneration",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "max-energy",
      label: "%1% increased energy",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "energy-regen",
      name: "Energy regeneration",
      details: ["10% increased energy regeneration"],
    },
    {
      id: "reservation",
      name: "Reservation",
      details: [
        "Reserve 10% Energy, gain 2.5% of Reserved Energy as Energy regeneration",
      ],
    },
    {
      id: "energy",
      name: "Energy",
      details: ["+30 Maximum energy", "Unlocks Ether Shield"],
    },
  ],
};
