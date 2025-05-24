'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    PieChart, Pie, Cell, Tooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    LineChart, Line,
    AreaChart, Area,
} from 'recharts'

import { getOrders } from '@/utils/storage'

export default function ProfileClient({ session }) {
    const user = session?.user || {}
    
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const storedOrders = getOrders()
        setOrders(storedOrders)
    }, [])

    const ordersCount = orders.length
    const totalPaid = orders.reduce((sum, order) => order.paidStatus === 'paid' ? sum + (Number(order.price) || 0) : sum, 0)
    const completedCount = orders.filter(order => order.status === 'completed').length
    const completedOrdersPercent = ordersCount ? Math.round((completedCount / ordersCount) * 100) : 0

    const lastPaymentDates = orders
        .filter(order => order.paidStatus === 'paid' && order.paymentDate)
        .map(order => new Date(order.paymentDate))

    const lastPaymentDate =
        lastPaymentDates.length > 0
            ? lastPaymentDates.reduce((a, b) => (a > b ? a : b)).toLocaleDateString()
            : '-'

    const paymentsDataMap = {}
    orders.forEach(order => {
        if (order.paidStatus === 'paid' && order.paymentDate) {
            const date = new Date(order.paymentDate).toLocaleDateString()
            paymentsDataMap[date] = (paymentsDataMap[date] || 0) + Number(order.price || 0)
        }
    })
    const COLORS = ['#00C49F', '#FF8042']

    return (
        <div className="max-w-4xl mx-auto my-12 p-6 font-sans">
            {/* Header User Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-400  -md relative">
                        <Image
                            src={user.image || '/default-profile.png'}
                            alt={user.name || 'User'}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{user.name || 'User'}</h1>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-center md:text-left px-4 py-6 bg-white rounded-lg  -md max-w-4xl mx-auto">
                <div className="flex flex-col bg-orange-50 rounded-lg p-6  -inner">
                    <p className="text-5xl font-extrabold text-orange-500">${totalPaid.toFixed(2)}</p>
                    <p className="mt-2 text-gray-700 font-semibold tracking-wide">Total Paid</p>
                </div>

                <div className="flex flex-col bg-green-50 rounded-lg p-6  -inner">
                    <p className="text-5xl font-extrabold text-green-600">{completedOrdersPercent}%</p>
                    <p className="mt-2 text-gray-700 font-semibold tracking-wide">Completed Orders</p>
                </div>

                <div className="flex flex-col bg-gray-50 rounded-lg p-6  -inner">
                    <p className="text-5xl font-extrabold text-gray-800">{ordersCount}</p>
                    <p className="mt-2 text-gray-700 font-semibold tracking-wide">Total Orders</p>
                </div>

                <div className="flex flex-col bg-blue-50 rounded-lg p-6  -inner">
                    <p className="text-3xl font-semibold text-blue-600">{lastPaymentDate}</p>
                    <p className="mt-2 text-gray-700 font-semibold tracking-wide">Last Payment Date</p>
                </div>
            </div>

            {/* Charts stacked vertically */}
            <div className="flex flex-col gap-12">
                {/* Pie Chart */}
                <div className="bg-gray-50 rounded-xl p-6  -md w-full max-w-full">
                    <h3 className="text-xl font-semibold mb-6 text-center">Order Completion</h3>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={[
                                { name: 'Completed', value: completedOrdersPercent },
                                { name: 'Pending', value: 100 - completedOrdersPercent },
                            ]}
                            cx="50%"
                            cy="50%"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={110}
                            dataKey="value"
                        >
                            <Cell fill={COLORS[0]} />
                            <Cell fill={COLORS[1]} />
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </div>

               
            </div>
        </div>
    )
}
