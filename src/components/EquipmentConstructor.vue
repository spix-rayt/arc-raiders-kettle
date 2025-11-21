<template>
  <div class="equipment-constructor">
    <div class="left-panel">
      <!-- Слоты для Augment и Shield -->
      <div class="top-slots">
        <div 
          class="slot small-slot" 
          @click="openItemSelector('augment')"
        >
          <div v-if="equipment.augment" class="slot-content">
            <img :src="equipment.augment.imagePath" :alt="equipment.augment.name" />
            <span class="item-name">{{ equipment.augment.name }}</span>
          </div>
          <div v-else class="slot-placeholder">
            Augment
          </div>
        </div>

        <div 
          class="slot small-slot" 
          @click="openItemSelector('shield')"
        >
          <div v-if="equipment.shield" class="slot-content">
            <img :src="equipment.shield.icon" :alt="equipment.shield.name" />
            <span class="item-name">{{ equipment.shield.name }}</span>
          </div>
          <div v-else class="slot-placeholder">
            Shield
          </div>
        </div>
      </div>

      <!-- Слоты для оружия -->
      <div class="weapon-slots">
        <div 
          v-for="(weaponSlot, index) in equipment.weapons" 
          :key="index"
          class="slot large-slot"
          @click="openWeaponSelector(index)"
        >
          <div v-if="weaponSlot" class="slot-content">
            <img :src="getWeaponImage(weaponSlot)" :alt="weaponSlot.name" />
            <span class="item-name">{{ weaponSlot.name }}</span>
          </div>
          <div v-else class="slot-placeholder">
            Weapon {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>

    <div class="right-panel">
      <!-- Слоты для QuickUse предметов -->
      <div class="quickuse-slots">
        <div 
          v-for="(quickUseSlot, index) in equipment.quickUse" 
          :key="index"
          class="slot quickuse-slot"
          @click="openQuickUseSelector(index)"
        >
          <div v-if="quickUseSlot.item" class="slot-content">
            <img :src="quickUseSlot.item.imagePath" :alt="quickUseSlot.item.name" />
            <span class="item-name">{{ quickUseSlot.item.name }}</span>
            <span class="item-amount">x{{ quickUseSlot.amount }}</span>
          </div>
          <div v-else class="slot-placeholder">
            Quick Use {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно выбора предмета -->
    <div v-if="showItemSelector" class="modal-overlay">
      <div class="modal-content">
        <h3>Select {{ currentSlotType }}</h3>
        <div class="items-grid">
          <div
            v-for="item in filteredItems"
            :key="item.name"
            class="item-card"
            @click="selectItem(item)"
          >
            <img :src="item.imagePath" :alt="item.name" />
            <span class="item-name">{{ item.name }}</span>
            <span class="item-rarity">{{ item.rarity }}</span>
          </div>
        </div>
        <button @click="closeItemSelector" class="close-button">Close</button>
      </div>
    </div>

    <!-- Модальное окно выбора оружия -->
    <div v-if="showWeaponSelector" class="modal-overlay">
      <div class="modal-content">
        <h3>Select Weapon</h3>
        <div class="items-grid">
          <div
            v-for="weapon in weapons"
            :key="weapon.name"
            class="item-card"
            @click="selectWeapon(weapon)"
          >
            <img :src="getWeaponImage(weapon)" :alt="weapon.name" />
            <span class="item-name">{{ weapon.name }}</span>
            <span class="item-rarity">{{ weapon.rarity }}</span>
          </div>
        </div>
        <button @click="closeWeaponSelector" class="close-button">Close</button>
      </div>
    </div>

    <!-- Модальное окно выбора количества QuickUse -->
    <div v-if="showQuickUseSelector" class="modal-overlay">
      <div class="modal-content">
        <h3>Select QuickUse Item</h3>
        <div class="items-grid">
          <div
            v-for="item in quickUseItems"
            :key="item.name"
            class="item-card"
            @click="selectQuickUseItem(item)"
          >
            <img :src="item.imagePath" :alt="item.name" />
            <span class="item-name">{{ item.name }}</span>
            <span class="item-rarity">{{ item.rarity }}</span>
          </div>
        </div>
        <button @click="closeQuickUseSelector" class="close-button">Close</button>
      </div>
    </div>

    <!-- Модальное окно выбора количества -->
    <div v-if="showAmountSelector" class="modal-overlay">
      <div class="modal-content">
        <h3>Select Amount for {{ selectedQuickUseItem?.name }}</h3>
        <div class="amount-selector">
          <label>Amount:</label>
          <input 
            type="number" 
            v-model="selectedAmount" 
            :min="1" 
            :max="maxQuickUseAmount"
          />
          <span class="max-amount">Max: {{ maxQuickUseAmount }}</span>
        </div>
        <div class="modal-buttons">
          <button @click="confirmQuickUse" class="confirm-button">Confirm</button>
          <button @click="closeAmountSelector" class="close-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Items } from '../data_items'
import { weapons } from '../data_weapons'
import type { Item, Weapon, Shield } from '../models'

// Типы для снаряжения
interface Equipment {
  augment: Item | null
  shield: Shield | null
  weapons: (Weapon | null)[]
  quickUse: { item: Item | null; amount: number }[]
}

// Состояние компонента
const equipment = reactive<Equipment>({
  augment: null,
  shield: null,
  weapons: [null, null],
  quickUse: []
})

// Состояния модальных окон
const showItemSelector = ref(false)
const showWeaponSelector = ref(false)
const showQuickUseSelector = ref(false)
const showAmountSelector = ref(false)

// Текущий выбранный слот
const currentSlotType = ref<'augment' | 'shield'>('augment')
const currentWeaponSlotIndex = ref(0)
const currentQuickUseSlotIndex = ref(0)
const selectedQuickUseItem = ref<Item | null>(null)
const selectedAmount = ref(1)

// Фильтрованные списки предметов
const augmentItems = computed(() => 
  Object.values(Items).filter(item => item.category === 'Augment')
)

const shieldItems = computed(() => 
  Object.values(Items).filter(item => item.category === 'Shield')
)

const quickUseItems = computed(() => 
  Object.values(Items).filter(item => item.category === 'QuickUse')
)

const filteredItems = computed(() => {
  if (currentSlotType.value === 'augment') return augmentItems.value
  if (currentSlotType.value === 'shield') return shieldItems.value
  return []
})

const maxQuickUseAmount = computed(() => 
  selectedQuickUseItem.value ? selectedQuickUseItem.value.stackSize * 10 : 0
)

// Методы для открытия селекторов
const openItemSelector = (type: 'augment' | 'shield') => {
  currentSlotType.value = type
  showItemSelector.value = true
}

const openWeaponSelector = (index: number) => {
  currentWeaponSlotIndex.value = index
  showWeaponSelector.value = true
}

const openQuickUseSelector = (index: number) => {
  currentQuickUseSlotIndex.value = index
  showQuickUseSelector.value = true
}

// Методы выбора предметов
const selectItem = (item: Item) => {
  if (currentSlotType.value === 'augment') {
    equipment.augment = item
  } else if (currentSlotType.value === 'shield') {
    // Преобразуем Item в Shield (нужно будет адаптировать под вашу структуру данных)
    equipment.shield = {
      name: item.name,
      amount: 0, // Заглушка, нужно получить реальные данные
      damageReduction: 0, // Заглушка
      icon: item.imagePath
    }
  }
  closeItemSelector()
}

const selectWeapon = (weapon: Weapon) => {
  equipment.weapons[currentWeaponSlotIndex.value] = weapon
  closeWeaponSelector()
}

const selectQuickUseItem = (item: Item) => {
  selectedQuickUseItem.value = item
  selectedAmount.value = 1
  closeQuickUseSelector()
  showAmountSelector.value = true
}

const confirmQuickUse = () => {
  if (selectedQuickUseItem.value) {
    // Обновляем или добавляем слот QuickUse
    if (equipment.quickUse[currentQuickUseSlotIndex.value]) {
      equipment.quickUse[currentQuickUseSlotIndex.value] = {
        item: selectedQuickUseItem.value,
        amount: selectedAmount.value
      }
    } else {
      equipment.quickUse.push({
        item: selectedQuickUseItem.value,
        amount: selectedAmount.value
      })
    }
  }
  closeAmountSelector()
}

// Методы закрытия модальных окон
const closeItemSelector = () => { showItemSelector.value = false }
const closeWeaponSelector = () => { showWeaponSelector.value = false }
const closeQuickUseSelector = () => { showQuickUseSelector.value = false }
const closeAmountSelector = () => { 
  showAmountSelector.value = false
  selectedQuickUseItem.value = null
}

// Вспомогательные методы
const getWeaponImage = (weapon: Weapon) => {
  const getId = (name: string) => name.toLowerCase().replace(/\s+/g, '-')
  return new URL(`../assets/weapons/${getId(weapon.name)}.jpg`, import.meta.url).href
}
</script>

<style scoped>
.equipment-constructor {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.left-panel {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.top-slots {
  display: flex;
  gap: 10px;
}

.weapon-slots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.right-panel {
  flex: 1;
}

.quickuse-slots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slot {
  border: 2px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f5f5f5;
}

.slot:hover {
  border-color: #007bff;
  background-color: #e9f5ff;
}

.small-slot {
  width: 100px;
  height: 100px;
}

.large-slot {
  width: 200px;
  height: 150px;
}

.quickuse-slot {
  width: 120px;
  height: 120px;
}

.slot-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 5px;
  text-align: center;
}

.slot-content img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.item-name {
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
}

.item-amount {
  font-size: 11px;
  color: #666;
}

.item-rarity {
  font-size: 10px;
  color: #888;
}

.slot-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
  font-style: italic;
}

/* Стили модальных окон */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin: 20px 0;
}

.item-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item-card:hover {
  border-color: #007bff;
  background-color: #f0f8ff;
}

.item-card img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.amount-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.amount-selector input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.max-amount {
  font-size: 12px;
  color: #666;
}

.modal-buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.close-button, .confirm-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button {
  background-color: #6c757d;
  color: white;
}

.confirm-button {
  background-color: #007bff;
  color: white;
}
</style>