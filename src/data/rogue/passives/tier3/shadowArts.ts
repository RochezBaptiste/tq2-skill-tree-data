import { Passive } from "@/app/data/types";

export const shadowArts: Passive = {
  id: "shadow-arts",
  name: "Shadow arts",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "spell-damage",
      label: "%1% increased spell damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "summon-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "cast-speed",
      name: "Cast speed",
      details: ["8% increased cast speed"],
    },
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased spell Ailment chance"],
    },
    {
      id: "crit-chance",
      name: "Critical hit chance",
      details: ["+3% Spell critical hit chance"],
    },
  ],
};
