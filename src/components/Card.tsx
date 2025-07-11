import Image from 'next/image'
import React from 'react'

type Props = {}

export const Card = (props: Props) => {
  return (
    <div className='w-full flex item-center rounded-2xl bg-[#EEF0F5] h-[72px] mb-4'>
        <div className="w-[20%] h-full relative">
            <Image
                src="/images/matsuri.png"
                alt="Logo da empresa"
                fill
                className="object-cover rounded-l-xl"
                priority
            />
        </div>

        <div className="py-2 px-4">
            <p className='font-bold text-4 text-base text-[#393A3C]'>Matsuri Concept</p>
            <div className='flex flex-row items-center space-x-1'>
                <Image
                    src="/icons/delivery.svg"
                    alt="Logo da empresa"
                    width={24}
                    height={24}
                    priority
                />
                <p className='font-bold text-sm text-[#027A7A]'>grátis</p>
                <Image
                    src="/icons/start.svg"
                    alt="Logo da empresa"
                    width={24}
                    height={24}
                    priority
                />
                <p className='font-bold text-sm text-[#6D6F73]'>4.7</p>
            </div>
        </div>
    </div>
  )
}
