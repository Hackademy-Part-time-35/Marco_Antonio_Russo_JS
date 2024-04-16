let num_tiri = parseInt(prompt("Immettere il numero di tiri del dado: "));
let player1 = 0;
let player2 = 0;

function dice(n){
    for (let i=0; i < num_tiri; i++){
        player1 += Math.floor(Math.random() * (6) + 1);
        player2 += Math.floor(Math.random() * (6) + 1);
    }

    if (player1 > player2) {
        console.log("Il giocatore vincente è Player 1 con un risultato di " + player1);
    } else if(player2 > player1){
        console.log("Il giocatore vincente è Player 2 con un risultato di " + player2);
    } else{
        console.log("I giocatori hanno pareggiato con un risultato di " + player2);
    }
}

dice(num_tiri);