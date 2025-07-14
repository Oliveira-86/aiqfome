'use client'

import Image from 'next/image'
import React from 'react'

type Props = {
    address: string
}

export const Header: React.FC<Props> = ({ address }) => {
  return (
    <div className="fixed top-0 w-full bg-[#7B1FA2] py-4 px-5 flex items-center justify-between">
      <Image src="/icons/logo.svg" alt="Logo da empresa" width={32} height={32} />
      <div className="flex items-center justify-start">
        <Image src="/icons/mark.svg" alt="Logo da empresa" width={24} height={24} />
        <div className="flex flex-col ml-2">
          <p className="font-bold text-purple-200 text-sm leading-[19px] tracking-normal">
            entregando em
          </p>
          <p className="font-bol text-white d text-base leading-[19px] tracking-normal">
            Rua Mandaguari, 198
          </p>
        </div>
      </div>
      <Image src="/icons/profile.svg" alt="Logo da empresa" width={24} height={24} />
    </div>
  )
}