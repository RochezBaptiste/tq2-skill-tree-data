import { activeTier } from "@/app/data/earth/actives";
import { passiveTiers } from "@/app/data/earth/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData= {
  active: activeTier,
  passive: passiveTiers,
};
