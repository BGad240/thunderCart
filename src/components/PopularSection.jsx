"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { getPopular } from '../utils/api/api'
import ProductCard from './uiComponents/ProductCard'

const PopularSection = () => {
    const [popular, setpopular] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await getPopular()
                setpopular(res)

            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
        console.log(popular)
    }, [])



    return (
        <div className=' w-[80%] mx-[auto] cursor-pointer'>
            <h1 className='my-[30px] text-[25px] text-gray-700 '>Popular Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-[auto] gap-[20px]'>
                {
                    popular.slice(0, 10).map(prod => <ProductCard title={prod.title} price={prod.price} des={prod.description} rating={prod.rating} key={prod.id} image={prod.images[0]} id={prod.id} />)
                }
            </div>
            <div className='w-fit mx-auto'>
                <button className='my-[130px] border-1 border-gray-500/20 text-gray-500/100 hover:bg-orange w-[130px] h-[50px] focus:outline-none hover:bg-orange-500/80 hover:text-white duration-350 hover:border-none'>
                    Show More
                </button>
            </div>

        </div>
    )
}

export default PopularSection