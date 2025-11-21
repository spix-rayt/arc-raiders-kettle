import { ItemAmount, type Item } from "./models";
import { Items } from "./data_items";

export const crafts = new Map<Item, ItemAmount[]>([
    [
        Items.adrenaline_shot, [
            new ItemAmount(Items.chemicals, 3),
            new ItemAmount(Items.plastic_parts, 3),
        ]
    ],
    [
        Items.advanced_electrical_components, [
            new ItemAmount(Items.wires, 3),
            new ItemAmount(Items.electrical_components, 2),
        ]
    ],
    [
        Items.advanced_mechanical_components, [
            new ItemAmount(Items.steel_spring, 2),
            new ItemAmount(Items.mechanical_components, 2),
        ]
    ],
    [
        Items.angled_grip_i, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.duct_tape, 1),
        ]
    ],
    [
        Items.angled_grip_ii, [
            new ItemAmount(Items.mechanical_components, 2),
            new ItemAmount(Items.duct_tape, 3),
        ]
    ],
    [
        Items.antiseptic, [
            new ItemAmount(Items.chemicals, 10),
            new ItemAmount(Items.great_mullein, 2),
        ]
    ],
    [
        Items.anvil_i, [
            new ItemAmount(Items.mechanical_components, 5),
            new ItemAmount(Items.simple_gun_parts, 6),
        ]
    ],
    [
        Items.arc_circuitry, [
            new ItemAmount(Items.arc_alloy, 8),
        ]
    ],
    [
        Items.arc_motion_core, [
            new ItemAmount(Items.arc_alloy, 8),
        ]
    ],
    [
        Items.arpeggio_i, [
            new ItemAmount(Items.mechanical_components, 6),
            new ItemAmount(Items.simple_gun_parts, 6),
        ]
    ],
    [
        Items.bandage, [
            new ItemAmount(Items.fabric, 5),
        ]
    ],
    [
        Items.barricade_kit, [
            new ItemAmount(Items.mechanical_components, 1),
        ]
    ],
    [
        Items.bettina_blueprint, [
            new ItemAmount(Items.advanced_mechanical_components, 3),
            new ItemAmount(Items.heavy_gun_parts, 3),
            new ItemAmount(Items.canister, 3),
        ]
    ],
    [
        Items.bettina_i, [
            new ItemAmount(Items.advanced_mechanical_components, 3),
            new ItemAmount(Items.heavy_gun_parts, 3),
            new ItemAmount(Items.canister, 3),
        ]
    ],
    [
        Items.binoculars, [
            new ItemAmount(Items.plastic_parts, 8),
            new ItemAmount(Items.rubber_parts, 4),
        ]
    ],
    [
        Items.burletta_i, [
            new ItemAmount(Items.mechanical_components, 3),
            new ItemAmount(Items.simple_gun_parts, 3),
        ]
    ],
    [
        Items.combat_mk1, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.rubber_parts, 6),
        ]
    ],
    [
        Items.combat_mk2, [
            new ItemAmount(Items.electrical_components, 2),
            new ItemAmount(Items.magnet, 3),
        ]
    ],
    [
        Items.combat_mk3_aggressive, [
            new ItemAmount(Items.advanced_electrical_components, 2),
            new ItemAmount(Items.processor, 3),
        ]
    ],
    [
        Items.compensator_i, [
            new ItemAmount(Items.metal_parts, 6),
            new ItemAmount(Items.wires, 1),
        ]
    ],
    [
        Items.compensator_ii, [
            new ItemAmount(Items.mechanical_components, 2),
            new ItemAmount(Items.wires, 4),
        ]
    ],
    [
        Items.compensator_iii, [
            new ItemAmount(Items.mechanical_components, 2),
            new ItemAmount(Items.wires, 8),
        ]
    ],
    [
        Items.complex_gun_parts, [
            new ItemAmount(Items.light_gun_parts, 2),
            new ItemAmount(Items.medium_gun_parts, 2),
            new ItemAmount(Items.heavy_gun_parts, 2),
        ]
    ],
    [
        Items.crude_explosives, [
            new ItemAmount(Items.chemicals, 6),
        ]
    ],
    [
        Items.defibrillator, [
            new ItemAmount(Items.plastic_parts, 9),
            new ItemAmount(Items.moss, 1),
        ]
    ],
    [
        Items.door_blocker, [
            new ItemAmount(Items.metal_parts, 3),
            new ItemAmount(Items.rubber_parts, 3),
        ]
    ],
    [
        Items.durable_cloth, [
            new ItemAmount(Items.fabric, 14),
        ]
    ],
    [
        Items.electrical_components, [
            new ItemAmount(Items.plastic_parts, 8),
            new ItemAmount(Items.rubber_parts, 4),
        ]
    ],
    [
        Items.energy_clip, [
            new ItemAmount(Items.advanced_arc_powercell, 1),
            new ItemAmount(Items.battery, 2),
        ]
    ],
    [
        Items.equalizer, [
            new ItemAmount(Items.magnetic_accelerator, 3),
            new ItemAmount(Items.complex_gun_parts, 3),
            new ItemAmount(Items.queen_reactor, 1),
        ]
    ],
    [
        Items.explosive_compound, [
            new ItemAmount(Items.crude_explosives, 2),
            new ItemAmount(Items.oil, 2),
        ]
    ],
    [
        Items.extended_light_mag_i, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.steel_spring, 1),
        ]
    ],
    [
        Items.extended_medium_mag_i, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.steel_spring, 1),
        ]
    ],
    [
        Items.extended_medium_mag_ii, [
            new ItemAmount(Items.mechanical_components, 2),
            new ItemAmount(Items.steel_spring, 3),
        ]
    ],
    [
        Items.extended_medium_mag_iii, [
            new ItemAmount(Items.mod_components, 2),
            new ItemAmount(Items.steel_spring, 5),
        ]
    ],
    [
        Items.extended_shotgun_mag_i, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.steel_spring, 1),
        ]
    ],
    [
        Items.ferro_i, [
            new ItemAmount(Items.metal_parts, 5),
            new ItemAmount(Items.rubber_parts, 2),
        ]
    ],
    [
        Items.fruit_mix, [
            new ItemAmount(Items.lemon, 1),
            new ItemAmount(Items.apricot, 1),
            new ItemAmount(Items.prickly_pear, 1),
        ]
    ],
    [
        Items.gas_grenade, [
            new ItemAmount(Items.chemicals, 4),
            new ItemAmount(Items.rubber_parts, 2),
        ]
    ],
    [
        Items.green_light_stick, [
            new ItemAmount(Items.chemicals, 3),
        ]
    ],
    [
        Items.hairpin_i, [
            new ItemAmount(Items.metal_parts, 2),
            new ItemAmount(Items.plastic_parts, 5),
        ]
    ],
    [
        Items.heavy_ammo, [
            new ItemAmount(Items.metal_parts, 3),
            new ItemAmount(Items.chemicals, 2),
        ]
    ],
    [
        Items.heavy_fuze_grenade, [
            new ItemAmount(Items.explosive_compound, 1),
            new ItemAmount(Items.canister, 2),
        ]
    ],
    [
        Items.heavy_gun_parts, [
            new ItemAmount(Items.simple_gun_parts, 4),
        ]
    ],
    [
        Items.heavy_shield, [
            new ItemAmount(Items.power_rod, 1),
            new ItemAmount(Items.voltage_converter, 2),
        ]
    ],
    [
        Items.herbal_bandage, [
            new ItemAmount(Items.durable_cloth, 1),
            new ItemAmount(Items.great_mullein, 1),
        ]
    ],
    [
        Items.horizontal_grip, [
            new ItemAmount(Items.mod_components, 2),
            new ItemAmount(Items.duct_tape, 5),
        ]
    ],
    [
        Items.hullcracker_i, [
            new ItemAmount(Items.magnetic_accelerator, 1),
            new ItemAmount(Items.heavy_gun_parts, 3),
            new ItemAmount(Items.exodus_modules, 1),
        ]
    ],
    [
        Items.il_toro_i, [
            new ItemAmount(Items.mechanical_components, 5),
            new ItemAmount(Items.simple_gun_parts, 6),
        ]
    ],
    [
        Items.jolt_mine, [
            new ItemAmount(Items.electrical_components, 1),
            new ItemAmount(Items.battery, 1),
        ]
    ],
    [
        Items.jupiter, [
            new ItemAmount(Items.magnetic_accelerator, 3),
            new ItemAmount(Items.complex_gun_parts, 3),
            new ItemAmount(Items.queen_reactor, 1),
        ]
    ],
    [
        Items.kettle_i, [
            new ItemAmount(Items.metal_parts, 6),
            new ItemAmount(Items.rubber_parts, 8),
        ]
    ],
    [
        Items.launcher_ammo, [
            new ItemAmount(Items.metal_parts, 4),
            new ItemAmount(Items.explosive_compound, 1),
        ]
    ],
    [
        Items.lightweight_stock, [
            new ItemAmount(Items.mod_components, 2),
            new ItemAmount(Items.duct_tape, 5),
        ]
    ],
    [
        Items.light_ammo, [
            new ItemAmount(Items.metal_parts, 3),
            new ItemAmount(Items.chemicals, 2),
        ]
    ],
    [
        Items.light_gun_parts, [
            new ItemAmount(Items.simple_gun_parts, 4),
        ]
    ],
    [
        Items.light_impact_grenade, [
            new ItemAmount(Items.chemicals, 3),
            new ItemAmount(Items.plastic_parts, 2),
        ]
    ],
    [
        Items.light_shield, [
            new ItemAmount(Items.arc_alloy, 2),
            new ItemAmount(Items.plastic_parts, 4),
        ]
    ],
    [
        Items.lil_smoke_grenade, [
            new ItemAmount(Items.chemicals, 5),
            new ItemAmount(Items.plastic_parts, 1),
        ]
    ],
    [
        Items.looting_mk1, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.rubber_parts, 6),
        ]
    ],
    [
        Items.looting_mk2, [
            new ItemAmount(Items.electrical_components, 2),
            new ItemAmount(Items.magnet, 3),
        ]
    ],
    [
        Items.looting_mk3_cautious, [
            new ItemAmount(Items.advanced_electrical_components, 2),
            new ItemAmount(Items.processor, 3),
        ]
    ],
    [
        Items.looting_mk3_survivor, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.processor, 2),
        ]
    ],
    [
        Items.lure_grenade, [
            new ItemAmount(Items.speaker_component, 1),
            new ItemAmount(Items.electrical_components, 1),
        ]
    ],
    [
        Items.magnetic_accelerator, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.arc_motion_core, 2),
        ]
    ],
    [
        Items.mechanical_components, [
            new ItemAmount(Items.metal_parts, 7),
            new ItemAmount(Items.rubber_parts, 3),
        ]
    ],
    [
        Items.medium_ammo, [
            new ItemAmount(Items.metal_parts, 3),
            new ItemAmount(Items.chemicals, 2),
        ]
    ],
    [
        Items.medium_gun_parts, [
            new ItemAmount(Items.simple_gun_parts, 4),
        ]
    ],
    [
        Items.medium_shield, [
            new ItemAmount(Items.arc_circuitry, 1),
            new ItemAmount(Items.battery, 4),
        ]
    ],
    [
        Items.mod_components, [
            new ItemAmount(Items.steel_spring, 2),
            new ItemAmount(Items.mechanical_components, 2),
        ]
    ],
    [
        Items.muzzle_brake_i, [
            new ItemAmount(Items.metal_parts, 6),
            new ItemAmount(Items.wires, 1),
        ]
    ],
    [
        Items.muzzle_brake_ii, [
            new ItemAmount(Items.mechanical_components, 2),
            new ItemAmount(Items.wires, 4),
        ]
    ],
    [
        Items.osprey_i, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.medium_gun_parts, 3),
            new ItemAmount(Items.wires, 7),
        ]
    ],
    [
        Items.photoelectric_cloak, [
            new ItemAmount(Items.advanced_electrical_components, 2),
            new ItemAmount(Items.speaker_component, 4),
        ]
    ],
    [
        Items.power_rod, [
            new ItemAmount(Items.advanced_electrical_components, 2),
            new ItemAmount(Items.arc_circuitry, 2),
        ]
    ],
    [
        Items.raider_hatch_key, [
            new ItemAmount(Items.advanced_electrical_components, 1),
            new ItemAmount(Items.sensors, 3),
        ]
    ],
    [
        Items.rattler_i, [
            new ItemAmount(Items.metal_parts, 16),
            new ItemAmount(Items.rubber_parts, 12),
        ]
    ],
    [
        Items.remote_raider_flare, [
            new ItemAmount(Items.chemicals, 2),
            new ItemAmount(Items.rubber_parts, 4),
        ]
    ],
    [
        Items.renegade_i, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.medium_gun_parts, 3),
            new ItemAmount(Items.oil, 5),
        ]
    ],
    [
        Items.shield_recharger, [
            new ItemAmount(Items.rubber_parts, 5),
            new ItemAmount(Items.arc_powercell, 1),
        ]
    ],
    [
        Items.shotgun_ammo, [
            new ItemAmount(Items.metal_parts, 3),
            new ItemAmount(Items.chemicals, 2),
        ]
    ],
    [
        Items.shotgun_choke_i, [
            new ItemAmount(Items.metal_parts, 6),
            new ItemAmount(Items.wires, 1),
        ]
    ],
    [
        Items.shrapnel_grenade, [
            new ItemAmount(Items.crude_explosives, 1),
            new ItemAmount(Items.steel_spring, 2),
        ]
    ],
    [
        Items.snap_blast_grenade, [
            new ItemAmount(Items.crude_explosives, 2),
            new ItemAmount(Items.magnet, 1),
        ]
    ],
    [
        Items.snap_hook, [
            new ItemAmount(Items.power_rod, 1),
            new ItemAmount(Items.exodus_modules, 1),
        ]
    ],
    [
        Items.stable_stock_i, [
            new ItemAmount(Items.rubber_parts, 6),
            new ItemAmount(Items.duct_tape, 1),
        ]
    ],
    [
        Items.sterilized_bandage, [
            new ItemAmount(Items.antiseptic, 1),
            new ItemAmount(Items.durable_cloth, 2),
        ]
    ],
    [
        Items.stitcher_i, [
            new ItemAmount(Items.metal_parts, 8),
            new ItemAmount(Items.rubber_parts, 4),
        ]
    ],
    [
        Items.surge_shield_recharger, [
            new ItemAmount(Items.electrical_components, 1),
            new ItemAmount(Items.advanced_arc_powercell, 1),
        ]
    ],
    [
        Items.tactical_mk1, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.rubber_parts, 6),
        ]
    ],
    [
        Items.tactical_mk2, [
            new ItemAmount(Items.electrical_components, 2),
            new ItemAmount(Items.magnet, 3),
        ]
    ],
    [
        Items.tactical_mk3_defensive, [
            new ItemAmount(Items.advanced_electrical_components, 2),
            new ItemAmount(Items.processor, 3),
        ]
    ],
    [
        Items.tagging_grenade, [
            new ItemAmount(Items.electrical_components, 1),
            new ItemAmount(Items.sensors, 1),
        ]
    ],
    [
        Items.tempest_i, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.medium_gun_parts, 1),
        ]
    ],
    [
        Items.torrente_i, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.medium_gun_parts, 3),
            new ItemAmount(Items.steel_spring, 6),
        ]
    ],
    [
        Items.trigger_nade, [
            new ItemAmount(Items.crude_explosives, 2),
            new ItemAmount(Items.processor, 1),
        ]
    ],
    [
        Items.venator_i, [
            new ItemAmount(Items.advanced_mechanical_components, 2),
            new ItemAmount(Items.medium_gun_parts, 3),
            new ItemAmount(Items.magnet, 5),
        ]
    ],
    [
        Items.vertical_grip_i, [
            new ItemAmount(Items.plastic_parts, 6),
            new ItemAmount(Items.duct_tape, 1),
        ]
    ],
    [
        Items.vertical_grip_iii, [
            new ItemAmount(Items.mod_components, 2),
            new ItemAmount(Items.duct_tape, 5),
        ]
    ],
    [
        Items.vita_spray, [
            new ItemAmount(Items.antiseptic, 3),
            new ItemAmount(Items.canister, 1),
        ]
    ],
    [
        Items.vulcano_i, [
            new ItemAmount(Items.magnetic_accelerator, 1),
            new ItemAmount(Items.heavy_gun_parts, 3),
            new ItemAmount(Items.exodus_modules, 1),
        ]
    ],
    [
        Items.wolfpack, [
            new ItemAmount(Items.explosive_compound, 3),
            new ItemAmount(Items.arc_motion_core, 2),
        ]
    ],
    [
        Items.zipline, [
            new ItemAmount(Items.rope, 1),
            new ItemAmount(Items.mechanical_components, 1),
        ]
    ],
]);