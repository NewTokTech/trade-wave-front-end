import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { playlists } from '../data/test'
import DashboardPage from '@/components/dashboard/DashboardPage';


const page = () => {
    return (
        <div className='flex'>
            <div className='w-2/12 '>
                <Sidebar playlists={playlists} />
            </div>
            <div className='w-10/12'>
                <DashboardPage />
            </div>
        </div>
    )
}

export default page