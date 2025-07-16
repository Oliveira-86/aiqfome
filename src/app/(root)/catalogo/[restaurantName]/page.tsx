import { CardAccordion } from "@/components/CardAccordin"
import Store from "@/components/Store"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getRestaurantByName } from "@/data/actions"
import React from "react"

type Props = { params: {
  restaurantName: string
}}

const Catalogo: React.FC<Props> = ({ params }) => {
  const restaurantName = decodeURIComponent(params.restaurantName)
  const restaurant = getRestaurantByName(restaurantName)

  if (!restaurant) {
    return
  }

  return (
    <section className="bg-gray-100">
      <Store restaurant={restaurant} />
      {restaurant?.food_list.length > 0 &&
        restaurant?.food_list.map(
          (food) =>
            food?.items.length > 0 && (
              <Accordion
                key={food.category}
                className="bg-white w-full px-5 mb-1"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold text-base text-[#202326]">
                    <div className="flex items-center">{food?.category}</div>
                  </AccordionTrigger>
                  <AccordionContent key={food.category}>
                    <AccordionContent key={food.category}>
                      {food.items.map((item) => (
                        <CardAccordion restaurant={restaurant} food={item} key={item.id} />
                      ))}
                    </AccordionContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
        )}
      {restaurant?.drink_list.length > 0 &&
        restaurant?.drink_list.map(
          (food) =>
            food?.items.length > 0 && (
              <Accordion
                key={food.category}
                className="bg-white w-full px-5 mb-1"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold text-base text-[#202326]">
                    <div className="flex items-center">{food?.category}</div>
                  </AccordionTrigger>
                  <AccordionContent key={food.category}>
                    <AccordionContent key={food.category}>
                      {food.items.map((item) => (
                        <CardAccordion restaurant={restaurant} food={item} key={item.id} />
                      ))}
                    </AccordionContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
        )}
    </section>
  )
}

export default Catalogo
