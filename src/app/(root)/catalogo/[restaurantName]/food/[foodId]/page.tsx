import { AddDrinks } from "@/components/AddDrinks"
import { Box } from "@/components/Box"
import ButtonAdd from "@/components/ButtonAdd"
import { RadioGroupSize } from "@/components/RadioGroupSize"
import { RadioGroupForks } from "@/components/RadioGroupForks"
import { SelectorAccompaniments } from "@/components/SelectorAccompaniments"
import { getFoodById, getRestaurantByName } from "@/data/actions"
import Image from "next/image"
import React from "react"
import { SelectorExtra } from "@/components/SelectorExtra"
import { ButtonTicket } from "@/components/ButtonTicket"

type Props = {
  params: {
    foodId: string
    restaurantName: string
  }
}

const CatalogoItem: React.FC<Props> = async ({ params }) => {
  const { restaurantName, foodId } = params

  const foodItem = await getFoodById(restaurantName, foodId)
  const restaurant = await getRestaurantByName(restaurantName)

  if (!foodItem) return <div>Produto não encontrado</div>
  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <section className="">
      <div className="relative w-full h-[195px]">
        <Image
          src="/images/ceviche.png"
          alt="Logo da empresa"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className=" p-4">
        <p className="font-bold text-xl text-[#393A3C]">{foodItem?.name}</p>
        <p className="flex items-baseline font-extrabold text-sm text-[#6D6F73] mt-2">
          a partir de
          <span className="text-lg text-[#7B1FA2] ml-2">R$ {foodItem?.price}</span>
        </p>
        <p className="font-semibold text-sm text-[#6D6F73]">{foodItem?.description}</p>
      </div>
      <div className="flex justify-between items-center flex-row p-4">
        <div>
          <p className="font-bold text-base text-[#393A3C]">quantos?</p>
          <p className="flex items-baseline font-semibold text-sm text-[#6D6F73] mt-2">
            total
            <span className="font-bold text-sm text-[#393A3C] ml-2">R$ {foodItem.price}</span>
          </p>
        </div>
        <ButtonAdd item={foodItem} restaurant={restaurant} />
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4">
        <Box title="qual o tamanho?" subTitle="escolha 1" necessary>
          <RadioGroupSize />
        </Box>
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4">
        <Box title="acompanhamentos" subTitle="escolha de 1 a 2" necessary>
          <SelectorAccompaniments foodItem={foodItem} />
        </Box>
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4">
        <Box title="vai querer bebida?" subTitle="escolha quanto quiser">
          <AddDrinks restaurant={restaurant} />
        </Box>
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4">
        <Box title="precisa de talher?">
          <RadioGroupForks />
        </Box>
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4">
        <Box title="mais alguma coisa?" subTitle="escolha até 2">
          <SelectorExtra />
        </Box>
      </div>
      <div className="h-1 bg-gray-100" />
      <div className="p-4 mb-9">
        <div className="border border-gray-200 rounded-sm p-2">
          <p className="font-semibold text-sm text-[#6D6F73]">
            alguma observação do item? • opcional
          </p>
          <p className="font-semibold text-sm text-[#6D6F73]">
            ex: tirar algum ingrediente, ponto do prato
          </p>
        </div>
      </div>

      <ButtonTicket foodItem={foodItem} restaurant={restaurant} />
    </section>
  )
}

export default CatalogoItem
