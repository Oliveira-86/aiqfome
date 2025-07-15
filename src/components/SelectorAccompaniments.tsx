"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FoodItem } from "@/data/types"
import { useCartSelection } from "@/context/cart"

type Props = {
  foodItem: FoodItem
}

export const SelectorAccompaniments: React.FC<Props> = ({ foodItem }) => {
  const { selection, setSelection } = useCartSelection()

  return (
    <div>
      {foodItem.accompaniments?.map((acc) => (
        <div key={acc} className="flex items-start gap-3 mb-2">
          <Checkbox
            id={acc}
            checked={selection.accompaniments?.includes(acc) || false}
            onCheckedChange={(checked) =>
              setSelection((prev) => {
                const prevAcc = prev.accompaniments ?? []
                return {
                  ...prev,
                  accompaniments: checked
                    ? [...prevAcc, acc]
                    : prevAcc.filter((item) => item !== acc),
                }
              })
            }
          />
          <Label htmlFor={acc} className="text-[#6D6F73] font-normal text-sm">
            {acc}
          </Label>
        </div>
      ))}
    </div>
  )
}
