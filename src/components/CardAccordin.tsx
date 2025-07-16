"use client"

import { Restaurant } from "@/data/types"
import { removeFromCart } from "@/lib/feature/cart/cartSlice"
import { addRestaurant, cleanRestaurant, Product } from "@/lib/feature/product/prodSlice"
import { createProduct } from "@/lib/feature/product/prodSlice"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

type Props = {
  food: Product
  restaurant: Restaurant
}

export const CardAccordion: React.FC<Props> = ({ food, restaurant }) => {
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleanRestaurant())
    dispatch(removeFromCart(food.id))
  }, [])

  const handleClick = () => {
    dispatch(
      createProduct({
        id: food.id,
        price: food.price,
        description: food.description,
        name: food.name,
        image: food.image,
        size: food.size,
        imageRestaurant: restaurant.image,
      })
    )
    dispatch(addRestaurant(restaurant))
    router.push(`/catalogo/${restaurant.name}/food/${food.id}`)
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
