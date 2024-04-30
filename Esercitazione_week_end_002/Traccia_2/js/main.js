// MOLTO MOLTO bene, Marco
// Consiglio: avresti potuto ottenere il nome del mese in italiano in questo modo:
/*
let data = new Date();
let mese = new Intl.DateTimeFormat('it-IT', { month: 'long' }).format(data);
*/
let input_titolo = document.querySelector("#titolo-input");
let input_paragrafo = document.querySelector("#paragrafo-input");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
// let time = document.querySelector("time");
let send = document.querySelector("button");
let main = document.querySelector("main");


send.addEventListener("click", function(){
    
    if (input_titolo.value == "" || input_paragrafo.value == ""){
        alert("Riempire entrambi i campi prima di inviare l'articolo")
    }else{
        // h1.innerHTML = input_titolo.value;
        // p.innerHTML = input_paragrafo.value;
        // time.innerHTML = calcolaData(date);

        addElement(input_titolo.value,input_paragrafo.value)
        
        
        input_titolo.value = "";
        input_paragrafo.value = "" ;
    }    
});


function addElement(input_h2, input_p){
    let new_h2 = document.createElement("h2");
    let new_p = document.createElement("p");
    let time = document.createElement("time");
    let date = new Date();
    
    new_h2.innerHTML = input_h2;
    new_p.innerHTML = input_p;
    time.innerHTML = calcolaData(date);


    
        // main.appendChild(new_h2)
        // main.appendChild(new_p)
        // main.appendChild(time)
    

    console.log(new_h2);

    main.insertAdjacentElement("afterbegin", time);
    main.insertAdjacentElement("afterbegin", new_p);
    main.insertAdjacentElement("afterbegin", new_h2);


};


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

