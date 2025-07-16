"use client"

import { CardTicket } from "@/components/CardTicket"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/data/types"
import { RootState } from "@/lib/feature/store"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Ticket = () => {
  const { items } = useSelector((state: RootState) => state.cart)

  const [storedItems, setStoredItems] = useState<CartItem[] | null>(null)

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items))
  }, [items])

  useEffect(() => {
    const data = localStorage.getItem("data")
    if (data) {
      try {
        setStoredItems(JSON.parse(data))
      } catch {
        setStoredItems(null)
      }
    }
  }, [])

  if (!storedItems || storedItems.length === 0) return

  return (
    <section className="bg-white p-5">
      {storedItems.map((i, index) => (
        <React.Fragment key={`${i.id}${index}`}>
          <div className="flex flex-row items-center gap-2 mb-2">
            <Image
              src={i.restaurant.image}
              alt="Logo da empresa"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm  text-[#6D6F73]">seus itens em</p>
              <p className="font-bold text-base  text-[#202326]">{i.restaurant.name}</p>
            </div>
          </div>
          <div className="mb-20">
            <CardTicket
              item={storedItems}
              name={i.name}
              price={i.price}
              size={i.size || "Médio"}
              drink_list={i.drinks_list || []}
              quantity={i.quantity}
              total={i.total}
            />
          </div>
        </React.Fragment>
      ))}
      <div className="h-1 bg-gray-100" />
      <div className="fixed bottom-0 py-5 bg-white w-full flex flex-row items-center justify-around">
        <div className="flex flex-col">
          <p className="font-bold text-sm  text-[#202326]">subtotal</p>
          <p className="font-extrabold text-xl  text-[#7B1FA2]">R$ 112,00</p>
        </div>
        <Button size={"lg"} className="bg-[#7B1FA2] text-sm">
          ir para o pagamento
        </Button>
      </div>
    </section>
  )
}

export default Ticket
