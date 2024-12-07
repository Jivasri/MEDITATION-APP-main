const breathText = document.getElementById('breath-text');
const countdown = document.getElementById('countdown');

let breatheInTime = 4;  // Duration for "Breathe In"
let holdTime = 7;       // Duration for "Hold"
let breatheOutTime = 8;  // Duration for "Breathe Out"

function updateCountdown(timeLeft) {
    countdown.innerText = `${timeLeft}s`;
}

function startPhase(phaseTime, phaseText, nextPhaseCallback) {
    breathText.innerText = phaseText;
    updateCountdown(phaseTime);
    
    let interval = setInterval(() => {
        phaseTime--;
        updateCountdown(phaseTime);
        if (phaseTime <= 0) {
            clearInterval(interval);

            nextPhaseCallback();
        }
    }, 1000);
}

function breatheAnimation() {
    startPhase(breatheInTime, 'Breathe In!', () => {
        startPhase(holdTime, 'Hold', () => {
            startPhase(breatheOutTime, 'Breathe Out!', breatheAnimation);
        });
    });
}

breatheAnimation();


// Get video elements
const videoPreview = document.getElementById('video-preview');
const startRecordingButton = document.getElementById('start-recording');
const stopRecordingButton = document.getElementById('stop-recording');
const saveVideoButton = document.getElementById('save-video');

// Declare mediaRecorder and stream variables
let mediaRecorder;
let recordedChunks = [];
let videoStream;

// Start the video recording
startRecordingButton.addEventListener('click', async () => {
    try {
        console.log('Start recording button clicked');
        
        // Access the user's camera
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        console.log('Camera access granted');

        videoPreview.srcObject = videoStream;

        // Create a new MediaRecorder instance
        mediaRecorder = new MediaRecorder(videoStream);
        
        // On data available, store the video chunks
        mediaRecorder.ondataavailable = (event) => {
            recordedChunks.push(event.data);
        };

        // When recording stops, create a video file
        mediaRecorder.onstop = () => {
            const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
            const videoURL = URL.createObjectURL(videoBlob);
            saveVideoButton.style.display = 'inline-block';
            saveVideoButton.onclick = () => {
                const a = document.createElement('a');
                a.href = videoURL;
                a.download = 'breathing-recording.webm';
                a.click();
            };
        };

        // Start recording
        mediaRecorder.start();
        
        // Show and hide buttons
        startRecordingButton.style.display = 'none';
        stopRecordingButton.style.display = 'inline-block';
    } catch (err) {
        console.error('Error accessing camera: ', err);
        alert("Permission to access camera was denied or an error occurred. Please allow camera access and try again.");
    }
});

// Stop the video recording
stopRecordingButton.addEventListener('click', () => {
    console.log('Stop recording button clicked');
    mediaRecorder.stop();
    videoStream.getTracks().forEach(track => track.stop()); // Stop the camera
    stopRecordingButton.style.display = 'none';
});

// Reset video and UI for new recording
saveVideoButton.addEventListener('click', () => {
    saveVideoButton.style.display = 'none';
    startRecordingButton.style.display = 'inline-block';
    recordedChunks = [];
    videoPreview.srcObject = null; // Clear the video preview
});
document.getElementById('share-progress-btn').addEventListener('click', function() {
    const subject = encodeURIComponent("Sharing my progress on ShinHaven");
    const body = encodeURIComponent("Hi ShinHaven Team,\n\nI would like to share my progress and experiences so far. Here's what I have achieved:\n\n1. [Insert achievement]\n2. [Insert achievement]\n\nLooking forward to more growth and peace.\n\nBest regards,\n[Your Name]");
    const mailtoLink = `mailto:contact@shinhaven.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});