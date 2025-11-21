import type { Shield } from "./models";

const NO_SHIELD: Shield = {
    name: "No shield",
    amount: 0.0,
    damageReduction: 0.0,
    icon: new URL(`./assets/armors/armor0.jpg`, import.meta.url).href,
}

const GREEN_SHIELD: Shield = {
    name: "Green shield",
    amount: 40.0,
    damageReduction: 0.4,
    icon: new URL(`./assets/armors/armor1.jpg`, import.meta.url).href,
}

const BLUE_SHIELD: Shield = {
    name: "Blue shield",
    amount: 70.0,
    damageReduction: 0.42,
    icon: new URL(`./assets/armors/armor2.jpg`, import.meta.url).href,
}

const PURPLE_SHIELD: Shield = {
    name: "Purple shield",
    amount: 80.0,
    damageReduction: 0.52,
    icon: new URL(`./assets/armors/armor3.jpg`, import.meta.url).href,
}

export const shields: Shield[] = [
    NO_SHIELD,
    GREEN_SHIELD,
    BLUE_SHIELD,
    PURPLE_SHIELD
]