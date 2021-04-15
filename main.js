const images = document.getElementById('images');
const img = document.querySelectorAll("#images img");
let index = 0;

function slide() {
    index++;
    if (index > img.length - 1) {
        index = 0;
    }
    images.style.transform = `translateX(${- index * 500}px)`;
}
setInterval(slide, 2000);