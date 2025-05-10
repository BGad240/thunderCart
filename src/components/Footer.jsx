"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Footer = () => {
    const path = usePathname()
    const showFooter = path != '/auth/login' && path != '/auth/signup' && !path.includes('/userdashboard')
    return (
        <>{
            showFooter &&

            <div>
                <div className='mt-[100px] mx-auto w-[80%] grid grid-cols-1  md:grid-cols-3 gap-4'>
                    <div className='md:mr-[60px]'>
                        <div className='text-[25px] mb-[20px]'>
                            <span className=' font-bold text-orange-500'>T</span>hunderCart
                        </div>
                        <p className='text-gray-600/90 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iste quibusdam nesciunt nobis numquam! Nam ipsa eum laborum eligendi sunt Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className='md:ml-[30px]'>
                        <h1 className='text-[25px] font-bold mb-[20px] text-orange-500'>Company</h1>
                        <p className='text-gray-600/90 text-[14px]'>Home</p>
                        <p className='text-gray-600/90 text-[14px] my-[10px]'>About</p>
                        <p className='text-gray-600/90 text-[14px]'>More</p>
                    </div>
                    <div>
                        <h1 className='text-[25px] text-orange-500 font-bold mb-[20px]'>Get In Touch</h1>
                        <p className='text-gray-600/90 text-[14px]'>bgad240@gmail.com</p>
                        <p className='text-gray-600/90 text-[14px]'>+20-10-902-015-09</p>
                    </div>
                </div>
                <div className="text-center border-t-[1px] border-gray-500/30">
                    <p className='text-gray-600/90 text-[14px] my-[20px]'>copyright 2025@ Bgad.230 All Rights Reserved.</p>
                </div>
            </div>
        }
        </>
    )
}

export default Footer