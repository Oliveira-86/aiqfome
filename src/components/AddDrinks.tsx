"use client"

import React from "react"
import { Restaurant } from "@/data/types"
import { useCartSelection } from "@/context/cart"

type Props = {
  restaurant: Restaurant
}

export const AddDrinks: React.FC<Props> = ({ restaurant }) => {
  const { selection, setSelection } = useCartSelection()

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
      if (!prev.drinks) return prev

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

              <p className="font-bold text-sm text-[#7B1FA2]">+R$ {d.price}</p>
            </div>
          )
        })}
    </div>
  )
}

