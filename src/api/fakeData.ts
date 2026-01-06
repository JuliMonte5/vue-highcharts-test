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
  cartId: number
  totalProducts: number
  totalQuantity: number
}

export interface FakeCartsData {
  carts: Cart[]
  total: number
  skip: number
  limit: number
}

export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName?: string
  age?: number
  gender?: 'male' | 'female' | string
  email?: string
  phone?: string
  username?: string
  password?: string
  birthDate?: string
  image?: string
  bloodGroup?: string
  height?: number
  weight?: number
  eyeColor?: string
  ip?: string
  macAddress?: string
  university?: string
  ein?: string
  ssn?: string
  userAgent?: string
  crypto?: Crypto
  role?: string
}

export const getFakeData = async (): Promise<FakeCartsData> => {
  const res = await get('https://dummyjson.com/carts?delay=1000')
  return res.json()
}

export const getFakeCartById = async (cartId?: string | string[]): Promise<Cart> => {
  console.log(cartId)
  const res = await get(`https://dummyjson.com/carts/${cartId}?delay=1000`)
  return res.json()
}
