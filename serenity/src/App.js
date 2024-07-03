// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your styles
import Home from './components/Home';
import Nook from './components/Nook';
import MoodLog from './components/MoodLog';
import Reflections from './components/Reflections';
import Login from './components/login';
import SignUp from './components/signup';
import logo from './images/logo.png';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    setShowLoginModal(false); // Close the login modal
  };

  const handleSignUp = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    setShowSignUpModal(false); // Close the sign-up modal
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="navbar">
          <a href="#main-home">Home</a>
          <a href="#nook">The Nook</a>
          <a href="#log">Mood Log</a>
          <a href="#write">Reflections</a>
        </nav>
        <div className="right-icons">
          <i className="fa fa-user" aria-hidden="true"></i>
          {isLoggedIn ? (
            <div>
              <span>Welcome, {username}</span>
              <button className="btn" onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <div>
              <button className="btn" onClick={() => setShowSignUpModal(true)}>Sign Up</button>
            </div>
          )}
        </div>
      </header>
      <main>
        <Home />
        <Nook />
        <MoodLog />
        <Reflections />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <h4>Connect with Us</h4>
          <div className="icon">
            <a href="https://github.com/Stacy-Muhia/serenity" target="_blank" rel="noreferrer">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://github.com/Stacy-Muhia/serenity" target="_blank" rel="noreferrer">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="https://www.linkedin.com/in/stacy-muhia-218a7326b/" target="_blank" rel="noreferrer">
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://x.com/mstaciew" target="_blank" rel="noreferrer">
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
          <p>Project by <i className='bx bx-heart'></i> Stacy Muhia</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Serenity Hub. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <Login onLogin={handleLogin} onSignUpClick={() => { setShowLoginModal(false); setShowSignUpModal(true); }} />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignUpModal(false)}>&times;</span>
            <SignUp onSignUp={handleSignUp} onLoginClick={() => { setShowSignUpModal(false); setShowLoginModal(true); }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;