import FileUploadForm from '@/components/addProduct/FileUploadForm'
import Navbar from '@/components/seller/SellerNavbar'
import React from 'react'


const page = () => {
  return (
    <div>
        <Navbar/>
        <FileUploadForm/>
    </div>
  )
}

export default page