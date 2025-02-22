// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for project details
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = "block";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});