"use client"
import Link from 'next/link'
import React from 'react'
import { UserRound } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getName } from '@/utils/edits';
const Header = ({ session }) => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Search", path: "/Search" },
    ]
    const path = usePathname()
    const showHeader = path != '/auth/login' && path != '/auth/signup' && !path.includes('/userdashboard')
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenning = () => {
        setIsOpen(!isOpen)
    }



    return (<>
        {
            showHeader &&
            < header className='sticky top-0 bg-[white]  z-[100] w-[100%] flex-header h-[70px] px-[20px] border-b-1 border-gray-400/20 items-start sm:justify-start' >
                <div>
                    <Image src="/images/logo-removebg-preview.png" alt="thunder logo" height={180} width={180}/>
                </div>
                {isOpen ?
                    <X className='block sm:hidden cursor-pointer' onClick={handleOpenning} /> :
                    <Menu className='block sm:hidden cursor-pointer' onClick={handleOpenning} />
                }


                <nav className={`${isOpen ? "block" : "hidden sm:flex"}  flex-col sm:flex-row md:ml-[40px] justify-around items-center absolute left-[20px] top-[100%] sm:relative sm:top-0 w-[100%] sm:max-w-[70%] gap-[20px] text-orange-600 sm:text-[#252525] bg-white py-[20px] sm:py-[0] duration-300 transition-all`}>

                    <div className='flex flex-col sm:flex-row items-center'>
                        {
                            links.map((link) => <Link href={link.path} key={link.name} className='mx-[10px] mb-[40px] sm:mb-[0]'>{link.name}</Link>)
                        }
                        <button className={`${isOpen&& 'hidden'} py-[6px] px-[7px] border-1 border-gray-500/20 rounded-full text-[14px] w-fit `} >
                            <Link href="/userdashboard">seller dashboard</Link>
                        </button>
                    </div>
                    <div className={`${isOpen&& "flex items-center gap-[10px] justify-center"}`}>
                            <div className='border border-gray-500/20 rounded-full py-[3px] px-[5px] my-[10px] sm:my-[0] text-center w-fit text-gray-600/80'>
                            {session ? (
                                <Link href="/userdashboard/profile">
                                    <div className='flex items-center gap-[5px]'>
                                        <Image
                                            src={session.image}
                                            height={30}
                                            width={30}
                                            alt={session.name}
                                            className="rounded-full"
                                        />
                                        <p>{getName(session.name)}</p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <UserRound className="inline-block" size={20} />
                                    <Link href="/auth/login">
                                        <span>Login</span>
                                    </Link>
                                </div>
                            )}

                        </div>
                        <button className={`${!isOpen&& "hidden"} py-[6px] px-[7px] border-1 border-gray-500/20 rounded-full text-[14px] w-fit text-gray-500/80`} >
                            <Link href="/userdashboard">seller dashboard</Link>
                        </button>

                    </div>

                </nav>
            </header >
        }
    </>
    )
}

export default Header