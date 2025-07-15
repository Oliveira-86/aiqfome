import { FoodItem } from "@/lib/types"
import React from "react"

type Props = {
  food: FoodItem
}

export const CardAccordion: React.FC<Props> = ({ food }) => {
  return (
    <div className="w-full flex items-center justify-between mb-4 pl-2">
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
