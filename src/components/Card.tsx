import { Restaurant } from "@/lib/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {
  restaurant: Restaurant
}

export const Card: React.FC<Props> = ({ restaurant }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/catalogo/${restaurant.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="w-full flex item-center rounded-2xl bg-[#EEF0F5] h-[72px] mb-4 cursor-pointer"
    >
      <div className="w-[20%] h-full relative">
        <Image
          src={restaurant.image}
          alt="Logo da restaurantes"
          fill
          className="object-cover rounded-l-xl"
          priority
        />
      </div>
      <div className="py-2 px-4">
        <p className="font-bold text-4 text-base text-[#393A3C]">{restaurant.name}</p>
        <div className="flex flex-row items-center space-x-1">
          {restaurant.free_delivery_minimum && (
            <>
              <Image src="/icons/delivery.svg" alt="moto_icon" width={24} height={24} priority />

              <p className="font-bold text-sm text-[#027A7A]">grátis</p>
            </>
          )}
          <Image src="/icons/start.svg" alt="Logo da empresa" width={24} height={24} priority />
          <p className="font-bold text-sm text-[#6D6F73]">{restaurant.delivery_fee}</p>
        </div>
      </div>
    </div>
  )
}
