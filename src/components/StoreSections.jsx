import React from 'react'
import SideSectionCate from './uiComponents/SideSectionCate'
import ProductCard from './uiComponents/ProductCard'
const StoreSections = ({ prod, openned, selected }) => {

    return (
        <div>
            <h1 className='text-[25px] mt-[20px] font-semibold text-orange-600/80 text-center'>{selected?.toUpperCase()}</h1>
            <div className={`grid ${openned ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"} gap-[20px] max-w-[80%] mx-auto`}>

                {
                    prod.map(product => {
                        return <ProductCard title={product.title} des={product.description} rating={product.rating} price={product.price} image={product.images[0]} id={product.id} />
                    })
                }
            </div>
        </div>
    )
}

export default StoreSections