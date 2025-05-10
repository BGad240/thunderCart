'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'


export default function Sidebar({ name, img }) {
    const paths = [
        { name: "orders", path: "/userdashboard/orders" },
        { name: "whishlist", path: "/userdashboard/whishlist" },
        { name: "profile", path: "/userdashboard/profile" }
    ]
    console.log(name)
    return (
        <div className='md:max-w-[300px] h-screen border-r-1 border-r-gray-300/50 relative bg-gray-200/30'>
            <div className='profile text-center py-[30px]' >
                <div>
                    <Image src={img} height={100} width={100} className='rounded-full mx-auto' alt={`${name} picture`} />
                </div>
                <p className='mt-[10px] text-[20px]'>{name}</p>
            </div>
            <div>
                {
                    paths.map((option) => {
                        return (
                            <div
                                key={option.name}
                                className="py-4 px-5 text-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                            >
                                <Link
                                    href={option.path}
                                    className="block w-full h-full"
                                >
                                    {option.name}
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
            <div className='absolute bottom-[100px] w-[90%] text-center'>
                <button className='' onClick={() => signOut({ callbackUrl: '/' })
                }>
                    logout
                </button>
            </div>
        </div>
    )
}
