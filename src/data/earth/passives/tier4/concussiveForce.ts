import { Passive } from "@/app/data/types";

export const concussiveForce: Passive = {
  id: "concussive-force",
  name: "Concussive Force",
  tier: 4,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "stagger-unlock",
      label: "Unlocks stagger - Stun",
    },
    {
      id: "stagger-def",
      label:
        "Stagger - Stun. When you apply stagger, you have +1% chance per Staggered stack on target to Stun for 1.5s",
    },
    {
      id: "physical-damage",
      label: "%1% increased physical damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "stagger-chance",
      label: "%1% increased staggered chance",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "stagger-power",
      label: "%1% increased staggered power",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "stun-duration",
      label: "%1% increased stun duration",
      baseValue: 6,
      perLevel: 0,
    },
  ],
  feats: [
    {
      id: "stagger-amount",
      name: "Stagger amount",
      details: ["+3 Maximum Stagger"],
    },
    {
      id: "stun-duration",
      name: "Stun duration",
      details: ["10% increased Stun duration"],
    },
    {
      id: "damage-on-immobilized",
      name: "Damage on immobilized",
      details: ["30% increased damage against Immobilized enemies"],
    },
  ],
};
