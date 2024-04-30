let input_timer = document.querySelector("#input_timer");

let button_start_countdown = document.querySelector("#button_start_countdown");
let button_freeze_countdown = document.querySelector("#button_freeze_countdown");
let button_stop_countdown = document.querySelector("#button_stop_countdown");

let timer = document.querySelector("#timer");
let id_scalaSecondi;
let stato_freeze = "freeze";

// pseudo-animazione di attesa input
let idle = setInterval(wait,4000);

function wait(){
    timer.textContent = "—";
    setTimeout(() => timer.textContent = `\\`,1000);
    setTimeout(() => timer.textContent = "|",2000);
    setTimeout(() => timer.textContent = "/",3000);
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
    clearInterval(idle);
    leggiSecondi();
    id_scalaSecondi = setInterval(scalaSecondi,1000);
});

button_freeze_countdown.addEventListener("click", function(){
    clearInterval(idle);

    if(stato_freeze === "freeze"){
        stato_freeze = "unfreeze"
        clearInterval(id_scalaSecondi);
        console.log(stato_freeze);
        button_freeze_countdown.innerHTML = "Unfreeze countdown";
    }else if(stato_freeze === "unfreeze"){
        stato_freeze = "freeze";
        id_scalaSecondi = setInterval(scalaSecondi,1000);
        console.log(stato_freeze);
        button_freeze_countdown.innerHTML = "Freeze countdown";
    };
});

button_stop_countdown.addEventListener("click", function(){
    clearInterval(idle);

    input_timer.value = "";
    timer.innerHTML = "";
    clearInterval(id_scalaSecondi);

    setTimeout(wait,4000);
});


