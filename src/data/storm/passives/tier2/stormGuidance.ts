import { Passive } from "@/app/data/types";

export const stormGuidance: Passive = {
  id: "storm-guidance",
  name: "Storm guidance",
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
      id: "projectile-homing",
      label: "%1% increased projectile homing",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "projectile-range",
      label: "%1% increased projectile range",
      baseValue: 8,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "homing",
      name: "Homing",
      details: [
        "30% increased projectile Homing",
        "20% reduced projectile Speed",
      ],
    },
    {
      id: "penetration",
      name: "Penetration",
      details: ["30% increased projectile penetration"],
    },
    {
      id: "speed",
      name: "Speed",
      details: [
        "30% increased projectile speed",
        "20% increased projectile range",
      ],
    },
  ],
};
