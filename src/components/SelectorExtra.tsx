"use client"

import React, { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useCartSelection } from "@/context/cart"


export const SelectorExtra = () => {
  const { selection, setSelection } = useCartSelection()
  
  const [selected, setSelected] = useState<string[]>(selection.extra ?? [])

  useEffect(() => {
    setSelection((prev) => ({
      ...prev,
      extra: selected,
    }))
  }, [selected, setSelection])

  const toggleAcc = (acc: string) => {
    setSelected((prev) =>
      prev.includes(acc)
        ? prev.filter((a) => a !== acc)
        : [...prev, acc]
    )
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
