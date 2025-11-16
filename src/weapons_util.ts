import type { Weapon } from "./models";

//this is wrong
export const shotsPerSecond = (weapon: Weapon) => {
    return weapon.fireRate / 6.0;
}