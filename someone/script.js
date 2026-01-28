const envelope = document.getElementById('envelope');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartContainer = document.getElementById('heart-container');

// Open Envelope
envelope.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        envelope.classList.toggle('open');
    }
});

// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Runaway "No" Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Yes Button Action
yesBtn.addEventListener('click', () => {
    alert("System Status: Love accepted! Redirecting to a happy life... ❤️");
});

