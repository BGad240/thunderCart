'use client'
import { useState, useEffect } from 'react'
import SidebarDesktop from './SidebarDesktop'
import SidebarMobile from './SidebarMobile'

export default function Sidebar({ name, img }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700)
        }

        handleResize() 
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isMobile ? (
                <SidebarMobile name={name} img={img} />
            ) : (
                <SidebarDesktop name={name} img={img} />
            )}
        </>
    )
}
