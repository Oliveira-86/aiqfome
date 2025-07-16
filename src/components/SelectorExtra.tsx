"use client"

import React, { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Product, updateProduct } from "@/lib/feature/product/prodSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/feature/store"

type Props = {
  foodItem: Product
}

export const SelectorExtra: React.FC<Props> = ({ foodItem }) => {
  const [selected, setSelected] = useState<string[]>([])

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
            extra: selected,
          },
        })
      )
    }
  }, [selected])

  const toggleAcc = (acc: string) => {
    setSelected((prev) => (prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]))
  }

  return (
    <>
      <div className="flex items-start gap-3 mb-2">
        <Checkbox
          id="ketchup"
          checked={selected.includes("Ketchup")}
          onCheckedChange={() => toggleAcc("Ketchup")}
        />
        <Label htmlFor="ketchup" className="text-[#6D6F73] font-normal text-sm">
          Ketchup
        </Label>
      </div>
      <div className="flex items-start gap-3 mb-2">
        <Checkbox
          id="mostarda"
          checked={selected.includes("Mostarda")}
          onCheckedChange={() => toggleAcc("Mostarda")}
        />
        <Label htmlFor="mostarda" className="text-[#6D6F73] font-normal text-sm">
          Mostarda
        </Label>
      </div>
    </>
  )
}
