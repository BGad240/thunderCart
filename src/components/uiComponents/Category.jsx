import React from 'react'
import ListOfCate from './ListOfCate'
const Category = ({ cate, handleCategorySelection, slug }) => {
    return (
        <li className='mb-[15px] text-gray-700/80 hover:bg-gray-300/40 py-[8px] cursor-pointer pl-[8px]' onClick={() => handleCategorySelection(slug)}>
            {cate}
        </li>
    )
}
export default Category