"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { RootState } from "@/lib/feature/store"
import { Product } from "@/lib/feature/product/prodSlice"

type Props = {
  foodItem: Product
  restaurantName: string
}

export const ButtonTicket: React.FC<Props> = ({ foodItem, restaurantName }) => {
  const { availableProducts } = useSelector((state: RootState) => state.prod)
  const { items } = useSelector((state: RootState) => state.cart)

  const product = availableProducts.find((prod) => prod.id === foodItem.id)

  const router = useRouter()

  const handleClick = () => {
    if (product) {
      router.push(`/catalogo/${restaurantName}/food/${foodItem.id}/ticket`)
    }
  }

  const isDisabled =
    !items[foodItem.id]?.quantity || // falsy (undefined, 0, etc.)
    !product?.size || // "" ou undefined
    !product?.accompaniments?.length

  return (
    <div className="w-full bg-[#EEF0F5] px-4 pt-6 pb-3">
      <Button className="bg-[#7B1FA2] w-full" size="lg" onClick={handleClick} disabled={isDisabled}>
        ver ticket
      </Button>
    </div>
  )
}
