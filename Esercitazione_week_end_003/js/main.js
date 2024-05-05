// 1. calcolare l'area di un cerchio di raggio R = 10
function areaCerchio(raggio){
    return Math.PI * raggio ** 2;
};

console.log(`1) l'area del cerchio è di ${areaCerchio(10)}`);


// 2. calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4
function ipotenusaTriangoloRettangolo(cateto1,cateto2){
    return Math.sqrt(cateto1**2 + cateto2**2);
};
console.log(`2) l'ipotenusa del triangolo è di ${ipotenusaTriangoloRettangolo(3,4)}`);

// 3. scrivere una funzione che, assegnati die numeri, generi un numero random, intero, fra i due assegnati (compresi)
function randomBetween(min,max){
    return Math.floor((Math.random() * (max - min + 1)) + min)
}
let min = 5;
let max = 7;

console.log(`3) il numero generato casualmente fra ${min} e ${max} è: ${randomBetween(min,max)}`);

// 4. scrivere una funzione che trasformi un nome nelle sue iniziali. Ad esempio: "Tizio Caio" => "T. C."
function iniziali(nome){
    let split_name = nome.split(" ");
    let iniziali ="";
    split_name.forEach(element => {
        iniziali += element[0] + ". "
    });

return iniziali
};

console.log(`4) ${iniziali("Marco Antonio")}`);

// 5. scrivere una funzione che assegnati 3 numeri, ritorni true se i tre numeni possono essere i lati di un trianglo, false altrimenti
function checkTriangolo(lati){
    cond1 = lati[0] < lati[1] + lati[2] && lati[0] > lati[1] - lati[2]
    cond2 = lati[1] < lati[0] + lati[2] && lati[0] > lati[1] - lati[2]
    cond3 = lati[2] < lati[0] + lati[1] && lati[2] > lati[0] - lati[1]

    if(cond1 && cond2 && cond3){
        return true;
    }else{
        return false;
    }
}

let lati = [5,6,7];
console.log("5) " + checkTriangolo(lati));

// 6. congettura di Collatz: preso un numero naturale maggiore di 1,s e questo è pari, dividerlo per die, se dispari, moltiplicarlo per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza, l'algoritmo termina sempre ad 1. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni iterazione. Ad esempio 10 => [10,5,16,8,4,2,1]
function collatz(num){
    let array = [];
    while(num != 1){
        if(num % 2 == 0){
            num /= 2; 
        }else{
            num = num * 3 + 1;
        }
    array.push(num);
    }
    return array;
}
console.log(`6) ${collatz(21)}`);

// 7. Scrivere un programma che stampi tutti i numeri da 1 a 100: per i multipli di 3 stampare JAVA, per i multipli di 5 stampare SCRIPT, infine per i multipli di 3 e 5 stampare JAVASCRIPT
function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 ==0){
            console.log("JAVASCRIPT");
        }else if(i % 5 == 0){
            console.log("SCRIPT");
        }else if(i % 3 == 0){
            console.log("JAVA");
        }else{
            console.log(i);
        }
        
    }
}

fizzBuzz();
console.clear()

// 8. Scrivere una funzione che, assegnato un numero n, ritorni la successione di fubinacci fino all'n-simo numero sotto forma di array, ad esempio 3 => [1,1,2]
function fibonacci(num){
    array_fibonacci = [1,1]

    if(num == 0){return []};
    if(num ==1){return [1]};

    for(let i = 2; i < num ; i++){
        array_fibonacci.push(array_fibonacci[i-2] + array_fibonacci[i-1])
    }
    return array_fibonacci;
}

console.log(`8) ${fibonacci(8)}`);

// 9. Scrivere una funzione che, assegnato un numero n, ritorni se è primo
function prime(num){
    let check = 0;
    if(num > 0 && num <= 2){
        return "è primo"

    }

    for (let i = 2; i < num; i++) {

        if(num % i == 0){
            check++;
        }
        
        if(check == 0){
            return "è primo"
        }else{
            return "non è primo"
        }
    }
}

console.log(`9) ${prime(73)}`);

// 10. Scrivere una funzione che, assegnata una stringa, ritorni la somma delle cifre in essa presenti
function contaStringa(stringa){
    let parole = stringa.split(" ");
    let sum = 0;
    parole.forEach((elem) =>{
        if(Number(elem)){
            sum += Number(elem);
        }
    });
    return sum;
}

console.log(`10) ${contaStringa("Questa è 1 stringa da 7 caratteri")}`);

// 11. scrivere una funzione che accetta come parametri un array di numeri ed un numero di soglia, e restituisca un array formato dai numeri maggiori della soglia fornita. Ad esempio ([1,2,3,4], 3) => [4]
function greaterThen(array, limit){
    return array.filter((elem) => elem > limit)
}

console.log("11)" + greaterThen([5,1,88,3,24], 10));

// 12. scrivere una funzione che trasformi un numero in ore e minuti: ad esempio 3014 => 50:14, devono essere sempre presenti 2 cifre, sia per le ore che per i minuti (non devo leggere, ad esempio 1:9 ma 01:09)
function toHours(num){
    let hours = Math.floor(num  / 60);
    let min = num % 60;
    console.log(min);    
    
    if(hours <10){
        hours = "0" + hours;
    }

    if(min < 10){
        min = "0" + min;
    }

    return hours + ":" + min;

}

console.log(`12) ${toHours(60)}`);

// 13. scrivre una funzione che generi un array formato da N numeri random interi, fra un minimo e un massimo assegnati 
function randomBetweenArray(min,max,n){
    let array = [];
    for(let i = 0; i < n; i++){
        array.push(random(min, max));
    }
    
    return array;
}

function random(min, max){
    return Math.floor((Math.random() * (max - min +1)) + min)
}

let minArray = 1;
let maxArray = 7;
let n = 8;

console.log(`13) il numero generato casualmente fra ${minArray} e ${maxArray} è: ${randomBetweenArray(minArray,maxArray,n)}`);

// 14. Scrivere una funzione che trasforma un array di array in un oggetto (ogni elemento è una coppia ad esempio [["nome", "Marco"], ["cognome", "russo"]])
function toObject(array){
    let obj = {};
    
    array.forEach((elem) =>{
        obj[elem[0]] = elem[1]
    })
    
    return obj
    
};


console.log(toObject([["nome", "marco"],["cognome", "russo"],["anni", "30"]]));