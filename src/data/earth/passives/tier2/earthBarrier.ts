import { Passive } from "@/app/data/types";

export const earthBarrier: Passive = {
  id: "earth-barrier",
  name: "Earth barrier",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "barrier",
      label: "%1% increased barrier",
      baseValue: 7,
      perLevel: 7,
    },
    {
      id: "armor",
      label: "%1% increased armor",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "armor-flat",
      name: "Armor",
      details: ["+405 armor"],
    },
    {
      id: "barrier-decay-threshold",
      name: "Barrier decay threshold",
      details: ["Gain 10% of energy as barrier decay threshold"],
    },
    {
      id: "barrier-decay",
      name: "Barrier decay",
      details: ["20% less barrier decay rate"],
    },
  ],
};
