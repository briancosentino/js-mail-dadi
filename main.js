/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’. */

const guestsEmail = ['giulia@gmail.com', 'giovanni@gmail.com', 'francesco@gmail.com', 'gaetano@gmail.com', 'giacomo@gmail.com']
console.log(guestsEmail);
const emailInput = prompt('inserisci la tua mail')

for (let i = 0; i<guestsEmail.length; i++){
    if (emailInput === guestsEmail[i]){
       console.log('Sei nella lista, puoi accedere!');
        break
    } else{
      console.log('Mi dispiace, non sei nella lista ');
        
    }
}

