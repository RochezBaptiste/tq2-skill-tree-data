import { activeTier } from "@/app/data/forge/actives";
import { passiveTiers } from "@/app/data/forge/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData = {
  active: activeTier,
  passive: passiveTiers,
};
