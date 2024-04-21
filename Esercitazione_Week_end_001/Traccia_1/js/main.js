let number = Math.floor(Math.random()*100 +1);

let scelta = parseInt(prompt("Indovina il numero!"));

function roulette(choise,number){
    let win;
    for (let index = 0; index < 4; index++) {
        if(choise === number){
            console.log("Complimenti hai vinto!");
            index=6;
            win = 0;
        }else if (choise < number){
            console.log("Hai scritto " + choise + " ma il numero da trovare è più grande di quello scritto, ti restano " + (4-index) + " tentativi");
            choise = parseInt(prompt("Prova ancora"));
        }else{
            console.log("Hai scritto " + choise + " Il numero da trovare è più piccolo di quello scritto, ti restano " + (4-index) + " tentativi");
            choise = parseInt(prompt("Prova ancora"));
        }       
    }
    if(win!=0){
        console.log("Tentativi finiti, hai perso! il numero da trovare era " + number);

    }
};

roulette(scelta,number);