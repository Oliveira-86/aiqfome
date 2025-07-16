'use client'

import React, { useEffect, useState } from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { useDispatch } from "react-redux"
import { Product, updateProduct } from "@/lib/feature/product/prodSlice"

type Props = {
  item: Product
}

export const RadioGroupSize: React.FC<Props> = ({ item }) => {
  const [selectSize, setSelectSize] = useState(item.size)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log({ selectSize })
    dispatch(updateProduct({ pid: item.id, data: { ...item, size: selectSize } }))
  }, [selectSize])

  return (
    <RadioGroup
      defaultValue={item.size}
      value={selectSize}
      onValueChange={(value) => setSelectSize(value)}
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="Médio" id="r1" />
        <Label className="text-[#6D6F73] font-normal text-sm" htmlFor="r1">
          Médio
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="Grande" id="r2" />
        <Label htmlFor="r2" className="text-[#6D6F73] font-normal text-sm">
          Grande
        </Label>
      </div>
    </RadioGroup>
  )
}