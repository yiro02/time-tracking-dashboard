// Time tracking data for different periods
const timeData = {
  daily: [
    { title: "Work", duration: "5hrs", previous: "Yesterday - 7hrs", color: "var(--work)", image: "./images/icon-work.svg" },
    { title: "Play", duration: "1hrs", previous: "Yesterday - 2hrs", color: "var(--play)", image: "./images/icon-play.svg" },
    { title: "Study", duration: "1hrs", previous: "Yesterday - 1hrs", color: "var(--study)", image: "./images/icon-study.svg" },
    { title: "Exercise", duration: "1hrs", previous: "Yesterday - 1hrs", color: "var(--exercise)", image: "./images/icon-exercise.svg" },
    { title: "Social", duration: "1hrs", previous: "Yesterday - 3hrs", color: "var(--social)", image: "./images/icon-social.svg" },
    { title: "Self Care", duration: "0hrs", previous: "Yesterday - 1hrs", color: "var(--self-care)", image: "./images/icon-self-care.svg" }
  ],
  weekly: [
    { title: "Work", duration: "32hrs", previous: "Last Week - 36hrs", color: "var(--work)", image: "./images/icon-work.svg" },
    { title: "Play", duration: "10hrs", previous: "Last Week - 8hrs", color: "var(--play)", image: "./images/icon-play.svg" },
    { title: "Study", duration: "4hrs", previous: "Last Week - 7hrs", color: "var(--study)", image: "./images/icon-study.svg" },
    { title: "Exercise", duration: "4hrs", previous: "Last Week - 5hrs", color: "var(--exercise)", image: "./images/icon-exercise.svg" },
    { title: "Social", duration: "5hrs", previous: "Last Week - 10hrs", color: "var(--social)", image: "./images/icon-social.svg" },
    { title: "Self Care", duration: "2hrs", previous: "Last Week - 2hrs", color: "var(--self-care)", image: "./images/icon-self-care.svg" }
  ],
  monthly: [
    { title: "Work", duration: "103hrs", previous: "Last Month - 128hrs", color: "var(--work)", image: "./images/icon-work.svg" },
    { title: "Play", duration: "23hrs", previous: "Last Month - 29hrs", color: "var(--play)", image: "./images/icon-play.svg" },
    { title: "Study", duration: "13hrs", previous: "Last Month - 47hrs", color: "var(--study)", image: "./images/icon-study.svg" },
    { title: "Exercise", duration: "11hrs", previous: "Last Month - 7hrs", color: "var(--exercise)", image: "./images/icon-exercise.svg" },
    { title: "Social", duration: "21hrs", previous: "Last Month - 35hrs", color: "var(--social)", image: "./images/icon-social.svg" },
    { title: "Self Care", duration: "7hrs", previous: "Last Month - 12hrs", color: "var(--self-care)", image: "./images/icon-self-care.svg" }
  ]
};

const cardsGrid = document.getElementById("cardsGrid");
const navLinks = document.querySelectorAll(".nav-link");
let currentPeriod = "weekly";

// Function to render cards
function renderCards(period) {
  cardsGrid.innerHTML = "";
  const activities = timeData[period];
  
  activities.forEach((item) => {
    const card = document.createElement("article");
    card.className = "activity-card";
    card.style.setProperty("--card-color", item.color);
    card.style.setProperty("--card-image", `url('${item.image}')`);

    card.innerHTML = `
      <div class="card-body">
        <div class="card-head">
          <h2>${item.title}</h2>
          <span class="more">•••</span>
        </div>
        <span class="hours">${item.duration}</span>
        <p>${item.previous}</p>
      </div>
    `;

    cardsGrid.appendChild(card);
  });
}

// Add event listeners to nav buttons
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active class from all buttons
    navLinks.forEach(btn => btn.classList.remove("active"));
    
    // Add active class to clicked button
    link.classList.add("active");
    
    // Determine which period was clicked
    const period = link.textContent.toLowerCase();
    currentPeriod = period;
    
    // Render cards for selected period
    renderCards(period);
  });
});

// Initial render with weekly data
renderCards(currentPeriod);