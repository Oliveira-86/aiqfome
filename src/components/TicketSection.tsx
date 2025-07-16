'use client'

import React from "react"
import { addOrder } from "@/lib/feature/order/orderSlice"
import { RootState } from "@/lib/feature/store"
import Image from "next/image"
import { CardTicket } from "@/components/CardTicket"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "@/lib/feature/cart/cartSlice"
import { deleteProduct } from "@/lib/feature/product/prodSlice"

type Props = {
  foodId: string
  restaurantName: string
}

export const TicketSection: React.FC<Props> = ({ restaurantName, foodId }) => {
  const { availableProducts } = useSelector((state: RootState) => state.prod)

  const { items } = useSelector((state: RootState) => state.cart)

  console.log({ items })

  const dispatch = useDispatch()

  const handleOrder = () => {
    const myDate = new Date()
    const serializableDate = myDate.toISOString()
    localStorage.setItem(
      "order",
      JSON.stringify({
        date: serializableDate,
        id: restaurantName + foodId + serializableDate,
        items,
        amount: items[foodId].sum,
      })
    )
    dispatch(
      addOrder({
        date: serializableDate,
        id: restaurantName + foodId + serializableDate,
        items,
        amount: items[foodId].sum,
      })
    )
  }

  return (
    <div>
      {Object.entries(items).map(([key, i], index) => {
        const product = availableProducts.find((prod) => prod.id === key)

        if (!product) return

        const handleIncrement = () => {
          dispatch(
            addToCart({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              size: product.size,
              image: product.image,
            })
          )
        }

        const handleDecrement = () => {
          dispatch(removeFromCart(product.id))
        }

        const handleDelete = () => {
          dispatch(deleteProduct(product.id))
        }

        return (
          <React.Fragment key={`${product.id}${index}`}>
            <div className="flex flex-row items-center gap-2 mb-2">
              <Image
                src={product.imageRestaurant || ""}
                alt="Logo da empresa"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <div className="flex flex-col">
                <p className="font-bold text-sm  text-[#6D6F73]">seus itens em</p>
                <p className="font-bold text-base  text-[#202326]">{i.productPrice}</p>
              </div>
            </div>
            <div className="mb-20">
              <CardTicket
                item={product}
                name={i.productTitle}
                size={i.size || "Médio"}
                drink_list={product.drinks || []}
                quantity={i.quantity}
                total={i.sum}
                extra={product.extra}
                acc={product.accompaniments}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              />
            </div>
          </React.Fragment>
        )
      })}
      <div className="h-1 bg-gray-100" />
      <div className="fixed bottom-0 py-5 bg-white w-full flex flex-row items-center justify-around">
        <div className="flex flex-col">
          <p className="font-bold text-sm  text-[#202326]">subtotal</p>
          <p className="font-extrabold text-xl  text-[#7B1FA2]">
            R$ {(items[foodId]?.sum || 0).toFixed(2)}
          </p>
        </div>
        <Button size={"lg"} className="bg-[#7B1FA2] text-sm" onClick={handleOrder}>
          ir para o pagamento
        </Button>
      </div>
    </div>
  )
}