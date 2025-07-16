import { addToCart, removeFromCart } from "@/lib/feature/cart/cartSlice"
import { Product, ProductDrink } from "@/lib/feature/product/prodSlice"
import Image from "next/image"
import React from "react"
import { useDispatch } from "react-redux"

type Props = {
  item: Product
  name: string
  size: string
  drink_list?: ProductDrink[]
  total: number
  quantity: number
  acc?: string[]
  extra?: string[]
}

export const CardTicket: React.FC<Props> = ({
  item,
  name,
  size,
  total,
  quantity,
  drink_list,
  acc,
  extra,
}) => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        size: item.size,
        image: item.image,
      })
    )
  }

  const handleDecrement = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <>
      <div className="py-5">
        <div className="w-full flex items-center justify-between">
          <div className="flex-col">
            <p className="font-semibold text-sm text-[#202326]">{name}</p>
          </div>
          <div className="flex-col items-end text-end">
            <p className="font-bold text-sm text-[#7B1FA2]">R$ {total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-3 mt-4">
          <Image src="/icons/pencil.svg" alt="Logo da empresa" width={14} height={14} />
          <p className="font-bold text-sm text-[#00A296] mr-8">editar</p>
          <div
            onClick={handleDecrement}
            className="flex cursor-pointer items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296] mr-2"
          >
            -
          </div>
          <p className="font-bold text-sm text-[#393A3C] mr-2">{quantity}</p>
          <div
            onClick={handleIncrement}
            className="flex cursor-pointer items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296]"
          >
            +
          </div>
        </div>
        <p className="font-bold text-xs text-[#6D6F73]">• tamanho</p>
        <p className="font-bold text-xs text-[#6D6F73] ml-3">{size}</p>
        {drink_list && drink_list.length > 0 && (
          <p className="font-bold text-xs text-[#6D6F73] mt-2">• vai querer bebida?</p>
        )}
        {drink_list &&
          drink_list.map((d, index) => (
            <p key={`${d.id}${index}`} className="font-bold text-xs text-[#6D6F73] ml-3">
              {d.title}
              <span className="font-bold text-xs text-[#00A296] ml-3">+R${d.price}</span>
            </p>
          ))}
        {acc && acc.length > 0 && (
          <p className="font-bold text-xs text-[#6D6F73] mt-2">• {acc?.length} acompanhamentos</p>
        )}
        {acc &&
          acc.length > 0 &&
          acc.map((acc, index) => (
            <p key={`${index}`} className="font-bold text-xs text-[#6D6F73] ml-3">
              {acc}
            </p>
          ))}
        {extra && extra.length > 0 && (
          <p className="font-bold text-xs text-[#6D6F73] mt-2">• {extra?.length} acompanhamentos</p>
        )}
      </div>
      <div className="h-1 bg-gray-100" />
    </>
  )
}
