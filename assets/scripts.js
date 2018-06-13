const screen = document.querySelector('#screen');

//create pixel grid
function createGrid(size) {
    for (i = 0; i < size * size; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        screen.appendChild(pixel);
    }
}
createGrid(16);

//add hover event listeners
const pixels = Array.from(document.querySelectorAll(".pixel"));
function onHover() {
    for (i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function (e) {
            this.style.opacity = 0.1;
        });
    }
}
onHover();