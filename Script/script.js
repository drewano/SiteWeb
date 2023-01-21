const slide = ["Sliders/photo1.jpg", "Sliders/photo2.jpg", "Sliders/photo3.jpg", "Sliders/photo4.jpg", "Sliders/photo5.jpg"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0)
    numero = slide.length - 1;
  if (numero > slide.length - 1)
    numero = 0;
  document.getElementById("slide").src = slide[numero];
}


// Fonction pour afficher un menu déroulant lorsque l'utilisateur clique sur "Groupes" dans la barre de navigation
function toggleGroupesMenu() {
  // Code pour afficher/masquer le menu déroulant
}

// Fonction pour afficher un menu déroulant lorsque l'utilisateur clique sur "Cours" dans la barre de navigation
function toggleCoursMenu() {
  // Code pour afficher/masquer le menu déroulant
}

// Fonction pour afficher un menu déroulant lorsque l'utilisateur clique sur "Exercices" dans la barre de navigation
function toggleExercicesMenu() {
  // Code pour afficher/masquer le menu déroulant
}

// Fonction pour faire en sorte que la barre de navigation soit fixe en haut de la page lorsque l'utilisateur fait défiler
function fixNavbar() {
  // Code pour fixer la barre de navigation en haut de la page
}

// Fonction pour exécuter le code HTML, C et PHP dans la section des exercices
function runCode() {
  // Code pour exécuter le code HTML, C et PHP
}

// Fonction pour afficher la map google lorsque l'utilisateur clique sur "Informations sur l'école" dans la barre de navigation
function showMap() {
  // Code pour afficher la map google
}

// Appel des fonctions lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function() {
  createSlider();
  fixNavbar();

  // Ajout d'écouteurs d'événements pour les menus déroulants et le bouton "Informations sur l'école"
  document.getElementById("groupes-button").addEventListener("click", toggleGroupesMenu);
  document.getElementById("cours-button").addEventListener("click", toggleCoursMenu);
  document.getElementById("exercices-button").addEventListener("click", toggleExercicesMenu);
  document.getElementById("ecole-button").addEventListener("click", showMap);

  // Ajout d'écouteurs d'événements pour les boutons "Exécuter" dans la section des exercices
  var runButtons = document.getElementsByClassName("run-button");
  for (var i = 0; i < runButtons.length; i++) {
    runButtons[i].addEventListener("click", runCode);
  }
});

document.getElementById("ecole-button").addEventListener("click", function() {
  document.getElementById('map').style.display = "block";
});