export interface Food {
  id: string
  name: string
  description: string
  price: number
  size: string
  image: string
  accompaniments: string[]
}

export interface Drink {
  id: string
  name: string
  description: string
  price: number
  size: string
  image: string
}

export interface Restaurant {
  id: string
  name: string
  address: string
  stars: number
  image: string
  category: string
  delivery_time: string
  delivery_fee: number
  distance: number
  free_delivery_minimum: number | null
  list_food: Food[]
  list_drinks: Drink[]
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
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

export interface CartItem extends Food {
  quantity: number
  restaurant_id: string
  restaurant_name: string
  type: "food" | "drink"
}

export interface CartContextType {
  items: CartItem[]
  addItem: (item: Food | Drink, restaurant: Restaurant, type: "food" | "drink") => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
  currentRestaurant: Restaurant | null
}