// src/components/MoodLog.jsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const MoodLog = () => {
  const [moodLogEntries, setMoodLogEntries] = useState([]);
  const [moodCount, setMoodCount] = useState({
    happy: 0,
    sad: 0,
    angry: 0,
    excited: 0,
    calm: 0,
    other: 0,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mood = document.querySelector('#mood').value;
    const otherMood = document.querySelector('#other-mood').value;
    let moodEntry;

    if (mood === 'other') {
      moodEntry = otherMood;
    } else {
      moodEntry = mood;
    }

    setMoodLogEntries([...moodLogEntries, moodEntry]);
    updateMoodCount(moodEntry);
    document.querySelector('#mood-log-form').reset();
  };

  const updateMoodCount = (mood) => {
    setMoodCount((prevMoodCount) => {
      const newMoodCount = { ...prevMoodCount };
      if (newMoodCount[mood] !== undefined) {
        newMoodCount[mood]++;
      } else {
        newMoodCount.other++;
      }
      return newMoodCount;
    });
  };

  const moodData = {
    labels: ['Happy', 'Sad', 'Angry', 'Excited', 'Calm', 'Other'],
    datasets: [
      {
        label: 'Mood Count',
        data: [
          moodCount.happy,
          moodCount.sad,
          moodCount.angry,
          moodCount.excited,
          moodCount.calm,
          moodCount.other,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="log" id="log">
      <h2>Mood Log</h2>
      <form id="mood-log-form" onSubmit={handleFormSubmit}>
        <label htmlFor="mood">How are you feeling today?</label>
        <select id="mood" name="mood">
          <option value="">Select a mood</option>
          <option value="happy">Happy 😀</option>
          <option value="sad">Sad 😥</option>
          <option value="angry">Angry 😤</option>
          <option value="excited">Excited 🤗</option>
          <option value="calm">Calm 🙂</option>
          <option value="other">Other (please specify)</option>
        </select>
        <input type="text" id="other-mood" placeholder="Enter your mood" />
        <button type="submit">Log Mood</button>
      </form>
      <div className="mood-log-results">
        <h3>Recent Moods:</h3>
        <ul id="mood-log-list">
          {moodLogEntries.map((entry, index) => (
            <li key={index}>Mood {index + 1}: {entry}</li>
          ))}
        </ul>
      </div>
      <div className="graph-container">
        <div id="chartContainer">
          <Bar data={moodData} />
        </div>
      </div>
    </section>
  );
};

export default MoodLog;