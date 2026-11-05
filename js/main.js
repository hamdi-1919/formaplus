// js/main.js
// Ce fichier sera complété aux parties 02, 07 et 09.
console.log('FormaPlus : main.js chargé');


// js/main.js – Q2.9 : afficher la valeur du curseur
const niveau = document.getElementById('niveau');
const niveauValeur = document.getElementById('niveauValeur');

if (niveau && niveauValeur) {   // le curseur n'existe que sur inscription.html
  niveau.addEventListener('input', () => {
    niveauValeur.textContent = niveau.value;
  });
}