// src/components/Reflections.jsx
import React, { useState, useEffect } from 'react';

const Reflections = () => {
  const [thought, setThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleInputChange = (e) => {
    setThought(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thought.trim() !== '') {
      const newThought = {
        text: thought,
        id: Date.now(),
        containsSuicide: thought.toLowerCase().includes('suicide')
      };
      setThoughts([...thoughts, newThought]);
      setThought('');
      startTimer(newThought.id);
    }
  };

  const startTimer = (thoughtId) => {
    let remainingTime = 10;
    setTimer(remainingTime);
    const countdownTimer = setInterval(() => {
      remainingTime--;
      setTimer(remainingTime);
      if (remainingTime === 0) {
        clearInterval(countdownTimer);
        removeThought(thoughtId);
        setTimer(null);
      }
    }, 1000);
  };

  const removeThought = (id) => {
    setThoughts(thoughts.filter(thought => thought.id !== id));
  };

  useEffect(() => {
    if (thoughts.length > 0 && thoughts[thoughts.length - 1].containsSuicide) {
      const lastThought = thoughts[thoughts.length - 1];
      const newThoughts = [...thoughts];
      newThoughts[newThoughts.length - 1] = {
        ...lastThought,
        showLinks: true
      };
      setThoughts(newThoughts);
    }
  }, [thoughts]);

  return (
    <section className="write" id="write">
      <h2>Reflections</h2>
      <p>Express yourself freely. Rant, vent, or share your thoughts. All entries will vanish after 10 seconds.</p>
      <form id="thought-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="thought"
          placeholder="Type your thought here..."
          value={thought}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul id="thoughts-list">
        {thoughts.map((thought) => (
          <li key={thought.id}>
            {thought.text}
            {thought.showLinks && (
              <div>
                <p>If you feel like you're in a crisis, please talk to someone immediately:</p>
                <ul>
                  <li><a href="https://www.emergencymedicinekenya.org/suicide/" target="_blank" rel="noopener noreferrer">Emergency Contact</a></li>
                  <li><a href="https://www.enableme.ke/en/article/suicide-emergency-numbers-and-free-counselling-centers-in-kenya-3770/" target="_blank" rel="noopener noreferrer">Enable Me</a></li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      {timer !== null && <span id="timer">Disappearing in {timer} seconds</span>}
    </section>
  );
};

export default Reflections;