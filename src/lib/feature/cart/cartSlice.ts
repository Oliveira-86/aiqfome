import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../product/prodSlice"

export interface CartItemType {
  quantity: number
  productPrice: number
  productTitle: string
  sum: number
  forks?: boolean
  size: string
  accompaniments?: string[]
  extra?: string[]
}

export interface CartState {
  items: Record<string, CartItemType>
  totalAmount: number
}

const initialState: CartState = {
  items: {},
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload
      const existingItem = state.items[product.id]

      const drinksTotal = (product.drinks ?? []).reduce((acc, drink) => acc + drink.price, 0)
      const totalProductPrice = product.price + drinksTotal

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.sum += totalProductPrice
      } else {
        state.items[product.id] = {
          quantity: 1,
          productPrice: product.price,
          productTitle: product.name,
          sum: totalProductPrice,
          forks: product.forks,
          size: product.size,
          extra: product.extra,
          accompaniments: product.accompaniments,
        }
      }

      state.totalAmount += totalProductPrice
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const prodId = action.payload
      const existingItem = state.items[prodId]

      if (!existingItem) return

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
        existingItem.sum -= existingItem.productPrice
      } else {
        delete state.items[prodId]
      }

      state.totalAmount -= existingItem.productPrice
    },

    addOrder(state) {
      state.items = {}
      state.totalAmount = 0
    },

    deleteProduct(state, action: PayloadAction<string>) {
      const pid = action.payload

      if (!state.items[pid]) return

      const itemTotal = state.items[pid].sum
      delete state.items[pid]
      state.totalAmount -= itemTotal
    },
  },
})

export const { addToCart, removeFromCart, addOrder, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
