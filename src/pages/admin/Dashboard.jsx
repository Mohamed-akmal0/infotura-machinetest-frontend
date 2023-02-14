import React from 'react'
import { AdminDashboard } from '../../components/admin/dashboard'
import { Navbar } from '../../components/admin/Navbar'

export const Dashboard = () => {
    return(
        <>
            <Navbar />
            <AdminDashboard />
        </>
    )
}