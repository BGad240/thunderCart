import React from 'react'
import { trunction } from '../../utils/edits'
import Image from 'next/image'



const ProductCard = ({ image, des, price, title, rating }) => {
    return (


        <div className='max-h-[200px] my-[100px]'>
            <div className='bg-gray-400/20 max-w-fit rounded-[7px] cursor-pointer max-h-[300px]'>
                <Image src={image} height={200} width={200} alt={des} unoptimized loading="lazy" className='hover:scale-[1.3] duration-100 !h-[200px]' />
            </div>
            <div className='max-w-[200px]'>
                <h1 className='text-[15px] font-semibold text-[#333333] my-[7px]'>{trunction(title, 2, "")}</h1>
                <p className='hidden sm:block text-[12px] text-gray-500'>{trunction(des, 15, "...")}</p>
                <p className='inline-block sm:block text-[14px] text-gray-400'>{rating}</p>
                <div className='flex justify-between'>
                    <p className='text-[16px] text-gray-600/100 font-semibold'>${price}</p>
                    <button className='hidden sm:block text-[15px] rounded-[20px] border-[1px] border-gray-500/20 py-[2px] px-[10px] text-gray-500 focus:outline-none hover:bg-orange-500/80 duration-350 hover:text-white'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard