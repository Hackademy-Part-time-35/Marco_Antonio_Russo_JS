// bene
function toFahrenheit(degrees){
    let F_degrees = (degrees*9/5) + 32
    return F_degrees;
}

let celsius = parseInt(prompt("Inserire i gradi in Celsius"));
console.log(`${toFahrenheit(celsius)} °F`);
