import { Product } from "@/lib/feature/product/prodSlice"

export interface User {
  id: string
  address: string
}

export type CategoryItems<T> = {
  category: string
  items: T[]
}

export type Restaurant = {
  id: string
  name: string
  address: string
  stars: number
  image: string
  category: string
  delivery_time: string
  delivery_fee: number
  distance: number
  free_delivery_minimum: number
  minimum_value: number | null
  close: string
  food_list: CategoryItems<Product>[]
  drink_list: CategoryItems<Omit<Product, "accompaniments"> & { size: string }>[]
}
