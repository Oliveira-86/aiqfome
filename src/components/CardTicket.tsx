import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
}

export const CardTicket: React.FC<Props> = () => {
  return (
    <>
        <div className='py-5'>
            <div className='w-full flex items-center justify-between'>
            <div className='flex-col'>
                    <p className='font-semibold text-sm text-[#202326]'>
                        Ceviche de salmão
                    </p>
            </div>
            <div className='flex-col items-end text-end'>
                    <p className='font-bold text-sm text-[#7B1FA2]'>
                        R$ 19,99
                    </p>
            </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-3 mt-4">
                <Image
                    src="/icons/pencil.svg"
                    alt="Logo da empresa"
                    width={14}
                    height={14}
                />
                <p className="font-bold text-sm text-[#00A296] mr-8">
                    editar
                </p>
                <div className="flex items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296] mr-2">
                    -
                </div>
                <p className="font-bold text-sm text-[#393A3C] mr-2">
                    0
                </p>
                <div className="flex items-center justify-center w-6 h-6 border-[#00A296] border rounded-full font-bold text-lg text-[#00A296]">
                    +
                </div>
            </div>
            <p className='font-bold text-xs text-[#6D6F73]'>
                • tamanho
            </p>
            <p className='font-bold text-xs text-[#6D6F73] ml-3'>
                médio
            </p>
            <p className='font-bold text-xs text-[#6D6F73] mt-2'>
                • vai querer bebida?
            </p>
            <p className='font-bold text-xs text-[#6D6F73] ml-3'>
                coca-cola
                <span className='font-bold text-xs text-[#00A296] ml-3'>
                    +R$5,00
                </span>
            </p>
        </div>
        <div className="h-1 bg-gray-100" />
    </>
  )
}
