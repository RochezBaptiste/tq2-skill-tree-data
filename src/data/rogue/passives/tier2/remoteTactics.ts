import { Passive } from "@/app/data/types";

export const remoteTactics: Passive = {
  id: "remote-tactics",
  name: "Remote tactics",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summon-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "summon-crit",
      label: "Your Summons have +%1% critical hit chance",
      baseValue: 0.6,
      perLevel: 0.6,
    },
  ],
  feats: [
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 30% increased damage"],
    },
    {
      id: "summon-crit",
      name: "Summon critical hit",
      details: ["Your Summons have +5% critical hit chance"],
    },
    {
      id: "device-activations",
      name: "Device activations",
      details: ["Your activatable Devices have 25% increased Activations"],
    },
  ],
};
