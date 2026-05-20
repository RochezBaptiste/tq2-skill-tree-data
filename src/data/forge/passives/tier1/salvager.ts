import { Passive } from "@/app/data/types";

export const salvager: Passive = {
  id: "salvager",
  name: "Salvager",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "divine-core",
      label:
        "Gaining Divine cores grants you and you Summons %1% increased damage for 8s",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "drop-chance",
      label: "Ennemies have +%1% chance to drop double Divine cores",
      baseValue: 2,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "double-divine",
      name: "Double Divine cores",
      details: ["Ennemies have +15% chance to drop double Divine cores"],
    },
    {
      id: "max-divine",
      name: "Maximum Divine cores",
      details: ["+5 Maximum Divine cores"],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: [
        "Gaining Divine cores grants Summons an additional 40% increased damage",
      ],
    },
  ],
};
