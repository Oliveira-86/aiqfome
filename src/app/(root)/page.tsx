import { Card } from "@/components/Card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import React from "react"

type Props = {}

const Home = () => {
  return (
    <>
      <div className="bg-[#7B1FA2] p-4">
        {/* Campo de busca */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            type="text"
            placeholder="Busque pela loja ou culinária"
            className="pl-10 bg-white"
          />
        </div>
      </div>
      {/* Banner abaixo do input */}
      <div className="relative w-full h-[130px]">
        <Image
          src="/images/banner.png"
          alt="Logo da empresa"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="bg-white p-4">
        <p className="font-extrabold text-lx text-[#7B1FA2] mb-4">abertos</p>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default Home
