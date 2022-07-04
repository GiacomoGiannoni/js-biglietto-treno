const kmdaPercorrere = prompt('Inserisci Km da percorrere');
const annoNascita = prompt('Inserisci il tuo anno di nascita');
console.log("Il tipo della variabile annoNascita è: " + typeof annoNascita);

const annoNascitaNumerico = parseInt(annoNascita);
console.log("Il tipo della variabile annoNascitaNumerico è: " +typeof annoNascitaNumerico);

const adesso = new Date('2022');

const annoCorrente = adesso.getFullYear('2022');
const eta = annoCorrente - annoNascitaNumerico;
alert('La tua età è: ' + eta + ' anni');
if (eta > 65) {
    alert('Hai uno sconto del 40%')
} else if (eta < 18) {
    alert('Hai uno sconto del 20%')
} else {
    alert('Nessuno sconto disponibile')
}

