# ShinHaven

![ShinHaven Cover](Assets-Aniket/ShinRavenCover.png)

ShinHaven is an online platform designed to help users find peace, mindfulness, and spiritual growth through various interactive features. Whether you're looking for relaxing music, tranquil scenes, or meditative techniques, ShinHaven provides a sanctuary for your inner well-being.

## Live Demo
You can experience ShinHaven live by visiting the following link:

[**ShinHaven Live**](https://shinhaven.netlify.app/)

---

## Table of Contents
1. [About the Project](#about-the-project)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Technologies Used](#technologies-used)


## About the Project

ShinHaven is a platform that aims to create a peaceful retreat for users to focus on mental wellness. The platform includes various interactive sections that guide users through mindfulness practices, relaxation techniques, and mood tracking. It is perfect for people from all walks of life who are seeking inner peace, relaxation, or spiritual growth.

## Features

ShinHaven includes the following key features:

### 1. **Parallax Scrolling Effect**
   - The website features a beautiful parallax effect where multiple layers of images move at different speeds when the user scrolls. This creates a dynamic and immersive experience as users navigate the page.

### 2. **User Authentication (Sign Up/Logout)**
   - Users can create an account to personalize their experience. When logged in, they are greeted with their username and have the option to log out.
   - If a user is logged in, a personalized greeting appears with their username, and they can log out at any time.
   - The authentication data is stored in the browser's `localStorage`.

### 3. **Mood Tracker**
   - Users can track their mood by selecting from five different emotions: Happy, Calm, Stressed, Anxious, or Sad.
   - Once a mood is selected, users are provided with a suggestion based on their mood, such as exploring relaxing music or meditation techniques.
   - Mood history is stored and displayed with a suggestion for each selected mood.
   - Users can view their past mood history and clear it at any time.
   - Based on the selected mood, users are redirected to the most relevant section of the website, such as Music, Scene, Relaxation Techniques, or Mind Chat.

### 4. **Dynamic Suggestions**
   - After selecting a mood, users receive personalized suggestions that encourage them to explore content related to their emotional state. For example:
     - **Happy**: Explore the music section to enhance your joy.
     - **Calm**: Check out the scenery section to connect with tranquility.
     - **Stressed**: Learn relaxation techniques to ease your mind.
     - **Anxious**: Participate in a Mind Chat to find clarity.
     - **Sad**: Listen to soothing music to uplift your spirits.

### 5. **Breathing Exercises with Webcam Integration**
   - Users can practice breathing exercises with the help of webcam integration. The platform uses the webcam to guide users through relaxation exercises while analyzing their breathing patterns. 
   - This feature helps users practice deep breathing techniques for better mental and physical well-being, allowing real-time feedback based on their performance.

### 6. **Record Feature for User Analysis**
   - The platform also includes a record feature where users can track and analyze their progress over time. This can be used to monitor improvements in their mental well-being or changes in mood, providing better insights into their personal growth.

### 7. **Redirection After Mood Selection**
   - After a user selects their mood, a modal window appears with the suggested action. After a few seconds, the user is automatically redirected to the most relevant page (e.g., Music, Scene, etc.).

### 8. **Share Progress Button**
   - A "Share Progress" button has been added to the platform that allows users to easily share their progress with others. This button directly opens the user's default email client, pre-filled with their progress, so they can share their achievements and experiences with friends, family, or the ShinHaven team.

### 9. **Responsive Design**
   - The website is designed to be fully responsive, ensuring a smooth experience on all devices (desktop, tablet, and mobile).

### 10. **Mind Chat (API Integration)**
   - Mind Chat is a unique feature of ShinHaven that allows users to interact with an AI-based chat system aimed at mental wellness. It uses an API integration to generate conversation topics and provide soothing responses based on the user's mood.
   - Users can engage in guided conversations that help them relax and find clarity. It’s a great tool for people looking to talk through their emotions in a supportive, non-judgmental space.

### 11. **Music Players and Calming Videos**
   - ShinHaven features calming music players and relaxing videos that users can listen to or watch to enhance their mental well-being.
   - The music player comes with a dynamic play/pause feature, allowing users to pause, play, and control the volume while enjoying their favorite calming tracks.
   - The calming videos also include a modal that opens a full-screen view, offering users a more immersive experience.

### 12. **Animations and Transitions**
   - The site uses smooth animations and transitions throughout the user interface to create an engaging and calming experience. For example:
     - **Hover Effects**: Interactive buttons and links have subtle hover animations to guide users through the site.
     - **Page Transitions**: Page changes and section transitions are smoothly animated to enhance the feeling of tranquility as users explore the site.
     - **Modal Animations**: When opening a modal (like for sharing progress or viewing calming videos), a subtle fade-in effect is used to create a soothing experience.

## How to Use

1. **Sign Up / Login:**
   - Click the "Sign Up" button to create a new account. Once logged in, you'll be greeted by your username.
   - If you are logged in, you will also see the option to log out.

2. **Select Your Mood:**
   - Click on any of the five mood buttons (Happy, Calm, Stressed, Anxious, Sad) to track how you're feeling.
   - After selecting a mood, you will receive a suggestion tailored to your current emotional state.
   
3. **Explore Suggestions:**
   - Based on your mood, you will be redirected to a section like Music, Scene, Relaxation Techniques, or Mind Chat, to help you improve your mental well-being.
   - You can always go back to track new moods or explore other sections of the site.

4. **Breathing Exercises with Webcam:**
   - Navigate to the Breathing Exercises section where you can follow along with the on-screen instructions.
   - Your webcam will be used to monitor your breathing and guide you through the process for a more personalized experience.

5. **View Mood History:**
   - Your selected moods and their corresponding suggestions are stored and displayed in the mood history section.
   - You can clear your mood history with a single click.

6. **Mind Chat:**
   - Engage with the AI-powered Mind Chat feature by selecting a conversation topic or mood.
   - The system will generate a conversation to guide you through a relaxing chat experience.

7. **Share Your Progress:**
   - Click on the "Share Progress" button to open your default email client and share your achievements with others. This feature pre-fills the email with your mood progress for easy sharing.

8. **Logout:**
   - If you're done, you can log out at any time by clicking the logout button.

## Technologies Used

The project is built using the following technologies:

- **HTML**: For structuring the website content.
- **CSS and Tailwind**: For styling and creating the layout, including the animations.
- **JavaScript**: For adding interactive features such as parallax ,mood tracking, user authentication, and page redirection.
- **Webcam Integration**: For breathing exercises and real-time analysis of user behavior.
- **LocalStorage**: For saving user login credentials (username and password) for a personalized experience.
- **Email Client Integration**: For the "Share Progress" feature.
- **API Integration**: For the Mind Chat feature to offer AI-based conversations.
- **Media Players**: For playing calming music and videos with dynamic control features.
- **CSS Animations and Transitions**: For smooth animations across the site, including hover effects, modals, and page transitions.

