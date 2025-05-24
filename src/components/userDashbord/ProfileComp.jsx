'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function UserProfile() {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const storedOrders = typeof window !== 'undefined' ? localStorage.getItem('orders') : null;

    const user = storedUser ? JSON.parse(storedUser) : {};
    const orders = storedOrders ? JSON.parse(storedOrders) : [];

    const [profile, setProfile] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
    });

    const [stats, setStats] = useState({
        ordersCount: 0,
        totalPaid: 0,
        completedOrders: 0,
        lastPaymentDate: '-',
    });

    useEffect(() => {
        const ordersCount = orders.length;

        const totalPaid = orders.reduce((sum, order) => {
            return order.paidStatus === 'paid' ? sum + (Number(order.price) || 0) : sum;
        }, 0);

        const completedOrders = orders.length
            ? Math.round(
                (orders.filter((order) => order.status === 'completed').length / orders.length) * 100
            )
            : 0;

        const lastPaymentDates = orders
            .filter((order) => order.paidStatus === 'paid' && order.paymentDate)
            .map((order) => new Date(order.paymentDate));

        const lastPaymentDate =
            lastPaymentDates.length > 0
                ? lastPaymentDates.reduce((a, b) => (a > b ? a : b)).toLocaleDateString()
                : '-';

        setStats({
            ordersCount,
            totalPaid: Number(totalPaid),
            completedOrders,
            lastPaymentDate,
        });
    }, [orders]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {

        localStorage.setItem('user', JSON.stringify(profile));
        alert('Profile saved!');
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white font-sans shadow-lg">

            <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">User Profile</h2>

                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={profile.phone}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="+20 123 456 7890"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                rows={4}
                                value={profile.address}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your address"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-md hover:from-orange-500 hover:to-orange-700 transition"
                        >
                            Save Profile
                        </button>
                    </form>
                </div>


                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-orange-400">
                        <Image
                            src={user?.image || '/default-profile.png'}
                            alt={profile.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                    <div className="text-center text-gray-700">
                        <h3 className="text-xl font-semibold">{profile.name}</h3>
                        <p className="text-sm">{profile.email}</p>
                    </div>

                    <div className="w-full mt-8 bg-gray-50 rounded-lg shadow p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">User Statistics</h4>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div className="bg-white p-4 rounded-md shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-400">{stats.ordersCount}</div>
                                <div className="mt-1 text-sm">Orders</div>
                            </div>

                            <div className="bg-white p-4 rounded-md shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-400">
                                    ${typeof stats.totalPaid === 'number' ? stats.totalPaid.toFixed(2) : '0.00'}
                                </div>
                                <div className="mt-1 text-sm">Total Paid</div>
                            </div>

                            <div className="bg-white p-4 rounded-md shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-400">{stats.completedOrders}%</div>
                                <div className="mt-1 text-sm">Completed Orders</div>
                            </div>

                            <div className="bg-white p-4 rounded-md shadow-sm text-center">
                                <div className="text-base text-gray-600">{stats.lastPaymentDate}</div>
                                <div className="mt-1 text-sm">Last Payment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
