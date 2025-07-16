"use client"

import React, { useEffect, useState } from "react"
import { Restaurant } from "@/data/types"
import { useDispatch, useSelector } from "react-redux"
import { Product, ProductDrink, updateProduct } from "@/lib/feature/product/prodSlice"
import { RootState } from "@/lib/feature/store"

type Props = {
  restaurant: Restaurant
  foodItem: Product
}

type SelectionState = {
  drinks: Record<string, number>
}

export const AddDrinks: React.FC<Props> = ({ restaurant, foodItem }) => {
  const [selection, setSelection] = useState<SelectionState>({ drinks: {} })

  const dispatch = useDispatch()

  const { availableProducts } = useSelector((state: RootState) => state.prod)

  const product = availableProducts.find((prod) => prod.id === foodItem.id)

  useEffect(() => {
    if (product) {
      const drinks: ProductDrink[] = Object.entries(selection.drinks)
        .map(([id, quantity]) => {
          const drink = restaurant.drink_list.flatMap((c) => c.items).find((d) => d.id === id)

          if (!drink) return null

          return {
            id: drink.id,
            title: drink.name,
            price: drink.price * quantity,
          }
        })
        .filter(Boolean) as ProductDrink[]

      dispatch(
        updateProduct({
          pid: product.id,
          data: {
            ...product,
            drinks,
          },
        })
      )
    }
  }, [selection])

  const handleAddDrink = (drinkId: string) => {
    setSelection((prev) => ({
      ...prev,
      drinks: {
        ...prev.drinks,
        [drinkId]: (prev.drinks?.[drinkId] ?? 0) + 1,
      },
    }))
  }

  const handleRemoveDrink = (drinkId: string) => {
    setSelection((prev) => {
      const currentQty = prev.drinks[drinkId] ?? 0
      if (currentQty <= 1) {
        const newDrinks = { ...prev.drinks }
        delete newDrinks[drinkId]
        return { ...prev, drinks: newDrinks }
      } else {
        return {
          ...prev,
          drinks: {
            ...prev.drinks,
            [drinkId]: currentQty - 1,
          },
        }
      }
    })
  }

  const getDrinkQuantity = (drinkId: string) => {
    return selection.drinks?.[drinkId] ?? 0
  }

  return (
    <div>
      <h3 className="font-bold text-base mb-2">Selecione as bebidas:</h3>
      {restaurant?.drink_list
        ?.flatMap((c) => c.items)
        .map((d) => {
          const quantity = getDrinkQuantity(d.id)
          return (
            <div key={d.id} className="flex flex-row items-center justify-between mb-3">
              <div className="flex flex-row items-center gap-3 mt-3">
                <button
                  onClick={() => handleRemoveDrink(d.id)}
                  className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]"
                >
                  -
                </button>

                <p className="font-bold text-sm text-[#393A3C]">{quantity}</p>

                <button
                  onClick={() => handleAddDrink(d.id)}
                  className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]"
                >
                  +
                </button>

                <p className="font-semibold text-sm text-[#6D6F73]">{d.name}</p>
              </div>

              <p className="font-bold text-sm text-[#7B1FA2]">
                +R$ {quantity > 0 ? (d.price * quantity).toFixed(2) : d.price.toFixed(2)}
              </p>
            </div>
          )
        })}
    </div>
  )
}
