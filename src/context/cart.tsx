"use client"

import { createContext, useContext, useState } from "react"

type CartSelection = {
  size?: string
  accompaniments?: string[]
  drinks?: { [drinkId: string]: number } 
  forks?: boolean
  extra?: string[]
  quantity: number
}

type CartSelectionContextType = {
  selection: CartSelection
  setSelection: React.Dispatch<React.SetStateAction<CartSelection>>
}

const CartSelectionContext = createContext<CartSelectionContextType | undefined>(undefined)

export const CartSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selection, setSelection] = useState<CartSelection>({
    quantity: 0
  })
  return (
    <CartSelectionContext.Provider value={{ selection, setSelection }}>
      {children}
    </CartSelectionContext.Provider>
  )
}

export const useCartSelection = () => {
  const context = useContext(CartSelectionContext)
  if (!context) throw new Error("useCartSelection deve estar dentro do CartSelectionProvider")
  return context
}
