//Dadi

/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

/* inizializzare variabile per l'utente */
const userChoice = Math.floor(Math.random() * 6 + 1)
console.log(`La tua scelta è ${userChoice}`);


/* inizializzare variabile per il computer */
const computerChoice = Math.floor(Math.random() * 6 + 1)
console.log(`La scelta del computer è ${computerChoice}`);

/* stabilire vincitore in base al valore più alto */
if(userChoice>computerChoice){
    console.log('Hai vinto!');
    
} else if(userChoice<computerChoice){
    console.log('Ha vinto il computer');
    
} else {
    console.log('Pareggio');
    
}