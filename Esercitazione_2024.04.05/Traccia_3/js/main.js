<<<<<<< HEAD
let num1 = parseInt(prompt("Iserisci il primo numero"));
let num2 = parseInt(prompt("Inserisci il secondo numero"));
=======
// Bene
// N.B.: non hai inserito il testo nella finestra del prompt() il che non comunicherebbe all'utente che cosa deve inserire
let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
>>>>>>> 44e4f196bed2d5f416cebb84f441c69c2b273033
let somma = num1 + num2;
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;
let potenza = num1 ** num2;

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono:`, `\n` , `Somma: ${somma}`, `\n` , `Sottrazione: ${sottrazione}`, `\n` , `Moltiplicazione: ${moltiplicazione}`, `\n` , `Divisione: ${divisione}`, `\n` , `Potenza: ${potenza}`);