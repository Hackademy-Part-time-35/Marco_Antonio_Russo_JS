let container = document.querySelector('#hero-section');
let slider_line = document.querySelector(".slider-line");
let slider_button = document.querySelector(".slider-button");

document.querySelector('.slider').addEventListener('input', (element) => {

    container.style.setProperty('--position', 100 - element.target.value + "%");
    slider_line.style.setProperty('--position',element.target.value+ "%");
    slider_button.style.setProperty('--position',element.target.value+ "%");
    console.log(100 - element.target.value);
    

})