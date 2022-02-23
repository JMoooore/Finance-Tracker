import React from 'react';
import './Homepage.css';
import Login from '../../components/loginComponent/Login';

export default function Homepage() {
    return (
        <div className="homeContainer">
            <div className="topImage"></div>
            <Login />
            <div className="bottomImage"></div>
        </div>
    );
}
