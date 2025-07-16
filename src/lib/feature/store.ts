import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/lib/feature/cart/cartSlice"
import productsSlice from "@/lib/feature/product/prodSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    prod: productsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
