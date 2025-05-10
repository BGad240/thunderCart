'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SidebarDesktop = ({ name, img }) => {
    const paths = [
        { name: "profile", path: "/userdashboard/profile" },
        { name: "orders", path: "/userdashboard/orders" },
        { name: "whishlist", path: "/userdashboard/whishlist" },

    ]
    console.log(name)
    return (
        <div className="
  hidden md:flex
  flex-col
  w-[230px]
  h-screen
  fixed
  top-0 left-0
  bg-gradient-to-b from-gray-50 to-gray-100
  border-r border-gray-300
  shadow-md
  z-50
  px-3 py-4
  justify-around
  transition-all duration-300
">

            <div className="text-center space-y-1">
                <Image
                    src={img}
                    height={100}
                    width={100}
                    alt={`${name} picture`}
                    className="rounded-full mx-auto shadow-sm transition-transform duration-300 hover:scale-105"
                />
                <p className="text-[16px] font-medium text-gray-800">{name}</p>
            </div>

            <div className="mt-5 space-y-1">
                {paths.map((option) => (
                    <Link
                        key={option.name}
                        href={option.path}
                        className="
          block
          py-1.5 px-2
          rounded-md
          text-[15px] text-gray-700
          hover:bg-orange-100 hover:text-orange-600
          transition-all duration-200 ease-in-out
        "
                    >
                        {option.name}
                    </Link>
                ))}
            </div>

            {/* Logout Button */}
            <div className="text-center mt-5">
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="
        w-full py-1.5
        bg-orange-500 hover:bg-orange-600
        text-white text-sm font-medium
        rounded-md shadow transition-transform duration-200 hover:scale-105
      "
                >
                    Logout
                </button>
            </div>
        </div>




    )
}

export default SidebarDesktop