// Variabili per il numero di chilometri e l'età
const km = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const eta = parseInt(prompt("Inserisci l'età del passeggero:"));

if (!isNaN(km) && !isNaN(eta) && km >= 0 && eta >= 0) {
    const prezzoPerKm = 0.21; // Prezzo per km
    let prezzoTotale = km * prezzoPerKm; // Calcolo prezzo totale senza sconto

