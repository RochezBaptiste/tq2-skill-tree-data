import { Passive } from "@/app/data/types";

export const sleightOfHand: Passive = {
  id: "sleight-of-hand",
  name: "Sleight of hand",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "weapon-attack-damage",
      label: "%1% increased damage with weapon attacks",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "summon-damage",
      label: "Your summons have %1% increased damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "attack-speed",
      name: "Attack speed",
      details: ["8% increased attack speed"],
    },
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased spell ailment chance with Weapon attack"],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% spell critical hit chance with Weapon attacks"],
    },
  ],
};
