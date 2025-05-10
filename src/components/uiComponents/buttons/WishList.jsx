'use client'
import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa"
import { saveWhishList, getWishes, removeItem } from '../../../utils/storage'
import { usePathname } from 'next/navigation'

const WishList = ({ product }) => {
    const [fav, setFav] = useState(false)
    const path = usePathname()

    useEffect(() => {
        const wishes = getWishes()
        const isInWishList = wishes.some(item => item.id === product.id)
        setFav(isInWishList)
    }, [product.id])

    const handleClick = () => {
        if (!fav) {
            saveWhishList(product)
            setFav(true)
        }
    }
    const handleDelete = (id) => {
        const updated = removeItem(id)
        setFav(!fav)
        return updated
    }
    return (

        <FaHeart
            className={`absolute z-[1000] top-[10px] right-[5px] rounded-full p-[5px] text-[20px] bg-white w-[30px] h-[30px] text-gray-500/80 hover:text-red-400 ${fav && 'text-red-600'}`}
            size={25}
            onClick={path.includes('/userdashboard')? ()=>handleDelete(product.id) : handleClick}
        />
    )
}

export default WishList
