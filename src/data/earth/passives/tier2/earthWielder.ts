import { Passive } from "@/app/data/types";

export const earthWielder: Passive = {
  id: "earth-wielder",
  name: "Earth wielder",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "attack-damage",
      label: "%1% increased attack damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "spell-damage",
      label: "%1% increased spell damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased attack ailment chance"],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["3% Attack critical hit chance"],
    },
    {
      id: "attack-damage",
      name: "Attack damage",
      details: ["10% increased attack damage"],
    },
  ],
};
