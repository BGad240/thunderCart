'use client'
import React, { useEffect, useState } from 'react'
import { getWishes } from '@/utils/storage'
import ProductCard from '../uiComponents/ProductCard'
const WishDashBoard = () => {
    const [products, setProd] = useState([])
    useEffect(() => {
        const myWishes = getWishes()
        setProd(myWishes)
    }, [])
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:w-[90%] mx-auto'>
            {products.map((product) =>
                <ProductCard image={product.image} price={product.price} title={product.title} des={product.des} id={product.id} />
            )
            }
        </div>
    )
}

export default WishDashBoard