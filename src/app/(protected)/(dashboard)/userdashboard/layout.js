import Sidebar from "@/components/userDashbord/Sidebar";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/nextAuth'
import { redirect } from "next/navigation"

export default async function layout({ children }) {
    const session = await getServerSession(authOptions)
    console.log("user from dashboard", session)
    console.log("user from dashboard", session?.user.name)
    if (!session) {
        redirect("/auth/login")
    }
    return (
        <div className="flex bg-white">
            <div className="w-[300px]">
                <Sidebar name={session?.user?.name} img={session?.user?.image} />
            </div>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
