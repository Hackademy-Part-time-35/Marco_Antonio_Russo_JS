let input = parseInt(prompt("Fino a che numero devo calcolare?"));

function fizz_buzz(n){
    for(let i = 1; i <= n ; i++){
        if(i % 15 == 0){
            console.log("fizzBuzz");
        }else if (i % 3 == 0){
            console.log("Fizz");
        }else if (i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
        
    }
}

fizz_buzz(input);