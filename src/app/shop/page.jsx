"use client"

import StoreSections from '@/components/StoreSections'
import SideSectionCate from '@/components/uiComponents/SideSectionCate'
import React from 'react'
import { getCat, getByCategory, getAllProducts } from '@/utils/api/api'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const page = () => {

    const [allProducts, setAll] = useState([])
    const [category, setCategory] = useState([])
    const [manCate, setManCate] = useState([])
    const [womanCate, setWomanCate] = useState([])
    const [techCate, setTechCate] = useState([])
    const [vehCate, setVehCate] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchCate = async () => {
            try {
                const res = await getCat()
                console.log("this is res.slug", res)
                setCategory(res)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCate()
        console.log(category)
    }, [])



    useEffect(() => {
        const fetchAll = async () => {
            try {
                const res = await getAllProducts()
                setAll(res.products)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAll()
        console.log(category)
    }, [])




    useEffect(() => {
        if (category.length > 0) {
            setManCate(category.filter((cate) => {
                const name = cate.name.toLowerCase();
                return (name.includes("man") || name.includes("mens")) && !name.includes("women");
            }));

            setWomanCate(category.filter((cate) =>
                cate.name.toLowerCase().includes("woman") ||
                cate.name.toLowerCase().includes("womens")
            ))


            setTechCate(category.filter((cate) =>
                cate.name.toLowerCase().includes("laptop") ||
                cate.name.toLowerCase().includes("smartphone") ||
                cate.name.toLowerCase().includes("tablet") ||
                cate.name.toLowerCase().includes('accessories')
            ))
        }
    }, [category])
    console.log(manCate)


    useEffect(() => {

        const fetchChoosen = async () => {
            if (selectedCategory) {
                try {
                    const res = await getByCategory(selectedCategory)
                    setProducts(res)

                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchChoosen()
    }, [selectedCategory])

    console.log(products)



    const handleOpenning = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }



    const handleCategorySelection = (categoryName) => {
        setSelectedCategory(categoryName);
        console.log("seledetedddd", categoryName)
    };

    console.log(selectedCategory)

    return (
        <div className="flex gap-[20px]">
            <div className={`${isOpen ? "border-r border-gray-300/20" : "border-0"}  sticky top-0 max-w-[300px] h-screen  overflow-y-auto`}>
                <div className='fixed top-[60px] left-[2px]'>
                    {
                        isOpen ?
                            <X onClick={handleOpenning} className='m-[20px] cursor-pointer' />
                            :
                            <Menu onClick={handleOpenning} className='m-[20px] cursor-pointer' />
                    }
                </div>
                <SideSectionCate manCate={manCate} techCate={techCate} vehCate={vehCate} womanCate={womanCate} handleCategorySelection={handleCategorySelection} openned={isOpen} />

            </div>
            <div className="flex-1 w-full">
                <StoreSections prod={products.length > 0 ? products : allProducts} openned={isOpen} selected={selectedCategory} />
            </div>
        </div>


    )
}

export default page