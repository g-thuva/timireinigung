import React from 'react';
import IndexPage from './components/IndexPage';
import './assets/css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicesPage from './components/ServicesPage';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;