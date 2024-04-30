// cattura elementi da manipolare
let elenco_contatti = document.querySelector("#elenco_contatti");
let div_modifica = document.querySelector("#div_modifica");
let toggle_icon = document.querySelector("#toggle_icon")

// cattura caselle di testo
let numero_contatto = document.querySelector("#numero_contatto");
let nome_contatto = document.querySelector("#nome_contatto");

let modifica_nome_contatto;
let modifica_numero_contatto;

// cattura pulsanti
let aggiungi_contatto = document.querySelector("#aggiungi_contatto");
let cancel_cross;
let elimina_contatto;
let visualizza_agenda = document.querySelector("#visualizza_agenda");
let modifica_contatto_toggle = document.querySelector("#modifica_contatto_toggle");
let button_modifica_contatto;


// controllo se l'agenda è già aperta
let controllo_agenda = 0;

 // controllo se modifica contatto è aperto
 let controlla_modifica = 0;

// creazione agenda
let agenda = {
    contatti: [
        {name: "Marco Antonio", tel: "3207162521"},
        {name: "Michele", tel: "3251469852"},
        {name: "Lucia", tel: "3251469813"}
    ],

    // metodo che gestisce l'apertura dell'elenco contatti e la creazione di nuovi tag
    visualizzaContatti: function (){
        this.contatti.forEach((elem,index)=>{

            let par_contatto = document.createElement("p");
            let delete_button = document.createElement("button");
            let modify_button = document.createElement("button");
            let button_div = document.createElement("div")

            par_contatto.textContent = `${elem.name} - Telefono:  ${elem.tel}`;
            delete_button.textContent = `Elimina contatto`;
            modify_button.textContent = `Modifica contatto`;

            par_contatto.classList.add("d-flex","justify-content-between","p-3","align-items-center","rounded","ps-5","custom-bg-primary")
                if(index % 2 == 0){
                    par_contatto.classList.add("custom-bg-secondary")
                }

            modify_button.classList.add("btn","btn-warning","modify-button")
            delete_button.classList.add("btn","btn-danger","delete-button","ms-2")
            button_div.classList.add("d-flex","gap-2");

            elenco_contatti.appendChild(par_contatto);
            par_contatto.appendChild(button_div);
            button_div.appendChild(modify_button);
            button_div.appendChild(delete_button);

            modifica_contatto_toggle = document.querySelectorAll(".modify-button")
            elimina_contatto = document.querySelectorAll(".delete-button");
                
            elimina_contatto[index].addEventListener("click" , function(){
                agenda.eliminaContatto(index);
            });

            modifica_contatto_toggle[index].addEventListener("click", function(){
        
                
                if(controlla_modifica === 0){
                    agenda.modificaContatto(index, button_div, modify_button);
                    controlla_modifica = 1;
                }else{
                    
                }    
            });

        });
    },

        // metodo per inserire un oggetto nell'array contatti
    aggiungiContatto: function(){
            let new_contatto = {name: nome_contatto.value, tel: numero_contatto.value}
            this.contatti.push(new_contatto);
    },
    
        // metodo per eliminare il contatto in corrispondenza del pulsante clickato
    eliminaContatto: function(index){
        this.contatti.splice(index,1);
        elenco_contatti.innerHTML = ""
        agenda.visualizzaContatti();
        visualizza_agenda.innerHTML = "Nascondi agenda"
        controllo_agenda =1;
    },

        // metodo che cicla fra gli elementi di "contatti" per restituire l'indice in caso di corrispondenza del nome [metodo deprecato causa: inserimento pulsanti laterali per ogni contatto]
    cercaContatto: function(nome_contatto_cerca){
    
        let index_contatto;
        this.contatti.forEach((value,index) => {
            if(this.contatti[index].name === nome_contatto_cerca){
                index_contatto = index;
            }
        });

        if(index_contatto === undefined){
            console.log("Contatto non presente in agenda");
        }else{
            return index_contatto;
        };
        
    },

        // metodo per la creazione di due nuovi input per la modifica del contatto nella riga selezionata
    modificaContatto: function(index_contatto,button_div, modify_button){
        let input_area = document.createElement("form");
        let new_name = document.createElement("input");
        let new_tel = document.createElement("input");
        let cancel = document.createElement("i");
        let controllo_cancel = 0;
        

        new_name.type = "text";
        new_tel.type = "number";

        button_div.insertBefore(input_area, modify_button);

        modify_button.textContent = "Salva modifiche"

        input_area.appendChild(cancel);
        input_area.appendChild(new_name);
        input_area.appendChild(new_tel);

        new_name.setAttribute("placeholder","Nuovo nome");
        new_tel.setAttribute("placeholder","Nuovo telefono");
        

        cancel.style.cursor = "pointer";
        cancel.classList.add("fa-solid","fa-close","close-modify");
        
        input_area.classList.add("d-flex","gap-1");
        new_name.classList.add("form-control","modifica_contatto_input");
        new_tel.classList.add("form-control","modifica_numero_contatto_input");

        modifica_nome_contatto = document.querySelectorAll(".modifica_contatto_input");
        modifica_numero_contatto = document.querySelectorAll(".modifica_numero_contatto_input");
        cancel_cross = document.querySelector(".close-modify")

        // attesa click per annullare apertura input
        cancel_cross.addEventListener("click", function(){
            elenco_contatti.innerHTML = "";
            agenda.visualizzaContatti();
            new_name.value = "";
            new_tel.value = "";
            visualizza_agenda.innerHTML = "Nascondi agenda"
            controllo_agenda = 1;
            controllo_cancel = 1;
            controlla_modifica = 0;

        });
        
        if(controllo_cancel === 0){
            modifica_contatto_toggle[index_contatto].addEventListener("click", function(){
                agenda.sovrascriviContatto(index_contatto, new_name, new_tel);
            })
        };
    },

        // metodo per la sovrascrittura del contatto ricevuto dal metodo modifica contatto con conseguente chiusura dei nuovi input
    sovrascriviContatto: function(index_contatto, new_name, new_tel){

        if(new_name.value != ""){
            this.contatti[index_contatto].name = new_name.value;
        }

        if(new_tel.value != ""){
            this.contatti[index_contatto].tel = new_tel.value;
        }


        
        controlla_modifica = 0;
        elenco_contatti.innerHTML = "";
        agenda.visualizzaContatti();
        new_name.value = "";
        new_tel.value = "";
        visualizza_agenda.innerHTML = "Nascondi agenda"
        controllo_agenda = 1;

    },


};









    // attesa apertura contatti premendo pulsante
visualizza_agenda.addEventListener("click", function(){
    if(controllo_agenda === 0){
        elenco_contatti.innerHTML = "";
        agenda.visualizzaContatti();
        visualizza_agenda.innerHTML = "Nascondi agenda"
        controllo_agenda = 1;
    }else{
        elenco_contatti.innerHTML = "";
        visualizza_agenda.innerHTML = "Visualizza agenda"
        controllo_agenda = 0;

    }
});

    // attesa inserimento nominativo e telefono per chiamare il metodo aggiungiContatto
aggiungi_contatto.addEventListener("click", function(){
    agenda.aggiungiContatto();
    nome_contatto.value = "";
    numero_contatto.value = "";
    elenco_contatti.innerHTML = "";
    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = "Nascondi agenda"
    controllo_agenda =1;
    
});

