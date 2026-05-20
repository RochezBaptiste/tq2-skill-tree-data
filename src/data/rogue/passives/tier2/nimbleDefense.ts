import { Passive } from "@/app/data/types";

export const nimbleDefense: Passive = {
  id: "nimble-defense",
  name: "Nimble defense",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "movement-skill-cdr",
      label: "%1% increased movement skill cooldown speed",
      baseValue: 6,
      perLevel: 3,
    },
    {
      id: "glancing-hit-chance",
      label: "+%1% glancing hit chance",
      baseValue: 4,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "glancing-projectil",
      name: "Glancing projectil",
      details: [
        "+15% Glancing projectile hit chance",
        "-5% glancing melee hit chance",
      ],
    },
    {
      id: "glancing-blow",
      name: "Glancing blow",
      details: [
        "+15% glancing melee hit chance",
        "-5% Glancing projectile hit chance",
      ],
    },
    {
      id: "movement-skill",
      name: "Movement skill cooldown rate",
      details: ["15% increased movement skill cooldown rate"],
    },
  ],
};
