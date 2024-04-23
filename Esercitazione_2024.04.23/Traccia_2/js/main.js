let agenda = {
    contatti: [
        {
            nome: "Marco Antonio",
            telefono: "3201841257",
        },

        {
            nome: "Giada",
            telefono: "3541249824",
        },

        {
            nome: "Patric",
            telefono: "3547429456",
        },

        {
            nome: "Manuel",
            telefono: "3214567895",
        },
    ],

    mostra_contatti: function(){
        console.log(this.contatti);
    },

    mostra_singolo_contatto: function(nome_contatto){
        for(let i = 0; i < this.contatti.length; i++){
            if(this.contatti[i].nome === nome_contatto){
                console.log(this.contatti[i]);
            }
        }
    },

    elimina_contatto: function(index_contatto){
        this.contatti.splice(index_contatto, 1);
    },

    aggiungi_contatto: function(new_contatto, new_telefono){
        this.contatti.push({nome: new_contatto, telefono: new_telefono,})
    },

    modifica_contatto: function(contatto_da_modificare, change_nome_contatto, change_telefono){


        for(let i = 0; i < this.contatti.length; i++){
            if(this.contatti[i].nome === contatto_da_modificare){
                this.contatti[i] = {nome: change_nome_contatto, telefono: change_telefono};
            }
        }
        
    },
};


agenda.mostra_contatti();

agenda.mostra_singolo_contatto("Marco Antonio");

agenda.elimina_contatto(0);
agenda.mostra_contatti();

agenda.aggiungi_contatto("Christian","3254139875")
agenda.mostra_contatti();

agenda.modifica_contatto("Manuel", "Garcia", "3541690587")
agenda.mostra_contatti();