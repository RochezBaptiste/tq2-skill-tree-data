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
  castTime: 1500,
  critChance: 5,
  ailmentChance: 10,
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
          label: "Consumes Flow for 50% more Damage",
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
          label: "Consumes full Overwhelm for 50% more Damage",
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
            "Deals 30% more Damage against channeling or incapacitated enemies",
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
            "Every attack deals 4% more Damage and has 4% more Ailment Chance than the previous",
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
            "Projectiles penetrate +1 target, 20% more Projectile Speed. Ranged only.",
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
            "Whenever an enemy hits you, 40% of Damage Taken is stored (up to 135). On use expends it as Pierce Damage.",
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
        },
      ],
    },
  ],
};
