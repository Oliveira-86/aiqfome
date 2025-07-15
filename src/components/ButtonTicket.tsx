"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useCartSelection } from "@/context/cart"
import { useDispatch } from "react-redux"
import { addItem } from "@/lib/feature/cart/cartSlice"
import { FoodItem, Restaurant, CategoryItems } from "@/data/types"

type Props = {
  foodItem: FoodItem
  restaurant: Restaurant
}

export const ButtonTicket: React.FC<Props> = ({ foodItem, restaurant }) => {
  const { selection } = useCartSelection()
  const dispatch = useDispatch()

  const handleClick = () => {
    const isDrink = !!selection.drinks

    // Constrói drinks_list a partir do selection.drinks
    let drinks_list: CategoryItems<FoodItem>[] | undefined = undefined

    if (isDrink && selection.drinks) {

      const drinksMap = selection.drinks

      const allDrinks: FoodItem[] = restaurant.drink_list.flatMap(
        (cat: CategoryItems<FoodItem>) => cat.items
      )

      // Filtra apenas os drinks selecionados com suas quantidades
      const selectedDrinks: FoodItem[] = Object.entries(drinksMap)
        .map(([drinkId, qty]) => {
          const drink = allDrinks.find((d) => d.id === drinkId)
          if (!drink) return null
          return Array(qty).fill(drink)
        })
        .flat()
        .filter(Boolean) as FoodItem[]

      drinks_list = [
        {
          category: "Bebidas Selecionadas",
          items: selectedDrinks,
        },
      ]
    }

    dispatch(
      addItem({
        ...foodItem,
        restaurant: restaurant,
        type: isDrink ? "drink" : "food",
        item: foodItem,
        drinks_list,
        size: selection.size,
        forks: selection.forks,
        accompaniments: selection.accompaniments,
        extra: selection.extra,
      })
    )
  }

  return (
    <div className="w-full bg-[#EEF0F5] px-4 pt-6 pb-3">
      <Button className="bg-[#7B1FA2] w-full" size="lg" onClick={handleClick}>
        ver ticket
      </Button>
    </div>
  )
}
