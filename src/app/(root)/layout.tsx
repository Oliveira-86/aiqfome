import { Header } from "@/components/Header"
import { getUser } from "@/data/actions"

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const user = getUser()
  return (
    <div className="mt-16">
      <Header address={user.address} />
      {children}
    </div>
  )
}