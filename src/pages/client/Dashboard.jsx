import React from "react";
import { ClientDashboard } from "../../components/client/ClientDashboard";
import {Header} from '../../components/client/Header'

export const Dashboard = () => {
    return(
        <>
            <Header />
            <ClientDashboard />
        </>
    )
}