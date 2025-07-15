'use client'

import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useCartSelection } from '@/context/cart'

export const RadioGroupSize = () => {
    const { selection, setSelection } = useCartSelection()
    
    return (
        <RadioGroup value={selection.size} onValueChange={(value) => setSelection((prev) => ({ ...prev, size: value }))}>
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