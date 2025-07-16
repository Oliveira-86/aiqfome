"use client"

import React from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "@/lib/feature/cart/cartSlice"
import { RootState } from "@/lib/feature/store"
import { Product } from "@/lib/feature/product/prodSlice"

type Props = {
  item: Product
}

export const ButtonQty: React.FC<Props> = ({ item }) => {
  const { items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        size: item.size,
        image: item.image,
      })
    )
  }

  const handleDecrement = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <div className="flex flex-row items-center justify-end gap-3">
      {items[item.id]?.quantity === 1 ? (
        <Image
          src="/icons/trash.svg"
          width={20}
          height={20}
          alt="trash icon"
          onClick={handleDecrement}
          className="mr-2.5 cursor-pointer"
        />
      ) : (
        <div
          onClick={handleDecrement}
          className="flex items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296] mr-2 cursor-pointer"
        >
          -
        </div>
      )}

      <p className="font-bold text-sm text-[#393A3C] mr-2">{items[item.id].quantity}</p>

      <div
        onClick={handleIncrement}
        className="flex items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296] cursor-pointer"
      >
        +
      </div>
    </div>
  )
}
