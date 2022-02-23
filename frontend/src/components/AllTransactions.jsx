import React from 'react';
import Navbar from './navbarComponent/Navbar';
import Table from './tableComponent/Table';
import './AllTransactions.css';

export default function AllTransactions() {
    return (
        <>
            <Navbar />
            <div className="tableCont">
                <Table />
            </div>
        </>
    );
}
