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

// url default img
let defaultIMG = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

// controllo se l'agenda è già aperta
let controllo_agenda = 0;

 // controllo se modifica contatto è aperto
 let controlla_modifica = 0;

// creazione agenda
let agenda = {
    contatti: [
        {imgUrl: defaultIMG , name: "Marco Antonio", tel: "3207162521"},
        {imgUrl: defaultIMG , name: "Michele", tel: "3251469852"},
        {imgUrl: defaultIMG , name: "Miriam", tel: "3251469813"}
    ],

    // metodo che gestisce l'apertura dell'elenco contatti e la creazione di nuovi tag
    visualizzaContatti: function (){
        this.contatti.forEach((elem,index)=>{

            // cattura elementi generati
            let span_contatto = document.createElement("span");
            let delete_button = document.createElement("button");
            let modify_button = document.createElement("button");
            let button_div = document.createElement("div");
            let contact_img = document.createElement("img");
            let row_div = document.createElement("div");
            let contact_div = document.createElement("div");

            // generazione righe con i contatti
            span_contatto.textContent = `${elem.name} - Telefono:  ${elem.tel}`;
            delete_button.textContent = `Elimina contatto`;
            modify_button.textContent = `Modifica contatto`;

            // stilizzazione colore sfondo alternato per maggiore leggibilità
            row_div.classList.add("d-flex","justify-content-between","p-3", "align-items-center","rounded","custom-bg-primary", "shadow", "mb-2","flex-wrap","gap-y-2")
                if(index % 2 == 0){
                    row_div.classList.add("custom-bg-secondary")
                }
            row_div.classList.add("d-flex", "justify-content-beetwen", "align-items-center")

            // stilizzazione pulsanti laterali per ogni contatto
            modify_button.classList.add("btn","btn-warning","modify-button");
            delete_button.classList.add("btn","btn-danger","delete-button","ms-2");
            button_div.classList.add("d-flex","gap-2", "align-items-end", "col-3");
            contact_div.classList.add("col-9")

            row_div.setAttribute("id", "row_div");

            // inserimento tag generati
            elenco_contatti.appendChild(row_div);
            row_div.appendChild(contact_div);
            row_div.appendChild(button_div);
            contact_div.appendChild(contact_img);
            contact_div.appendChild(span_contatto);
            button_div.appendChild(modify_button);
            button_div.appendChild(delete_button);


            
            // stilizzazione img profilo utente default
            contact_img.src = this.contatti[index].imgUrl;
            contact_img.classList.add("me-2");
            

            // cattura pulsanti generati
            modifica_contatto_toggle = document.querySelectorAll(".modify-button")
            elimina_contatto = document.querySelectorAll(".delete-button");
            
            // attesa click per chiamare metodo eliminaContatto
            elimina_contatto[index].addEventListener("click" , function(){
                agenda.eliminaContatto(index,modify_button);
            });

            // attesa click per chiamare metodo modificaContatto
            modifica_contatto_toggle[index].addEventListener("click", function(){
        
                // controllo per impedire apertura di più modifica contatto contemporaneamente
                if(controlla_modifica === 0){
                    row_div.classList.add("border","border-5", "border-warning")
                    agenda.modificaContatto(index, button_div, modify_button, row_div);
                    controlla_modifica = 1;

                }  
            });


        });
    },

        // metodo per inserire un oggetto nell'array contatti
    aggiungiContatto: function(){
            let new_contatto = {

                imgUrl: defaultIMG,
                name: nome_contatto.value,
                tel: numero_contatto.value

            }
            
            this.contatti.push(new_contatto);
    },
    
        // metodo per eliminare il contatto in corrispondenza del pulsante clickato
    eliminaContatto: function(index,modify_button){
        if(modify_button.textContent=="Modifica contatto"){
        this.contatti.splice(index,1);
        elenco_contatti.innerHTML = ""
        agenda.visualizzaContatti();
        visualizza_agenda.innerHTML = "Nascondi agenda"
        controllo_agenda =1;
        }
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
    modificaContatto: function(index_contatto,button_div, modify_button, row_div){
        // cattura elementi generati
        let input_area_form = document.createElement("form");
        let input_area_name = document.createElement("div");
        let input_area_tel = document.createElement("div");
        let new_name = document.createElement("input");
        let label_name = document.createElement("label");
        let new_tel = document.createElement("input");
        let label_tel = document.createElement("label");
        let cancel = document.createElement("i");
        let input_area_img = document.createElement("div");
        let input_img = document.createElement("input");
        let label_input_img = document.createElement("label");
        let toggle_modify_area = document.createElement("div");
        let controllo_cancel = 0;
        
        // definizione tipo input
        new_name.type = "text";
        new_tel.type = "number";
        input_img.type = "file";

        // inserimento testo nei label e cambio nome pulsante
        label_name.textContent = "Nome";
        label_tel.textContent = "Telefono";
        modify_button.textContent = "Salva modifiche"
        label_input_img.textContent = "Immagine \n contatto"
        
             

        // posizionamento tag
        row_div.appendChild(toggle_modify_area);
        toggle_modify_area.appendChild(input_area_form);
        toggle_modify_area.appendChild(input_area_img);
        toggle_modify_area.appendChild(cancel);
        input_area_form.appendChild(input_area_name);
        input_area_form.appendChild(input_area_tel);
        input_area_name.appendChild(new_name);
        input_area_name.appendChild(label_name);
        input_area_tel.appendChild(new_tel);
        input_area_tel.appendChild(label_tel);
        input_area_img.appendChild(label_input_img);
        input_area_img.appendChild(input_img);
        
        
        // definizione dei placeholder
        new_name.setAttribute("placeholder","Nuovo nome");
        new_tel.setAttribute("placeholder","Nuovo telefono");
        label_input_img.setAttribute("for","input_img");
        input_img.setAttribute("id","input_img");
        
        // collegamento fra label e input
        new_name.setAttribute("id","floatingName");
        label_name.setAttribute("for","floatingName")

        new_tel.setAttribute("id","floatingTel");
        label_tel.setAttribute("for","floatingTel")

        // cattura e inserimento del valore del contatto selezionato per inserirlo a priori nell'input di modifica
        new_name.value = this.contatti[index_contatto].name;
        new_tel.value = this.contatti[index_contatto].tel;

        // stilizzazione tasto annulla modifiche
        cancel.style.cursor = "pointer";
        cancel.classList.add("fa-solid","fa-close","close-modify","align-self-start");
        
        // stilizzazione area input modifica contatto
        input_area_name.classList.add("form-floating")
        input_area_tel.classList.add("form-floating")
        input_area_form.classList.add("d-flex","gap-3");
        input_area_img.classList.add("input-group","w-25","d-flex")
        new_name.classList.add("form-control","modifica_contatto_input");
        new_tel.classList.add("form-control","modifica_numero_contatto_input");
        input_img.classList.add("form-control","outline-white","w-100")
        toggle_modify_area.classList.add("w-100", "d-flex","gap-2","mt-3","justify-content-between", "border-top","border-3", "border-warning", "pt-3")
        label_name.classList.add("form-label");

        // cattura input modifica contatto e tasto annulla modifiche
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
      
        // imposta img profilo 
        modify_button.addEventListener("click", function(){
            agenda.imgContatto(index_contatto, input_img);
        });

        // controllo chiamata funzione di sovrascrittura se non viene premuto il tasto annulla modifiche
        if(controllo_cancel === 0){
            modifica_contatto_toggle[index_contatto].addEventListener("click", function(){
                agenda.sovrascriviContatto(index_contatto, new_name, new_tel);
            })
        };
    },

        // metodo per la sovrascrittura del contatto ricevuto dal metodo modifica contatto con conseguente chiusura dei nuovi input
    sovrascriviContatto: function(index_contatto, new_name, new_tel){

        // controllo per evitare di inserire contatti vuoti
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


    // metodo per caricare immagine profilo
    imgContatto: function(index_contatto, input_img){

            const file_reader = new FileReader();
            let uploaded_img = input_img.files[0];
            file_reader.readAsDataURL(input_img.files[0]);
            agenda.contatti[index_contatto].imgUrl = window.URL.createObjectURL(uploaded_img);
        
    }
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

