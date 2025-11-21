<template>
  <div class="items-container">
    <!-- Левая часть - сетка иконок предметов -->
    <div class="items-grid">
      <div 
        v-for="item in Object.values(Items)" 
        :key="item.name"
        class="item-icon"
        :class="{ active: selectedItem?.name === item.name }"
        :style="{ borderColor: getRarityColor(item.rarity) }"
        @click="selectedItem = item"
      >
        <img class="icon-placeholder" :src="item.imagePath" />
      </div>
    </div>

    <!-- Правая часть - детальная информация через отдельный компонент -->
    <ItemDetails :item="selectedItem" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Items } from '../data_items';
import { type Item } from '../models';
import ItemDetails from './ItemDetails.vue';
import { getRarityColor } from '../util';
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({
  title: 'Items',
  description: 'Arc raiders all items list',
  ogTitle: 'Arc raiders all items list',
  ogDescription: 'Arc raiders all items list'
});


const selectedItem = ref<Item | null>(null);
</script>

<style scoped>
.items-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.items-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  padding-right: 20px;
  border-right: 1px solid #ccc;
  max-width: 280px;
}

.item-icon {
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item-icon:hover {
  transform: scale(1.05);
}

.item-icon.active {
  transform: scale(1.1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.icon-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>