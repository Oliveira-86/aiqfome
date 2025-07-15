"use client"

import React from "react"
import Image from "next/image"
import { useCartSelection } from "@/context/cart"

type Props = {
  itemId: string
  clickState: () => void
}

export const ButtonQty: React.FC<Props> = ({ clickState }) => {
  const { selection, setSelection } = useCartSelection()
  const quantity = selection.quantity || 0

  const handleIncrement = () => {
    setSelection((prev) => ({
      ...prev,
      quantity: (prev.quantity || 0) + 1,
    }))
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setSelection((prev) => ({
        ...prev,
        quantity: quantity - 1,
      }))
    } else if (quantity === 1) {
      setSelection((prev) => ({
        ...prev,
        quantity: 0,
      }))
      clickState()
    }
  }

  return (
    <div className="flex flex-row items-center justify-end gap-3">
      {quantity === 1 ? (
        <Image 
          src='/icons/trash.svg'
          width={20}
          height={20}
          alt='trash icon'
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

      <p className="font-bold text-sm text-[#393A3C] mr-2">{quantity}</p>

      <div
        onClick={handleIncrement}
        className="flex items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296] cursor-pointer"
      >
        +
      </div>
    </div>
  )
}
