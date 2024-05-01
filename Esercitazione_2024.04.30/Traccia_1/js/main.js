let input_timer = document.querySelector("#input_timer");

let button_start_countdown = document.querySelector("#button_start_countdown");
let button_freeze_countdown = document.querySelector("#button_freeze_countdown");
let button_stop_countdown = document.querySelector("#button_stop_countdown");

let timer = document.querySelector("#timer");
let id_scalaSecondi;
let stato_freeze = "freeze";


// pseudo-animazione di attesa input
let controllo_output = 0;
let idle = setInterval(wait,4000);

function wait(){
    timer.textContent = "—";
    
    setTimeout(() => {
        if(controllo_output === 0){
        timer.textContent = `\\`;
        }
    },1000);
    
    setTimeout(() => {
        if(controllo_output === 0){
            timer.textContent = "|";
        }
    },2000);

    setTimeout(() => {
        if(controllo_output === 0){
            timer.textContent = "/";
        }
    },3000);

}

//funzioni
function leggiSecondi(){
    timer.innerHTML = input_timer.value
}

function scalaSecondi(){
    timer.innerHTML--;
    if(timer.innerHTML == 0 ){
        clearInterval(id_scalaSecondi);
        timer.textContent = "TEMPO SCADUTO!"
    }
}

// attesa pulsanti
button_start_countdown.addEventListener("click", function(){
    
    if(input_timer.value !== ""){
        controllo_output = 1;
        clearInterval(idle);
        leggiSecondi();
        id_scalaSecondi = setInterval(scalaSecondi,1000);
    };
});

button_freeze_countdown.addEventListener("click", function(){
    let freeze_condition = timer.innerHTML !== "—" && timer.innerHTML !== `\\` && timer.innerHTML !== "|" && timer.innerHTML !== "/" && timer.innerHTML !== "";

    if(freeze_condition){
        controllo_output = 1;
        clearInterval(idle);

        if(stato_freeze === "freeze"){
            console.log("stato timer: " + stato_freeze);
            stato_freeze = "unfreeze"
            clearInterval(id_scalaSecondi);
            button_freeze_countdown.innerHTML = "Unfreeze countdown";
        }else if(stato_freeze === "unfreeze"){
            console.log("stato timer: " + stato_freeze);
            stato_freeze = "freeze";
            id_scalaSecondi = setInterval(scalaSecondi,1000);
            button_freeze_countdown.innerHTML = "Freeze countdown";
        };
    }
});

button_stop_countdown.addEventListener("click", function(){
    controllo_output = 1;
    clearInterval(idle);

    input_timer.value = "";
    timer.innerHTML = "";
    clearInterval(id_scalaSecondi);

    controllo_output = 0;
    idle = setInterval(wait,4000);
});


