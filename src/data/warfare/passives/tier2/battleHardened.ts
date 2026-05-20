import { Passive } from "@/app/data/types";

export const battleHardened: Passive = {
  id: "battle-hardened",
  name: "Battle hardened",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "flat-health",
      label: "+%1 Health",
      baseValue: 10,
      perLevel: 10,
    },
    {
      id: "percent-health",
      label: "%1% increased Health",
      baseValue: 1.5,
      perLevel: 1.5,
    },
    {
      id: "armor",
      label: "%1% increased Armor",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "health",
      name: "Health",
      details: ["5% increased health"],
    },
    {
      id: "health-regeneration",
      name: "Health regeneration",
      details: ["20% increased health regeneration"],
    },
    {
      id: "armor",
      name: "Armor",
      details: ["10% increased armor"],
    },
  ],
};
