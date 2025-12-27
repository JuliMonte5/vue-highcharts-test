import { get } from './api'

export interface Product {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedTotal: number
  thumbnail: string
}

export interface Cart {
  id: number
  products: Product[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface FakeCartsData {
  carts: Cart[]
  total: number
  skip: number
  limit: number
}

export const getFakeData = async (): Promise<FakeCartsData> => {
  const res = await get('https://dummyjson.com/carts?delay=1000')
  const parsed = await res.json()
  console.log('🚀 ~ getFakeData ~ parsed:', parsed)
  return parsed
}
