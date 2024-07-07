let autoScrollSpeed = 1; // Adjust the speed as needed
let scrollInterval1;
let scrollInterval2;

function startAutoScroll(galleryId) {
    const gallery = document.getElementById(galleryId);
    scrollInterval1 = setInterval(() => {
        gallery.scrollBy({
            left: autoScrollSpeed,
            behavior: 'smooth'
        });
    }, 20); // Adjust the interval for smoother scrolling
}

function stopAutoScroll() {
    clearInterval(scrollInterval1);
    clearInterval(scrollInterval2);
}

document.addEventListener("DOMContentLoaded", () => {
    const gallery1 = document.getElementById('gallery1');
    const gallery2 = document.getElementById('gallery2');

    startAutoScroll('gallery1');
    startAutoScroll('gallery2');

    gallery1.addEventListener('mouseenter', stopAutoScroll);
    gallery1.addEventListener('mouseleave', () => startAutoScroll('gallery1'));

    gallery2.addEventListener('mouseenter', stopAutoScroll);
    gallery2.addEventListener('mouseleave', () => startAutoScroll('gallery2'));
});