"use client"
import React from 'react'
import FeaturesCard from './uiComponents/FeaturesCard'

const FeaturesSection = () => {
    const images = [
        { desc: "Shop the latest laptops for work, gaming, and more.", path: "/images/boy_with_laptop_image.png", title: "Power in Every Pixel" },
        { desc: "Compact and stylish earphones for every occasion.", path: "/images/girl_with_earphone_image.png", title: "Stay Connected" },
        { desc: "Experience crystal-clear audio with premium headphones.", path: "/images/girl_with_earphone_image.png", title: "Unparalleled Sound" }
    ]
    return (

        <div className=' lg:w-[90%] mx-auto'>
            <h1 className='relative text-[30px] text-center mb-[50px] text-gray-700/80 before:content-[" "] before:absolute before:w-[150px] before:h-[3px] before:bg-orange-400/90 before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%]'>Features Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3'>
                {
                    images.map((feature) => {
                        return <FeaturesCard image={feature.path} desc={feature.desc} title={feature.title} key={feature.title} />
                    })
                }
            </div>

        </div>
    )
}

export default FeaturesSection
