// variabili pagina annunci
let btn_filter = document.querySelector("#filter_btn");
let filter_menu = document.querySelector(".filter_menu");
let controllo_filtri = "closed";
let ads_container = document.querySelector("#ads-container");
let main = document.querySelector("main");
let accordion_btn = document.querySelectorAll(".accordion-button");
let chevron_accordion = document.querySelectorAll(".accordion-button .fa-chevron-down");
let regions = [];
let region_accordion = document.querySelector("#region");
let radio_regions;
let checked_radio;
let radioIsClicked = false;

btn_filter.addEventListener("click", () =>{

        if(controllo_filtri === "closed"){
            filter_menu.classList.toggle("open_filter");
            btn_filter.classList.toggle("open_btn");
            btn_filter.innerHTML = `<i class="fa-solid fa-sliders"></i> Apply`;
            controllo_filtri = "opened";
            main.style.width = "80%";
        }else{
            filter_menu.classList.toggle("open_filter");
            btn_filter.classList.toggle("open_btn");
            btn_filter.innerHTML = `<i class="fa-solid fa-sliders"></i> Filter`;
            controllo_filtri = "closed";
            main.style.width = "100%";

        }

});

fetch("../../data/elenco_immobili.json")
    .then(response => response.json())
    .then(data =>{

        // funzione creazione card con annunci
        function createCard(region, price, word){
            ads_container.innerHTML = "";

            data.forEach(ads => {
                let card = document.createElement("article");
                card.classList.add("col-9", "col-md-5", "col-xl-3","card-ads");
                
                
                if(radioIsClicked && (ads.regione === region || ads.prezzo < price)){ // mostra solo le card filtrate
                    ads_container.appendChild(card);

                    card.innerHTML = `
                    <img class="card-ads-img" src="https://media.licdn.com/dms/image/D4D12AQGPy6n4XA3eiQ/article-cover_image-shrink_720_1280/0/1687039862345?e=2147483647&v=beta&t=reyO4Xm8PwuFc3KlLdSGCxgassaMBixCPJhtcWASBaM" alt="">
                    <section class="card-ads-text">
                    <h3>${ads.regione}</h3>
                    <h4>${ads.prezzo} €</h4>
                    <ul>
                    <li>${ads.metri_quadrati} mq</li>
                    <li>${ads.numero_camere} rooms</li>
                    </ul>
                    </section>
                    `
                } else if (!radioIsClicked){    // mostra tutte le carte
                    ads_container.appendChild(card);
                    
                    card.innerHTML = `
                    <img class="card-ads-img" src="https://media.licdn.com/dms/image/D4D12AQGPy6n4XA3eiQ/article-cover_image-shrink_720_1280/0/1687039862345?e=2147483647&v=beta&t=reyO4Xm8PwuFc3KlLdSGCxgassaMBixCPJhtcWASBaM" alt="">
                    <section class="card-ads-text">
                        <h3>${ads.regione}</h3>
                        <h4>${ads.prezzo} €</h4>
                        <ul>
                            <li>${ads.metri_quadrati} mq</li>
                            <li>${ads.numero_camere} rooms</li>
                        </ul>
                    </section>
                    `

                } else if(region === "azzera"){ // annulla i filtri e richiama la creazione delle carte
                    radioIsClicked = false;
                    createCard();
                }

        });


        }
        
        // funzione per creazione radio buttons
        function radioRegion(){

            regions.forEach((region, index) =>{
                region_accordion.innerHTML += `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio_region" id="${region}">
                        <label class="form-check-label" for="${region}">
                            ${region}
                        </label>
                    </div>
                    `;
            })
            radio_regions = document.querySelectorAll("input[name=\"radio_region\"]");

            

        };



        // funzione per creazione array con le regioni negli annunci
        function getRegions(){
            data.forEach(ads =>{
                if(!regions.includes(ads.regione)){
                    regions.push(ads.regione);
                };
            });
        };



        createCard();
        getRegions();
        radioRegion();


        // ascolto per il click su un radio button
        radio_regions.forEach(radio =>{
            radio.addEventListener("click", function(){
                radioIsClicked = true;
                createCard(radio.getAttribute("id"))
            });
        });
    })


// ascolto per apertura accordion e rotazione della freccia
accordion_btn.forEach((el,ind) =>{
    el.addEventListener("click", function(){
        chevron_accordion[ind].classList.toggle("rotate-180");
    });
});

