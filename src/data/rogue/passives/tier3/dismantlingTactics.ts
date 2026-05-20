import { Passive } from "@/app/data/types";

export const dismantlingTactics: Passive = {
  id: "dismantling-tactics",
  name: "Dismantling tactics",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "damage-to-mark",
      label: "%1% increased damage to your Mark",
      baseValue: 12,
      perLevel: 6,
    },
    {
      id: "on-kill-vitality-to-mark",
      label: "On kill, deal %1 vitality damage to your Mark",
      baseValue: 128,
      perLevel: 33,
    },
  ],
  feats: [
    {
      id: "crit-chance",
      name: "Critical hit chance",
      details: ["You have +5% Critical hit chance against your Mark"],
    },
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["You have 40% increased Lifesteal against your Mark"],
    },
    {
      id: "mark-resistance",
      name: "Mark resistance",
      details: ["Your Mark have -8% Resistances"],
    },
  ],
};
