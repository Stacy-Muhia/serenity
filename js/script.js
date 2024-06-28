document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("thought-form");
    const thoughtInput = document.getElementById("thought");
    const thoughtsList = document.getElementById("thoughts-list");
    const timerDisplay = document.getElementById("timer");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const thoughtText = thoughtInput.value.trim();
      const containsSuicide = thoughtText.toLowerCase().includes("suicide");
  
      if (thoughtText !== "") {
        const thoughtItem = document.createElement("li");
        thoughtItem.innerText = thoughtText;
        thoughtsList.appendChild(thoughtItem);
        thoughtInput.value = "";
  
        let remainingTime = 10;
        timerDisplay.innerText = `Disappearing in ${remainingTime} seconds`;
  
        const countdownTimer = setInterval(() => {
          remainingTime--;
          timerDisplay.innerText = `Disappearing in ${remainingTime} seconds`;
          if (remainingTime === 0) {
            clearInterval(countdownTimer);
            thoughtItem.remove();
            timerDisplay.innerText = "";
          }
        }, 1000);
  
        if (containsSuicide) {
          const suicideLinks = document.createElement("div");
          suicideLinks.innerHTML = `
            <p>If you feel like you're in a crisis, please talk to someone immediately:</p>
            <ul>
              <li><a href="https://www.emergencymedicinekenya.org/suicide/" target="_blank">Emergency Contact</a></li>
              <li><a href="https://www.enableme.ke/en/article/suicide-emergency-numbers-and-free-counselling-centers-in-kenya-3770/" target="_blank">Enable Me</a></li>
            </ul>
          `;
          thoughtsList.appendChild(suicideLinks);
        }
      }
    });
  });  
  const moodLogForm = document.querySelector('.log form');
    const moodLogList = document.querySelector('#mood-log-list');
    const moodLogEntries = [];
    
    const moodCount = {
        happy: 0,
        sad: 0,
        angry: 0,
        excited: 0,
        calm: 0,
        other: 0,
    };
    
    // Initialize the chart
    const ctx = document.getElementById('moodChart').getContext('2d');
    const moodChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Happy', 'Sad', 'Angry', 'Excited', 'Calm', 'Other'],
            datasets: [{
                label: 'Mood Count',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    moodLogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mood = document.querySelector('#mood').value;
        const otherMood = document.querySelector('#other-mood').value;
        let moodEntry;
    
        if (mood === 'other') {
            moodEntry = otherMood;
        } else {
            moodEntry = mood;
        }
    
        moodLogEntries.push(moodEntry);
        updateMoodCount(moodEntry);
        displayMoodLogEntries();
        updateChart();
        moodLogForm.reset();
    });
    
    function updateMoodCount(mood) {
        if (moodCount[mood] !== undefined) {
            moodCount[mood]++;
        } else {
            moodCount.other++;
        }
    }
    
    function displayMoodLogEntries() {
        moodLogList.innerHTML = '';
        moodLogEntries.forEach((entry, index) => {
            const moodLogEntry = document.createElement('li');
            moodLogEntry.textContent = `Mood ${index + 1}: ${entry}`;
            moodLogList.appendChild(moodLogEntry);
        });
    }
    
    function updateChart() {
        moodChart.data.datasets[0].data = [
            moodCount.happy,
            moodCount.sad,
            moodCount.angry,
            moodCount.excited,
            moodCount.calm,
            moodCount.other
        ];
        moodChart.update();
    }    
