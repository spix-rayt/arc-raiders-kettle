import fs from 'fs';
import * as path from 'path';
import { Category, Rarity } from '../models';

const itemsDirectoryPath = './arcraiders-data/items/';

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
        const stackSize = data["stackSize"] || 1;
        const rawImagePath = data["imageFilename"]?.replace("https://cdn.arctracker.io/", "arcraiders-data/images/");
        if (rawImagePath == null) {
            return;
        }

        result.push(`    ${id}: {`);
        result.push(`        name: ${JSON.stringify(name)},`);
        result.push(`        rarity: Rarity.${rarity},`);
        result.push(`        category: Category.${category},`);
        result.push(`        rawImagePath: ${JSON.stringify(rawImagePath)},`);
        result.push(`        imagePath: new URL(\`./assets/items/${id}.jpg\`, import.meta.url).href,`);
        result.push(`        stackSize: ${JSON.stringify(stackSize)}`);
        result.push(`    } as Item,`);
    });

    result.push(`} as const;`);

    fs.writeFileSync('src/data_items.ts', result.join("\n"), 'utf-8');
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

// import { ItemAmount, type Item } from "./models";
// import { Items } from "./data_items";

// export const crafts = new Map<Item, ItemAmount[]>([
//     [
//         Items.LIGHT_AMMO, [
//             new ItemAmount(Items.METAL_PARTS, 3/25),
//             new ItemAmount(Items.CHEMICALS, 2/25),
//         ]
//     ],
// ]);

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

function parseCategory(type: string) {
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
    throw new Error(`${type} category not found`);
}

processItemJsonData();