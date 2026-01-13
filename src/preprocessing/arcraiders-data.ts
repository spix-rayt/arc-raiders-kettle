import fs from 'fs';
import * as path from 'path';
import { Category, Rarity } from '../models';

const itemsDirectoryPath = './arcraiders-data/items/';

const craftAmount = new Map<string, number>([
    ["light_ammo", 25],
    ["medium_ammo", 20],
    ["heavy_ammo", 10],
    ["shotgun_ammo", 5],
    ["launcher_ammo", 6],
]);

function processItemJsonData() {
    const filenames = fs.readdirSync(itemsDirectoryPath);
    buildItemsFile(filenames);
    buildCraftFile(filenames);
}

function buildItemsFile(filenames: string[]) {
    let result = [];
    result.push(`import type { Item } from "./models";`);
    result.push(`import { Rarity, Category } from "./models";`);
    result.push(``);
    result.push(`export const Items = {`);

    filenames.forEach((filename) => {
        const filePath = path.join(itemsDirectoryPath, filename);
        const stats = fs.statSync(filePath);
        if (!stats.isFile()) {
            return;
        }
        const jsonString: string = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonString);

        const id = data["id"];
        const name = data["name"]["en"];
        const rarity = parseRarity(data["rarity"]);
        const category = parseCategory(data["type"]);
        const stackSize = extractStackSize(data);
        if (stackSize == null) {
            console.warn(`Stack size is ${stackSize} - item ${id} (${category})`);
        }
        const rawImagePath = data["imageFilename"]?.replace("https://cdn.arctracker.io/", "arcraiders-data/images/");
        if (rawImagePath == null) {
            return;
        }
        let craftedQuantity = craftAmount.get(id) || 1;

        result.push(`    ${id}: {`);
        result.push(`        name: ${JSON.stringify(name)},`);
        result.push(`        rarity: Rarity.${rarity},`);
        result.push(`        category: Category.${category},`);
        result.push(`        rawImagePath: ${JSON.stringify(rawImagePath)},`);
        result.push(`        imagePath: new URL(\`./assets/items/${id}.jpg\`, import.meta.url).href,`);
        result.push(`        stackSize: ${JSON.stringify(stackSize)},`);
        result.push(`        craftedQuantity: ${JSON.stringify(craftedQuantity)},`);
        result.push(`    } as Item,`);
    });

    result.push(`} as const;`);

    fs.writeFileSync('src/data_items.ts', result.join("\n"), 'utf-8');
}

function extractStackSize(data: any) {
    let result = data["stackSize"];
    if (result == null) {
        const id = data["id"];
        const category = parseCategory(data["type"]);
        const categoriesStackSizeEq1 = [
            Category.Blueprint,
            Category.Shotgun,
            Category.Pistol,
            Category.LMG,
            Category.AssaultRifle,
            Category.SMG,
            Category.BattleRifle,
            Category.SniperRifle,
            Category.Modification,
            Category.Augment,
            Category.Key,
            Category.HandCannon,
            Category.Shield,
            Category.Special,
        ] as Category[];
        if (categoriesStackSizeEq1.includes(category)) {
            return 1;
        }

        const itemsStackSizeEq1 = [
            "binoculars",
            "cooling_coil",
            "photoelectric_cloak",
            "portable_tv",
            "snap_hook",
            "queen_reactor",
        ] as string[];
        if (itemsStackSizeEq1.includes(id)) {
            return 1;
        }

        const itemsStackSizeEq3 = [
            "cooling_fan",
            "damaged_wasp_driver",
            "motor",
            "power_rod",
            "zipline",
            "spectrum_analyzer",
            "rusted_tools",
            "laboratory_reagents",
            "lure_grenade",
        ] as string[];
        if (itemsStackSizeEq3.includes(id)) {
            return 3;
        }

        const itemsStackSizeEq10 = [
            "mushroom",
            "prickly_pear",
        ] as string[];
        if (itemsStackSizeEq10.includes(id)) {
            return 10;
        }
        return null;
    } else {
        return result;
    }
}

function buildCraftFile(filenames: string[]) {
    let result = [];
    result.push(`import { ItemAmount, type Item } from "./models";`);
    result.push(`import { Items } from "./data_items";`);
    result.push(``);
    result.push(`export const crafts = new Map<Item, ItemAmount[]>([`);

    filenames.forEach((filename) => {
        const filePath = path.join(itemsDirectoryPath, filename);
        const stats = fs.statSync(filePath);
        if (!stats.isFile()) {
            return;
        }
        const jsonString: string = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonString);

        const id = data["id"];
        const recipe = data["recipe"];
        if (recipe == null) {
            return;
        }
        result.push(`    [`);
        result.push(`        Items.${id}, [`);
        Object.keys(recipe).forEach((key) => {
            result.push(`            new ItemAmount(Items.${key}, ${recipe[key]}),`);
        });
        result.push(`        ]`);
        result.push(`    ],`);
    });

    result.push(`]);`);

    fs.writeFileSync('src/data_craft.ts', result.join("\n"), 'utf-8');
}

function parseRarity(rarity: string) {
    if (rarity == "Common") {
        return Rarity.Common;
    }
    if (rarity == "Uncommon") {
        return Rarity.Uncommon;
    }
    if (rarity == "Rare") {
        return Rarity.Rare;
    }
    if (rarity == "Epic") {
        return Rarity.Epic;
    }
    if (rarity == "Legendary") {
        return Rarity.Legendary;
    }
    throw new Error(`${rarity} rarity not found`);
}

function parseCategory(type: string): Category {
    if (type == "Trinket") {
        return Category.Trinket;
    }
    if (type == "Quick Use") {
        return Category.QuickUse;
    }
    if (type == "Topside Material") {
        return Category.Topside;
    }
    if (type == "Refined Material") {
        return Category.Refined;
    }
    if (type == "Nature") {
        return Category.Nature;
    }
    if (type == "Recyclable") {
        return Category.Recyclable;
    }
    if (type == "Modification") {
        return Category.Modification;
    }
    if (type == "Blueprint") {
        return Category.Blueprint;
    }
    if (type == "Hand Cannon") {
        return Category.HandCannon;
    }
    if (type == "Assault Rifle") {
        return Category.AssaultRifle;
    }
    if (type == "Cosmetic") {
        return Category.Cosmetic;
    }
    if (type == "Backpack Charm") {
        return Category.BackpackCharm;
    }
    if (type == "Key") {
        return Category.Key;
    }
    if (type == "Pistol") {
        return Category.Pistol;
    }
    if (type == "Weapon") {
        return Category.Weapon;
    }
    if (type == "Basic Material") {
        return Category.Basic;
    }
    if (type == "Augment") {
        return Category.Augment;
    }
    if (type == "Ammunition") {
        return Category.Ammunition;
    }
    if (type == "LMG") {
        return Category.LMG;
    }
    if (type == "Battle Rifle") {
        return Category.BattleRifle;
    }
    if (type == "Shield") {
        return Category.Shield;
    }
    if (type == "Special") {
        return Category.Special;
    }
    if (type == "Shotgun") {
        return Category.Shotgun;
    }
    if (type == "Sniper Rifle") {
        return Category.SniperRifle;
    }
    if (type == "Material") {
        return Category.Material;
    }
    if (type == "Outfit") {
        return Category.Outfit;
    }
    if (type == "Misc") {
        return Category.Misc;
    }
    if (type == "SMG") {
        return Category.SMG;
    }
    throw new Error(`${type} category not found`);
}

processItemJsonData();