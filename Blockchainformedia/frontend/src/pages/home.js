// src/pages/Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the Media Platform</h2>
            <p>
                Discover and share content seamlessly on our decentralized media platform. 
                Join us in revolutionizing content distribution!
            </p>
            <div className="features">
                <h3>Features</h3>
                <ul>
                    <li>Decentralized content sharing</li>
                    <li>Direct-to-consumer distribution</li>
                    <li>Fair compensation for creators</li>
                    <li>Robust protection of intellectual property</li>
                    <li>Combat fake news and misinformation</li>
                </ul>
            </div>
            <div className="cta">
                <h3>Get Started</h3>
                <button onClick={() => alert('Redirect to signup/login page')}>Sign Up / Log In</button>
            </div>
        </div>
    );
};

export default Home;
