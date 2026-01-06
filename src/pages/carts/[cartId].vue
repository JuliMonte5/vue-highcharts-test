<script lang="ts">
import { useFakeCartData } from '@/loaders/fakeCartData'
export { useFakeCartData }
</script>

<script lang="ts" setup>
import LoadingComponent from '@/components/ui/LoadingComponent.vue'
import type { Product } from '@/api/fakeData'

const { data, isLoading } = useFakeCartData()
</script>

<template>
  <LoadingComponent v-if="isLoading" />
  <div v-else class="cart">
    <p v-for="(value, key, index) in data" :key="index">
      <template v-if="key === 'products'">
        <b>{{ key }}:</b> {{ (value as Product[]).map((v) => v.title) }}
      </template>
      <template v-else>
        <b>{{ key }}:</b> {{ value }}
      </template>
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
