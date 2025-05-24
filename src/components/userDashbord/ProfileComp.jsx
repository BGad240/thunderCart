'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { getOrders, getWishes, removeItem } from '@/utils/storage'

export default function ProfileClient({ session }) {
  const [orders, setOrders] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    setOrders(getOrders())
    setWishlist(getWishes())
  }, [])

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 font-bold text-xl">You are not logged in</p>
      </div>
    )
  }

  const { user } = session

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = removeItem(id)
    setWishlist(updatedWishlist)

    Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'The product was removed from your wishlist.',
      timer: 1500,
      showConfirmButton: false,
    })
  }

  return (
    <main className="w-full mx-auto my-12 px-6 bg-gray-50 rounded-2xl shadow-lg text-gray-700 font-sans">
      <section className="flex flex-wrap items-center gap-8 border-b border-gray-300 pb-8 mb-12">
        {user.image ? (
          <Image
            src={user.image}
            alt="Profile"
            width={110}
            height={110}
            className="rounded-full object-cover shadow-md"
            priority
          />
        ) : (
          <div className="w-[110px] h-[110px] rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl">
            N/A
          </div>
        )}
        <div className="flex-1 min-w-[220px]">
          <h1 className="text-3xl font-extrabold text-gray-900">{user.name || 'No Name'}</h1>
          <p className="mt-1 text-gray-500 font-medium">{user.email || 'No Email'}</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Orders ({orders.length})
        </h2>
        {orders.length === 0 ? (
          <p className="italic text-gray-400">You have no orders yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {orders.map((order, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-blue-600 font-semibold text-lg mb-2">
                  {order.title || 'Order'}
                </h3>
                <p className="text-gray-600 mb-1">
                  Quantity: <span className="font-semibold">{order.quantity || 1}</span>
                </p>
                <p className="text-gray-600">
                  Price: <span className="font-semibold">${order.price ?? 'N/A'}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Wishlist ({wishlist.length})
        </h2>
        {wishlist.length === 0 ? (
          <p className="italic text-gray-400">Your wishlist is empty.</p>
        ) : (
          <ul className="space-y-4">
            {wishlist.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center bg-gray-200 rounded-lg px-5 py-3 shadow-sm"
              >
                <div>
                  <p className="font-semibold text-gray-800">{product.title || 'Product'}</p>
                  <p className="text-gray-600">${product.price ?? 'N/A'}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  aria-label={`Remove ${product.title} from wishlist`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
