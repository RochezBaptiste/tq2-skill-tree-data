import {
  martialExpert,
  weaponProficiency,
} from "@/app/data/warfare/passives/tier1";
import {
  battleHardened,
  battleRage,
  combatRush,
  invokerOfWar,
  marksmanship,
} from "@/app/data/warfare/passives/tier2";
import {
  heartOfBattle,
  secondWind,
  versatileDefense,
  leadership,
} from "@/app/data/warfare/passives/tier3";
import { Passive, Tier } from "@/app/data/types";
import {
  frenziedRage,
  eviscerate,
  unyielding,
  stategos,
} from "@/app/data/warfare/passives/tier4";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [weaponProficiency, martialExpert],
  },
  {
    level: 2,
    skills: [
      combatRush,
      marksmanship,
      invokerOfWar,
      battleRage,
      battleHardened,
    ],
  },
  {
    level: 3,
    skills: [heartOfBattle, versatileDefense, secondWind, leadership],
  },
  {
    level: 4,
    skills: [frenziedRage, eviscerate, unyielding, stategos],
  },
];
