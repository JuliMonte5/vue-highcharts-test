import { api } from '@/api'
import { defineColadaLoader } from 'unplugin-vue-router/data-loaders/pinia-colada'

export const useFakeCartData = defineColadaLoader('/carts/[cartId]', {
  async query(to) {
    return api.getFakeCartById(to.params.cartId)
  },
  key: (to) => ['carts', to.params.cartId!],
  lazy: true,
  staleTime: 10000,
})
