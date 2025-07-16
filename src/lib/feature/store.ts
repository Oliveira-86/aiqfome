import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/lib/feature/cart/cartSlice"
import productsSlice from "@/lib/feature/product/prodSlice"
import orderSlice from "@/lib/feature/order/orderSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    prod: productsSlice,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
