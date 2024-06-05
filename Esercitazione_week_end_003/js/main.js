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

// 15. scrivere una funzione che, assegnata una stringa, ritorni un oggetto con chiavi le parole (distinte) e valori la loro frequenza. Ad esempio "Quella cosa affianco alla cosa sulla cosa" => {Quella: 1, cosa: 3, affianco: 1, alla: 1, sulla: 1}
function stringToObject(stringa){
    let array = stringa.split(" ")
    let obj = {};
    
    array.forEach((elem,index) =>{
        let unique_array = array.filter(elem => elem == array[index])
        obj[elem] = unique_array.length;
    })
    
   
    return  obj;
}

console.log(stringToObject("Quella cosa affianco alla cosa sulla cosa"));

// 16. scrivere una funzione che, data una stringa, trasformi la prima lettera di ogni marola in maiuscolo
function capitalize(string){
    let array = string.split(" ")
    let array_capitalized = [];
    array.forEach((elem) =>{
        array_capitalized.push(elem[0].toUpperCase() + elem.substr(1));
        console.log(elem);
    })
    return array_capitalized.join(" ")
};

console.log(capitalize("Quella cosa affianco alla cosa sulla cosa"));

// 17. scrivere una funzione che, assegnata una stringa, ritorni il numero di vocali presenti (gestire le maiuscole)
function countVocals(string){
let vocals = ["a","e","i","o","u","A","E", "I", "O", "U"];
let count = 0;
    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < vocals.length; j++){
            if(string[i] === vocals[j]){
            count++;
            }
        }
    }
    return count;
};

console.log(countVocals("Quella cosa affianco alla cosa sulla cosa"));

// 18. Scrivere una funzione che , assegnata una stringa, ne faccia lo slug. Ad esempio: "Sono una stringa" => "/sono-una-stringa"
function slug(string){
    return "/" + string.toLowerCase().replaceAll(" ", "-")
};

console.log(slug("Sono una stringa"));

// 19. Scrivere una funzione che accetta una stringa e  restituisce la parola più lunga
function longWord(string){
  return string.split(" ").sort((a,b)=>a.length-b.length).pop()
};

console.log(longWord("Quella cosa affianco alla cosa sulla cosa"));

// 20. scrivere una funzione che dato un array, ritorni "pari" o "dispari" a seconda che la somma dei suoi elementi sia pari o dispari
function oddEven(array){
return array.reduce((x,y) => x+y) % 2 == 0 ? "pari" : "dispari";
  

};

console.log(oddEven([5,1,88,3,24]));

// 21. scrivere una funzione che accetta in ingresso un array di 0 e 1 e restituisca l'equivalente numero in base decimale. Ad esempio [1,0] => 2
function decimalBase(array){
    return array.reduce((acc = 0,val,ind) => acc + val*(2**((array.length-1) - ind)),0)
}

console.log(decimalBase([1,0,0]));

// 22. viene assegnata una stringa contenente solo caratteri "x" e "y". Scrivere una funzione che ritorni se il numero di x e y è uguale. Ad esemio, "xxoxoo" => true

function XY(string){
    let array = string.split("").sort();
    return array.lastIndexOf(array[0]) == Math.floor((array.length-1)/2);
    
}

console.log(XY("xxoxoo"));

// 23. scrivere una funzione che, assegnata una stringa ed una vocale, ritorni la stringa originaria con tutte le vocali cambiate in quella fornita. Ad esempio: "Ciao a tutti, "o" => "Cooo o totto"

function stringAndVocal(string,vocal){
    let array = ["a","e","i","o","u"]
    return string.replace(/[aeiou]/gi, vocal)
}

console.log(stringAndVocal("Ciao a tutti", "a"));

// 24. scrivere una funziona che, assegnato un array contenente numeri e stringhe, ritorni un nuvo array formato dai soli numeri. Ad esempio [1,2,"a",4] => [1,2,4]

function onlyNumbers(array){
    return array.filter(el => typeof(el)=="number")
}

console.log(onlyNumbers([1,2,"a",4]));

// 25. scrivere una funzione che inverta una stringa

function reverseString(string){
    return  string.split("").reverse().join("");
}

console.log(reverseString("Ciao"));

// 26. scrivere una funzione che accetta un array di numeri e ne ritorni la media e la deviazione standard

function media(array){
    let media = array.reduce((acc, el) => acc +el) / array.length
    return deviazione = Math.sqrt((1/array.length)* array.reduce((acc,el) => acc + (el-media)**2))
}

console.log(media([1,2,3]));

