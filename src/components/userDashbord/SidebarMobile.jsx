'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, Home, ListOrderedIcon, LogOut } from 'lucide-react'

const SidebarMobile = ({ img, name }) => {
    const paths = [
        { name: "orders", path: "/userdashboard/orders", icon: <ListOrderedIcon /> },
        { name: "home", path: "/", icon: <Home /> },
        { name: "profile", path: "/userdashboard/profile", icon: <Image src={img} height={40} width={40} alt="user image" className='rounded-full' /> },
        { name: "whishlist", path: "/userdashboard/whishlist", icon: <HeartIcon /> },
    ]
    return (
        <div className="flex md:hidden justify-between items-center w-full fixed bottom-0 left-0 border-t border-gray-500/30 shadow-lg z-50 px-4 py-3 bg-gradient-to-t from-gray-800 to-gray-900">
            <div className="flex justify-around w-full space-x-6">
                {paths.map((option) => (
                    <Link
                        key={option.name}
                        href={option.path}
                        className="flex flex-col items-center text-sm text-gray-300 hover:text-orange-500 transition-all duration-200 ease-in-out"
                    >
                        <div className="text-[20px]">{option.icon}</div>
                        {/* <span className={`${option.name == 'profile'? 'block': 'hidden'} text-xs`}>{option.name == 'profile'? option.name = name : option.name}</span> */}
                    </Link>
                ))}
            </div>

            <div className="text-center">
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="py-2 px-4  text-white text-sm font-medium rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-orange-600"
                >
                    <div className=" mb-[9px]">
                        <LogOut className="mr-2" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SidebarMobile
