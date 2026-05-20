import { Passive } from "@/app/data/types";

export const arcaneAbudance: Passive = {
  id: "arcane-abundance",
  name: "Arcane abundance",
  tier: 1,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "max-energy",
      label: "+%1 maximum energy",
      baseValue: 14,
      perLevel: 7,
    },
    {
      id: "max-energy-percent",
      label: "%1% increased maximum energy",
      baseValue: 2,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "cost",
      name: "Cost",
      details: ["15% increased maximum energy", "10% increased skill cost"],
    },
    {
      id: "energy",
      name: "Energy",
      details: [
        "+30 maximum energy",
        "Unlocks Ether Shield - While above 50% energy, 10% of damage taken is absorbed by energy.",
      ],
    },
    {
      id: "regen",
      name: "Regen",
      details: ["Regenerate 1% of energy per second"],
    },
  ],
};
