import { Passive } from "@/app/data/types";

export const arcaneShielding: Passive = {
  id: "arcane-shielding",
  name: "Arcane shielding",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increase-barrier",
      label: "1% increased Barrier",
      baseValue: 6,
      perLevel: 6,
    },
    {
      id: "barrier-regeneration",
      label: "+1% Barrier regeneration",
      baseValue: 7,
      perLevel: 6,
    },
  ],
  feats: [
    {
      id: "reservation",
      name: "Reservation",
      details: [
        "Reserve 10% of energy, gain Free Barrier equal to 66% of reserved energy",
      ],
    },
    {
      id: "barrier-decay",
      name: "Barrier decay",
      details: ["20% less Barrier Decay rate"],
    },
    {
      id: "barrier-cooldown",
      name: "Barrier cooldown",
      details: ["10% increased Barrier cooldown rate"],
    },
  ],
};
