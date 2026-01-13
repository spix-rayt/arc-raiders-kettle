import { BlendMode, Jimp } from "jimp";
import { weapons } from "../data_weapons";
import { Rarity } from "../models";
import { getId } from "../util";
const fs = require('fs');
var fsp = require('fs/promises');
const path = require('path');
import { Items } from "../data_items";

const JPEG_QUALITY = 30;

async function processWeaponScreenshotImages() {
    const inputDir = path.join(__dirname, '../raw-images/weapons/screenshots');
    const outputDir = path.join(__dirname, '../assets/weapons/screenshots');
    fs.readdir(inputDir, async (err: any, files: any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (const file of files) {
            const imagePath = path.join(inputDir, file);
            const image = await Jimp.read(imagePath);
            image.crop({ x: 40, y: 15, w: 405 - 40 * 2, h: 135 });
            const outputFilename = file.replace(/\.[^/.]+$/, "") + '.jpg';
            const outputPath = path.join(outputDir, outputFilename);
            await fsp.mkdir(outputDir, { recursive: true });
            (await image.getBuffer('image/jpeg', { quality: JPEG_QUALITY })).write(outputPath);
        }
    });
}

async function processWeaponWikiImages() {
    const outputDir = 'src/assets/weapons';
    weapons.forEach(async (weapon) => {
        const image = await Jimp.read(weapon.rawImagePath);
        image.resize({ w: 1024, h: 512 });
        const backgroundImage = await imageBackgroundByRarity(weapon.rarity);
        image.composite(backgroundImage, 0, 0, {
            mode: BlendMode.DST_OVER,
        });
        image.resize({ w: 256, h: 128 });
        const outputFilename = `${getId(weapon.name)}.jpg`;
        const outputPath = path.join(outputDir, outputFilename);
        await fsp.mkdir(outputDir, { recursive: true });
        (await image.getBuffer('image/jpeg', { quality: JPEG_QUALITY })).write(outputPath);
    });
}

async function processArmorImages() {
    const inputDir = path.join(__dirname, '../raw-images/armors');
    const outputDir = path.join(__dirname, '../assets/armors');
    fs.readdir(inputDir, async (err: any, files: any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (const file of files) {
            const imagePath = path.join(inputDir, file);
            const image = await Jimp.read(imagePath);
            if (file == 'armor0.png') {
                image.crop({ x: 4, y: 18, w: 192 - 4 * 2, h: 92 });
            } else {
                image.crop({ x: 4, y: 4, w: 192 - 4 * 2, h: 92 });
            }
            const outputFilename = file.replace(/\.[^/.]+$/, "") + '.jpg';
            const outputPath = path.join(outputDir, outputFilename);
            await fsp.mkdir(outputDir, { recursive: true });
            (await image.getBuffer('image/jpeg', { quality: JPEG_QUALITY })).write(outputPath);
        }
    });
}

async function processItemImages() {
    const outputDir = 'src/assets/items';
    const items = new Map(Object.entries(Items));
    items.forEach(async (item, id) => {
        try {
            if (fs.existsSync(item.rawImagePath)) {
                const image = await Jimp.read(item.rawImagePath);
                image.resize({ w: 512, h: 512 });
                const backgroundImage = await imageBackgroundByRarity(item.rarity);
                backgroundImage.resize({ w: 512, h: 512 });
                image.composite(backgroundImage, 0, 0, {
                    mode: BlendMode.DST_OVER,
                });
                image.resize({ w: 128, h: 128 });
                const outputFilename = `${id}.jpg`;
                const outputPath = path.join(outputDir, outputFilename);
                await fsp.mkdir(outputDir, { recursive: true });
                (await image.getBuffer('image/jpeg', { quality: JPEG_QUALITY })).write(outputPath);
            } else {
                const backgroundImage = await imageBackgroundByRarity(item.rarity);
                backgroundImage.resize({ w: 128, h: 128 });
                const outputFilename = `${id}.jpg`;
                const outputPath = path.join(outputDir, outputFilename);
                await fsp.mkdir(outputDir, { recursive: true });
                (await backgroundImage.getBuffer('image/jpeg', { quality: JPEG_QUALITY })).write(outputPath);
            }
        } catch (error: any) {
            if (error.message.includes("webp")) {
                console.warn(`skip item image - ${id}`);
            } else {
                throw error;
            }
        }
    });
}

async function imageBackgroundByRarity(rarity: Rarity) {
    if (rarity == Rarity.Common) {
        return await Jimp.read('src/raw-images/background/gray-gradient.png');
    }
    if (rarity == Rarity.Uncommon) {
        return await Jimp.read('src/raw-images/background/green-gradient.png');
    }
    if (rarity == Rarity.Rare) {
        return await Jimp.read('src/raw-images/background/blue-gradient.png');
    }
    if (rarity == Rarity.Epic) {
        return await Jimp.read('src/raw-images/background/purple-gradient.png');
    }
    if (rarity == Rarity.Legendary) {
        return await Jimp.read('src/raw-images/background/gold-gradient.png');
    }
    throw new Error(`can not get background image for ${rarity}`);
}

processWeaponScreenshotImages();
processWeaponWikiImages();
processArmorImages();
processItemImages();