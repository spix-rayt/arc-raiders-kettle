import type { Weapon } from "./models";

class DamageCalculator {
    shieldAmount: number;
    damageReduction: number;
    health: number = 100.0;

    constructor(
        shieldAmount: number,
        damageReduction: number
    ) {
        this.shieldAmount = shieldAmount;
        this.damageReduction = damageReduction;
        this.health = 100.0;
    }

    public hitBody(damage: number, projectiles: number): void {
        const damagePerProjectile = damage / projectiles;
        for (let i: number = 0; i < projectiles; i++) {
            if (this.isShieldActive()) {
                this.health -= damagePerProjectile * (1.0 - this.damageReduction);
                this.shieldAmount -= damagePerProjectile;
            } else {
                this.health -= damagePerProjectile;
            }
        }
    }

    public hitHead(damage: number, headshotMultiplier: number, projectiles: number) {
        const damagePerProjectile = damage / projectiles;
        for (let i: number = 0; i < projectiles; i++) {
            if (this.isShieldActive()) {
                this.health -= damagePerProjectile * (1.0 - this.damageReduction) * headshotMultiplier;
                this.shieldAmount -= damagePerProjectile;
            } else {
                this.health -= damagePerProjectile * headshotMultiplier;
            }
        }
    }

    public isShieldActive() {
        this.warnIfShieldAlmostZero();
        return this.shieldAmount > 0.0;
    }

    public warnIfShieldAlmostZero() {
        if (this.shieldAmount > 0.0 && this.shieldAmount < 0.001) {
            console.warn(`Shield: ${this.shieldAmount}`);
        }
    }
}

export const calculateHitsAmount = (weapon: Weapon, shieldAmount: number, shieldDamageReduction: number, isFirstHitHeadshot: boolean) => {
    let hits = 0;

    const calculator = new DamageCalculator(shieldAmount, shieldDamageReduction);
    while (calculator.health > 0.0) {
        if (hits == 0 && isFirstHitHeadshot) {
            calculator.hitHead(weapon.damage, weapon.headshotMultiplier, weapon.projectiles);
        } else {
            calculator.hitBody(weapon.damage, weapon.projectiles);
        }
        hits += 1;
    }

    return hits;
}