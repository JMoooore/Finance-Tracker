import React from 'react';
import NavBar from './components/navbarComponent/Navbar.jsx';
import Dashboard from './pages/dashboardPage/Dashboard.jsx';
import Homepage from './pages/homePage/Homepage.jsx';
import AllTransactions from './components/AllTransactions.jsx';
import { TableProvider } from './context/TableContext.js';
import { API_BASE_URL } from './config/apiUrl.js';
import './App.css';
import './colors.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    console.log(API_BASE_URL);
    return (
        <TableProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/navbar" element={<NavBar />} />
                        <Route
                            path="/transactions"
                            element={<AllTransactions />}
                        />
                    </Routes>
                </div>
            </Router>
        </TableProvider>
    );
}

export default App;
