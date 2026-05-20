import { Passive } from "@/app/data/types";

export const invokerOfWar: Passive = {
  id: "invoker-of-war",
  name: "Invoker of war",
  tier: 2,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "spell-rage",
      label:
        "Unlocks Spell Rage - Rage also grants 1% increased Total spell damage per stack. 1% increased Cast speed per stack",
    },
    {
      id: "spell-damage",
      label: "%1% increased Spell damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "attack-damage",
      label: "%1% increased Attack damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "cast-speed",
      name: "Cast speed",
      details: ["6% increased cast speed"],
    },
    {
      id: "spell-ailment-chance",
      name: "Spell ailment chance",
      details: ["30% increased spell ailment chance"],
    },
    {
      id: "spell-critical-hit-chance",
      name: "Spell critical hit chance",
      details: ["3% Spell critical hit chance"],
    },
  ],
};
