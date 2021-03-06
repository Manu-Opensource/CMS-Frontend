import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login';
import Home from './pages/home';
import Content from './pages/content';
import CreateCollection from './pages/createCollection';
import Collection from './pages/collection';
import AddDocument from './pages/addDocument';
import Document from './pages/document';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/content" element={<Content/>}/>
                <Route path="/createcollection" element={<CreateCollection/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/adddocument" element={<AddDocument/>}/>
                <Route path="/document" element={<Document/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