// 27. scrivere una funzione che accetti in ingresso un array di numeri, ritornare la somma se questa è pari, altrimenti la media

function sumOrAverage(array){
    return array.reduce((acc,el) => acc + el)%2 === 0 ? array.reduce((acc,el) => acc + el) : array.reduce((acc, el) => acc +el) / array.length
}

console.log(sumOrAverage([1,2,4]));

// 28. scrivere un "programma" che chiaeda all'utente di inserire in numero, lanciare un alert che comunica se il numero è pari o dispari

function evenOdd(){
    let input =prompt("inserire un numero");
    alert (input %2 ===0 ? "pari" : "dispari")
}

// evenOdd();

// 29. scrivere una funzione che assegnato un numero naturale ritorni la somma da uno fino al numero assegnato

function sumer(int){
    let count = 0;
    for (let index = 0; index <= int; index++) {
        count +=index
    }
    return count;
}

console.log(sumer(3));

// 30. scrivere una funzione che accetti in ingresso due array e ne restituisca il prodotto scalare

function prodottoScalare(array1,array2){
    return array1.map((el,ind) => el*array2[ind])
}

console.log(prodottoScalare([1,2],[1,2]));

// 31. viene fornita una stringa, ritornare un oggetto con chiave il carattere, valore il numero di volte che compare nella tringa. Ad esempio "casa" => {"a"; 2,"c":1, "s":1} in ordine alfabetico

function objStat(string){
    return Object.fromEntries(string.split("").filter((el,ind,array) => array.indexOf(el) == ind).sort().map(el => [el, string.split("").filter(i => i == el).length]))
    
}

console.log(objStat("casa"));

// 32. scrivere una funzione che prende in ingresso un numero intero e ritorna il numero di bit uguali ad 1 nella sua rappresentazione binaria, ad esempio: 42 in binario 101010 => 3

function toBin(int){
    let array = [];
    while(int != 0){
        int = Math.floor(int/2);
        array.push(int%2);
    }

    return array.filter(el => el === 1).length
}


console.log(toBin(42));

// 33. viene assegnato un array di nomi. Scrivere una funzione che accetta in ingresso l'array ed un numero e ritorni un nuovo array, contenente solo i nomi di lunghezza uguale al numero assegnato, in ordine alfabetico

function nameLength(array, int){

    return array.filter(el => el.length === int).sort()

}

console.log(nameLength(["Marco","Giuseppe", "Miriam", "Asbleffo","Matteo"], 6));

// 34. scrivere una funzione che ritorni tutti i numeri primi esistenti fino al numero assegnato compreso

function primitiveNum(int){
    let array = []
    
    function isPrime(int){
        for (let i = 2; i < int; i++) {
            if(int % i == 0){
                return false
            }
        }
        return int > 1
    }

    for (let index = 2; index <= int; index++) {
        if(isPrime(index)){
            array.push(index)
        }
    }

    return array

}

console.log(primitiveNum(73));

// 35. scrivere una funzione che accetta un numero intero e ritorna tutti i suoi divisori. Dopo, trasformale la funzione per verificare se il numero è primo

function dividers(int){
    let array = [];

    function isPrime(int){
        for (let i = 2; i < int; i++) {
            if(int % i == 0){
                return false
            }
        }
        return int > 1
    }

    for (let index = 1; index <= int; index++) {
        if(int%index == 0){
            array.push(index);
        }
    }
    return `I divisori di ${int} sono ${array} e ${int}` + (isPrime(int) ? " è un numero primo" : " non è un numero primo")
}

console.log(dividers(17));

// 36. scrivere una funzione che accetta in ingresso una stringa (una password) e ritorni true/false se è valida. Per essere valida, la password deve essere lunga almeno 6 caratteri e deve contenere almeno un numero. Nella password non devono esserci caratteri ripetuti

function checkPassword(password){
    function checkLength(password){
        return password.length >= 6;
    }

    function checkNumber(password){
        return password.split("").filter(el => el >= 0).length > 0;
    }

    function checkUnicity(password){
        return [...new Set(password.split(""))].join("").toLowerCase() == password.toLowerCase();
    }
    
    return checkLength(password) && checkNumber(password) && checkUnicity(password);
}


console.log(checkPassword("smdfghj8"));

// 37. viene assegnato un array di numeri interi in cui sono presenti in posizioni random un numero ed il suo opposto tranne che per 1 elemento. Scrivere una funzione che ritorna tale elemento. Ad esempio [-3,1,2,3,-1,4,-2] => 4

