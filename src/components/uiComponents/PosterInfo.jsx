import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const PosterInfo = () => {
    return (
        <div className='md:my-[40px] md:max-w-[400px] text-center'>
            <h1 className='text-slate-900/80 text-[30px] font-semibold'>Level Up Your Gaming Experience</h1>
            <p className='text-[15px] text-gray-600/80 my-[10px] md:max-w-[380px]'>From immersive sound to precise control - everything you nedd to win</p>
            <button className='group py-[7px] px-[12px] text-white bg-orange-600/80 rounded-[5px]'>
                Browse Store <FaLongArrowAltRight className='inline-block ml-[3px] text-white group-hover:translate-x-[10px] duration-300' size={20} />
            </button>
        </div>
    )
}

export default PosterInfo