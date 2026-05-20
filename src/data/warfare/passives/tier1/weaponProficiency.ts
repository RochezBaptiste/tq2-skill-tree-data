import { Passive } from "@/app/data/types";

export const weaponProficiency: Passive = {
  id: "weapon-proficiency",
  name: "Weapon proficiency",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "weapon-attack-damage",
      label: "%1% increased damage with weapon attacks",
      baseValue: 6,
      perLevel: 4,
    },
    {
      id: "attack-speed",
      label: "%1% increased attack speed",
      baseValue: 4,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased ailment chance with weapon attacks"],
    },
    {
      id: "attack-speed",
      name: "Attack speed",
      details: ["8% increased attack speed"],
    },
    {
      id: "critical-chance",
      name: "Critical chance",
      details: ["+3% Critical hit chance with weapon attacks"],
    },
  ],
};