function opposti(array){
    // let matchedArray = [];
    // array.forEach((el) =>{
    //     array.forEach(el2 =>{
    //         if(el + el2 == 0){
    //             matchedArray.push(el,el2)
    //         } 
    //     })
    // })
    // matchedArray = [...new Set (matchedArray)]
    // return array.filter(el => !matchedArray.includes(el))

    return array.filter(el => !array.includes(-el))[0];
    
}

console.log(opposti([-3,1,2,3,-1,4,-2,7,-7]));

// 38. Scrivere una funzione che accetta in ingresso un numero e ritorna un numero formato dai quadrati di ogni cifra presente in ingresso. Ad esempio 372 => 9494. Extra farlo in una sola linea

function exponential(number){
    return parseInt(number.toString().split("").map(el => el**2).join(""))
}

console.log(exponential(372));

// 39. Scrivere una funzione che unisca due array di numeri, ordinandoli in modo decrescente ed eliminando i duplicati. Ad esempio [2,1] [1,2,3] => [3,2,1]

function joinArrayNum(arr1, arr2){
    return arr1.concat(arr2).filter((el,ind,array) => array.indexOf(el) == ind).sort((a,b) => b-a)
}

console.log(joinArrayNum([2,1],[1,2,3]));

// 40. Abbiamo una stringa di parole. Ogni parola contiene un numero. Scrivere una funzione che ritorni la stringa ordinata in base al numero presente in ogni parola. Ad esempio "is2 thi1s t4est 3a" => "Thi1s is2 3a t4est"

function sortString(string){
    return string.split(" ").map(word => {
        let number = Number(word.split("").filter(letter => Number(letter)))
        return [number,word]
    }).sort((pair1,pair2) => pair1[0] - pair2[0]).map(el=> el[1]).join(" ")
}

console.log(sortString("is2 thi1s t4est 3a"));

// 41. Un isogramma è una parola all'interno della quale ogni lettera compare una sola volta, ad esempio "Ciao" ma non "Barca". Scrivere una funzione che determini se una stringa è un isogramma no case sensitive

function isogramma(string){
    return Array.from(new Set (string.toLowerCase().split(""))).join("") === string.toLowerCase()? "È un isogramma" : "Non è un isogramma";
}

console.log(isogramma("Barca"));

// 42. Scrivere una funzione che accetta in ingresso due array e ne ritorni la differenza, ovvero il primo array primo degli elementi presenti nel secondo array

function diffArray(array1, array2){
    return array1.filter(el => !array2.includes(el))
}

console.log(diffArray([1,2,5],[5,4,1]));

// 43. Scrivere una funzione che ritorni i giorni mancanti fino a Natale

function toChristmas(){
    let today = new Date()
    let chrismas = new Date(`December 25 , ${today.getFullYear()}`)

    
    return Math.round((chrismas - today) / (1000*60*60*24))
}

console.log(toChristmas());

// 44. Scrivere una funzione che accetta un array di 10 cifre e restituisca una stringa formattata come un numero di telefono, ad esempio [1,2,3,4,5,6,7,8,9,0] => "(123) 456-7890"

function arrayToPhone(array){
    let array2 = array.splice(0,3)
    let array3 = array.splice(0,3)

    array2.unshift("(")
    array2.push(")")
    array2 = array2.join("")
    
    array3 = array3.join("")
    
    array = array.join("")

    let finalArray = []
    finalArray.push(array2,array3)
    finalArray = finalArray.join(" ")
    let newArray = []
    newArray.push(finalArray,array)
    return newArray.join("-")
}


console.log(arrayToPhone([1,2,3,4,5,6,7,8,9,0]));

// 45. Viene fornito un array di numeri, tutti uguali tranne uno, Scrivere una funzione che ritorni l'estraneo. Ad esempio [3,3,2,3,3,3,3,3,3] => 2

function sus(array){
    let uniqNumbs = [...new Set(array)]
    let numb = array.filter((el,ind) => array.indexOf(el) != ind)
    return Number(uniqNumbs.filter(el => el != numb[0]))
}

console.log(sus([5,5,5,5,7,5,5,5,5]));

// 46. Scrivere una funzione che accetta un anno e ritorna i "venerdì 17" presenti in quell'anno sotto forma di array, Extra srivere un'altra funzione che usi la precedente per trovare l'anno con più venerdì 17 dall'anno assegnato fino ad oggi

function fortuna(year){
    let start = new Date(year,0,1);
    let final = [];
    let len = (year %400 == 0 || (year %4 == 0 && !(year % 100 == 0))) ? 366 : 365

    for (let i = 0; i <= len; i++) {
        let day = new Date(+start + i *100*60*60*24)
        if(day.getDate() == 17 && day.getDay() == 5){
            final.push(day)
        }
    }
    return final;
}

