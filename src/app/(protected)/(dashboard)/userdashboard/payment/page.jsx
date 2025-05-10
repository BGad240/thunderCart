import PaymentMethod from '@/components/userDashbord/PaymentMethod'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/nextAuth'

export default async function page({ searchParams }) {
    const session = await getServerSession(authOptions)
    console.log(session)
    const { id, price, image, title } = searchParams
    const productData = {
        id, price, image, title
    }
    return (
        <PaymentMethod product={productData} userId={session?.user.id} userEmail={session?.user.email} />
    )
}
