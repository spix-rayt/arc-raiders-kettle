export const Rarity = {
  Common: "Common",
  Uncommon: "Uncommon", 
  Rare: "Rare",
  Epic: "Epic",
  Legendary: "Legendary",
} as const;

export const Category = {
  Nature: "Nature",
  Trinket: "Trinket",
  Topside: "Topside", 
  Misc: "Misc",
  Recyclable: "Recyclable",
  Ammunition: "Ammunition",
  Refined: "Refined",
  Basic: "Basic",
  QuickUse: "Quick Use"
} as const;

export type Rarity = typeof Rarity[keyof typeof Rarity];
export type Category = typeof Category[keyof typeof Category];

// Data class для связи предмета и его количества
export interface ItemAmount {
  item: Item;
  amount: number;
}

export interface Item {
  name: string;
  rarity: Rarity;
  category: Category[];
  recyclesToAtHome?: ItemAmount[];
  recyclesToAtTop?: ItemAmount[];
  craft?: ItemAmount[];
}

export interface Weapon {
  name: string;
  damage: number;
  range: number;
  agility: number;
  fireRate: number;
  stability: number;
  stealth: number;
  shotsPerSecond: number;
  rarity: Rarity,
  rawImagePath: string,
  tryingHeadshotsMakeSense: boolean,
  headshotMultiplier: number,
  increasedFireRateByLevel: number[],
  projectiles: number,
}

export interface Shield {
  name: string;
  amount: number;
  damageReduction: number;
  icon: string;
}