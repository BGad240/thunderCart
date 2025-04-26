"use client"
import Image from 'next/image'
import React from 'react'
import PosterInfo from './uiComponents/PosterInfo'

const PosterSection = () => {
    return (
        <div className='flex lg:justify-between items-center lg:items-start md:pl-[20px] flex-col-reverse lg:flex-row bg-gray-400/20 max-w-[90%] md:max-w-[80%] mx-auto my-[80px] rounded-[10px] text-center'>
            <Image src="/images/jbl_soundbox_image.png" height={200} width={300} alt='this section about something' className='' />
            <div className=''>
                <PosterInfo />
            </div>
            <Image src="/images/controller.png" height={200} width={300} alt='kjkgjskd' />
        </div>
    )
}

export default PosterSection