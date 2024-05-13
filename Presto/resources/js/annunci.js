// variabili pagina annunci
let btn_filter = document.querySelector("#filter_btn");
let filter_menu = document.querySelector(".filter_menu");
let controllo_filtri = "closed";
let ads_container = document.querySelector("#ads-container");

btn_filter.addEventListener("click", () =>{

        if(controllo_filtri === "closed"){
            filter_menu.classList.toggle("open_filter");
            btn_filter.classList.toggle("open_btn");
            btn_filter.innerHTML = `<i class="fa-solid fa-sliders"></i> Apply`;
            controllo_filtri = "opened";
        }else{
            filter_menu.classList.toggle("open_filter");
            btn_filter.classList.toggle("open_btn");
            btn_filter.innerHTML = `<i class="fa-solid fa-sliders"></i> Filter`;
            controllo_filtri = "closed";
        }

});

fetch("../../data/elenco_immobili.json")
    .then(response => response.json())
    .then(data =>{


        function createCard(){
            data.forEach(ads => {
                let card = document.createElement("article");
                card.classList.add("col-3","card-ads");
                ads_container.appendChild(card);

                card.innerHTML = `
               
                <img class="card-ads-img" src="../img/villa-hero-section-before.png" alt="">
                <section class="card-ads-text">
                    <h3>${ads.regione}</h3>
                    <h4>${ads.prezzo} €</h4>
                    <ul>
                        <li>${ads.metri_quadrati} mq</li>
                        <li>${ads.numero_camere} rooms</li>
                    </ul>
                </section>
           
                `

            });
        }
        createCard();
})