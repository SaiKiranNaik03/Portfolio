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

// active class changes based on the scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove 'active' class from all links
                    navLinks.forEach((link) => link.classList.remove('active'));

                    // Add 'active' class to the link corresponding to the current section
                    const activeLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        },
        { threshold: 0.3 } // Adjust this value for when the section is considered "on top"
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));
});


// acheivement section - js-1
document.addEventListener('DOMContentLoaded', () => {
    const achievements = document.querySelector('.achievements');
    const achievementItems = document.querySelectorAll('.achievement');
    const totalItems = achievementItems.length;
    let currentIndex = 0;

    setInterval(() => {
        // Increment the index
        currentIndex = (currentIndex + 1) % totalItems;

        // Calculate the scroll amount based on the item width
        const scrollAmount = currentIndex * (achievementItems[0].offsetWidth);

        // Apply the transform to scroll horizontally
        achievements.style.transform = `translateX(-${scrollAmount}px)`;
    }, 3000); 
});
// Events

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("gallery");

    function duplicateEvents() {
        const events = Array.from(container.children);

        for (let i = 0; i < 5; i++) {  
            events.forEach(event => {
                const clone = event.cloneNode(true);
                container.appendChild(clone);
            });
        }
    }

    duplicateEvents();

    // Toggle scrolling on click
    let isPaused = false;
    container.addEventListener("click", () => {
        if (isPaused) {
            container.style.animationPlayState = "running";
        } else {
            container.style.animationPlayState = "paused";
        }
        isPaused = !isPaused;
    });
});