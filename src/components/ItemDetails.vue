<template>
  <div class="item-details">
    <div v-if="item">
      <h2>{{ item.name }}</h2>
      <p>{{ item.category.join(', ') }}</p>
      
      <div v-if="item.craft != null && item.craft.length > 0">
        <h3>Craft:</h3>
        <ul>
          <li v-for="ingredient in item.craft" :key="ingredient.item.name">
            {{ ingredient.item.name }} (x{{ ingredient.amount }})
          </li>
        </ul>
      </div>

      <div v-if="item.recyclesToAtHome != null && item.recyclesToAtHome.length > 0">
        <h3>Recycles at Home:</h3>
        <ul>
          <li v-for="result in item.recyclesToAtHome" :key="result.item.name">
            {{ result.item.name }} (x{{ result.amount }})
          </li>
        </ul>
      </div>

      <div v-if="item.recyclesToAtTop != null && item.recyclesToAtTop.length > 0">
        <h3>Recycles at Top:</h3>
        <ul>
          <li v-for="result in item.recyclesToAtTop" :key="result.item.name">
            {{ result.item.name }} (x{{ result.amount }})
          </li>
        </ul>
      </div>

      <div v-if="!hasCrafting && !hasRecycling">
        <p>No crafting or recycling information available.</p>
      </div>
    </div>
    <div v-else>
      <p>Select an item to view details</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type Item } from '../models';

const props = defineProps<{
  item: Item | null;
}>();

const hasCrafting = computed(() => 
  props.item?.craft && props.item.craft.length > 0
);

const hasRecycling = computed(() => 
  (props.item?.recyclesToAtHome && props.item.recyclesToAtHome.length > 0) ||
  (props.item?.recyclesToAtTop && props.item.recyclesToAtTop.length > 0)
);
</script>

<style scoped>
.item-details {
  flex: 2;
}

.item-details h2 {
  margin-bottom: 15px;
}

.item-details h3 {
  margin-top: 15px;
  margin-bottom: 10px;
}

.item-details ul {
  list-style-type: none;
  padding-left: 0;
}

.item-details li {
  padding: 5px 0;
  border-bottom: 1px solid #f0f0f0;
}
</style>