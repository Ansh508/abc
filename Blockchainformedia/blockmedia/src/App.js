// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// Import other pages/components
import CreatorPage from './pages/CreatorPage';  // Import CreatorPage component
import ConsumerPage from './pages/ConsumerPage'; // Import ConsumerPage component
import AdminPage from './pages/AdminPage';       // Import AdminPage component
import ContentUpload from './components/ContentUpload'; // Import ContentUpload component
import UserDashboard from './components/UserDashboard'; // Import UserDashboard component
import PaymentProcessing from './components/PaymentProcessing'; // Import PaymentProcessing component

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/creator" element={<CreatorPage />} />
                <Route path="/consumer" element={<ConsumerPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/upload" element={<ContentUpload />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/payment" element={<PaymentProcessing />} />
                {/* Define other routes here as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
