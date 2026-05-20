import { Passive } from "@/app/data/types";

export const overwhelmingForces: Passive = {
  id: "overwhelming-forces",
  name: "Overwhelming forces",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "summons-damage",
      label:
        "Consuming Overwhelming grants you and your Summons %1% increased Damage for 5s",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "damage",
      name: "Damage",
      details: [
        "Consuming Overwhelm grants you an additional 25% increased damage",
      ],
    },
    {
      id: "bulwark",
      name: "Bulwark",
      details: ["When you consume Overwhelm, gain 3 Bulwark"],
    },
    {
      id: "device-activation",
      name: "Device activation",
      details: [
        "When you consume Overwhelm, your activatable Devices recover 2 Activations",
      ],
    },
  ],
};
