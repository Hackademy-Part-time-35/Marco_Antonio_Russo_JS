let row = document.querySelector(".row");
let send_btn = document.querySelector("#send");
let input_name = document.querySelector("#name");
let input_number = document.querySelector("#number");
let input_email = document.querySelector("#email");
let radio = document.querySelectorAll(`input[type="radio"]`);
let inputs = document.querySelectorAll("input:not([type=radio])");
let labels = document.querySelectorAll("label");
let cancel = document.querySelector("#cancel")
let close_offcanvas = document.querySelector("i")


let agenda = {
    // inizializzazione contatti
    contacts : [
    {
    name: 'Marco Antonio',
    tel: '3207162521',
    mail: 'marcoantoniorusso94@gmail.com',
    gender: "male",
    },
    {
    name: 'Michele',
    tel: '+39 099 234 67 45',
    mail: 'michele@antonio.com',
    gender: "undefined",

    },
    {
    name: 'Miriam',
    tel: '+39 789 45 23',
    mail: 'miriam@miriam.com',
    gender: "female",

    },
    ],

    // metodo per creare dinamicamente le card
    writeCard: function(){
        // iterazione fra i contatti
        row.innerHTML = "";
        this.contacts.forEach((contact) => {

            // creazione tag HTML
            let new_article = document.createElement("article");
            let new_card_div = document.createElement("div");
            let new_img = document.createElement("img");
            let new_div_card_body = document.createElement("div");
            let new_ul = document.createElement("ul");
            let new_li_1 = document.createElement("li");
            let new_li_2 = document.createElement("li");
            let new_li_3 = document.createElement("li");

            // stilizzazione tag HTML
            new_article.classList.add("col-12", "col-sm-6", "col-lg-4", "justify-content-center", "d-flex");
            new_card_div.classList.add("card", "rounded", "rounded-5", "px-0", "d-flex");
            new_img.classList.add("card-img-top","rounded", "rounded-top-5", "rounded-bottom-0");
            new_div_card_body.classList.add("card-body");
            new_ul.classList.add("list-group", "list-group-flush");
            new_li_1.classList.add("list-group-item", "fs-1");
            new_li_2.classList.add("list-group-item");
            new_li_3.classList.add("list-group-item");

    

            // implementazione tag nell'HTML
            row.appendChild(new_article);
            new_article.appendChild(new_card_div);
            new_card_div.appendChild(new_img);
            new_card_div.appendChild(new_div_card_body);
            new_div_card_body.appendChild(new_ul);
            new_ul.appendChild(new_li_1);
            new_ul.appendChild(new_li_2);
            new_ul.appendChild(new_li_3);

            // controllo gender
            if(contact.gender === "male"){
                new_img.src = "./img/man.svg";
            }else if (contact.gender === "female"){
                new_img.src = "./img/woman.svg";
            }else{
                new_img.src = "./img/undefined.svg";
            }

            // valorizzazione dei tag con le proprietà dei contatti
            new_li_1.textContent = contact.name;
            new_li_2.textContent = `Telefono: ${contact.tel}`;
            new_li_3.textContent = `Email: ${contact.mail}`;
        });

    },

    newContact: function(){
            let gender_check;
            radio.forEach((elem) =>{
                if(elem.checked){
                    console.log(elem.value);
                    gender_check = elem.value;
                }   
            });

            this.contacts.push(
            {
                name: input_name.value,
                tel: input_number.value,
                email: input_email.value,
                gender: gender_check,
            }
        );
    },

    clearInputs: function(){
        inputs.forEach((elem) => {
            elem.value = ""
        });

        radio[2].checked = true;
    },

    checkInputs: function(){
        if(!((input_name.value && input_number.value && input_email.value) === "")){
            return true;
        }
    },

    emptyError: function(){
        inputs.forEach((elem) => {
            if(elem.value === ""){
                elem.classList.add("animationError")
            }
            send_btn.textContent = "Riempire tutti i campi!"

            setTimeout(() =>{
            elem.classList.remove("animationError")
            send_btn.textContent = "Send"
            },1500);
        });

        

    },
    
};

agenda.writeCard();




send_btn.addEventListener("click", function(){

    if(agenda.checkInputs()){
        agenda.newContact();
        agenda.clearInputs();
        agenda.writeCard();
        close_offcanvas.click();
    }else{
        agenda.emptyError();
    }

});

cancel.addEventListener("click" , function(){
    agenda.clearInputs();
});

