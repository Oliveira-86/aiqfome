export interface User {
  id: string
  address: string
}

export interface Drink {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

type Accompaniment = string

export type FoodItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  accompaniments?: Accompaniment[]
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
  food_list: CategoryItems<FoodItem>[]
  drink_list: CategoryItems<Omit<FoodItem, "accompaniments"> & { size: string }>[]
}

export interface CartItem extends FoodItem {
  quantity: number
  restaurant_id: string
  restaurant_name: string
  type: "food" | "drink"
  size?: string | undefined
  forks?: boolean | undefined
  accompaniments?: string[]
  extra?: string[]
  drinks_list?: CategoryItems<FoodItem>[]
}

export interface CartState {
  items: CartItem[]
  currentRestaurant: Restaurant | null
}

export interface OrderItem {
  food_id: string
  name: string
  price: number
  quantity: number
  accompaniments: string[]
}

export interface Order {
  id: string
  restaurant_id: string
  restaurant_name: string
  items: OrderItem[]
  subtotal: number
  delivery_fee: number
  total: number
  address_client: {
    street: string
    neighborhood: string
    city: string
    zipcode: string
    complement: string
  }
  status: "preparing" | "on_way" | "delivered" | "cancelled"
  created_at: string
}


