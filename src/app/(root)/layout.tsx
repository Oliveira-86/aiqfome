import { Header } from "@/components/Header"

export default async function HomePage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-16">
      <Header />
      {children}
    </div>
  )
}