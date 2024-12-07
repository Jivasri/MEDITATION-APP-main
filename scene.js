let countdownTimer;  

// Open modal function
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const video = modal.querySelector('video');
    
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
    }

    modal.style.display = 'none';

    // Clear the countdown timer and reset its value for this specific modal
    const timerElement = modal.querySelector('.timer');
    if (timerElement) {
        clearInterval(countdownTimer);
        timerElement.textContent = '00:00';
    }
}

// Play/Pause video function
function playPause(videoId) {
    const video = document.getElementById(videoId);
    if (video.paused) {
        video.play();
        video.muted = false;
    } else {
        video.pause();
        video.muted = true;
    }
}

// Set video loop duration (5 or 10 minutes)
function setVideoLoop(videoId, minutes) {
    const video = document.getElementById(videoId);
    const durationInSeconds = minutes * 60;
    video.play();
    video.muted = false;
    
    // Get the modal that contains the video
    const modal = video.closest('.modal');
    
    // Get the timer element specific to the modal
    const timerElement = modal.querySelector('.timer');

    // Clear any existing timer before starting a new one
    clearInterval(countdownTimer);

    let timeLeft = durationInSeconds;

    // Update the timer every second
    countdownTimer = setInterval(() => {
        let minutesLeft = Math.floor(timeLeft / 60);
        let secondsLeft = timeLeft % 60;

        // Update the specific timer for this modal
        timerElement.textContent = `${padTime(minutesLeft)}:${padTime(secondsLeft)}`;

        // When time is up, stop the video and clear the timer
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            video.pause();
            video.muted = true;
        }
        timeLeft--;
    }, 1000);
}

// Function to format the time (adding leading zero for minutes/seconds less than 10)
function padTime(time) {
    return time < 10 ? '0' + time : time;
}

// Function to close all modals
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
        clearInterval(countdownTimer);
    });
}

// Function to handle multiple modals
function openSpecificModal(modalId) {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => modal.style.display = 'none');  
    openModal(modalId);  
}
