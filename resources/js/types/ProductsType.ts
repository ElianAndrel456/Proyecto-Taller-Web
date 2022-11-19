interface Product {
  id: string
  name: string
  price: string
  description?: string
  category: string
  type: string
  imgs: string[]
  base?: { name: string; price: string }[]
  options?: { name: string; price: string }[]
}

export type { Product }
