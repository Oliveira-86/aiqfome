"use client"

import React, { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from "react-redux"
import { Product, updateProduct } from "@/lib/feature/product/prodSlice"
import { RootState } from "@/lib/feature/store"

type Props = {
  foodItem: Product
}

export const SelectorAccompaniments: React.FC<Props> = ({ foodItem }) => {
  const [selection, setSelection] = useState<string[]>([])

  const { availableProducts } = useSelector((state: RootState) => state.prod)

  const product = availableProducts.find((prod) => prod.id === foodItem.id)

  const dispatch = useDispatch()

  useEffect(() => {
    if (product) {
      dispatch(
        updateProduct({
          pid: foodItem.id,
          data: {
            ...product,
            accompaniments: selection,
          },
        })
      )
    }
  }, [selection])

  const handleChange = (acc: string, checked: boolean) => {
    setSelection((prev) => {
      if (checked) {
        if (prev.length >= 2) return prev
        return [...prev, acc]
      } else {
        return prev.filter((item) => item !== acc)
      }
    })
  }

  return (
    <div>
      {foodItem.accompaniments?.map((acc) => {
        const isChecked = selection.includes(acc)
        const isDisabled = !isChecked && selection.length >= 2

        return (
          <div key={acc} className="flex items-start gap-3 mb-2">
            <Checkbox
              id={acc}
              checked={isChecked}
              disabled={isDisabled}
              onCheckedChange={(checked) => handleChange(acc, !!checked)}
            />
            <Label htmlFor={acc} className="text-[#6D6F73] font-normal text-sm">
              {acc}
            </Label>
          </div>
        )
      })}
    </div>
  )
}
