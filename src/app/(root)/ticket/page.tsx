import { CardTicket } from '@/components/CardTicket'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Ticket = (props: Props) => {
  return (
    <section className='bg-white p-5'>
        <div className="flex flex-row items-center gap-2 mb-2">
            <Image
                src="/images/matsuri.png"
                alt="Logo da empresa"
                width={32}
                height={32}
                className="rounded-sm"
            />
            <div className='flex flex-col'>
                <p className="font-bold text-sm  text-[#6D6F73]">seus itens em</p>
                <p className="font-bold text-base  text-[#202326]">Matsuri Concept</p>
            </div>
        </div>
        <div className='mb-20'>
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket /> 
            <CardTicket /> 
            <CardTicket /> 
            <CardTicket />
        </div> 
        <div className="h-1 bg-gray-100" />
        <div className='fixed bottom-0 py-5 bg-white w-full flex flex-row items-center justify-around'>
            <div className='flex flex-col'>
                <p className="font-bold text-sm  text-[#202326]">subtotal</p>
                <p className="font-extrabold text-xl  text-[#7B1FA2]">R$ 112,00</p>
            </div>
            <Button size={'lg'} className='bg-[#7B1FA2] text-sm'> ir para o pagamento</Button>
        </div>
    </section>
  )
}

export default Ticket