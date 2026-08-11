import { Passive, Tier } from "@/app/data/types";
import {
  netherCurrent,
  artifactsOfTheUnderworld,
  umbralRites,
  shadowForce,
} from "./passives/tier1/";
import {
  otherworldlyArmy,
  ephemeralRites,
  spiritConduit,
  witheringTouch,
  enervatingCurrent,
  layeredVeil,
} from "./passives/tier2/";
import {
  undyingHost,
  inevitability,
  finality,
  serenity,
  darkArts,
  deathsDoor,
} from "./passives/tier3";
import {
  echoingWard,
  frozenLament,
  ichorSurge,
  stolenBreath,
  tollOfPassage,
  unrelentingHorde,
} from "./passives/tier4";
import {
  bitterMalice,
  etherealReach,
  foulMiasma,
  unlivingDominion,
} from "./passives/tier5";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [shadowForce, umbralRites, artifactsOfTheUnderworld, netherCurrent],
  },
  {
    level: 2,
    skills: [
      otherworldlyArmy,
      ephemeralRites,
      witheringTouch,
      spiritConduit,
      enervatingCurrent,
      layeredVeil,
    ],
  },
  {
    level: 3,
    skills: [
      undyingHost,
      inevitability,
      finality,
      serenity,
      darkArts,
      deathsDoor,
    ],
  },
  {
    level: 4,
    skills: [
      unrelentingHorde,
      stolenBreath,
      tollOfPassage,
      frozenLament,
      ichorSurge,
      echoingWard,
    ],
  },
  {
    level: 5,
    skills: [bitterMalice, unlivingDominion, foulMiasma, etherealReach],
  },
];
