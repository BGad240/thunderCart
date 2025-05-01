"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const ImageViewer = ({ images }) => {
    const [main, setMain] = useState(images[0])
    return (
        <div>
            <div className="mb-4">
                <Image
                    src={main}
                    alt="Main Image"
                    width={300}
                    height={300}
                    className='text-center'
                />
            </div>
            <div className="flex space-x-4 overflow-x-auto">
                {images.map((image, index) => (
                    <div key={index} className="cursor-pointer">
                        <Image
                            src={image}
                            alt={`thumbnail-${index}`}
                            width={100}
                            height={100}
                            className="object-cover"
                            onClick={() => setMain(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageViewer