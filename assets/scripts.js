//globals
const screen = document.querySelector('#screen');

//create pixel grid
function createGrid(size) {
    for(i= 0; i < size*size; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        screen.appendChild(pixel);
    }
}

createGrid(16);