let kmdaPercorrere = prompt('Inserisci Km da percorrere');
let annoNascita = prompt('Inserisci il tuo anno di nascita');
console.log("Il tipo della variabile annoNascita è: " + typeof annoNascita);

let prezzoKmNumerico = parseInt(kmdaPercorrere);
console.log("Il tipo della variabile prezzoKmNumerico è: " +typeof prezzoKmNumerico);

const prezzoAlKm = 0.21;

let prezzoFinale = prezzoAlKm * prezzoKmNumerico;

let annoNascitaNumerico = parseInt(annoNascita);
console.log("Il tipo della variabile annoNascitaNumerico è: " +typeof annoNascitaNumerico);

let adesso = new Date('2022');
let annoCorrente = adesso.getFullYear('2022');
let eta = annoCorrente - annoNascitaNumerico;
alert('La tua età è: ' + eta + ' anni');
if (eta > 65) {
    alert('Hai uno sconto del 40%');
    const sconto = prezzoFinale * 40 / 100;
    alert('il tuo sconto è: ' + sconto + ' euro');
    let prezzoscontato = prezzoFinale - sconto;
    alert('il costo del biglietto è: ' + parseInt(prezzoscontato) + ' euro');
} else if (eta < 18) {
    alert('Hai uno sconto del 20%');
    const sconto = prezzoFinale * 20 / 100;
    alert('il tuo sconto è: ' + sconto + ' euro');
    let prezzoscontato = prezzoFinale - sconto;
    alert('il costo del biglietto è: ' + parseInt(prezzoscontato) + ' euro');
} else {
    alert('Nessuno sconto disponibile');
    alert('il costo del biglietto è: ' + parseInt(prezzoFinale) + ' euro');
}

