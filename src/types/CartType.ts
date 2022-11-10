import type { Product } from './ProductsType'

type ProductCart = Product & {
  quantity: number
}

interface Cart {
  products: ProductCart[]
  subtotal: number
  tax: number
  total: number
}

export type { Cart, ProductCart }
