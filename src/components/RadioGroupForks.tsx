'use client'

import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Product, updateProduct } from "@/lib/feature/product/prodSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/feature/store"

type Props = {
  foodItem: Product
}

export const RadioGroupForks: React.FC<Props> = ({ foodItem }) => {
  const [selectedForks, setSelectedForks] = useState<string>(
    foodItem.forks ? "garfo e faca descartável" : "Não precisa"
  )

  const { availableProducts } = useSelector((state: RootState) => state.prod)

  const product = availableProducts.find((prod) => prod.id === foodItem.id)

  const dispatch = useDispatch()

  useEffect(() => {
    const forks = selectedForks !== "Não precisa"
    if (product) {
      dispatch(
        updateProduct({
          pid: product.id,
          data: {
            ...product,
            forks,
          },
        })
      )
    }
  }, [selectedForks, dispatch, foodItem])

  return (
    <RadioGroup value={selectedForks} onValueChange={setSelectedForks}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="Não precisa" id="r1" />
        <Label className="text-[#6D6F73] font-normal text-sm" htmlFor="r1">
          Não precisa
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="garfo e faca descartável" id="r2" />
        <Label htmlFor="r2" className="text-[#6D6F73] font-normal text-sm">
          garfo e faca descartável
        </Label>
      </div>
    </RadioGroup>
  )
}
