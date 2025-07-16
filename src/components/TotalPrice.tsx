"use client"

import { Product } from '@/lib/feature/product/prodSlice'
import { RootState } from '@/lib/feature/store'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {
    foodItem: Product
}

export const TotalPrice: React.FC<Props> = ({ foodItem }) => {
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <span className="font-bold text-sm text-[#393A3C] ml-2">
        {items[foodItem.id] ? (items[foodItem.id].sum.toFixed(2)) : foodItem.price.toFixed(2)}
    </span>
  )
}