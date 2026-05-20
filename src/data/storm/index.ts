import { activeTier } from "@/app/data/storm/actives";
import { passiveTiers } from "@/app/data/storm/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData = {
  active: activeTier,
  passive: passiveTiers,
};
