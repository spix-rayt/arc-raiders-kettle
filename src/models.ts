export const Rarity = {
  Common: "Common",
  Uncommon: "Uncommon", 
  Rare: "Rare",
  Epic: "Epic",
  Legendary: "Legendary",
} as const;
export type Rarity = typeof Rarity[keyof typeof Rarity];

export const Category = {
  Nature: "Nature",
  Trinket: "Trinket",
  Topside: "Topside", 
  Misc: "Misc",
  Recyclable: "Recyclable",
  Ammunition: "Ammunition",
  Refined: "Refined",
  Basic: "Basic",
  QuickUse: "QuickUse",
  Modification: "Modification",
  Blueprint: "Blueprint",
  HandCannon: "HandCannon",
  AssaultRifle: "AssaultRifle",
  BattleRifle: "BattleRifle",
  Cosmetic: "Cosmetic",
  BackpackCharm: "BackpackCharm",
  Key: "Key",
  Pistol: "Pistol",
  Weapon: "Weapon",
  Augment: "Augment",
  LMG: "LMG",
  Shield: "Shield",
  Special: "Special",
  Shotgun: "Shotgun",
  SniperRifle: "SniperRifle",
  Material: "Material",
  Outfit: "Outfit",
  SMG: "SMG",
} as const;
export type Category = typeof Category[keyof typeof Category];

export class ItemAmount {
  item: Item;
  amount: number;

  constructor(item: Item, amount: number) {
    this.item = item;
    this.amount = amount;
  }
}

export class CraftSpaceSavingScore {
  item: Item;
  score: number | null;

  constructor(item: Item, score: number | null) {
    this.item = item;
    this.score = score;
  }
}

export interface Item {
  name: string;
  rarity: Rarity;
  category: Category;
  rawImagePath: string;
  imagePath: string;
  stackSize: number | null;
  craftedQuantity: number;
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
  rarity: Rarity;
  rawImagePath: string;
  tryingHeadshotsMakeSense: boolean;
  headshotMultiplier: number;
  increasedFireRateByLevel: number[];
  projectiles: number;
  magazineSizePerLevel: number[];
}

export interface Shield {
  name: string;
  amount: number;
  damageReduction: number;
  icon: string;
}