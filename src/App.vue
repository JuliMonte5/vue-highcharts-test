<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="A ve que onda esto" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/chart">Chart</RouterLink>
        <RouterLink to="/data-fetch">Data Fetch</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
