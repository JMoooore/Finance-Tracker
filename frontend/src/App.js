import React from 'react';
import Table from "./components/tableComponent/Table.jsx";
import NavBar from "./components/navbarComponent/Navbar.jsx";
import './App.css';
import './colors.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        {/* <Table/> */}

        <Routes> 
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/transactions" element={<Table />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
