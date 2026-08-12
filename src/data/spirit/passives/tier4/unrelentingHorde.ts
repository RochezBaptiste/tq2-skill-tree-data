import { Passive } from "@/app/data/types";

export const unrelentingHorde: Passive = {
  id: "unrelenting-horde",
  name: "Unrelenting Horde",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-summon-damage",
      label: "Your Summons have %1% increased Damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "increased-summon-all-speed",
      label: "Your Summons have %1% increased all speed",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "increasing-summon-crit-damage",
      name: "Increasing Summon crit damage",
      details: [
        "Your Summons have +0.3% Critical hit damage for every second they were alive up to 9%",
      ],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 30% increased Damage"],
    },
    {
      id: "summon-speed",
      name: "Summon speed",
      details: ["Your Summons have 10% increased All speed"],
    },
    {
      id: "summon-critical-hit-chance",
      name: "Summon critical hit chance",
      details: ["Your Summons have +5% Critical hit chance"],
    },
    {
      id: "increasing-summon-critical-chance",
      name: "Increasing summon crit chance",
      details: [
        "Your Summons have +0.2% Critical hit chance for every second they were alive up to 7%",
      ],
    },
  ],
};
