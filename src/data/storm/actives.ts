import { callLightning, iceShards } from "@/app/data/storm/actives/tier1";
import {
  iceNova,
  lightningBolt,
  stormNimbus,
  wisp,
} from "@/app/data/storm/actives/tier2";
import { blink, cyclone } from "@/app/data/storm/actives/tier3";
import { frostbite, tempest } from "@/app/data/storm/actives/tier4";
import { Active, Tier } from "@/app/data/types";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [iceShards, callLightning],
  },
  {
    level: 2,
    skills: [stormNimbus, iceNova, lightningBolt, wisp],
  },
  {
    level: 3,
    skills: [cyclone, blink],
  },
  {
    level: 4,
    skills: [tempest, frostbite],
  },
];
