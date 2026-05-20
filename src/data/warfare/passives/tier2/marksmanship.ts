import { Passive } from "@/app/data/types";

export const marksmanship: Passive = {
  id: "marksmanship",
  name: "Marksmanship",
  tier: 2,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "projectile-damage",
      label: "%1% increased projectile damage",
      baseValue: 10,
      perLevel: 5,
    },
    {
      id: "projectile-speed",
      label: "%1% increased projectile speed",
      baseValue: 10,
      perLevel: 5,
    },
  ],
  feats: [
    {
      id: "projectile-damage",
      name: "Projectile damage",
      details: [
        "25% increased projectile damage",
        "40% reduced projectile speed",
      ],
    },
    {
      id: "projectile-penetration",
      name: "Projectile penetration",
      details: ["40% increased projectile penetration"],
    },
    {
      id: "projectile-range",
      name: "Projectile range",
      details: ["25% increased Projectile speed and Projectile range"],
    },
  ],
};
