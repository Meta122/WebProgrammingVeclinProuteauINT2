const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

function updateCarousel() {
    slide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
    updateCarousel();
});