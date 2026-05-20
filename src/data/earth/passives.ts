import { arcaneAbudance, grandMagic } from "@/app/data/earth/passives/tier1";
import {
  earthAffliction,
  earthAttunement,
  earthBarrier,
  earthInvoker,
  earthWielder,
} from "@/app/data/earth/passives/tier2";
import {
  combustion,
  igneousPower,
  magmaShell,
  overheat,
} from "@/app/data/earth/passives/tier3";
import {
  stableBarrier,
  cremation,
  concussiveForce,
} from "@/app/data/earth/passives/tier4";
import { Passive, Tier } from "@/app/data/types";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [grandMagic, arcaneAbudance],
  },
  {
    level: 2,
    skills: [
      earthAttunement,
      earthAffliction,
      earthWielder,
      earthBarrier,
      earthInvoker,
    ],
  },
  {
    level: 3,
    skills: [combustion, overheat, magmaShell, igneousPower],
  },
  {
    level: 4,
    skills: [cremation, concussiveForce, stableBarrier],
  },
];
