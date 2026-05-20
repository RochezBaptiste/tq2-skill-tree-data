import { accuracy, deftHands } from "@/app/data/rogue/passives/tier1";
import {
  anatomy,
  deadlyAffliction,
  nimbleDefense,
  remoteTactics,
  toxinDistillation,
} from "@/app/data/rogue/passives/tier2";
import {
  dismantlingTactics,
  shadowArts,
  sleightOfHand,
  tasteForBlood,
  volatileConcoction,
} from "@/app/data/rogue/passives/tier3";
import {
  artOfDeath,
  evasiveManeuvers,
  openWound,
  surgicalPrecision,
  torment,
} from "@/app/data/rogue/passives/tier4";
import { Passive, Tier } from "@/app/data/types";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [accuracy, deftHands],
  },
  {
    level: 2,
    skills: [
      anatomy,
      toxinDistillation,
      deadlyAffliction,
      nimbleDefense,
      remoteTactics,
    ],
  },
  {
    level: 3,
    skills: [
      tasteForBlood,
      volatileConcoction,
      shadowArts,
      sleightOfHand,
      dismantlingTactics,
    ],
  },
  {
    level: 4,
    skills: [
      surgicalPrecision,
      openWound,
      artOfDeath,
      torment,
      evasiveManeuvers,
    ],
  },
];
