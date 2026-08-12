import { Passive } from "@/app/data/types";

export const undyingHost: Passive = {
  id: "undying-host",
  name: "Undying host",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-increased-health",
      label: "Your Summons have %1% increased Health",
      baseValue: 6,
      perLevel: 6,
    },
    {
      id: "summons-vitality-damage",
      label: "Your Summons have +%1% Vitality Resistance",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summons-glancing-hits-chance",
      label: "Your Summons have +%1% Glancing hits chance",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "vitality-resistance",
      name: "Vitality resistance",
      details: [
        "Your Summons have +5% maximum Vitality resistance",
        "Your Summons have +10% Vitality resistance",
      ],
    },
    {
      id: "summon-health",
      name: "Summon health",
      details: ["Your Summons have 25% increased Health"],
    },
    {
      id: "summon-speed",
      name: "Summon speed",
      details: [
        "Your Summons gain 0.5% increased All Speed per second they are alive up to 20%",
      ],
    },
    {
      id: "summon-cooldown-rate",
      name: "Summon cooldown rate",
      details: [
        "Your Summons gain 1% increased Cooldown rate per second they are alive up to 35%",
      ],
    },
  ],
};
