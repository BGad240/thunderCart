'use client';

import { useState } from 'react';
import { CreditCard, BadgeDollarSign, Wallet } from 'lucide-react';
import Image from 'next/image';
import { saveItem } from '@/utils/storage';
import Swal from 'sweetalert2';

export default function PaymentMethod({ product, userId, userEmail }) {
    const [paymentInfo, setPaymentInfo] = useState({
        method: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const handlePayment = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const { method, cardNumber, expiry, cvv } = paymentInfo;
        let status = 'unpaid';

        const isCardMethod = method === 'Credit' || method === 'PayPal';

        if (isCardMethod) {
            if (!cardNumber || cardNumber.trim().length < 6 || !expiry || !cvv || cvv.trim().length < 3) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Missing Card Information',
                    text: 'Please enter full card number, expiry date, and CVV.',
                    confirmButtonText: 'OK',
                });
                return;
            } else {
                status = 'paid';
            }
        }

        if (!method) {
            Swal.fire({
                icon: 'warning',
                title: 'No Payment Method Selected',
                text: 'Please select a payment method before continuing.',
                confirmButtonText: 'OK',
            });
            return;
        }

        const productDetails = {
            price: product.price,
            title: product.title,
            produId: product.id,
            processId: Date.now(),
            image: product.image,
            completedAt: new Date().toLocaleString(),
            paymentMethod: method,
            paidStatus: status,
            userId,
            userEmail
        };

        saveItem(productDetails);

        Swal.fire({
            icon: 'success',
            title: 'Payment Processed',
            text: `Your payment has been ${status === 'paid' ? 'completed' : 'recorded'}.`,
            confirmButtonText: 'Done',
        });
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white font-sans">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800">Select Payment Method</h2>

                <div className="space-y-4">
                    {[
                        { label: 'Credit / Debit Card', value: 'Credit', icon: <CreditCard className="w-5 h-5 text-orange-400" /> },
                        { label: 'PayPal', value: 'PayPal', icon: <BadgeDollarSign className="w-5 h-5 text-orange-400" /> },
                        { label: 'Cash on Delivery', value: 'Cash', icon: <Wallet className="w-5 h-5 text-orange-400" /> },
                    ].map((method, idx) => (
                        <label key={idx} className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-orange-500 transition">
                            <input
                                type="radio"
                                name="method"
                                value={method.value}
                                checked={paymentInfo.method === method.value}
                                onChange={handlePayment}
                                className="accent-orange-500"
                            />
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                {method.icon}
                                <span>{method.label}</span>
                            </div>
                        </label>
                    ))}
                </div>

                {(paymentInfo.method === 'Credit' || paymentInfo.method === 'PayPal') && (
                    <div className="pt-6 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Card Information</h3>
                        <input
                            type="text"
                            placeholder="Card Number"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePayment}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="expiry"
                                value={paymentInfo.expiry}
                                onChange={handlePayment}
                                placeholder="MM/YY"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <input
                                type="text"
                                name="cvv"
                                value={paymentInfo.cvv}
                                onChange={handlePayment}
                                placeholder="CVV"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Summary</h2>
                <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                    <table className="min-w-full border-collapse text-gray-800 text-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">Product</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Quantity</th>
                                <th className="px-4 py-2 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <Image src={product?.image} alt={product?.title} height={40} width={40} className="rounded-md" />
                                    <span>{product?.title}</span>
                                </td>
                                <td className="px-4 py-3">${product?.price}</td>
                                <td className="px-4 py-3">1</td>
                                <td className="px-4 py-3 font-medium">${product?.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${product?.price}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>$5.00</span>
                    </div>
                    <div className="flex justify-between text-base font-semibold text-gray-800 mt-2">
                        <span>Total:</span>
                        <span>${product?.price + 5}</span>
                    </div>
                </div>

                <button
                    className="mt-6 w-[100px] bg-orange-400 cursor-pointer text-white py-3 rounded-lg font-semibold shadow-md transition"
                    onClick={handleSubmit}
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
}
