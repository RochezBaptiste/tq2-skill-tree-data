import { Passive } from "@/app/data/types";

export const battleRage: Passive = {
  id: "battle-rage",
  name: "Battle rage",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "rage-effect",
      label: "%1% increased Rage effect",
      baseValue: 8,
      perLevel: 8,
    },
  ],
  feats: [
    {
      id: "rage-overflow",
      name: "Rage overflow",
      details: ["Whenever Rage overflows, heal for 14"],
    },
    {
      id: "rage-amount",
      name: "Rage amount",
      details: ["+3 Maximum Rage"],
    },
    {
      id: "rage-on-kill",
      name: "Rage on kill",
      details: ["On kill, you have a 50% chance to gain 3 Rage"],
    },
  ],
};
