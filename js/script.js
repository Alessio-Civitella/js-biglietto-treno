// Variabili per il numero di chilometri e l'età
const km = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const eta = parseInt(prompt("Inserisci l'età del passeggero:"));

if (!isNaN(km) && !isNaN(eta) && km >= 0 && eta >= 0) {
    const prezzoPerKm = 0.21; // Prezzo per km
    let prezzoTotale = km * prezzoPerKm; // Calcolo prezzo totale senza sconto

    // Applicazione degli sconti
    if (eta < 18) {
        prezzoTotale *= 0.8; // Sconto del 20% per i minorenni
    } else if (eta > 65) {
        prezzoTotale *= 0.6; // Sconto del 40% per gli over 65
    }

    // Mostra il prezzo finale
    alert(`Il prezzo finale del viaggio è: €${prezzoTotale.toFixed(2)}`);
} else {
    alert("Inserisci valori validi.");
}


