let choise;
// while (true){
setInterval(() => { //Ho cercato soluzioni per creare un delay fra un input e l'altro

    choise = parseInt(prompt("Digitare il codice bevanda"));
    switch (choise) {
        case 1:
            console.log("È stata selezionata l'acqua...erogazione in corso");
            break;
        case 2:
            console.log("È stata selezionata Coca Cola...erogazione in corso");
            break;
        case 3:
            console.log("È stata selezionata birra...erogazione in corso");
            break;
    }
}, 3000)