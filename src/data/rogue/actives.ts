import { lethalStrike, trickShot } from "@/app/data/rogue/actives/tier1";
import {
  grenade,
  markForDeath,
  preparation,
} from "@/app/data/rogue/actives/tier2";
import { flicker, shadowClone, vanish } from "@/app/data/rogue/actives/tier3";
import { scattershot, bladespin } from "@/app/data/rogue/actives/tier4";
import { Active, Tier } from "@/app/data/types";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [lethalStrike, trickShot],
  },
  {
    level: 2,
    skills: [preparation, markForDeath, grenade],
  },
  {
    level: 3,
    skills: [vanish, flicker, shadowClone],
  },
  {
    level: 4,
    skills: [scattershot, bladespin],
  },
];
