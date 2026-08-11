import { Passive } from "@/app/data/types";

export const deathsDoor: Passive = {
  id: "deaths-door",
  name: "Death's door",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increased-damage-on-low-health",
      label: "%1% increased damage while you are on low health",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "increased-summons-damage-on-low-health",
      label:
        "Your Summons have %1% increased damage while you are on low health",
      baseValue: 5,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "increased-health",
      name: "Increased health",
      details: ["8% increased Health"],
    },
    {
      id: "reduced-self-damage",
      name: "Reduced self damage",
      details: ["Take 10% less Self-inflicted damage"],
    },
    {
      id: "low-health-threshold",
      name: "Low health threshold",
      details: ["+10% Low health threshold"],
    },
    {
      id: "damage-per-missing-health",
      name: "Damage per missing health",
      details: ["1% increased damage per 1% missing health"],
    },
    {
      id: "reduced-health-cost",
      name: "Reduced health cost",
      details: ["20% less health cost"],
    },
    {
      id: "skill-damage",
      name: "Skill damage",
      details: [
        "30% increased Damage with skills that cost Health",
        "10% increased Health cost",
      ],
    },
    {
      id: "health-on-kill",
      name: "Health on kill",
      details: [
        "When you or your Summons kill an enemy, recover 139 Health, if it was on Execution recover 348 Health instead",
      ],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+5% Critical hit chance while on low health"],
    },
  ],
};
