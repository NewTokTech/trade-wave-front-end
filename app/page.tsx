import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { playlists } from '../data/test'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker"
import { MainNav } from "@/components/dashboard/main-nav"
// import { Overview } from "@/components/dashboard/overview"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { Search } from "@/components/dashboard/search"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import { UserNav } from "@/components/dashboard//user-nav"
import { Overview } from '@/components/dashboard/overview';
import DashboardPage from '@/components/dashboard/DashboardPage';


const page = () => {
    return (
        <div className='flex'>
            <div className='w-2/12'>
                <Sidebar playlists={playlists} />
            </div>
            <div className='w-10/12'>

                <DashboardPage />

            </div>
        </div>
    )
}

export default page