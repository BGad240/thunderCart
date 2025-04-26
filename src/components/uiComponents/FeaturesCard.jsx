"use client"
import React from 'react'
import Image from 'next/image'
import { SquareArrowOutUpRight } from 'lucide-react';

const FeaturesCard = ({ image, desc, title }) => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            height: "390px",
            width: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
            className='relative mx-auto mb-[20px] cursor-pointer group'
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className='absolute bottom-[30px] left-[15px] max-w-[90%] mx-auto text-white group-hover:translate-y-[-30px] transition-all duration-350'>
                <h1 className='text-[20px] mb-[8px]'>{title}</h1>
                <p className='text-[15px]'>{desc}</p>
                <button className='h-[40px] w-[120px] bg-orange-500/90 mt-[10px] rounded-[3px] flex items-center justify-center gap-1'>
                    Buy Now <SquareArrowOutUpRight size={15} />
                </button>
            </div>
        </div>
    )
}

export default FeaturesCard