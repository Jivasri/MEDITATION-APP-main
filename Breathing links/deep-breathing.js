// Assuming you have the following elements in your HTML
const totalSessionsElem = document.getElementById('total-sessions');
const totalTimeElem = document.getElementById('total-time');
const resetBtn = document.getElementById('reset-btn');

// Variables to keep track of sessions and time
let totalSessions = 0;
let totalTime = 0;

// Function to update the stats
function updateStats() {
    totalSessionsElem.innerText = totalSessions;
    totalTimeElem.innerText = totalTime;
}

// Function to reset the session and time
resetBtn.addEventListener('click', function() {
    totalSessions = 0;
    totalTime = 0;
    updateStats();
});

// The rest of your breathing animation and logic here
const breathText = document.getElementById('breath-text');
const circle = document.querySelector('.circle');

let cycleTime = 10000;
let breatheInTime = (cycleTime / 5) * 2;
let holdTime = cycleTime / 5;

function breatheAnimation() {
    breathText.innerText = 'Breathe In!';
    circle.style.backgroundColor = 'rgba(68, 190, 221, 0.774)';
    setTimeout(() => {
        breathText.innerText = 'Hold';
        circle.style.backgroundColor = '#DE3163';
        setTimeout(() => {
            circle.style.backgroundColor = '#00A36C';
            breathText.innerText = 'Breathe Out!';
        }, holdTime);
    }, breatheInTime);

    // Track sessions and time
    totalSessions += 1;
    totalTime += cycleTime / 1000;  // Convert to seconds
    updateStats();
}

setInterval(breatheAnimation, cycleTime);
breatheAnimation();


document.getElementById('share-progress-btn').addEventListener('click', function() {
    const subject = encodeURIComponent("Sharing my progress on ShinHaven");
    const body = encodeURIComponent("Hi ShinHaven Team,\n\nI would like to share my progress and experiences so far. Here's what I have achieved:\n\n1. [Insert achievement]\n2. [Insert achievement]\n\nLooking forward to more growth and peace.\n\nBest regards,\n[Your Name]");
    const mailtoLink = `mailto:contact@shinhaven.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});
