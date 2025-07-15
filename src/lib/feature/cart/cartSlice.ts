import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState, CategoryItems } from "@/data/types"
import { FoodItem, Drink, Restaurant } from "@/data/types"

export type PayloadType  = { 
  item: FoodItem | Drink; 
  restaurant: Restaurant; 
  type: "food" | "drink",  
  size?: string, 
  forks?: boolean, 
  accompaniments?: string[] 
  extra?: string[] 
  drinks_list?: CategoryItems<FoodItem>[]
}

const initialState: CartState = {
  items: [],
  currentRestaurant: null,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const { item, restaurant, type, size, accompaniments, forks, extra, drinks_list } = action.payload
      const exists = state.items.find((i) =>
        i.id === item.id &&
        i.size === size &&
        i.forks === forks &&
        JSON.stringify(i.accompaniments ?? []) === JSON.stringify(accompaniments ?? []) &&
        JSON.stringify(i.extra ?? []) === JSON.stringify(extra ?? []) &&
        JSON.stringify(i.drinks_list ?? []) === JSON.stringify(drinks_list ?? [])     
      )
      
      if (exists) {
        exists.quantity += 1
      } else {
        state.items.push({
          ...item,
          quantity: 1,
          restaurant_id: restaurant.id,
          restaurant_name: restaurant.name,
          type,
          size,
          forks,
          accompaniments,
          drinks_list,
          extra
        })
      }

      state.currentRestaurant = restaurant
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      if (state.items.length === 0) state.currentRestaurant = null
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.itemId)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },

    clearCart: (state) => {
      state.items = []
      state.currentRestaurant = null
    },
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
