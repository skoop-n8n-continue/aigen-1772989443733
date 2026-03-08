document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');

    // Simple animation or logic can go here
    const greeting = document.getElementById('greeting');

    // Subtle pulse effect for digital signage visibility
    setInterval(() => {
        greeting.style.opacity = greeting.style.opacity === '0.8' ? '1' : '0.8';
    }, 2000);
});