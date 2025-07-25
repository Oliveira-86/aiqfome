import { Restaurant } from "@/data/types"
import Image from "next/image"
import React from "react"

type Props = {
  restaurant: Restaurant | undefined
}

const Store: React.FC<Props> = ({ restaurant }) => {
  return (
    <section className="bg-white p-4">
      <div className="flex flex-row items-center">
        <Image
          src={restaurant?.image || ""}
          alt="Logo da empresa"
          width={36}
          height={36}
          className="rounded-sm"
        />
        <p className="font-extrabold text-xl ml-2 text-[#202326]">{restaurant?.name}</p>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <div className="flex flex-row items-center space-x-5">
          <Image
            src="/icons/share.svg"
            alt="Logo da empresa"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <Image
            src="/icons/like.svg"
            alt="Logo da empresa"
            width={32}
            height={32}
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <p className="font-bold text-xs text-[#00A296]">mais infos</p>
          <Image
            src="/icons/chevron_right.svg"
            alt="Logo da empresa"
            width={8}
            height={8}
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 mt-3">
        <Image
          src="/icons/delivery_purple.svg"
          alt="Logo da empresa"
          width={20}
          height={20}
          className="ml-2"
        />
        <p className="font-bold text-sm text-[#7B1FA2]">R$ {restaurant?.delivery_fee}</p>
        <Image src="/icons/chevron_right_purple.svg" alt="Logo da empresa" width={8} height={8} />
        <Image src="/icons/point.svg" alt="Logo da empresa" width={8} height={8} />
        <p className="font-bold text-xs text-[#6D6F73]">hoje, {restaurant?.delivery_time}</p>
        <Image src="/icons/point.svg" alt="Logo da empresa" width={8} height={8} />
        <p className="font-bold text-xs text-[#6D6F73]">{restaurant?.distance}km</p>
      </div>

      {restaurant?.free_delivery_minimum && (
        <div className="bg-green-100 mt-3 py-1.5 px-1.5 rounded-sm inline-flex">
          <p className="font-bold text-xs text-[#027A7A]">
            entrega grátis acima de R$ {restaurant?.free_delivery_minimum}
          </p>
        </div>
      )}

      <div className="flex flex-row items-center space-x-3 mt-3">
        <Image src="/icons/start.svg" alt="Logo da empresa" width={16} height={16} />
        <p className="font-bold text-xs text-[#6D6F73]">{restaurant?.stars}</p>
        <Image src="/icons/chevron_right_gray.svg" alt="Logo da empresa" width={8} height={8} />
        <Image src="/icons/point.svg" alt="Logo da empresa" width={8} height={8} />
        <p className="font-bold text-xs text-[#02A117]">fecha às {restaurant?.close}</p>
      </div>
      <div className="flex flex-row items-center justify-between mt-3">
        <p className="font-bold text-xs text-[#6D6F73]">
          pedido mínimo: R$ {restaurant?.minimum_value}
        </p>
      </div>
    </section>
  )
}

export default Store
