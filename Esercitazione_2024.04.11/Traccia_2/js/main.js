// benissimo
let odd = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else{
        odd++;
    }
}

console.log("nell'intervallo fra 1 e 20 ci sono " + odd + " numeri dispari");