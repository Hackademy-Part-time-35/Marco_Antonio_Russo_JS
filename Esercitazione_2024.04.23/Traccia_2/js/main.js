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
        let index_contatto = this.cerca_contatto(nome_contatto);
        if(index_contatto != undefined){
            console.log(this.contatti[index_contatto]);
        }    
    },
    
    elimina_contatto: function(nome_contatto){
        let index_contatto= this.cerca_contatto(nome_contatto);
        this.contatti.splice(index_contatto, 1);
    },
    
    aggiungi_contatto: function(new_contatto, new_telefono){
        this.contatti.push({nome: new_contatto, telefono: new_telefono,})
    },
    
    modifica_contatto: function(contatto_da_modificare, change_nome_contatto, change_telefono){
        
        let index_contatto = this.cerca_contatto(contatto_da_modificare);
        this.contatti[index_contatto] = {nome: change_nome_contatto, telefono: change_telefono};
    },
    
    cerca_contatto: function(nome_contatto){
     
        let index_contatto;
        this.contatti.forEach((value,index) => {
            if(this.contatti[index].nome === nome_contatto){
                index_contatto = index;
            }
        });

        if(index_contatto === undefined){
            console.log("Contatto non presente in agenda");
        }else{
            return index_contatto;
        };
        
    }
};


agenda.mostra_contatti();   //Mostra tutti i contatti dell'agenda

agenda.mostra_singolo_contatto("Manuel");   //Mostra il contatto Manuel ed il relativo numero di telefono
agenda.mostra_singolo_contatto("Andrea");   //Non trova il contatto Andrea e restituisce un errore


agenda.elimina_contatto("Marco Antonio");   //Elimina il contatto Marco Antonio
agenda.mostra_contatti();

agenda.aggiungi_contatto("Christian","3254139875")  //Aggiunge il contatto Christian ed il suo numero di telefono
agenda.mostra_contatti();

agenda.modifica_contatto("Manuel", "Garcia", "3541690587")  //Modifica il contatto Manuel in Garcia e cambia il numero di telefono
agenda.mostra_contatti();