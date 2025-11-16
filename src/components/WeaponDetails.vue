<template>
  <div class="weapon-details">
    <h2>{{ weapon.name }}</h2>
    
    <div class="stats-grid">
      <div class="stat-item">
        <label>Damage:</label>
        <span class="stat-value">{{ weapon.damage }}</span>
      </div>
      <div class="stat-item">
        <label>Fire Rate:</label>
        <span class="stat-value">{{ weapon.fireRate }} ({{ weapon.shotsPerSecond.toFixed(2) }}/s)</span>
      </div>
      <div class="stat-item">
        <label>Range:</label>
        <span class="stat-value">{{ weapon.range }}</span>
      </div>
      <div class="stat-item">
        <label>Stability:</label>
        <span class="stat-value">{{ weapon.stability }}</span>
      </div>
      <div class="stat-item">
        <label>Agility:</label>
        <span class="stat-value">{{ weapon.agility }}</span>
      </div>
      <div class="stat-item">
        <label>Stealth:</label>
        <span class="stat-value">{{ weapon.stealth }}</span>
      </div>
    </div>

    <div v-if="weapon.tryingHeadshotsMakeSense" class="headshot-checkbox">
      <label>
        <input 
          type="checkbox" 
          v-model="isFirstHitHeadshot"
        />
        First hit is headshot
      </label>
    </div>

    <div class="calculated-stats">
      <table class="stats-table">
        <thead>
          <tr>
            <th></th>
            <th v-for="col in 4" :key="col">
              <img 
                :src="getColumnImageUrl(col-1)" 
                alt="" 
                height="50"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="stat-name">Hits to Kill</td>
            <td 
              v-for="col in 4" 
              :key="col"
              class="stat-value"
            >
              {{ calculateHitsToKill(weapon, col-1, isFirstHitHeadshot) }}
            </td>
          </tr>
          <tr>
            <td class="stat-name">Time to Kill</td>
            <td 
              v-for="col in 4" 
              :key="col"
              class="stat-value"
            >
              {{ calculateTimeToKill(weapon, col-1, isFirstHitHeadshot).toFixed(2) }}s
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Weapon } from './models';
import { calculateHitsAmount } from '../damage_calculator';
import { shields } from '../shields_data';
import { shotsPerSecond } from '../weapons_util';
import { ref } from 'vue';

interface Props {
  weapon: Weapon,
  upgradeLevel: number
}

const props = defineProps<Props>()
const isFirstHitHeadshot = ref(false);

function getColumnImageUrl(columnIndex: number): string {
  return shields[columnIndex]!.icon;
}

function calculateHitsToKill(weapon: Weapon, columnIndex: number, isFirstHitHeadshot: boolean): number {
  return calculateHitsAmount(weapon.damage, weapon.headshotMultiplier, shields[columnIndex]!.amount, shields[columnIndex]!.damageReduction, isFirstHitHeadshot);
}

function calculateTimeToKill(weapon: Weapon, columnIndex: number, isFirstHitHeadshot: boolean): number {
  const shotsPerSecond = weapon.shotsPerSecond * weapon.increasedFireRateByLevel[props.upgradeLevel - 1];
  // const shotsPerSecond = weapon.shotsPerSecond;
  // console.log(props.upgradeLevel);
  return ((calculateHitsToKill(weapon, columnIndex, isFirstHitHeadshot) - 1) / shotsPerSecond);
}
</script>

<style scoped>
.weapon-details {
  max-width: 450px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 20px 0;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 4px;
}

.stat-item label {
  font-weight: 500;
}

.headshot-checkbox {
  margin: 20px 0;
  padding: 8px 12px;
}

.headshot-checkbox label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  cursor: pointer;
}

.headshot-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
}

.calculated-stats {
  margin-top: 30px;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
}

.stats-table th {
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
}

.stats-table td {
  padding: 12px 8px;
  text-align: center;
}

.stat-name {
  font-weight: 500;
  text-align: left;
  padding-left: 0 !important;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
}
</style>