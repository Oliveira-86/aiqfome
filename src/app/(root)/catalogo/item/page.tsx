import { Box } from "@/components/Box"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import Image from "next/image"
import React from "react"

type Props = { title: string }

const Catalogo: React.FC<Props> = () => {
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
            <p className="font-bold text-xl text-[#393A3C]">
                Ceviche de salmão
            </p>
            <p className="flex items-baseline font-extrabold text-sm text-[#6D6F73] mt-2">
                a partir de
                <span className="text-lg text-[#7B1FA2] ml-2">
                    R$ 19,90
                </span>
            </p>
            <p className="font-semibold text-sm text-[#6D6F73]">
                salmão temperado com limão, cebola e pimenta
            </p>
        </div>
        <div className="flex justify-between items-center flex-row p-4">
            <div>
                <p className="font-bold text-base text-[#393A3C]">
                    quantos?
                </p>
                <p className="flex items-baseline font-semibold text-sm text-[#6D6F73] mt-2">
                    total
                    <span className="font-bold text-sm text-[#393A3C] ml-2">
                        R$ 19,90
                    </span>
                </p>
            </div>
            <Button className="bg-[#6D6F73] text-white">adicionar</Button>
        </div>
        <div className="h-1 bg-gray-100" />
        <div className="p-4">
            <Box title='qual o tamanho?' subTitle="escolha 1" necessary>
                 <RadioGroup>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Image
                                src="/icons/dolar.svg"
                                alt="ícone de dólar"
                                width={16}
                                height={16}
                                className="ml-2"
                            />
                        <Label className="text-[#6D6F73] font-normal text-sm" htmlFor="r1">         
                             médio
                        </Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2" className="text-[#6D6F73] font-normal text-sm">grande</Label>
                    </div>
                </RadioGroup>
            </Box>
        </div>
        <div className="h-1 bg-gray-100" />
         <div className="p-4">
            <Box title='acompanhamentos' subTitle="escolha de 1 a 2" necessary>
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">Enable notifications</Label>
                </div>
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">Enable notifications</Label>
                </div>
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">Enable notifications</Label>
                </div>
            </Box>
        </div>
        <div className="h-1 bg-gray-100" />
         <div className="p-4">
            <Box title='vai querer bebida?' subTitle="escolha quanto quiser">
                <div className="flex flex-row items-center justify-between mb-3">
                    <div className="flex flex-row items-center gap-3 mt-3">
                       <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-bold text-sm text-[#393A3C]">
                            0
                        </p>
                        <div className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-semibold text-sm text-[#6D6F73]">
                            coca-cola
                        </p>
                    </div>
                    <p className="font-bold text-sm text-[#7B1FA2]">
                        +R$ 5,00
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between mb-3">
                    <div className="flex flex-row items-center gap-3 mt-3">
                       <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-bold text-sm text-[#393A3C]">
                            0
                        </p>
                        <div className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-semibold text-sm text-[#6D6F73]">
                            fanta laranja
                        </p>
                    </div>
                    <p className="font-bold text-sm text-[#7B1FA2]">
                        +R$ 5,00
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between mb-3">
                    <div className="flex flex-row items-center gap-3 mt-3">
                       <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-bold text-sm text-[#393A3C]">
                            0
                        </p>
                        <div className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-semibold text-sm text-[#6D6F73]">
                            guaraná antarctica
                        </p>
                    </div>
                    <p className="font-bold text-sm text-[#7B1FA2]">
                        +R$ 5,00
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between mb-3">
                    <div className="flex flex-row items-center gap-3 mt-3">
                       <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-bold text-sm text-[#393A3C]">
                            0
                        </p>
                        <div className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-semibold text-sm text-[#6D6F73]">
                            suco prats laranja
                        </p>
                    </div>
                    <p className="font-bold text-sm text-[#7B1FA2]">
                        +R$ 6,00
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between mb-3">
                    <div className="flex flex-row items-center gap-3 mt-3">
                       <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-bold text-sm text-[#393A3C]">
                            0
                        </p>
                        <div className="flex items-center justify-center w-6 h-6 border-green-600 border rounded-full font-extrabold text-lg text-[#A8ADB7]">
                            -
                        </div>
                        <p className="font-semibold text-sm text-[#6D6F73]">
                            água sem gás
                        </p>
                    </div>
                    <p className="font-bold text-sm text-[#7B1FA2]">
                        +R$ 3,00
                    </p>
                </div>
            </Box>
        </div>
         <div className="h-1 bg-gray-100" />
         <div className="p-4">
           <Box title='precisa de talher?' subTitle="escolha até 1">
                 <RadioGroup>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label className="text-[#6D6F73] font-normal text-sm" htmlFor="r1">         
                             hashi
                        </Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2" className="text-[#6D6F73] font-normal text-sm">
                            garfo e faca descartável
                        </Label>
                    </div>
                </RadioGroup>
            </Box>
        </div>
        <div className="h-1 bg-gray-100" />
        <div className="p-4">
            <Box title='mais alguma coisa?' subTitle="escolha até 2">
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">biscoito da sorte</Label>
                </div>
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">rolinho primavera</Label>
                </div>
                <div className="flex items-start gap-3 mb-2">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle" className="text-[#6D6F73] font-normal text-sm">guioza</Label>
                </div>
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
    </section>
  )
}

export default Catalogo
