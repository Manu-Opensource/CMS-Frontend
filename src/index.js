import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login';
import Home from './pages/home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
