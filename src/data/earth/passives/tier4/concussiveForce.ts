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
      label: "%1% increased stagger chance",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "stagger-power",
      label: "%1% increased power chance",
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
      id: "ignite",
      name: "Ignite",
      details: [
        "When you apply burn, 2% chance per burn stack on target to trigger Ignite",
      ],
    },
    {
      id: "chance",
      name: "Chance",
      details: ["50% increased burn chance", "20% reduced burn power"],
    },
    {
      id: "power",
      name: "Power",
      details: ["50% increased burn power", "20% reduced burn chance"],
    },
  ],
};
