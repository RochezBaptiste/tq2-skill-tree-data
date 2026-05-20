import { salvager, studyArmor } from "@/app/data/forge/passives/tier1";
import {
  curioCollector,
  forgedLegion,
  reinforcedWeaponry,
  elementalUtilization,
  armorSpikes,
} from "@/app/data/forge/passives/tier2";
import {
  expertBlueprints,
  fortifiedConstruction,
  hardenedBulwark,
  overwhelmingForces,
} from "@/app/data/forge/passives/tier3";
import {
  elementalEngraving,
  heatOfTheForge,
  improvedDevices,
} from "@/app/data/forge/passives/tier4";
import { Passive, Tier } from "@/app/data/types";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [salvager, studyArmor],
  },
  {
    level: 2,
    skills: [
      forgedLegion,
      curioCollector,
      reinforcedWeaponry,
      elementalUtilization,
      armorSpikes,
    ],
  },
  {
    level: 3,
    skills: [
      fortifiedConstruction,
      expertBlueprints,
      overwhelmingForces,
      hardenedBulwark,
    ],
  },
  {
    level: 4,
    skills: [improvedDevices, heatOfTheForge, elementalEngraving],
  },
];