console.log(fortuna(2020));

// 47. Scrivere una funzione che accetta come parametro un numero N e 1.) genera la sequenza di fibonacci di lunghezza N, 2.) calcola il rapporto fra i due termini consecutivi della stessa (i rapporti approssimano la sezione aurea, e li stampa in console), 3.) stampa un array con le differenze fra termini consecutivi dei rapporti

function fibonacci47(num){
    array_fibonacci = [1,1]

    if(num == 0){return []};
    if(num ==1){return [1]};

    for(let i = 2; i < num ; i++){
        array_fibonacci.push(array_fibonacci[i-2] + array_fibonacci[i-1])
    }
    
    console.log("i rapporti fra i vari numeri della sequenza sono " + stampaRapportoFibonacci47(array_fibonacci).join(", "));
    console.log("le differenze fra i vari numeri della sequenza sono " + stampaDifferenzaFibonacci47(array_fibonacci).join(", "));
    return array_fibonacci;
}

function stampaRapportoFibonacci47(array){
    let array_rapporti = [];
    array.forEach((el,ind) => {
        if(array[ind+1]){
            array_rapporti.push((array[ind+1]/el).toFixed(2));
        }
    })

    return array_rapporti;
}

function stampaDifferenzaFibonacci47(array){
    let array_differenze = [];
    array.forEach((el,ind) => {
        if(array[ind+1]){
            array_differenze.push((array[ind+1]-el).toFixed(2));
        }
    })

    return array_differenze;
}

console.log(fibonacci47(10));


// 48. Scrivere una funzione che, assegnata una stringa, restituisca un oggetto "parola": frequenza, ordinato per frequenza decrescente. Prima di processare la stringa, ripulirla da parole inutili (articoli, preposizioni,...) e punteggiatura

function countWords(string){
    let rimuovere = ["di", "a" , "da", "in","con","su","per","tra","fra","e","che","il", "lo", "la","i","gli","le"];
    return Object.fromEntries((string.toLowerCase().replace(/[,.!?_;:]/g,"").split(" ").filter((el) => !rimuovere.includes(el))).map((el,idx,arr) => [el,arr.filter(elem => elem == el).length]).sort((a,b) => b[1] - a[1]))
}   

console.log(countWords("Sopra la panca la capra campa, sotto la panca la capra crepa con la capra."));

// 49. Scrivere una funzione che accetta come parametro un oggetto di studenti e voti {"Tizio": 5, "Caio": 3}. Calcolare la media dei voti, aumentarla del 10% ed arrotondarla per difetto. Ritornare un oggetto con chiave il nome dello studente, e con valore "Promosso con NN" o "Bocciato con NN", dove NN è il voto dello studente presente nell'oggetto in entrata, a seconda che NN sia maggiore o minore della media modificata
function students(obj){
    let nomi = Object.keys(obj);
    let voti = Object.values(obj);
    let media = Math.floor(((voti.reduce((acc,val) => acc+=val)) / voti.length) * 1.1)

    return Object.fromEntries( voti.map((el,ind) => [nomi[ind],el > media?`Promosso con ${el}` : `Bocciato con ${el}`]))
    
}

console.log(students({"Tizio": 5, "Caio": 3,"Marco":7,"Giuseppe":8}));


// 50. Dato un numero "prod", cercare due elementi nella successione di fibonacci tali che il loro prodotto sia pari a prod. Se tali elementi esistono, la funzione deve ritornare [F(n), F(n+1), true], altrimenti deve ritornare [F(n), F(n+1), false], dove F(m) è il più piccolo numero di Fibonacci per cui F(m) * F(m+1) > prod. Ad Esempio: productFib(714) => (21,34,true), productFib(800) => (34,55,false).

function fibonacci50(num){
    array_fibonacci = [1,1]

    if(num == 0){return []};
    if(num ==1){return [1]};

    for(let i = 2; (array_fibonacci[i-2] * array_fibonacci[i-1])  < num ; i++){
        array_fibonacci.push(array_fibonacci[i-2] + array_fibonacci[i-1])
    }
    return array_fibonacci
}
function fibonacciExtreme(num){
    let  array_fibonacci = fibonacci50(num) 
    let final = []
    array_fibonacci.map((el,idx) =>{
        if(el * array_fibonacci[idx+1] === num){
            final.push(el,array_fibonacci[idx+1],true)
        }else if (el * array_fibonacci[idx+1] > num){
            final.push(el,array_fibonacci[idx+1],false)

        }
    })
    return final
}

console.log(fibonacciExtreme(800));