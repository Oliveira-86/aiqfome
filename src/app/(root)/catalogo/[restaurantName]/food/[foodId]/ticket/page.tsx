
import { TicketSection } from "@/components/TicketSection"
import React from "react"

type Props = {
  params: {
    foodId: string
    restaurantName: string
  }
}

const Ticket: React.FC<Props> = ({ params }) => {
  const { restaurantName, foodId } = params

  return (
    <section className="bg-white p-5">
     <TicketSection restaurantName={restaurantName} foodId={foodId} /> 
    </section>
  )
}

export default Ticket
