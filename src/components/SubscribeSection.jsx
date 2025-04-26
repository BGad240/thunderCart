"use client"
import { Mail } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const SubscribeSection = () => {
    const [mail, setMail] = useState("")
    const handleOnChange = (e) => {
        setMail(e.target.value)
        console.log(mail)
    }
    return (
        <div className='w-[90%] mx-auto md:w-fit'>
            <div className='text-center'>
                <h1 className='text-[40px] text-gray-600/90'>Subscribe now & get 20% off</h1>
                <p className='text-[18px] text-slate-900/50'>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
            </div>
            <div className='md:w-[600px] border-1 pl-[20px] border-gray-400/20 h-[50px] my-[40px] flex justify-between rounded-[7px]'>
                <input type="text" value={mail} placeholder='set your unique e-mail' onChange={handleOnChange} className='border-none focus:outline-none flex-1 mr-[10px]' />
                <button className='bg-orange-600 px-[20px] text-white rounded-[5px] rounded-l-none'>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeSection