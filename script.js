// Select audio and button elements
const audio = document.getElementById('background-audio');
const playPauseIcon = document.getElementById('music');

// Toggle Play/Pause functionality
playPauseIcon.addEventListener('click', () => {
    if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
        playPauseIcon.className = 'fa-solid fa-volume-high'; // Update to play icon
    } else {
        audio.currentTime = 0;
        audio.pause();
        playPauseIcon.className = 'fa-solid fa-volume-xmark'; // Update to pause icon
    }
});
audio.addEventListener('ended', () => {
    playPauseIcon.className = 'fa-solid fa-volume-xmark'; // Update to pause icon
});

// Typing effect
let typed = new Typed('.typing', {
    strings: ["Front-End Developer.", "Programming Co-Lead.", "Tech Enthusiast."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Nav-bar active class toggle
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('li');
navList.forEach((item) => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        // Remove 'active' from all
        navList.forEach(navItem => navItem.querySelector('a').classList.remove('active'));
        
        // Add 'active' to the clicked item
        link.classList.add('active');
        
        // Close navbar if open
        if (aside.classList.contains('open')) {
            togglerFun();
        }
    });
});

// Nav-bar toggle functionality
const navToggle = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navToggle.addEventListener('click', function() {
    togglerFun();
});

function togglerFun() {
    aside.classList.toggle('open');
    navToggle.classList.toggle('open');
}

// Hire-me and More buttons
const hireBtn = document.querySelector('.hire');
hireBtn.onclick = function() {
    navList.forEach(navItem => navItem.querySelector('a').classList.remove('active'));
    navList[4].querySelector('a').classList.add('active');
    if (aside.classList.contains('open')) {
        togglerFun();
    }
};

const moreBtn = document.querySelector('.more');
moreBtn.onclick = function() {
    navList.forEach(navItem => navItem.querySelector('a').classList.remove('active'));
    navList[1].querySelector('a').classList.add('active');
    if (aside.classList.contains('open')) {
        togglerFun();
    }
};

// Contact form submit logic
// const formItems = document.querySelectorAll('.form-item');
// const submitButton = document.querySelector('.contactBtn');

// formItems.forEach(item => {
//     item.addEventListener('click', function() {
//         submitButton.click();  // Trigger form submission
//     });
// });

// // Optional: If you want to submit the form when pressing Enter key
// formItems.forEach(item => {
//     item.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             submitButton.click();  // Trigger form submission
//         }
//     });
// });
