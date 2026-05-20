import { Passive } from "@/app/data/types";

export const artOfDeath: Passive = {
  id: "art-of-death",
  name: "Art of death",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "doom-damage",
      label: "%1% increased Doom damage",
      baseValue: 10,
      perLevel: 10,
    },
  ],
  feats: [
    {
      id: "doom-lifesteal",
      name: "Doom lifesteal",
      details: ["+5% added base lifesteal with Doom"],
    },
    {
      id: "doom-conversion",
      name: "Doom conversion",
      details: [
        "Doom is converted to Poison damage +10% base Ailment chance with Doom per stack",
      ],
    },
    {
      id: "doom-amount",
      name: "Doom amount",
      details: ["+5 Maximum Doom"],
    },
  ],
};
