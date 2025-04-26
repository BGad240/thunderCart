"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


// import { getAllProducts } from '@/utils/api/api'
//import 'keen-slider/keen-slider.min.css';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import { DynamicIcon } from 'lucide-react/dynamic';

const Hero = () => {
    // const [slides, setSLides] = useState([])
    // const [slidesRef] = useKeenSlider({
    //     loop: true,
    //     slides: {
    //         perView: 3
    //     }
    // })
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const res = await getAllProducts()
    //         setSLides(res)
    //     }
    //     getProducts()
    // }, [])
    // console.log(slides)

    const heroProducts = [
        { name: "Experience Pure Sound - Your Perfect Headphones Awaits!", path: "/images/image.png" },
        { name: "Power Meets Elegance - Apple MacBook Pro is Here for you!", path: "/images/macbook_image.png" },
        { name: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!", path: "/images/header_playstation_image.png" }
    ]



    return (
        <Swiper
            spaceBetween={50}
            slidesPreview={1}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            speed={1500}
            loop={true}
            className='bg-slate-200 w-[80%] my-[40px] rounded-[10px] sm:px-[80px]'>
            {
                heroProducts.slice(0, 3).map(slide => {
                    return (
                        <SwiperSlide
                            key={slide.name}
                            className={`sm:mx-[10px] sm:my-[20px] !flex flex-col-reverse md:flex-row items-center justify-around w-[full]`}
                        >

                            <div className='sm:max-w-[400px] px-[10px] sm:px-[0] pb-[10px] sm:pb-[0]'>
                                <h1 className='text-[30px] font-semibold text-slate-700'>
                                    {slide.name}
                                </h1>
                                <div className='mt-[40px] flex justify-start md:block'>
                                    <button className='w-[120px] h-[40px] text-white rounded-[120px] bg-amber-600 mr-[30px]'>Order Now</button>
                                    <button className='group text-[18px] text-gray-800'>
                                        More deals <FaLongArrowAltRight className='inline-block ml-[3px] group-hover:translate-x-[10px] duration-300' size={20} />
                                    </button>
                                </div>
                            </div>
                            <Image src={slide.path} alt={slide.name} height={slide.path === "/images/header_playstation_image.png" ? 100 : 300} width={300} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper >
    )
}

export default Hero