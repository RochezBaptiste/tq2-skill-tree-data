import { Passive } from "@/app/data/types";

export const stormAttunement: Passive = {
  id: "storm-attunement",
  name: "Storm attunement",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "lightning-damage",
      label: "%1% increased lightning damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "cold-damage",
      label: "%1% increased cold damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "summon-damage",
      label: "Your summons have %1% increased Damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "projectile-damage",
      name: "Projectile damage",
      details: ["18% increased Projectile damage"],
    },
    {
      id: "spell-damage",
      name: "Spell damage",
      details: [
        "10% increased Cold and Lightning spell damage",
        "4% increased Cast speed",
      ],
    },
    {
      id: "weapon-damage",
      name: "Weapon damage",
      details: [
        "10% increased Cold and Lightning weapong damage",
        "4% increased attack speed",
      ],
    },
  ],
};
