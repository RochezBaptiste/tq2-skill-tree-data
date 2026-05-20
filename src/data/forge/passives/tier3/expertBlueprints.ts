import { Passive } from "@/app/data/types";

export const expertBlueprints: Passive = {
  id: "expert-blueprints",
  name: "Expert blueprints",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "device-speed",
      label: "Your Devices have %1% increased all Speed",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "device-skill",
      label: "Your Device skills and Devices have %1% damage",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "device-damage",
      name: "Device damage",
      details: ["Your Device skills and DEvice have 30% increased damage"],
    },
    {
      id: "explosion",
      name: "Explosion",
      details: [
        "When you place a Device Summon, deal 481 Strike damage in a 2.5m radius around the Device",
      ],
    },
    {
      id: "activation-speed",
      name: "Activation speed",
      details: ["Your activatable Devices have 25% increased Activation speed"],
    },
  ],
};
