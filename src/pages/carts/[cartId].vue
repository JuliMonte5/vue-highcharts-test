<script lang="ts">
import { api } from '@/api'
import LoadingComponent from '@/components/ui/LoadingComponent.vue'
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const useFakeCartData = defineBasicLoader('/carts/[cartId]', async (route) => {
  console.log(route)
  return api.getFakeCartById(route.params.cartId)
})
</script>

<script lang="ts" setup>
const { data, isLoading } = useFakeCartData()
</script>

<template>
  <LoadingComponent v-if="isLoading" />
  <div v-else class="cart">
    <p v-for="(value, key, index) in data" :key="index">
      <b>{{ key }}:</b> {{ value }}
    </p>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  border: 1px solid var(--text-color-green);
  border-radius: 3px;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
