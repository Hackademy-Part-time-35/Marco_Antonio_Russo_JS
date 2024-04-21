// Dichiarazione funzioni di conversione

function convToEuro(valuta){
    switch (valuta){
        case "dollaro":
        case "dollari":
        case "Dollaro":
        case "Dollari":
        case "DOLLARO":
        case "DOLLARI":
        case "$":{
            return (num_importo*0.94).toFixed(2);
        }


        case "£":
        case "sterline":
        case "sterlina":
        case "Sterline":
        case "Sterlina":
        case "STERLINE":
        case "STERLINA":{
            return (num_importo*1.16).toFixed(2);
        }

        default:{
            return num_importo;  
        } 
    }
}

function convToDollar(valuta){
    switch (valuta){
        case "euro":
        case "Euro":
        case "EURO":
        case "€":{
            return (num_importo*1.07).toFixed(2);
        }


        case "£":
        case "sterline":
        case "sterlina":
        case "Sterline":
        case "Sterlina":
        case "STERLINE":
        case "STERLINA":{
            return (num_importo*1.24).toFixed(2);
        }
        
        default:{
            return num_importo;  
        }
    }
}

function convToPound(valuta){
    switch (valuta){
        case "euro":
        case "Euro":
        case "EURO":
        case "€":{
            return (num_importo*0.86).toFixed(2);
        }


        case "dollaro":
        case "dollari":
        case "Dollaro":
        case "Dollari":
        case "DOLLARO":
        case "DOLLARI":
        case "$":{
            return (num_importo*0.81).toFixed(2);
        }

        default:{
            return num_importo;  
        } 
    }
}


// Dichiarazione variabili
let importo = prompt("Inserire importo da convertire seguito dal simbolo della valuta");

// Ricavo la valuta dalla stringa
let valuta = importo.slice(importo.length -1);

// Ricavo l'importo dalla stringa
let num_importo = parseInt(importo.slice(0,importo.length-1));

// Richiesta di conversione
let richiesta_conv = prompt("Scrivi euro per convertire in €, sterline per convertire in £, dollaro per convertire in $");
let importo_convertito;

// Filtro richiesta di conversione
switch (richiesta_conv){
    
    case "euro":
    case "Euro":
    case "EURO":
    case "€":{
        importo_convertito = convToEuro(valuta);
        break;
    }
    
    case "dollaro":
    case "dollari":
    case "Dollaro":
    case "Dollari":
    case "DOLLARO":
    case "DOLLARI":
    case "$":{
        importo_convertito = convToDollar(valuta);
        break;
    }

    case "£":
    case "sterline":
    case "sterlina":
    case "Sterline":
    case "Sterlina":
    case "STERLINE":
    case "STERLINA":{
        importo_convertito = convToPound(valuta);
        break;
    }
}

// Output
console.log(importo_convertito + " " +richiesta_conv);

