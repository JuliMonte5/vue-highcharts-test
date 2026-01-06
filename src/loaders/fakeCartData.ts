import { api } from '@/api'
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const useFakeCartData = defineBasicLoader(
  '/carts/carts-id/[cartId]',
  async (route) => {
    return api.getFakeCartById(route.params.cartId)
  },
  { lazy: true },
)
