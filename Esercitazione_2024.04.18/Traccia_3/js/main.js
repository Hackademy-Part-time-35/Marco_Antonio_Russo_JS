// benissimo
let array = [600,450,760,200,1500,675,800];
let iva_array=[];

array.forEach((a) =>{
    let acc = a*22/122;
    iva_array.push(acc.toFixed(2));
});

console.log(iva_array);

