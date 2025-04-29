"use client"
import React from 'react'
import Category from './Category'
import { Menu } from 'lucide-react';
import { useState } from 'react';


const SideSectionCate = ({ womanCate, manCate, techCate, vehCate, handleCategorySelection, openned }) => {
    const [cateOpenned, setIsOpen] = useState({
        man: false,
        woman: false,
        vehicle: false,
        techno: false
    })
    const handleOpenCate = (section) => {
        setIsOpen(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <aside className={`${openned ? "block" : "hidden"} bg-white w-[230px] pl-[20px] py-[10px] md:mt-[20px]`}>
            <div >
                <h1 onClick={() => handleOpenCate("man")} className={`${cateOpenned.man ? "bg-orange-600/80 text-white" : "bg-white"} hover:bg-orange-600/80 hover:text-white duration-300 transition-all  pl-[20px] py-[7px] rounded-l-[5px] cursor-button cursor-pointer my-[15px] `}>
                    Man
                </h1>
                <ul className={`pl-[30px] ${cateOpenned.man ? "block" : "hidden"}`}>
                    {
                        manCate.map((c) => {
                            console.log(c.slug)
                            return <Category cate={c.name} key={c.slug} slug={c.slug} types={c.name} handleCategorySelection={handleCategorySelection} />
                        })
                    }
                </ul>
            </div>
            <div onClick={() => handleOpenCate("woman")}>
                <h1 className={`hover:bg-orange-600/80 hover:text-white duration-300 transition-all  pl-[20px] py-[7px] rounded-l-[5px] cursor-button cursor-pointer my-[15px] ${cateOpenned.woman ? "bg-orange-600/80 text-white" : "bg-white"}`}>
                    Woman
                </h1>
                <ul className={`pl-[30px] ${cateOpenned.woman ? "block" : "hidden"}`}>
                    {
                        womanCate.map((c) => {
                            console.log(c.slug)
                            return <Category cate={c.name} key={c.slug} slug={c.slug} types={c.name} handleCategorySelection={handleCategorySelection} />
                        })
                    }
                </ul>
            </div>

            <div onClick={() => handleOpenCate("vehicle")}>
                <h1 className={`hover:bg-orange-600/80 hover:text-white duration-300 transition-all  pl-[20px] py-[7px] rounded-l-[5px] cursor-button cursor-pointer my-[15px] ${cateOpenned.vehicle ? "bg-orange-600/80 text-white" : "bg-white"}`}>
                    Vehicle
                </h1>
                <ul className={`pl-[30px] ${cateOpenned.vehicle ? "block" : "hidden"}`}>
                    {
                        vehCate.map((c) => {
                            console.log(c.slug)
                            return <Category cate={c.name} key={c.slug} slug={c.slug} types={c.name} handleCategorySelection={handleCategorySelection} />
                        })
                    }
                </ul>
            </div>

            <div onClick={() => handleOpenCate("techno")}>
                <h1 className={`hover:bg-orange-600/80 hover:text-white duration-300 transition-all  pl-[20px] py-[7px] rounded-l-[5px] cursor-button cursor-pointer my-[15px] ${cateOpenned.techno ? "bg-orange-600/80 text-white" : "bg-white"}`}>
                    Technology
                </h1>
                <ul className={`pl-[30px] ${cateOpenned.techno ? "block" : "hidden"}`}>
                    {
                        techCate.map((c) => {
                            console.log(c.slug)
                            return <Category cate={c.name} key={c.slug} slug={c.slug} types={c.name} handleCategorySelection={handleCategorySelection} />
                        })
                    }
                </ul>
            </div>
        </aside >
    )
}

export default SideSectionCate
