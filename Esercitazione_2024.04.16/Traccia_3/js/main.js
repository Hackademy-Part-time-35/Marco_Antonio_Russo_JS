let n = parseInt(prompt("Inserisci il numero a cui contare le cifre:"));

function cifre(n){
    
    if(n<0){
        n=n*-1;
    }
    
    if (n<10){
        console.log("Il numero ha 1 cifra");
    }else if (n<100){
        console.log("Il numero ha 2 cifre");
    }else if (n<1000){
        console.log("Il numero ha 3 cifre");
    }else if (n<10000){
        console.log("Il numero ha 4 cifre");
    }else{
        console.log("Il numero ha troppe cifre");
    }
}

cifre(n);