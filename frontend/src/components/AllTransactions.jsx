import React from 'react';
import Navbar from './navbarComponent/Navbar';
import AllTransTable from './tableComponent/AllTransTable';
import './AllTransactions.css';

export default function AllTransactions() {
    return (
        <>
            <Navbar />
            <div className="tableCont">
                <AllTransTable />
            </div>
        </>
    );
}
