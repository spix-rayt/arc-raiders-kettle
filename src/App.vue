<template>
  <div class="app-container">
    <nav class="sidebar">
      <ul>
        <li>
          <router-link to="/">About</router-link>
        </li>
        <li v-if="isDev">
          <router-link to="/items">Items</router-link>
        </li>
        <li>
          <router-link to="/weapons">Weapons</router-link>
        </li>
        <li v-if="isDev">
          <router-link to="/equipment">Equipment</router-link>
        </li>
      </ul>
    </nav>
    
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
const isDev = process.env.NODE_ENV === 'development';
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  padding: 8px 12px;
  display: block;
  border: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s;
  color: #ddd;
}

.sidebar a:hover {
  border-color: hsla(0, 100%, 100%, 60%);
}

.sidebar a.router-link-active {
  border-color: hsla(0, 100%, 100%, 100%);
}

.content {
  flex: 1;
  padding: 20px;
}
</style>