'use client'

import { Restaurant } from "@/lib/types"
import { useState } from "react"
import FilterInput from "./FilterInput"
import { Card } from "./Card"

type Props = {
    restaurants: Restaurant[]
}

export const FilterSection: React.FC<Props> = ({ restaurants }) => {
  const [filter, setFilter] = useState("")

  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <div className=" fixed top-16 left-0 w-full bg-[#7B1FA2] py-4 px-3.5 flex items-center justify-between z-10 mb-4">
        <FilterInput value={filter} onChange={setFilter} />
      </div>

      <section className="bg-white p-4">
        <p className="font-extrabold text-lx text-[#7B1FA2] mb-4">abertos</p>
        {filtered.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </>
  )
}