import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemType } from "../cart/cartSlice"

interface OrderState {
  orders: Order[]
}

const initialState: OrderState = {
  orders: []
}

interface Order {
  id: string
  items: Record<string, CartItemType>
  amount: number
  date: string
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      const { id, items, amount, date } = action.payload
      state.orders.push({ id, items, amount, date })
    }
  }
})

export const { addOrder } = orderSlice.actions
export default orderSlice.reducer
