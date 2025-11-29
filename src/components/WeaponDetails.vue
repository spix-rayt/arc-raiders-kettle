<template>
  <div class="weapon-details">
    <div class="stats-grid">
      <div class="stat-item">
        <label>Damage</label>
        <span class="stat-value">{{ weapon.damage }}</span>
      </div>
      <div class="stat-item">
        <label>Fire Rate</label>
        <span class="stat-value">{{ weapon.fireRate }} ({{ calculateShotsPerSecond(weapon).toFixed(2) }}/s)</span>
      </div>
      <div class="stat-item">
        <label>Range</label>
        <span class="stat-value">{{ weapon.range }}</span>
      </div>
      <div class="stat-item">
        <label>Stability</label>
        <span class="stat-value">{{ weapon.stability }}</span>
      </div>
      <div class="stat-item">
        <label>Agility</label>
        <span class="stat-value">{{ weapon.agility }}</span>
      </div>
      <div class="stat-item">
        <label>Stealth</label>
        <span class="stat-value">{{ weapon.stealth }}</span>
      </div>
      <div class="stat-item">
        <label>Headshot multiplier</label>
        <span class="stat-value">{{ weapon.headshotMultiplier }}x</span>
      </div>
      <div class="stat-item">
        <label>Magazine size</label>
        <span class="stat-value">{{ weapon.magazineSizePerLevel[upgradeLevel - 1] }}</span>
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
      <div class="table-container">
        <table class="stats-table">
          <thead>
            <tr>
              <th></th>
              <th v-for="col in 4" :key="col">
                <img 
                  :src="getColumnImageUrl(col-1)" 
                  alt="" 
                  class="shield-icon"
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
                {{ calculateHitsToKill(weapon, col-1, isFirstHitHeadshot && weapon.tryingHeadshotsMakeSense) }}
              </td>
            </tr>
            <tr>
              <td class="stat-name">Time to Kill</td>
              <td 
                v-for="col in 4" 
                :key="col"
                class="stat-value"
              >
                {{ calculateTimeToKill(weapon, col-1, isFirstHitHeadshot && weapon.tryingHeadshotsMakeSense).toFixed(2) }}s
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Weapon } from '../models';
import { calculateHitsAmount } from '../damage_calculator';
import { shields } from '../data_shields';
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
  return calculateHitsAmount(weapon, shields[columnIndex]!.amount, shields[columnIndex]!.damageReduction, isFirstHitHeadshot);
}

function calculateTimeToKill(weapon: Weapon, columnIndex: number, isFirstHitHeadshot: boolean): number {
  return ((calculateHitsToKill(weapon, columnIndex, isFirstHitHeadshot) - 1) / calculateShotsPerSecond(weapon));
}

function calculateShotsPerSecond(weapon: Weapon): number {
  return weapon.shotsPerSecond * weapon.increasedFireRateByLevel[props.upgradeLevel - 1]!;
}
</script>

<style scoped>
.weapon-details {
  max-width: 450px;
  width: 100%;
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

.table-container {
  overflow-x: auto;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 300px;
}

.stats-table th {
  padding: 8px 4px;
  text-align: center;
}

.stats-table td {
  padding: 12px 4px;
  text-align: center;
}

.stat-name {
  font-weight: 500;
  text-align: left;
  padding-left: 8px;
  white-space: nowrap;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
}

.shield-icon {
  height: 40px;
  width: auto;
}

@media (max-width: 960px) {
  .weapon-details {
    max-width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 8px;
    margin: 15px 0;
  }

  .stat-item {
    padding: 6px 8px;
  }

  .headshot-checkbox {
    margin: 15px 0;
    padding: 6px 8px;
  }

  .calculated-stats {
    margin-top: 20px;
  }

  .stats-table {
    min-width: 280px;
  }

  .stats-table th {
    padding: 6px 2px;
  }

  .stats-table td {
    padding: 8px 2px;
  }

  .stat-name {
    font-size: 14px;
    padding-left: 4px;
  }

  .stat-value {
    font-size: 16px;
  }

  .shield-icon {
    height: 30px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    gap: 6px;
    margin: 10px 0;
  }

  .stat-item {
    padding: 4px 6px;
    font-size: 13px;
  }

  .headshot-checkbox {
    margin: 12px 0;
    padding: 4px 6px;
    font-size: 13px;
  }

  .headshot-checkbox input[type="checkbox"] {
    width: 14px;
    height: 14px;
  }

  .calculated-stats {
    margin-top: 15px;
  }

  .stats-table {
    min-width: 260px;
  }

  .stats-table th {
    padding: 4px 1px;
  }

  .stats-table td {
    padding: 6px 1px;
  }

  .stat-name {
    font-size: 13px;
  }

  .stat-value {
    font-size: 14px;
  }

  .shield-icon {
    height: 25px;
  }
}
</style>