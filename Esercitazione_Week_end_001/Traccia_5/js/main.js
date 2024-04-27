// bene
let fibonacci = [0,1];

for (let index = 1; index <= 20; index++) {
    fibonacci.push(fibonacci[index]+fibonacci[index-1])
    
}

console.log(fibonacci);