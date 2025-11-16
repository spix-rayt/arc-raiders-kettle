class DamageCalculator {
    health: number = 100.0;

    constructor(
        private shieldAmount: number,
        private damageReduction: number
    ) {
        this.health = 100.0;
    }

    public hit(damage: number): void {
        if (this.shieldAmount > 0.0) {
            this.health -= damage * (1.0 - this.damageReduction);
            this.shieldAmount -= damage;
        } else {
            this.health -= damage;
        }
    }
}

export const calculateHitsAmount = (damage: number, headshotMultiplier: number, shieldAmount: number, shieldDamageReduction: number, isFirstHitHeadshot: boolean) => {
    let hits = 0;

    const calculator = new DamageCalculator(shieldAmount, shieldDamageReduction);
    while (calculator.health > 0.0) {
        if (hits == 0 && isFirstHitHeadshot) {
            calculator.hit(damage * headshotMultiplier);
        } else {
            calculator.hit(damage);
        }
        hits += 1;
    }
    return hits;
}