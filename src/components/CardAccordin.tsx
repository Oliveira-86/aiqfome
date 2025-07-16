"use client"

import { Product } from "@/lib/feature/product/prodSlice"
import { createProduct } from "@/lib/feature/product/prodSlice"
import { useRouter } from "next/navigation"
import React from "react"
import { useDispatch } from "react-redux"

type Props = {
  food: Product
  restaurantName: string
}

export const CardAccordion: React.FC<Props> = ({ food, restaurantName }) => {
  const router = useRouter()

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(
      createProduct({
        id: food.id,
        price: food.price,
        description: food.description,
        name: food.name,
        image: food.image,
        size: food.size,
      })
    )
    router.push(`/catalogo/${restaurantName}/food/${food.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="w-full flex items-center justify-between mb-4 pl-2 cursor-pointer"
    >
      <div className="flex-col  w-[80%]">
        <p className="font-semibold text-sm text-[#202326]">{food.name}</p>
        <p className="font-normal text-sm text-[#6D6F73]">{food.description}</p>
      </div>
      <div className="flex-col items-end text-end  w-[20%]">
        <p className="font-bold text-sm text-[#7B1FA2]">R$ {food.price.toString()}</p>
      </div>
    </div>
  )
}
