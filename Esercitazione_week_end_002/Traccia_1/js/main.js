let button_1 = document.querySelector("#button_1");
let button_2 = document.querySelector("#button_2");
let button_3 = document.querySelector("#button_3");
let paragraphs = document.querySelector(".paragraph_div");
let par1 = document.querySelector("#paragraph_1");
let par2 = document.querySelector("#paragraph_2");
let par3 = document.querySelector("#paragraph_3");



button_1.addEventListener("click", function(){

    let color_1 = "rgb(" + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")";
    let color_2 = "rgb(" + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")";
    let color_3 = "rgb(" + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")";
    
    paragraph_1.style.color = color_1;
    paragraph_2.style.color = color_2;
    paragraph_3.style.color = color_3;
});
button_2.addEventListener("click", function(){
    paragraphs.classList.toggle("f-w")
    // paragraphs.style.fontWeight = "800";
});
button_3.addEventListener("click", function(){
    paragraphs.classList.toggle("d-none");
});