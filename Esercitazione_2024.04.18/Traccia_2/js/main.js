let array = [2,15,337,154,84341,84,247,18,334,10,510,523,35840,21,517,540,540,6540,21,0];

let average = array.reduce((a,b) => {
    return a+b;
})/array.length;

console.log(average);