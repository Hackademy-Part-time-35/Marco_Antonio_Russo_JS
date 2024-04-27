let input_titolo = document.querySelector("#titolo-input");
let input_paragrafo = document.querySelector("#paragrafo-input");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let time = document.querySelector("time");
let send = document.querySelector("button");



send.addEventListener("click", function(){
    let date = new Date();

    if (input_titolo.value == "" || input_paragrafo.value == ""){
        alert("Riempire entrambi i campi prima di inviare l'articolo")
    }else{
        h1.innerHTML = input_titolo.value;
        p.innerHTML = input_paragrafo.value;
        time.innerHTML = calcolaData(date);
        
        input_titolo.value = "";
        input_paragrafo.value = "" ;
    }    
});





function calcolaData(date){
    let day,month,year;

    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    switch(month + 1){
        case 1: month = "Gennaio"; break;
        case 2: month = "Febbraio"; break;
        case 3: month = "Marzo"; break;
        case 4: month = "Aprile"; break;
        case 5: month = "Maggio"; break;
        case 6: month = "Giugno"; break;
        case 7: month = "Luglio"; break;
        case 8: month = "Agosto"; break;
        case 9: month = "Settemre"; break;
        case 10: month = "Ottobre"; break;
        case 11: month = "Novembre"; break;
        case 12: month = "Dicembre"; break;
    }

    return date = `${day}  ${month}  ${year}`;
};

