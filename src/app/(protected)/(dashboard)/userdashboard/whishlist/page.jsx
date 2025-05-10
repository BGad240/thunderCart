import WishDashBoard from '@/components/userDashbord/WishDashBoard'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-[30px] text-orange-500/70 font-semibold m-[20px]'>Whishlist</h1>
      <WishDashBoard />
    </div>
  )
}