"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/lib/feature/cart/cartSlice"
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

  const dispatch = useDispatch()

  const router = useRouter()

  const handleClick = () => {
    if (product) {
      dispatch(addToCart({ ...product }))
      router.push(`/catalogo/${restaurantName}/food/${foodItem.id}/ticket`)
    }
  }

  return (
    <div className="w-full bg-[#EEF0F5] px-4 pt-6 pb-3">
      <Button
        className="bg-[#7B1FA2] w-full"
        size="lg"
        onClick={handleClick}
        disabled={
          items[foodItem.id]?.quantity === 0 ||
          product?.size === "" ||
          product?.accompaniments?.length === 0
        }
      >
        ver ticket
      </Button>
    </div>
  )
}
