import React from 'react';
import NavBar from './components/navbarComponent/Navbar.jsx';
import Dashboard from './pages/dashboardPage/Dashboard.jsx';
import Homepage from './pages/homePage/Homepage.jsx';
import Table from './components/tableComponent/Table.jsx';
import AllTransactions from './components/AllTransactions.jsx';
import './App.css';
import './colors.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/navbar" element={<NavBar />} />
                    <Route path="/transactions" element={<AllTransactions />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
