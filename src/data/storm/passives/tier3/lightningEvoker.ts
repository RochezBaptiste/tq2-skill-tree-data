import { Passive } from "@/app/data/types";

export const lightningEvoker: Passive = {
  id: "lightning-evoker",
  name: "Lightning evoker",
  tier: 3,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "strike",
      label: "+%1 Lightning Strike damage",
      baseValue: 4,
      perLevel: 5,
    },
    {
      id: "hit-chance",
      label:
        "Whenever you use an active non-channel skill, there is a %1% chance to hit a random enemy within 12m with a Lightning Strike",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "evoker-damage",
      name: "Damage",
      details: ["+65 Lightning Strike damage"],
    },
    {
      id: "evoker-rage",
      name: "Rage",
      details: [
        "Whenever Rage oveflows, you have a 15% chance to hit a random enemy ina  12m radius with Lightning Strike",
      ],
    },
    {
      id: "evoker-shock",
      name: "Shock",
      details: ["Lightning Strikes have +20% base Ailment chance"],
    },
  ],
};
