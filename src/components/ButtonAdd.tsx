'use client'

import React from "react"
import { Button } from "./ui/button"
import { ButtonQty } from "./ButtonQty"
import { Restaurant } from "@/data/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/feature/store"
import { addToCart } from "@/lib/feature/cart/cartSlice"
import { Product } from "@/lib/feature/product/prodSlice"

type Props = {
  item: Product
  restaurant: Restaurant
}

const ButtonAdd: React.FC<Props> = ({ item }) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const { availableProducts } = useSelector((state: RootState) => state.prod)

  const product = availableProducts.find((prod) => prod.id === item.id)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(
      addToCart({
        id: product?.id ? product?.id : item.id,
        name: product?.name ? product?.name : item.name,
        description: product?.description ? product.description : item.description,
        price: product?.price ? product?.price : item.price,
        size: product?.size ? product?.size : item.size,
        image: product?.image ? product?.image : item.image,
      })
    )
  }

  if (!product) return

  console.log({ items })
  return (
    <div>
      {!items[product?.id]?.quantity ? (
        <Button onClick={handleClick} className="bg-[#6D6F73] text-white">
          adicionar
        </Button>
      ) : (
        <ButtonQty item={item} />
      )}
    </div>
  )
}

export default ButtonAdd