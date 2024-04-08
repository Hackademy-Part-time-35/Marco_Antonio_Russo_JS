// Bene
// N.B.: non hai inserito il testo nella finestra del prompt() il che non comunicherebbe all'utente che cosa deve inserire
let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
let somma = num1 + num2;
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;
let potenza = num1 ** num2;

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono:`, `\n` , `Somma: ${somma}`, `\n` , `Sottrazione: ${sottrazione}`, `\n` , `Moltiplicazione: ${moltiplicazione}`, `\n` , `Divisione: ${divisione}`, `\n` , `Potenza: ${potenza}`);