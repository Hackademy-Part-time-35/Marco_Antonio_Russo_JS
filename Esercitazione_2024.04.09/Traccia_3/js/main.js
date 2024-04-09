let vote = 25;
if(0 <= vote && vote <= 30 ){

    if(vote < 18){
        console.log("insufficiente");
    }else if(vote >= 18 && vote < 21){
        console.log("sufficiente");
    }else if(vote >= 21 && vote < 24){
        console.log("buono");
    }else if(vote >= 24 && vote < 27){
        console.log("distinto");
    }else if(vote >= 27 && vote <= 29){
        console.log("ottimo");
    }else if(vote=30){
        console.log("eccellente");
    }
    


} else {
    console.log("Il voto inserito non è valido");
}
