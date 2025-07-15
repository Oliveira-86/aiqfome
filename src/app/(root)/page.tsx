import { FilterSection } from "@/components/FilterSection"
import { getRestaurants } from "@/lib/data"
import Image from "next/image"

export default async function HomePage() {
  const restaurants = getRestaurants()

  return (
    <>
      <div className="relative w-full h-[130px] mt-32">
        <Image src="/images/banner.png" alt="Banner" fill className="object-cover" priority />
      </div>

      <div className="bg-[#7B1FA2]">
        <FilterSection restaurants={restaurants} />
      </div>
    </>
  )
}
