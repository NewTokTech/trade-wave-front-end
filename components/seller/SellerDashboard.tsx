import React from 'react'

const SellerDashboard = () => {
    return (
        <div className='container my-10 '>
            <div className='xl:flex  justify-center gap-5 lg:space-y-0 space-y-4'>
                <div className='xl:w-4/12 w-full bg-[#3669C9] bg-opacity-10 h-20 rounded-lg flex items-center shadow-md '>
                    <div className='mx-auto flex'>
                        <h1 className='text-center text-black text-xl'>Pending Orders</h1>
                    </div>
                    <div className='mx-auto flex bg-[#3669C9] rounded-full p-1 '>
                        <h1 className='text-center text-white  w-7 h-7 mt-0.5'>1</h1>
                    </div>
                </div>
                <div className='xl:w-4/12 w-full bg-[#3669C9] bg-opacity-10 h-20 rounded-lg flex shadow-md items-center '>
                    <div className='mx-auto flex'>
                        <h1 className='text-center text-black text-xl'>Product List</h1>
                    </div>
                    <div className='mx-auto flex  p-1 '>
                        <h1 className='text-center text-[#3669C9] text-lg  w-7 h-7 mt-0.5'>
                            <span>1</span>
                            <span>/2</span>
                        </h1>
                    </div>
                </div>
                <div className='xl:w-4/12 w-full bg-[#3669C9] h-20 hidden  rounded-lg xl:flex items-center shadow-md '>
                    <div className='mx-auto'>
                        <h1 className='text-center text-black'>Pending Orders</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboard