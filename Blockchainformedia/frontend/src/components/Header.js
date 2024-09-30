import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>YourLogo</h1> {/* Replace with your logo or brand name */}
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/creator">Creator Page</Link>
                    </li>
                    <li>
                        <Link to="/consumer">Consumer Page</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin Page</Link>
                    </li>
                    <li>
                        <Link to="/upload">Upload Content</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/payment">Payment</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
