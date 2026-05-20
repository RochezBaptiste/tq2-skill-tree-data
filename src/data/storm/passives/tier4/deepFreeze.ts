import { Passive } from "@/app/data/types";

export const deepFreeze: Passive = {
  id: "deep-freeze",
  name: "Deep freeze",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "unlock",
      label:
        "Unlock Chill - Freeze: When you apply chill you have a +1% chance per chilled stak on target to freeze fo 1.5s",
    },
    {
      id: "chill-chance",
      label: "%1% increased chill chance",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "freeze-duration",
      label: "%1% increased freeze duration",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "damage-immobilized",
      label: "%1% increased damage against immobilized ennemies",
      baseValue: 5,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "freeze-duration",
      name: "Freeze duration",
      details: ["10% increased freeze duration"],
    },
    {
      id: "chill-duration",
      name: "Chill duration",
      details: ["20% increased chill duration"],
    },
    {
      id: "chill-amount",
      name: "Chill amount",
      details: ["+3 Maximum chill"],
    },
  ],
};
