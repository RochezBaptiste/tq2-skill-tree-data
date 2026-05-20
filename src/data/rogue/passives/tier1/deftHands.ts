import { Passive } from "@/app/data/types";

export const deftHands: Passive = {
  id: "deft-hands",
  name: "Deft hands",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "damage",
      label: "%1% increased damage",
      baseValue: 6,
      perLevel: 3,
    },
    {
      id: "attack-speed",
      label: "%1% increased attack speed",
      baseValue: 4,
      perLevel: 1,
    },
    {
      id: "cast-speed",
      label: "%1% increased cast speed",
      baseValue: 4,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["20% increased ailment chance"],
    },
    {
      id: "attack-and-cast-speed",
      name: "Attack and cast speed",
      details: ["6% increased attack speed", "6% increased Cast speed"],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["3% Critical hit chance"],
    },
  ],
};
