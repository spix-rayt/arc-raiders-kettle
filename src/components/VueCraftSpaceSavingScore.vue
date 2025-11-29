<template>
  <h2>Craft space saving score</h2>
  <p>Displaying the advisability of crafting items in order to free up space in the stash.</p>
  <p>The higher the score, the more space will be freed up after crafting.</p>
  <p>Crafting items with a score lower than 1 will reduce free space in stash.</p>
  <p>For example, crafting a stack of Light Gun Parts requires two stacks of ingredients. Therefore, "Light gun parts" space saving score = 2.0</p>
  <div class="craft-space-saving-table">
    <table>
      <tbody>
        <tr 
          v-for="craftScore in sortedScores" 
          :key="craftScore.item.name"
        >
          <td>
            <img 
              :src="craftScore.item.imagePath" 
              :alt="craftScore.item.name"
              class="item-image"
            >
          </td>
          <td>{{ craftScore.item.name }}</td>
          <td>{{ craftScore.score?.toFixed(2) ?? "?" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { craftSpaceSavingScores } from '../craft_space_saving_score';

const sortedScores = computed(() => {
  return [...craftSpaceSavingScores].sort((a, b) => {
    if (a.score == null) {
      return 1.0;
    } else if (b.score == null) {
      return -1.0;
    } else {
      return b.score - a.score;
    }
  });
});
</script>

<style scoped>
.craft-space-saving-table {
  width: 25vw;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 400px;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background-color: #f5f5f5;
  font-weight: 600;
}

.item-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}


@media (max-width: 768px) {
  .craft-space-saving-table {
    width: 100%;
    overflow-x: auto;
  }

  table {
    min-width: 300px;
    font-size: 12px;
  }

  th, td {
    padding: 8px 10px;
  }

  .item-image {
    width: 30px;
    height: 30px;
  }

  h2 {
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 8px;
    font-size: 11px;
  }
}
</style>