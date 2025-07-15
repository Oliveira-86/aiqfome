"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Props = {
  value: string
  onChange: (value: string) => void
}

const FilterInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
      <Input
        type="text"
        placeholder="Busque pela loja ou culinária"
        className="pl-10 bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default FilterInput
