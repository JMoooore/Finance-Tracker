import React from 'react';
import Navbar from '../../components/navbarComponent/Navbar';
import styles from './dashboard.module.css';
import DashboardInfo from '../../components/infoComponent/DashboardInfo';

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <DashboardInfo />
        </>
    );
}
