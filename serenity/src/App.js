// src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import Nook from './components/Nook';
import MoodLog from './components/MoodLog';
import Reflections from './components/Reflections';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src="images/logo.png" alt="Logo" className="logo" />
        </div>
        <nav className="navbar">
          <a href="#main-home">Home</a>
          <a href="#nook">The Nook</a>
          <a href="#log">Mood Log</a>
          <a href="#write">Reflections</a>
        </nav>
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
    </div>
  );
}

export default App;