import React from 'react';
import Table from "./components/tableComponent/Table.jsx";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        < Table/>

        <Routes> 
        </Routes>

      </div>
    </Router>
  );
}

export default App;
