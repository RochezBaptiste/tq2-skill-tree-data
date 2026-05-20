export type MasteryData = {
  passive: Tier<Passive>[];
  active: Tier<Active>[];
};

export type Stat = {
  id: string;
  label: string;
  baseValue: number;
  perLevel: number;
  format?: "percent" | "flat";
};

export type Feat = {
  id: string;
  name: string;
  details: string[];
};

export type Passive = {
  id: string;
  tier: number;
  name: string;
  max: number;
  unlockAt: number[];
  stats: Perk[];
  feats: Feat[];
};

export type Tier<T> = {
  level: number;
  skills: T[];
};

export type Modifier = {
  id: string;
  label: string;
  maxRank: number;
  cost: number;
  tags?: string[];
  requires?: { id: string; label: string }[];
  incompatibles?: { id: string; label: string }[];
  perks: Perk[];
};

export type Perk = {
  id: string;
  baseValue?: number | number[];
  perLevel?: number | number[];
  label: string;
};

export type Active = {
  id: string;
  tier: number;
  name: string;
  description: string[];
  cost: {
    base?: number;
    reserved?: number;
    reccuring?: number;
    divineCore?: number;
  };
  cooldown: number; //ms
  castTime: number; //ms
  critChance?: number; //percent
  ailmentChance?: number; //percent
  tags: string[];
  modifiers: Modifier[];
};
