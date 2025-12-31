<script lang="ts">
import { api } from '@/api'
import ReloadIcon from '@/components/icons/ReloadIcon.vue'
import LoadingComponent from '@/components/ui/LoadingComponent.vue'
import router from '@/router'
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const useFakeData = defineBasicLoader('/carts', async () => {
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
        <div
          v-for="cart in data.carts"
          :key="cart.id"
          class="cart"
          @click="router.push({ path: `/carts/${cart.id.toString()}` })"
        >
          <p><b>Products:</b> {{ cart.totalProducts }}</p>
          <p><b>Total:</b> ${{ cart.total }}</p>
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
  animation: spin 0.5s linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45%);
  }
  100% {
    transform: rotate(180deg);
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
}
.carts-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
}
.cart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--text-color-green);
  border-radius: 3px;
  padding: 0.5rem;
  box-sizing: border-box;
}
.cart:hover {
  cursor: pointer;
  border-color: #fff;
}

.cart:hover * {
  color: #fff;
}
</style>
