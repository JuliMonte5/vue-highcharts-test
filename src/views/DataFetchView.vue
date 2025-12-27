<script lang="ts">
import { api } from '@/api'
import ReloadIcon from '@/components/icons/ReloadIcon.vue'
import LoadingComponent from '@/components/ui/LoadingComponent.vue'
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const useFakeData = defineBasicLoader('/data-fetch', async () => {
  return api.getFakeData()
})
</script>

<script lang="ts" setup>
const { data, isLoading, reload } = useFakeData()
</script>

<template>
  <div class="container">
    <h1>Carts</h1>
    <button @click="reload()">
      <ReloadIcon />
    </button>
    <LoadingComponent v-if="isLoading" />
    <template v-else>
      <div class="carts-container">
        <div v-for="cart in data.carts" :key="cart.id" class="cart">
          <b>Products</b>: {{ cart.totalProducts }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
button:hover svg {
  animation: spin 0.7s linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg); /* Start at 0 degrees */
  }
  50% {
    transform: rotate(45%);
  }
  100% {
    transform: rotate(180deg); /* End at 360 degrees (one full turn) */
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.carts-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
}
.cart {
  border: 1px solid var(--text-color-green);
  border-radius: 3px;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
