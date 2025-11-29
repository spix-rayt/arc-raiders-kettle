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
        <h2 class="weapon-title">{{ selectedWeapon?.name }}</h2>
        <div class="upgrade-buttons">
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.weapon-label {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  left: 6px;
  bottom: 4px;
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
  height: 90%;
  color: #666;  
  font-size: 18px;
}

.upgrade-controls {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 15px 0;
}

.weapon-title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
}

.upgrade-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.upgrade-button {
  /* padding: 8px 12px; */
  border: 2px solid #000000;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  flex: 1;
  width: 40px;
  height: 40px;
}

.upgrade-button.active {
  border: 2px solid #ffffff;
}

@media (max-width: 960px) {
  .weapon-manager {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  .weapon-list {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    padding: 10px;
    gap: 8px;
    height: 120px;
  }

  .weapon-button {
    width: 140px;
    min-width: 140px;
    margin-bottom: 0;
    height: 70px;
  }

  .weapon-label {
    font-size: 12px;
    left: 6px;
    bottom: 4px;
  }

  .weapon-details-container {
    padding: 15px;
    overflow-y: visible;
  }

  .upgrade-controls {
    margin: 10px 0;
  }

  .upgrade-button {
    padding: 6px 8px;
    font-size: 12px;
    max-width: 50px;
  }

  .no-weapon-selected {
    height: 200px;
    font-size: 16px;
    text-align: center;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .weapon-list {
    height: 100px;
  }

  .weapon-button {
    width: 120px;
    min-width: 120px;
    height: 62px;
  }

  .weapon-label {
    font-size: 11px;
    padding-top: 32px;
  }

  .weapon-details-container {
    padding: 10px;
  }

  .upgrade-buttons {
    gap: 5px;
  }

  .upgrade-button {
    padding: 5px 6px;
    font-size: 11px;
    max-width: 45px;
  }
}
</style>