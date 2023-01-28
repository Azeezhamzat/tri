// Menu toggle function
let menu = document.querySelector(".menu-container");

function toggleMenu() {
menu.classList.toggle("active");
}

// Carousel initialization
$(document).ready(function() {
$('#header-carousel').owlCarousel({
loop: true,
items: 1,
autoplay: true,
autoplayTimeout: 5000,
dots: false,
nav: false
});
});

// Get the review carousel elements
let carousel = document.querySelector(".review-carousel-inner"),
reviews = document.querySelectorAll(".review-item"),
currentIndex = 0;

reviews[currentIndex].style.display = "block";

setInterval(() => {
reviews[currentIndex].style.display = "none";
currentIndex = (currentIndex + 1) % reviews.length;
reviews[currentIndex].style.display = "block";
}, 5000);