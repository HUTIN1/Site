

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function topFunction() {

  document.documentElement.scrollTop = 0; 
}
