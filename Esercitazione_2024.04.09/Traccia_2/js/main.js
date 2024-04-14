// Bene Marco


let gatti = 44;
let fila = 6;
let num_file = gatti / fila;
let resto_gatti = gatti % fila;
let num_gatti_per_nuova_fila = fila - resto_gatti;


console.log(`Ci sono ${parseInt(num_file)} file di gatti e ne mancano ${num_gatti_per_nuova_fila} per una nuova fila, con un avanzo di ${resto_gatti}`);
