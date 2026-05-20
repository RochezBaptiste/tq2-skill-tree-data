import { Active } from "@/app/data/types";

export const leap: Active = {
  id: "leap",
  tier: 2,
  name: "Leap",
  description: [
    "Leap to target location, dealing 645 Strike Damage on landing in a 2.0m radius around you.",
  ],
  cost: {
    base: 25,
  },
  cooldown: 12000,
  castTime: 610,
  critChance: 0,
  ailmentChance: 10,
  tags: ["Warfare", "Active", "Movement", "Area", "Exhaust"],
  modifiers: [
    {
      id: "escape",
      label: "Escape",
      maxRank: 2,
      cost: 2,
      incompatibles: [
        { id: "slam-attack", label: "Slam Attack" },
        { id: "seismic-leap", label: "Seismic Leap" },
        { id: "staggering-leap", label: "Staggering Leap" },
        { id: "rage-gain", label: "Rage Gain" },
        { id: "stun", label: "Stun" },
      ],
      perks: [
        {
          id: "cost-cooldown-reduction",
          label:
            "25% less Energy Cost, 20% less Cooldown Duration. Your Leap deals no damage.",
        },
      ],
    },
    {
      id: "slam-attack",
      label: "Slam Attack",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "escape", label: "Escape" }],
      perks: [
        {
          id: "weapon-damage",
          label:
            "Instead deals 197% Weapon Damage on landing. Melee and Staff only.",
        },
      ],
    },
    {
      id: "seismic-leap",
      label: "Seismic Leap",
      maxRank: 3,
      cost: 1,
      incompatibles: [{ id: "escape", label: "Escape" }],
      perks: [
        {
          id: "damage-landing",
          label: "10% more Damage on landing",
        },
        {
          id: "launch-damage",
          label:
            "Deal 4 Strike Damage in a 2.0m radius around your launch position",
        },
      ],
    },
    {
      id: "staggering-leap",
      label: "Staggering Leap",
      maxRank: 3,
      cost: 1,
      incompatibles: [{ id: "escape", label: "Escape" }],
      perks: [
        {
          id: "damage-stagger",
          label: "10% more Damage, has a secondary 30% Stagger Chance",
        },
      ],
    },
    {
      id: "rage-gain",
      label: "Rage Gain",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "rage-stacks",
          label: "Gain 1 Rage stacks if you hit any enemies on landing",
        },
      ],
    },
    {
      id: "stun",
      label: "Stun",
      maxRank: 2,
      cost: 1,
      perks: [
        {
          id: "stun-chance",
          label: "On launch and landing has 30% chance to Stun for 1.5s",
        },
        {
          id: "cooldown-increase",
          label: "+1s Base Cooldown Duration",
        },
      ],
    },
    {
      id: "cooldown-charge",
      label: "Cooldown Charge",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "charges",
          label: "+1 Cooldown Charges",
        },
        {
          id: "cooldown-increase",
          label: "+3s Base Cooldown Duration",
        },
      ],
    },
  ],
};
