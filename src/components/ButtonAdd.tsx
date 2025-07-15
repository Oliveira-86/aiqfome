'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ButtonQty } from './ButtonQty'
import { Drink, FoodItem, Restaurant } from '@/data/types'
import { useCartSelection } from '@/context/cart'

type Props = {
  item: FoodItem | Drink
  restaurant: Restaurant
}

const ButtonAdd: React.FC<Props> = ({ item }) => {
    const [added, setAdded] = useState(false)

    const { setSelection } = useCartSelection()

    const handleClick = () => {
        setAdded(true)
        setSelection((prev) => ({
            ...prev,
            quantity: (prev.quantity || 0) + 1,
        }))
    }

    const handleState = () => {
        setAdded(false)
    }

    return (
        <div>
            {added ? (
                <ButtonQty itemId={item.id} clickState={handleState} />
                ) : (
                <Button onClick={handleClick} className="bg-[#6D6F73] text-white">adicionar</Button>
            )}
        </div>
    )
}

export default ButtonAdd