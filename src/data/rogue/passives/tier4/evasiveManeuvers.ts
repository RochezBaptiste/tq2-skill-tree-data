import { Passive } from "@/app/data/types";

export const evasiveManeuvers: Passive = {
  id: "evasive-maneuvers",
  name: "Evasive maneuvers",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "glancing-hit-chance",
      label: "+%1% Glancing hit chance ",
      baseValue: 4,
      perLevel: 2,
    },
    {
      id: "cooldown",
      label:
        "When you take a Glancing hit, gain 200 Barrier, not more than once every %1s",
      baseValue: 6,
      perLevel: -0.2,
    },
  ],
  feats: [
    {
      id: "heal",
      name: "Heal on Glancing hits",
      details: [
        "When you take a Glancing hit, heal for 10% of the reduced damage",
      ],
    },
    {
      id: "movement-skill",
      name: "Movement skill",
      details: [
        "After using a Movement skill, gain +8% Glancing hit damage reduction",
        "Decay by 1% every second",
      ],
    },
    {
      id: "damage-reduction",
      name: "Glancing hits damage reduction",
      details: [
        "+5% Glancing hits damage reduction",
        "-10% Glancing hits chance",
      ],
    },
  ],
};
