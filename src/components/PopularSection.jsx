"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { getPopular } from '../utils/api/api'
import Image from 'next/image'
import { trunction } from '../utils/edits'

const PopularSection = () => {
    const [pobular, setPobular] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await getPopular()
                setPobular(res)

            } catch (error) {
                console.error(error)
                return []
            }
        }
        getProducts()
    }, [])

    console.log(pobular)

    return (
        <div className=' w-[80%] mx-[auto] cursor-pointer'>
            <h1 className='my-[30px] text-[25px] text-gray-700 '>Popular Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-[auto] gap-[20px]'>

                {
                    pobular.slice(0, 10).map(prod => {
                        return (
                            <div key={prod.id} className='max-h-[200px] my-[100px]'>
                                <div className='bg-gray-400/20 max-w-fit rounded-[7px] cursor-pointer max-h-[300px]'>
                                    <Image src={prod.images[0]} height={200} width={200} alt={prod.description} unoptimized loading="lazy" className='hover:scale-[1.3] duration-100 !h-[200px]' />
                                </div>
                                <div className='max-w-[200px]'>
                                    <h1 className='text-[15px] font-semibold text-[#333333] my-[7px]'>{trunction(prod.title, 2, "")}</h1>
                                    <p className='hidden sm:block text-[12px] text-gray-500'>{trunction(prod.description, 15, "...")}</p>
                                    <p className='inline-block sm:block text-[14px] text-gray-400'>{prod.rating}</p>
                                    <div className='flex justify-between'>
                                        <p className='text-[16px] text-gray-600/100 font-semibold'>${prod.price}</p>
                                        <button className='hidden sm:block text-[15px] rounded-[20px] border-[1px] border-gray-500/20 py-[2px] px-[10px] text-gray-500 focus:outline-none hover:bg-orange-500/80 duration-350 hover:text-white'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
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