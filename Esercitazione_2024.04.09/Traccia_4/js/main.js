let temperature = parseInt(prompt("Inserisci la temperatura"));


if (temperature < -10){
    console.log("copriti...ancora ti raffreddi");
}else if(temperature < 0){
    console.log("non è tanto il freddo quanto l'umidità");
}else if(temperature < 20) {
    console.log("non ci sono più le mezze stagioni");    
}else if(temperature < 30){
    console.log("mi dia una peroni sudata");
}else if(temperature >= 30){
    console.log("lu mare, lu sole, lu ientu");
}