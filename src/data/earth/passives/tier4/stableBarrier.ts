import { Passive } from "@/app/data/types";

export const stableBarrier: Passive = {
  id: "stable-barrier",
  name: "Stable barrier",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "increase-barrier",
      label: "%1% increased barrier",
      baseValue: 6,
      perLevel: 6,
    },
    {
      id: "barrier-decay",
      label: "+%1 Barrier decay threshold",
      baseValue: 33,
      perLevel: 33,
    },
  ],
  feats: [
    {
      id: "barrier",
      name: "Barrier",
      details: ["15% increased barrier"],
    },
    {
      id: "barrier-decay",
      name: "Barrier decay",
      details: ["20% less barrier decay rate"],
    },
  ],
};
