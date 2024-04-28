// bene
let persona = {
    nome: "Marco Antonio",
    cognome: "Russo",
    età: 30,

    saluto: function(){
        console.log(`Ciao sono ${this.nome}, il mio cognome è ${this.cognome}, ho ${this.età} anni`);
    },
};

persona.saluto();
