let Names = [
  "Damien",
  "Ilan",
  "Guillaume",
  "Ama",
  "Inco",
  "Zolman",
  "Alexis",
  "Noam",
  "Nono",
  "Rammus", // liste des noms des survivants
];

let morts = [];

let Caractéristiques = ["Sportif", "Skateur", "La fille populaire", "Balèse", "Nerd"];  // rôle des survivants

function Aléatoire(x) {
  a = Math.floor(Math.random() * x);
} //math. random pour les noms

function Tueur() {   // profil du tueur 
  let Jason = 100;

  let Personnages = [];
  let b = 0;

  let CaractéristiquesPerso = [];
  let c = 0;
  let d = 4;

  while (b != 5) {
    b += 1;
    Aléatoire(9);
    Personnages.push(Names[a]);
  }
  console.log(Personnages); // boucle qui permet de donner des noms aux personnages

  while (c != 5) {
    c += 1;
    Aléatoire(d);
    CaractéristiquesPerso.push(Caractéristiques[a]);
    Caractéristiques.splice(a, 1); 
    d -= 1;
  }
  console.log(CaractéristiquesPerso); // boucle qui donne des aléatoires caractéristique aux persos 



  while (Jason > 0 && Personnages[0] != null) {
    console.log("Il reste " + Jason + " points de vies à Jason.");
    Aléatoire(4);  // boucle point de vie de Jason 

    if (a === 0) {
      console.log("Jason a tué " + Personnages[0] + "."); // meurtre de Jason
      morts.push(" " + Personnages.shift(0, 1));
    } else if (a === 1) {
      Jason -= 15;
      console.log(
        Personnages[0] +
          " a infligé 15 points de dégats a Jason mais a dead ça."
      );
      morts.push(" " + Personnages.shift(0, 1));
    } else if (a >= 2) {
      Jason -= 10;
      console.log(
        Personnages[0] + " a esquivé et a infligé 10 points de dégats à Jason." // il dodge la machette 
      );
    }
  }
  if (Personnages[0] == null && Jason >= 0) {
    console.log("Jason a tué tous les survivants.");
  } else if (Jason <= 0 && Personnages[0] != null) {
    console.log("Les survivants ont gagné");
    console.log("Mais RIP à" + morts + ".");
  } else if (Jason <= 0 && Personnages[0] == null) {
    console.log("Tout le monde est mort");
  }   // Boucle avec toutes les fins, Jason qui gagne, les survivants qui gagnent (avec le nombre de victimes de Jason)
}

Tueur();
