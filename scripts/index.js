///////// VARIABLES /////////
const imageElement = document.querySelector("#contenitore-lampadina > div > .img-fluid"); // Assegno l'immagine a una variabile
const btnElement = document.querySelector("#contenitore-lampadina > div > div > button"); // Assegno il bottone ad una variabile
const containerElement = document.querySelector("#contenitore-lampadina > div"); // Assegno il div che contiene bottone e immagine ad una variabile

///////// FUNCTIONS /////////
function clickBtnElementHandler(){ //Click Handler
    const btnElementHTML = btnElement.innerHTML; // vediamo l'innerHTML del bottone
    if(btnElementHTML.toLowerCase().includes("spegni")){ // Se include "spegni" allora vogliamo spegnere la lampadina
        imageElement.src = "./img/white_lamp.png"; // Settiamo la src dell'immagine alla lampadina spenta
        btnElement.innerHTML = "Accendi la Lampadina"; // Cambiamo la scritta del bottone in modo che dica Accendi la Lampadina
    }
    else if(btnElementHTML.toLowerCase().includes("accendi")){// Altrimenti se include "accendi" vogliamo accendere la lampadina
        imageElement.src = "./img/yellow_lamp.png"; // Settiamo la src dell'immagine alla lampadina accesa
        btnElement.innerHTML = "Spegni la Lampadina"; // Cambiamo la scritta del bottone in modo che dica Spegni la Lampadina
    }
    containerElement.classList.toggle("bg-black"); // Toggle della classe bg-black nel div superiore in modo da simulare la stanza che si illumina
}

///////// MAIN /////////
btnElement.addEventListener("click", clickBtnElementHandler); // Aggiungiamo Event Listener al bottone per il click