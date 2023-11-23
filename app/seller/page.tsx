import React from 'react'
import Navbar from '@/components/seller/SellerNavbar'
import SellerDashboard from '@/components/seller/SellerDashboard'
import SellerDashboardTwo from '@/components/seller/SellerDashboardTwo'


const page = () => {
  return (
    <div >
      <Navbar/>
      <SellerDashboard/>
      <SellerDashboardTwo/>
    </div>
  )
}

export default page