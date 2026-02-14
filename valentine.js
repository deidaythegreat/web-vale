document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const initialScreen = document.getElementById('initial-screen');
    const successScreen = document.getElementById('success-screen');
    let yesSize = 1;
    let noClicks = 0;

    noBtn.addEventListener('mouseover', function() {
        // Move the "No" button to a random position
        const maxX = window.innerWidth - this.offsetWidth;
        const maxY = window.innerHeight - this.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        this.style.position = 'absolute';
        this.style.left = `${randomX}px`;
        this.style.top = `${randomY}px`;
        
        // Make "Yes" button bigger each time "No" is hovered
        noClicks++;
        yesBtn.style.transform = `scale(${1 + (noClicks * 0.2)})`;
    });

    yesBtn.addEventListener('click', function() {
        initialScreen.classList.add('hidden');
        successScreen.classList.remove('hidden');
        
        // Create floating hearts
        for (let i = 0; i < 30; i++) {
            createFloatingHeart();
        }
    });

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.animation = `float-up ${Math.random() * 3 + 3}s linear forwards`;
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Add floating hearts on success screen
    successScreen.addEventListener('mouseover', function() {
        if (Math.random() > 0.7) {
            createFloatingHeart();
        }
    });

    // Add some initial floating hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(createFloatingHeart, i * 300);
    }
});

// Add floating animation to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
