import { fissure, roilingMagma } from "@/app/data/earth/actives/tier1";
import {
  earthEnchantment,
  flammeVolley,
  earthquake,
  coredweller,
} from "@/app/data/earth/actives/tier2";
import { ignite, ringOfFlame } from "@/app/data/earth/actives/tier3";
import { stoneForm, volcaniceruption } from "@/app/data/earth/actives/tier4";
import { Active, Tier } from "@/app/data/types";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [fissure, roilingMagma],
  },
  {
    level: 2,
    skills: [earthEnchantment, flammeVolley, earthquake, coredweller],
  },
  {
    level: 3,
    skills: [ignite, ringOfFlame],
  },
  {
    level: 4,
    skills: [volcaniceruption, stoneForm],
  },
];
