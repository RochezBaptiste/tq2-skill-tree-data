import { Passive } from "@/app/data/types";

export const serenity: Passive = {
  id: "serenity",
  name: "Serenity",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-maximum-energy",
      label: "%1% increased Maximum Energy",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "free-energy-reservation",
      label: "+%1 Free Energy Reservation",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "health-to-energy",
      name: "Health to energy",
      details: ["Reserve 20% Health", "30% increased Maximum Energy"],
    },
    {
      id: "energy-regeneration",
      name: "Energy regeneration",
      details: [
        "12% increased Energy Regeneration if you control at least 3 Summons",
      ],
    },
    {
      id: "ether-shield",
      name: "Ether Shield",
      details: ["+30 Maximum Energy", "Unlock Ether Shield"],
    },
    {
      id: "free-energy-reservation",
      name: "Free energy reservation",
      details: ["+100 free Energy Reservation", "-50 Maximum Energy"],
    },
    {
      id: "maximum-energy",
      name: "Maximum energy",
      details: ["8% increased Maximum Energy"],
    },
  ],
};
