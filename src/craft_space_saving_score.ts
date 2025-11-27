import { crafts } from "./data_craft";
import { Category, CraftSpaceSavingScore, ItemAmount, type Item } from "./models";

let scores: CraftSpaceSavingScore[] = [];
let allowedCategories = new Set<Category>([
    Category.Ammunition,
    Category.AssaultRifle,
    Category.Augment,
    Category.Basic,
    Category.BattleRifle,
    Category.HandCannon,
    Category.LMG,
    Category.Material,
    Category.Misc,
    Category.Modification,
    Category.Nature,
    Category.Pistol,
    Category.QuickUse,
    Category.Recyclable,
    Category.Refined,
    Category.Shield,
    Category.Shotgun,
    Category.SniperRifle,
    Category.Special,
    Category.Topside,
    Category.Trinket,
    Category.Weapon,
    Category.SMG,
]);

function process(recipe: ItemAmount[], item: Item) {
    let ingridientsSpace = 0.0;
    if (item.stackSize == null) {
        throw new Error("Stack size is null");
    }
    recipe.forEach((ia) => {
        if (ia.item.stackSize == null) {
            throw new Error("Stack size is null");
        }
        ingridientsSpace += ia.amount / ia.item.stackSize;
    });
    let craftResultSpace = item.craftedQuantity / item.stackSize;
    let score = ingridientsSpace / craftResultSpace;
    scores.push(new CraftSpaceSavingScore(item, score));
}

crafts.forEach((recipe, item) => {
    if (!allowedCategories.has(item.category)) {
        return;
    }
    try {
        process(recipe, item);
    } catch (error: unknown) {
        scores.push(new CraftSpaceSavingScore(item, null));
    }
});

export const craftSpaceSavingScores = scores;