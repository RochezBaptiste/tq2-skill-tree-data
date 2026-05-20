import { Passive } from "@/app/data/types";

export const stormProtection: Passive = {
  id: "storm-protection",
  name: "Storm protection",
  tier: 2,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "barrier-amount",
      label: "%1% increased barrier",
      baseValue: 7,
      perLevel: 7,
    },
    {
      id: "barrier-conversion-rate",
      label: "%1% increased barrier conversion rate",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "glancing-projectile-hit-chance",
      label: "+%1% glancing projectile hit chance",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "barrier-amount",
      name: "Barrier",
      details: ["10% increased barrier"],
    },
    {
      id: "barrier-decay",
      name: "Barrier Decay",
      details: ["20% less barrier DEcay rate"],
    },
    {
      id: "movement",
      name: "Movement",
      details: ["10% increased movement skill cooldown rate"],
    },
  ],
};
