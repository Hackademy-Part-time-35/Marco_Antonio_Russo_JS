// variabili pagina index
let container = document.querySelector('#hero-section');
let slider_line = document.querySelector(".slider-line");
let slider_button = document.querySelector(".slider-button");
let span_1_num = document.querySelectorAll(".child-1");
let span_2_num = document.querySelectorAll(".child-2");
let span_3_num = document.querySelectorAll(".child-3");
let span_4_num = document.querySelectorAll(".child-4");
let numOfSpan = document.querySelectorAll("#numbers-article span").length;
let alreayAnimated = false;
let triggerHeight = document.querySelector("#numbers-article");


// logica slider hero section
document.querySelector('.slider').addEventListener('input', (element) => {

    container.style.setProperty('--position', 100 - element.target.value + "%");
    slider_line.style.setProperty('--position',element.target.value+ "%");
    slider_button.style.setProperty('--position',element.target.value+ "%");
    console.log(100 - element.target.value);
    

})



// funzione per numeri casuali 0-9
function numbersRoll(){
    return Math.floor(Math.random() * 10);;
}

// inizio animazione numeri solo ad elementi visibili che viene eseguita solo 1 volta

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting && alreayAnimated == false){ 

            let originalValues = [];
            let id_interval = setInterval(function(){
            span_1_num.forEach(num =>{
                originalValues.push(num.textContent);
                num.textContent = numbersRoll();
            }); 
            span_2_num.forEach(num =>{
                originalValues.push(num.textContent);
                num.textContent = numbersRoll();
            }); 
            span_3_num.forEach(num =>{
                originalValues.push(num.textContent);
                num.textContent = numbersRoll();
            }); 
            span_4_num.forEach(num =>{
                originalValues.push(num.textContent);
                num.textContent = numbersRoll();
            }); 
                
            },60);
            
            setTimeout(function(){
                clearInterval(id_interval);
                originalValues.splice(numOfSpan, originalValues.length -1 )


                span_1_num.forEach((num, index) =>{
                    num.innerHTML = originalValues[index]
                }); 
                span_2_num.forEach((num, index) =>{
                    num.innerHTML = originalValues[index + span_1_num.length ]
                }); 
                span_3_num.forEach((num, index) =>{
                    num.innerHTML = originalValues[index + span_1_num.length + span_2_num.length ]
                }); 
                span_4_num.forEach((num, index) =>{
                    num.innerHTML = originalValues[index + span_1_num.length + span_2_num.length + span_3_num.length ]
                }); 
            }, 2000);

            alreayAnimated = true;
        }

    });
});


observer.observe(triggerHeight)


