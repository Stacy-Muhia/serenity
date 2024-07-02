// src/components/Nook.jsx
import React from 'react';
import dailyZen from '../images/dailyzen.jpg';
import move from '../images/move.jpg';
import easeAnxiety from '../images/easeanxiety.png';
import selfCare from '../images/selfcare.jpg';

const Nook = () => (
  <section className="nook" id="nook">
    <h1>The Nook by Serenity</h1>
    <h4>Find your cozy corner</h4>
    <div className="grid-container">
      <div className="grid-item">
        <h3>Daily Motivation</h3>
        <h4>Your daily dose of inspiration</h4>
        <img src={dailyZen} alt="daily-zen" />
        <button className="more">
          <a href="https://www.pinterest.com/stacymuhiap/daily-motivation-serenity-hub/" target="_blank" rel="noopener noreferrer">
            Today's Encouragement
          </a>
        </button>
      </div>
      <div className="grid-item">
        <h3>Move</h3>
        <h4>Exercises to boost productivity and improve mental health</h4>
        <img src={move} alt="exercise-video" />
        <button className="more">
          <a href="https://www.youtube.com/playlist?list=PLlQ06n7y3NjENo_pZJs7FIs2NCXgCbvQ-" target="_blank" rel="noopener noreferrer">
            Exercise Videos
          </a>
        </button>
      </div>
      <div className="grid-item">
        <h3>Ease Anxiety</h3>
        <h4>Quick tips to calm your nerves</h4>
        <img src={easeAnxiety} alt="ease-anxiety" />
        <button className="more">
          <a href="https://medium.com/@stacymuhiap/how-to-ease-anxiety-quick-and-effective-techniques-64eacf973fc1" target="_blank" rel="noopener noreferrer">
            Quick Tips
          </a>
        </button>
      </div>
      <div className="grid-item">
        <h3>Self Care</h3>
        <h4>You matter. Self care tips</h4>
        <img src={selfCare} alt="self-care" />
        <button className="more">
          <a href="https://watermelonx.medium.com/7-secrets-to-improve-mental-health-a-journey-to-find-yourself-cefe3550f54b" target="_blank" rel="noopener noreferrer">
            Self Care Article
          </a>
        </button>
      </div>
    </div>
  </section>
);

export default Nook;