// variabili pagina annunci
let btn_filter = document.querySelector("#filter_btn");
let filter_menu = document.querySelector(".filter_menu");
let controllo_filtri = "closed";
let ads_container = document.querySelector("#ads-container");
let main = document.querySelector("main");

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


        function createCard(){
            data.forEach(ads => {
                let card = document.createElement("article");
                card.classList.add("col-9", "col-md-5", "col-xl-3","card-ads");
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

            });
        }
        createCard();
})