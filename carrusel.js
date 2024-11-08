const images = document.querySelectorAll('.carousel-image');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Button listeners
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Initialize
showImage(currentIndex);
