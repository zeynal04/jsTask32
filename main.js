// script.js

class Carousel {
    constructor() {
        this.currentIndex = 0;
        this.images = document.querySelectorAll('.carousel-image');
        this.dots = document.querySelectorAll('.dot');
        this.totalImages = this.images.length;
        this.updateCarousel();
        this.addEventListeners();
    }

    get current() {
        return this.currentIndex;
    }

    set current(index) {
        if (index >= 0 && index < this.totalImages) {
            this.currentIndex = index;
            this.updateCarousel();
        }
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        this.updateDots();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    addEventListeners() {
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                this.current = parseInt(dot.getAttribute('data-index'), 10);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});
