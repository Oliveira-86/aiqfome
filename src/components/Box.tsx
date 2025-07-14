import React, { ReactNode } from 'react'

type Props = {
    title: string
    subTitle: string
    children: ReactNode
    necessary?: boolean
}

export const Box: React.FC<Props> = ({ children, title, subTitle, necessary = false }) => {
  return (
    <div className='w-full'>
        <div className='flex flex-row justify-between items-center mb-4'>
            <div className='flex-col text-start'>
                <p className='font-bold text-base text-[#202326]'>{title}</p>
                <p className='font-bold text-xs text-[#6D6F73]'>{subTitle}</p>
            </div>
            {necessary && (
                <div className="bg-[#393A3C] mt-3 p-1.5 rounded-sm inline-flex">
                    <p className="font-bold text-xs text-white">obrigatório</p>   
                </div>
            )}
        </div>
        {children}
    </div>
  )
}
