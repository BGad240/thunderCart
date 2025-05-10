'use client'
import React, { useEffect } from 'react'
import { getOrders } from '@/utils/storage'
import { useState } from 'react'
import Image from 'next/image'
const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const myOrders = getOrders()
        setOrders(myOrders)

        console.log(orders)
    }, [])
    console.log(orders)
    return (
        <div className='md:w-[95%] mx-auto mt-[40px]'>
            <h2 className='text-[30px] my-[10px] font-semibold text-orange-500/80'>User Products</h2>
            <table className='w-full mx-auto shadow-2xl'>
                <thead className='shadow-xl rounded-[10px]'>
                    <tr className='text-center'>
                        <th className='p-[10px]'>Product Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Pay System</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        orders.map((order, i) => {
                            return (
                                <tr key={i} className={`text-center mb-[10px] ${i % 2 == 0 ? 'bg-white' : 'bg-gray-300/20'}`}>
                                    <td >
                                        <Image src={order.image} height={100} width={100} alt={order.title} className='mb-[10px]' />
                                    </td>
                                    <td>
                                        <p>{order.title}</p>
                                    </td>
                                    <td>
                                        <p>{order.price}</p>
                                    </td>
                                    <td>
                                        <p className={`${order.paidStatus === 'paid' ? 'bg-red-300' : 'bg-green-300'} rounded-[20]`}>{order.paidStatus}</p>
                                    </td>
                                    <td>
                                        <p>{order.userEmail}</p>
                                    </td>
                                    <td>
                                        <p>{order.paymentMethod}</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Orders