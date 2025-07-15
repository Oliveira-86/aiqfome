'use client'

import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useCartSelection } from '@/context/cart'

export const RadioGroupForks = () => {
  const { selection, setSelection } = useCartSelection()
  const [selectedForks, setSelectedForks] = useState<string>(
    selection.forks === false || selection.forks === undefined ? "Não precisa" : "garfo e faca descartável"
  )

  useEffect(() => {
    setSelection((prev) => ({
      ...prev,
      forks: selectedForks === "Não precisa" ? false : true,
    }))
  }, [selectedForks, setSelection])

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