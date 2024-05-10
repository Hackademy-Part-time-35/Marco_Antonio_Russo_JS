// variabili pagina annunci
let btn_filter = document.querySelector("#filter_btn");
let filter_menu = document.querySelector(".filter_menu");
let controllo_filtri = "closed";


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