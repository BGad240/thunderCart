import React from 'react'
import Image from 'next/image'
import { discountDegree } from '@/utils/edits'
import ImageViewer from './uiComponents/ImageViewer'

const Details = ({ product }) => {

    return (
        <div className='grid md:grid-cols-2 w-[90%] md:w-[70%] mx-auto my-[30px] gap-[40px]'>
            <div className=''>
                <ImageViewer images={product.images} />
            </div>
            <div>
                <h1 className='font-semibold text-gray-800/80 text-[27px]'>{product.title}</h1>
                <p className='text-[17px] text-gray-500/80 md:ml-[10px]'>{product.description}</p>
                <div className='flex items-baseline gap-[20px]'>
                    <p className='text-[30px] font-semibold text-gray-800/90 my-[20px]'>${product.price} </p>
                    <p className='text-gray-500/70 text-[20px] line-through'>${discountDegree(product.price, product.discountPercentage)}</p>
                </div>
                <div className='border-t-1 border-t-gray-500/30 '>
                    <h1 className='mt-[10px] font-semibold text-gray-500/90 text-[20px]'>Dimensions:</h1>
                    <div className='ml-[20px] font-semibold text-gray-500/70'>
                        <p className='text-gray-800/90 '>width:  <span className='ml-[20px]'>{product.dimensions.width}</span></p>
                        <p className='text-gray-800/90'>height:  <span className='ml-[17px]'>{product.dimensions.height}</span></p>
                    </div>
                    <div className='mt-[30px]'>
                        <button className='m-[10px] w-[200px] bg-gray-300/30 text-gray-600/90 hover:bg-gray-400/50 duration-300 h-[50px]'>Add To Cart</button>
                        <button className='m-[10px] w-[200px] bg-orange-500/80 h-[50px] mr-[20px] hover:bg-orange-600/80 duration-300 text-white'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details