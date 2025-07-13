import React from 'react'

type Props = {
    name: string
}

export const CardAccordion: React.FC<Props> = () => {
  return (
    <div className='w-full flex items-center justify-between mb-4 pl-2'>
       <div className='flex-col'>
            <p className='font-semibold text-sm text-[#202326]'>
                Califórnia
            </p>
            <p className='font-normal text-sm text-[#6D6F73]'>
                Kani, pepino e maçã ou manga
            </p>
       </div>
       <div className='flex-col items-end text-end'>
            <p className='font-bold text-sm text-[#7B1FA2]'>
                R$ 13,99
            </p>
       </div>
    </div>
  )
}
