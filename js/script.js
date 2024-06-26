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