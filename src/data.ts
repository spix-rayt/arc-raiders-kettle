import type { Item, ItemAmount } from "./models";
import { Rarity, Category } from "./models";

const LIGHT_AMMO: Item = {
  name: "Light Ammo",
  rarity: Rarity.Common,
  category: [Category.Ammunition]
}

const MEDIUM_AMMO: Item = {
  name: "Medium Ammo",
  rarity: Rarity.Common,
  category: [Category.Ammunition],
};

const HEAVY_AMMO: Item = {
  name: "Heavy Ammo",
  rarity: Rarity.Common,
  category: [Category.Ammunition],
};

const BASTION_CELL: Item = {
  name: "Bastion Cell",
  rarity: Rarity.Epic,
  category: [Category.Recyclable],
};
const EXODUS_MODULES: Item = {
  name: "Exodus Modules",
  rarity: Rarity.Epic,
  category: [Category.Topside],
};
const ADVANCED_ARC_POWERCELL: Item = {
  name: "Advanced Arc Powercell",
  rarity: Rarity.Rare,
  category: [Category.Topside],
};
const ANTISEPTIC: Item = {
  name: "Antiseptic",
  rarity: Rarity.Rare,
  category: [Category.Refined],
};
const ARC_COOLANT: Item = {
  name: "Arc Coolant",
  rarity: Rarity.Rare,
  category: [Category.Recyclable],
};

const DOOR_BLOCKER: Item = {
  name: "Door Blocker",
  rarity: Rarity.Common,
  category: [Category.QuickUse],
};

const METAL_PARTS: Item = {
  name: "Metal Parts",
  rarity: Rarity.Common,
  category: [Category.Basic],
};
const FABRIC: Item = {
  name: "Fabric",
  rarity: Rarity.Common,
  category: [Category.Basic],
};
const PLASTIC_PARTS: Item = {
  name: "Plastic Parts",
  rarity: Rarity.Common,
  category: [Category.Basic],
};
const CHEMICALS: Item = {
  name: "Chemicals",
  rarity: Rarity.Common,
  category: [Category.Basic],
};
const RUBBER_PARTS: Item = {
  name: "Rubber Parts",
  rarity: Rarity.Common,
  category: [Category.Basic],
};
const ASSORTED_SEEDS: Item = {
  name: "Assorted Seeds",
  rarity: Rarity.Common,
  category: [Category.Basic],
};

export const items: Item[] = [
  LIGHT_AMMO,
  MEDIUM_AMMO,
  HEAVY_AMMO,
  BASTION_CELL,
  EXODUS_MODULES,
  ADVANCED_ARC_POWERCELL,
  ANTISEPTIC,
  ARC_COOLANT,
  DOOR_BLOCKER,
  METAL_PARTS,
  FABRIC,
  PLASTIC_PARTS,
  CHEMICALS,
  RUBBER_PARTS,
  ASSORTED_SEEDS
];