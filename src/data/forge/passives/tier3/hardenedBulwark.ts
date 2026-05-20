import { Passive } from "@/app/data/types";

export const hardenedBulwark: Passive = {
  id: "hardened-bulwark",
  name: "Hardened Bulwark",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "bulwark-effect",
      label: "%1% increased Bulwark effect",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "armor",
      label: "+%1% Armor",
      baseValue: 83,
      perLevel: 84,
    },
  ],
  feats: [
    {
      id: "spiked-bulwark",
      name: "Spiked Bulwark",
      details: ["Unlocks Spiked Bulwark", "+32 Pierce Retaliation"],
    },
    {
      id: "minimum-bulwark",
      name: "Bulwark",
      details: ["+3 Minimum Bulwark while you have a shield equipped"],
    },
    {
      id: "maximum-bulwark ",
      name: "Device activation",
      details: ["+2 Maximum Bulwark"],
    },
  ],
};
