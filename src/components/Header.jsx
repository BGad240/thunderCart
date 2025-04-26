"use client"
import Link from 'next/link'
import React from 'react'
import { UserRound } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
const Header = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Search", path: "/Search" },
    ]

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenning = () => {
        setIsOpen(!isOpen)
    }



    return (
        <header className='sticky top-0 bg-[white]  z-[100] w-[100%] flex-header h-[70px] px-[20px] border-b-1 border-gray-400/20 items-start sm:justify-start'>
            <div>
                <span className='text-[20px] text-orange-300'>T</span>
                <span className='text-[30px] text-orange-500'>hunder</span>
            </div>
            <Menu className='block sm:hidden cursor-pointer' onClick={handleOpenning} />

            <nav className={`${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} sm:flex flex-col sm:flex-row justify-between items-center absolute left-0 top-[100%] sm:relative sm:top-0 w-[100%] sm:max-w-[70%] gap-[20px] text-orange-600 sm:text-gray-600/90 bg-white py-[20px] sm:py-[0] duration-300 transition-all`}>

                <div className='flex flex-col sm:flex-row items-center'>
                    {
                        links.map((link) => <Link href={link.path} key={link.name} className='mx-[10px] mb-[40px] sm:mb-[0]'>{link.name}</Link>)
                    }
                    <button className='py-[6px] px-[7px] border-1 border-gray-500/20 rounded-full text-[14px] w-[100%] sm:w-fit'>seller dashboard</button>
                </div>
                <div className='border border-gray-500/20 rounded-full py-[3px] px-[5px] my-[10px] sm:my-[0] text-center'>
                    <UserRound className='inline-block ' size={20} />
                    <span>Account</span>
                </div>

            </nav>




        </header>

    )
}

export default Header