import { Passive } from "@/app/data/types";

export const ragingMind: Passive = {
  id: "raging-mind",
  name: "Raging mind",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "unlock",
      label:
        "Unlock Spell rage: 1% increased Total spell damage per stack, 1% increased Cast speed per stack",
    },
    {
      id: "spell-damage",
      label: "%1% increased Spell damage",
      baseValue: 6,
      perLevel: 3,
    },
    {
      id: "cast-speed",
      label: "%1% increased Cast speed",
      baseValue: 4,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "cast-speed",
      name: "Cast speed",
      details: ["8% increased cast speed"],
    },
    {
      id: "spell-ailment-chance",
      name: "Ailment chance",
      details: ["30% increased Spell Ailment chance"],
    },
    {
      id: "spell-critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% Spell critical hit chance"],
    },
  ],
};
