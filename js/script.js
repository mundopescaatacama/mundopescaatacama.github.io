
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}, 3000);
