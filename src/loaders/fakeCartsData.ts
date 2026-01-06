import { api } from '@/api'
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const useFakeData = defineBasicLoader(
  '/carts',
  async () => {
    return api.getFakeData()
  },
  { lazy: true },
)
