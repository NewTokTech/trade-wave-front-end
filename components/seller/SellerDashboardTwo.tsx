import React from 'react'

const SellerDashboardTwo = () => {
    return (
        <div className='container '>
            <div className='w-full  shadow-sm border h-auto rounded-xl container py-10 px-1 lg:px-14'>

                <div className='rounded-xl flex justify-between  '>
                    <div className=' flex'>
                        <h1 className='text-center text-black text-xl font-sans'>Here’s how you’re doing</h1>
                    </div>
                    <div className='flex  p-1 '>
                        <h1 className='text-center text-black border border-black  rounded-full  w-7 h-7 mt-0.5'>?</h1>
                    </div>
                </div>

                <div className='rounded-xl flex justify-between  '>
                    <div className=' flex'>
                        <h1 className='text-center text-black text-xl font-sans'>Seller level</h1>
                    </div>
                    <div className='flex  p-1 '>
                        <h1 className='text-center text-black '>New Seller</h1>
                    </div>
                </div>


                <div className='rounded-xl flex justify-between  '>
                    <div className=' flex'>
                        <h1 className='text-center text-black text-xl'>Response time</h1>
                    </div>
                    <div className='flex  p-1 '>
                        <h1 className='text-center text-black '>5 Minute</h1>
                    </div>
                </div>


                <div className='xl:container my-10 '>
                    <div className='xl:flex  justify-center gap-16 lg:space-y-0 space-y-4'>
                        <div className='flex gap-16 justify-center'>
                            <div >
                                <div className='xl:w-32 w-16 xl:h-32 h-16 rounded-full border   flex items-center  '>
                                    <div className='mx-auto'>
                                        <h1 className='text-center text-[#3669C9] font-bold text-lg'>100%</h1>
                                    </div>
                                </div>
                                <h1 className='text-center'><span>Response</span> <br /><span className='text-center'> rate</span></h1>
                            </div>
                            <div >
                                <div className='xl:w-32 w-16 xl:h-32 h-16 rounded-full border   flex items-center  '>
                                    <div className='mx-auto'>
                                        <h1 className='text-center text-[#3669C9] font-bold text-lg'>100%</h1>
                                    </div>
                                </div>
                                <h1 className='text-center'><span>Order
                                </span> <br /><span className='text-center'> Completion</span></h1>
                            </div>
                        </div>

                        <div className='flex gap-16 justify-center'>
                            <div >
                                <div className='xl:w-32 w-16 xl:h-32 h-16 rounded-full border   flex items-center  '>
                                    <div className='mx-auto'>
                                        <h1 className='text-center text-[#3669C9] font-bold text-lg'>100%</h1>
                                    </div>
                                </div>
                                <h1 className='text-center'><span>On-time
                                </span> <br /><span className='text-center'> delivery</span></h1>
                            </div>
                            <div >
                                <div className='xl:w-32 w-16 xl:h-32 h-16 rounded-full border   flex items-center  '>
                                    <div className='mx-auto'>
                                        <h1 className='text-center text-[#3669C9] font-bold text-lg'>100%</h1>
                                    </div>
                                </div>
                                <h1 className='text-center'><span>Positive
                                </span> <br /><span className='text-center'> rating</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SellerDashboardTwo