"use client"

import { CartSelectionProvider } from "@/context/cart"

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartSelectionProvider>{children}</CartSelectionProvider>
}