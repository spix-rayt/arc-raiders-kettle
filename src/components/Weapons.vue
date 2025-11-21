<template>
  <div class="weapon-manager">
    <div class="weapon-list">
      <button
        v-for="weapon in weapons"
        :key="weapon.name"
        @click="selectedWeapon = weapon"
        class="weapon-button"
        :class="{ active: selectedWeapon?.name === weapon.name }"
        :style="{ borderColor: getRarityColor(weapon.rarity) }"
      >
        <img
          :src="getWeaponImage(weapon)"
          :alt="weapon.name"
          class="weapon-image"
        />
        <span class="weapon-label">{{ weapon.name }}</span>
      </button>
    </div>

    
    
    <div class="weapon-details-container">
      <div class="upgrade-controls">
        <h2>{{ selectedWeapon?.name }}</h2>
      <button
        v-for="level in 4"
        :key="level"
        @click="upgradeLevel = level"
        class="upgrade-button"
        :class="{ active: upgradeLevel === level }"
      >
        {{ getRomanNumeral(level) }}
      </button>
    </div>
      <WeaponDetails
        v-if="selectedWeapon"
        :weapon="selectedWeapon"
        :upgrade-level="upgradeLevel"
      />
      <div v-else class="no-weapon-selected">
        Select a weapon to view details
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeaponDetails from './WeaponDetails.vue'
import type { Weapon } from '../models'
import { weapons } from '../data_weapons'
import { getId, getRarityColor } from '../util';
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({
  title: 'Arc Raiders weapons list',
  description: 'Arc raiders all weapons list. Weapon stats like damage, headshot multipliers, hits to kill and time to kill',
  ogTitle: 'Arc Raiders weapons list',
  ogDescription: 'Arc raiders all weapons list. Weapon stats like damage, headshot multipliers, hits to kill and time to kill'
});

const selectedWeapon = ref<Weapon | null>(null)
const upgradeLevel = ref(4)

function getWeaponImage(weapon: Weapon): string {
  return new URL(`../assets/weapons/${getId(weapon.name)}.jpg`, import.meta.url).href;
}

function getRomanNumeral(level: number): string {
  return ['I', 'II', 'III', 'IV'][level - 1]!;
}
</script>

<style scoped>
.weapon-manager {
  display: flex;
  height: 97vh;
}

.weapon-list {
  width: 220px;
  overflow-y: auto;
}

.weapon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-bottom: 10px;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
}

.weapon-button:hover {
  background-color: #e0e0e0;
}

.weapon-button.active {
  background-color: rgb(255, 255, 255, 0.1);
}

.weapon-image {
  width: 190px;
  height: 90px;
  object-fit: cover;
}

.weapon-label {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  padding-top: 62px;
  left: 10px;
}

.weapon-details-container {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.no-weapon-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;  
  font-size: 18px;
}

.upgrade-controls {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.upgrade-button {
  padding: 8px 16px;
  border: 2px solid #000000;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
}

.upgrade-button.active {
  border: 2px solid #ffffff;
  /* background: #1976d2;
  color: white;
  border-color: #1976d2; */
}
</style>