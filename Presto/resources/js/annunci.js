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
let max_price = document.querySelector("#maxprice");
let max_price_indicator = document.querySelector("#max_price_indicator");
let filter_reset = document.querySelector("#filter-reset");

// funzione per modificare la larghezza della visualizzazione degli annunci quando filtri è aperto
btn_filter.addEventListener("click", () =>{

        if(controllo_filtri === "closed"){
            filter_menu.classList.toggle("open_filter");
            btn_filter.classList.toggle("open_btn");
            btn_filter.innerHTML = `<i class="fa-solid fa-sliders"></i> Close`;
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



// ascolto per apertura accordion e rotazione della freccia
accordion_btn.forEach((el,ind) =>{
    el.addEventListener("click", function(){
        chevron_accordion[ind].classList.toggle("rotate-180");
    });
});





// acquisizione file JSON
fetch("../../data/elenco_immobili.json")
    .then(response => response.json())
    .then(data =>{


        // Modifico il prezzo degli annunci eliminando i decimali e formattando i numeri con un punto di divisione per maggiore leggibilità
        data.forEach(el =>{
            el.prezzo = Math.floor(el.prezzo).toLocaleString();
        });

        // ordino l'array di oggetti alfabeticamente per regione
        data.sort((a,b) => (a.regione.localeCompare(b.regione)));



        // funzione creazione card con annunci
        function createCard(array_region){
            ads_container.innerHTML = "";

            array_region.forEach(ads => {
                let card = document.createElement("article");
                card.classList.add("col-9", "col-md-5", "col-xl-3","card-ads");
                
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
                    ads_container.appendChild(card);
                    
        });
        }



        // funzione per creare i radio button
        function radioRegion(){

            /* Codice rifattorizzato
            // data.forEach(ads =>{
            //     if(!regions.includes(ads.regione)){
            //         regions.push(ads.regione);
            //     };
            // });
            */
            regions = [...new Set(data.map(el => el.regione))] // rifattorizzazione del codie commentato sopra

            regions.forEach(region =>{
                region_accordion.innerHTML += `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio_region" id="${region}">
                        <label class="form-check-label" for="${region}">
                            ${region}
                        </label>
                    </div>
                    `;
            })
            radio_regions = document.querySelectorAll("input[name=\"radio_region\"]"); // array con tutti i radio appena creati
        };


/* FUNZIONI DEPRECATE FILTRI SINGOLI
        // funzione per creazione array con la regione selezionata
        // function getFilteredRegions(region_id){
        //     let filtered_array_region = [];
            
        //     if(region_id === "all"){
        //         // getAllFilter(data);
        //         return [{regione: "all"}];
        //     } else {
        //         filtered_array_region = data.filter(el => el.regione === region_id);
        //         // getAllFilter(filtered_array_region,Infinity);
        //         return filtered_array_region;
        //     };
        // };

        // // funzione per creazione array con il prezzo massimo selezionato
        // function getFilteredPrice(price){
        //     let filtered_array_price = [];
        //         filtered_array_price = data.filter(el => el.prezzo <= price);
        //         // getAllFilter("", filtered_array_price);
        //         return filtered_array_price;
        // };
        
*/

        // Funzione che richiama la generazione delle card a schermo passando un array di annunci che corrispondono a tutti i filtri impostati
        function getAllFilter(region,price){
            console.log(region);
            console.log(price);
            let array_ads;

            if(region === "all"){
                array_ads = data.filter(el => el.prezzo <= price);
            }else{
                array_ads = data.filter(el => el.regione === region && el.prezzo <= price);
            };
            createCard(array_ads);
        }


        // funzione che ritorna il prezzo minore fra gli annunci
        function minPriceRange(){
            return Math.min(...data.map(el => el.prezzo)) // uso lo spread operator per controllare il minore fra tutti gli elementi dell'array creato con .map() contenente solo i prezzi degli annunci
        }
        
        // funzione che ritorna il prezzo maggiore fra gli annunci
        function maxPriceRange(){
            return Math.max(...data.map(el => el.prezzo)) // uso lo spread operator per controllare il maggiore fra tutti gli elementi dell'array creato con .map() contenente solo i prezzi degli annunci

        }





// ======================================= FINE FUNZIONI =============================================







        // invocazione funzioni iniziali
        createCard(data);
        radioRegion();

        // ascolto per il click su un radio button
        radio_regions.forEach(radio =>{
            radio.addEventListener("click", function(){
                getAllFilter(radio.getAttribute("id"), max_price.value); //richiamo la funzione passando il radio clickato e il valore massimo del prezzo
            });
        });

        // imposta gli attributi del selettore di prezzo con il minimo e il massimo dei prezzi degli annunci presenti e muove il selettore al massimo prezzo come default
        max_price.setAttribute("min", minPriceRange());
        max_price.setAttribute("max", maxPriceRange());
        max_price.value = maxPriceRange();

        // mostra a schermo il valore del selettore di prezzo
        max_price_indicator.textContent = max_price.value + " €";

        // Attesa click per filtro prezzo massimo
        max_price.addEventListener("input", function(){
            let radio_clicked = document.querySelector("input[type=\"radio\"]:checked").id;
            max_price_indicator.textContent = max_price.value + " €";
            getAllFilter(radio_clicked, max_price.value);   // richiamo la funzione passando il radio button spuntato e il valore massimo del prezzo
        });

        // ascolto per reset dei filtri
        filter_reset.addEventListener("click", function(){
            let radio_all_regions = document.querySelector("#all");
            max_price.value = max_price.max;
            max_price_indicator.textContent = max_price.value + " €";
            radio_clicked = "all";
            radio_all_regions.checked = true;
            console.log(radio_all_regions.checked);
            getAllFilter(radio_clicked, max_price.value);
        });

    })  // END Fetch
