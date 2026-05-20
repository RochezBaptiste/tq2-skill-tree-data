import { heavyAttack, sweepingStrike } from "@/app/data/warfare/actives/tier1";
import { doomHorn, leap, stomp } from "@/app/data/warfare/actives/tier2";
import {
  barrage,
  rainOfArrows,
  battlefieldAwareness,
} from "@/app/data/warfare/actives/tier3";
import { Active, Tier } from "@/app/data/types";
import { valor, warBanner } from "@/app/data/warfare/actives/tier4";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [heavyAttack, sweepingStrike],
  },
  {
    level: 2,
    skills: [stomp, doomHorn, leap],
  },
  {
    level: 3,
    skills: [barrage, rainOfArrows, battlefieldAwareness],
  },
  {
    level: 4,
    skills: [valor, warBanner],
  },
];
