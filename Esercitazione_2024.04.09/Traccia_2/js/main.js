let gatti = 44;
let fila = 6;
let num_file = gatti / fila;
let resto_gatti = gatti % fila;
let num_gatti_per_nuova_fila = num_file.toFixed(0) - resto_gatti;


console.log(`Ci sono ${num_file.toFixed(0)} file di gatti e ne mancano ${num_gatti_per_nuova_fila} per una nuova fila, con un avanzo di ${resto_gatti}`);
