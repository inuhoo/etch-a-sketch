const screen = document.querySelector('#screen');

//create pixel grid
function createGrid(size) {
    document.styleSheets[1].cssRules[3].style["grid-template-columns"] = "repeat(" + size + ", 1fr)"
    document.styleSheets[1].cssRules[3].style["grid-template-rows"] =  "repeat(" + size + ", 1fr)"
    for (i = 0; i < size * size; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        screen.appendChild(pixel);
    }
}
createGrid(16);

//add hover event listeners

function onHover() {
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    for (i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', function (e) {
            this.style.opacity = 0.1;
        });
    }
}
onHover();


// clear board on click
document.querySelector("#left-knob").addEventListener('click', function(e) {
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.lastChild);
    }
    let newsize = Number(window.prompt('please provide a new grid size', 16));
    createGrid(newsize);
    onHover();
})