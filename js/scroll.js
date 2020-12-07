

function scrollFunction() {//Fonction qui détecte si l'utilisateur scroll pour afficher le bouton "retour vers le haut"
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function topFunction() {//Fonction qui permet à l'utilisateur de retourner tout en haut de la page en un clic

  document.documentElement.scrollTop = 0; 
}
