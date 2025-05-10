'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const BuyNow = ({product}) => {
    const router = useRouter()
    const handleBuyNow = () => {
        router.push(`/userdashboard/payment?id=${product.id}&title=${product.title}&image=${product.images[0]}&price=${product.price}`)
        console.log(router)
    }

    return (
        <button className='m-[10px] w-[200px] bg-orange-500/80 h-[50px] mr-[20px] hover:bg-orange-600/80 duration-300 text-white' onClick={handleBuyNow}>Buy Now</button>
    )
}

export default BuyNow