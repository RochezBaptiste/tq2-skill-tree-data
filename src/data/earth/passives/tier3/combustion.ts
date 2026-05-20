import { Passive } from "@/app/data/types";

export const combustion: Passive = {
  id: "combustion",
  name: "Combustion",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "fire-damage",
      label: "%1% increased fire damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "explosion-chance",
      label: "%1% chance to cause an explosion when you kill a burning ennemy",
      baseValue: 25,
      perLevel: 0,
    },
    {
      id: "explosion-damage",
      label: "+128 explosion fire damage",
    },
    {
      id: "explosion-radius",
      label: "+%1 explosion radius",
      baseValue: 2,
      perLevel: 0.2,
    },
  ],
  feats: [
    {
      id: "chance",
      name: "Change",
      details: ["+10% chance for explosion"],
    },
    {
      id: "damage",
      name: "Damage",
      details: ["Explosion has -0.5m radius and 50% more damage"],
    },
    {
      id: "radius",
      name: "Radius",
      details: ["Explosion has +0.5m radius"],
    },
  ],
};
