import { Active } from "@/app/data/types";

export const barrage: Active = {
  id: "barrage",
  tier: 3,
  name: "Barrage",
  description: [
    "After a short wind up, attack 5 times dealing 52% Weapon Damage.",
    "Requires Dagger, Sword, Spear or Ranged.",
    "Can be cancelled by moving.",
  ],
  cost: {
    base: 80,
  },
  cooldown: 0,
  castTime: 1170,
  critChance: 8,
  ailmentChance: 15,
  tags: ["Warfare", "Active", "Weapon attack", "Exhaust"],
  modifiers: [
    {
      id: "consume-flow",
      label: "Consume Flow",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-overwhelm", label: "Consume Overwhelm" }],
      perks: [
        {
          id: "flow-damage",
          label: "Consumes Flow to deal %1% additional damage",
          baseValue: 50,
          perLevel: 25,
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume Overwhelm",
      maxRank: 5,
      cost: 1,
      incompatibles: [{ id: "consume-flow", label: "Consume Flow" }],
      perks: [
        {
          id: "overwhelm-damage",
          label: "Consumes full Overwhelm for %1% additional damage",
          baseValue: 50,
          perLevel: 25,
        },
      ],
    },
    {
      id: "punish",
      label: "Punish",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "conditional-damage",
          label:
            "Deals %1% additional damage against channeling or incapacitated enemies",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "enhanced-ailment",
      label: "Enhanced Ailment",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "ailment-bonus",
          label:
            "First attack has +30% added Base Ailment Chance. 50% more Ailment Chance.",
          baseValue: 50,
          perLevel: 50,
        },
      ],
    },
    {
      id: "ramp-up",
      label: "Ramp Up",
      maxRank: 3,
      cost: 1,
      incompatibles: [{ id: "lunge", label: "Lunge" }],
      perks: [
        {
          id: "stacking-bonus",
          label:
            "Every attack deals %1% additional damage and has %1% more Ailment Chance than the previous",
          baseValue: 4,
          perLevel: 4,
        },
      ],
    },
    {
      id: "extended-barrage",
      label: "Extended Barrage",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "lunge", label: "Lunge" }],
      perks: [
        {
          id: "extra-attacks",
          label: "+3 additional attacks",
        },
      ],
    },
    {
      id: "projectile-penetration",
      label: "Projectile Penetration",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "lunge", label: "Lunge" }],
      perks: [
        {
          id: "ranged-bonus",
          label:
            "Projectiles penetrate +%1 target, %1% more Projectile Speed. Ranged only.",
          baseValue: [1, 20],
          perLevel: [1, 20],
        },
      ],
    },
    {
      id: "enhanced-precision",
      label: "Enhanced Precision",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "crit-hit-chance",
          label: "100% more Critical Hit Chance",
          baseValue: 100,
          perLevel: 100,
        },
      ],
    },
    {
      id: "riposte",
      label: "Riposte",
      maxRank: 3,
      cost: 1,
      requires: [{ id: "lunge", label: "Lunge" }],
      perks: [
        {
          id: "store-damage",
          label:
            "Whenever an enemy hits you, %1% of Damage Taken is stored (up to %2). On use expends it as Pierce Damage.",
          baseValue: [40, 450],
          perLevel: [20, 150],
        },
      ],
    },
    {
      id: "lunge",
      label: "Lunge",
      maxRank: 3,
      cost: 1,
      incompatibles: [
        { id: "ramp-up", label: "Ramp up" },
        { id: "extended-barrage", label: "Extended Barrage" },
        { id: "projectile-penetration", label: "Projectile penetration" },
      ],
      perks: [
        {
          id: "lunge-effect",
          label:
            "Fast dash attack. Deals 50% more Damage against Channeling, Stuns for 1s and refunds 20% Energy. Requires Dagger, Sword or Spear.",
          baseValue: [50, 20],
          perLevel: [50, 20],
        },
      ],
    },
  ],
};
