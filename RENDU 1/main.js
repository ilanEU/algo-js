let Musique = [
  "Anissa Wejdene",
  "pov 2023 - Mairo",
  "La preuve - H JeunCrack",
  "MURDER RDY - Irko",
  "Mosquito - Pinkpantheress", // Liste des musiques
];

function Taxi() {
  let FeuRouge = 30;
  let Damien = 10;

  function Radio(x) {
    a = Math.floor(Math.random() * x); // fonction de la radio avec math.random qui donne une musique au hasard
  }

  while (FeuRouge != 0 && Damien != 0) {
    Radio(Musique.length);
    console.log("Radio : " + Musique[a] + ".");   // fonction qui récupère une musique en random

    if (a === 0) {
      Damien -= 1;
      console.log("Tu perds 1 point de santé mental, il t'en reste " + Damien + ".");
    } else {
      FeuRouge -= 1;
      console.log(
        "Plus que " + FeuRouge + " feux rouges avant d'arriver à destination"   // boucle permettant de retirer les points de santé mental et de savoir combien de feux rouge il reste à parcourir
      );
    }  
  }
  if (Damien === 0) {
    console.log("ff + explosion"); // condition de mort, si damien arrive à 0 point de santé mental il meurt (ff)
  }
  if (FeuRouge === 0) {
    let Changements = 10 - Damien;
    console.log("Tu as survécu au trajet");
    console.log("Il aura fallu " + Changements + " changements de taxi."); // condition si Damien finis son trajet (plus de feux rouges) alors il gagne 
  }
}

Taxi();