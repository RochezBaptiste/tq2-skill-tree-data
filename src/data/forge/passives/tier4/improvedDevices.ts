import { Passive } from "@/app/data/types";

export const improvedDevices: Passive = {
  id: "improved-devices",
  name: "Improved Devices",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "activation-chance",
      label: "Your activatable Devices have +%1% Double Activation chance",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "activation",
      label: "Your activatable Devices have %1% increased Activations",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "activation",
      name: "Activation",
      details: ["Your activatable Devices have 25% increased Activations"],
    },
    {
      id: "double-activation",
      name: "Double activation",
      details: ["Your activatable Devices have +10% Double Activation chance"],
    },
    {
      id: "immunity",
      name: "Immunity",
      details: ["Your Devices are immune to damage for 2s after creation"],
    },
  ],
};
