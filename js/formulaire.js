

function affiche(){
    var prix = sessionStorage.getItem("prix")
    var x = document.getElementById("nb_adulte").value;
    var y = document.getElementById("nb_enfant").value;
    var z = 0
    if (document.getElementById("oui").checked){
        console.log("test");
        z = 1;
    }


    prix = x*prix+y*prix*0.4+12*(x+y)*datecomp()*z;
    prix.toString()
    return prix+"€"
};



function datecomp(){
    L=[31,28,31,30,31,30,31,31,30,31,30,31];
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var startan = eval(start[0]+start[1]+start[2]+start[3]);
    var startmois = eval(start[5]+start[6]);
    var startjour = eval(start[8]+start[9]);
    var endan = eval(end[0]+end[1]+end[2]+end[3]);
    var endmois = eval(end[5]+end[6]);
    var endjour = eval(end[8]+end[9]);
    var diffjour = 0;
    if ((endan >= startan) && (endmois >= startmois) && (endjour >= startjour)){
        while ((startan != endan) || (startmois != endmois) || (startjour!=endjour)){

            diffjour = diffjour + 1;
            if ((startjour == L[11]) && (startmois == 12)){
                startan = startan + 1;
                startmois = 1;
            } else if (startjour == L[startmois-1]){
                startjour = 0;
                startmois = startmois + 1;
            } else{
                startjour = startjour + 1
            }
        };
    };
    return diffjour
}

function autorempli(){
    var typ= typeof(sessionStorage.getItem("utilisateurnom"));
    const l =["nom","prenom","tel","email"]
    if (typ == "string"){
        for (i of l){
            document.getElementById(i).value = sessionStorage.getItem("utilisateur"+i);
        }
    }
}
autorempli()



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


function ajoupanier(){
    var i = 0;
    const prix = affiche();
    var typ = typeof(sessionStorage.getItem(i.toString()+"panierville"))
    while (typ == "string"){
        i+=1;
    }
    sessionStorage.setItem(i.toString()+"panierville",sessionStorage.getItem("ville"));
    sessionStorage.setItem(i.toString()+"panierprix",prix);
    sessionStorage.setItem(i.toString()+"panierstart",document.getElementById("start").value)
    sessionStorage.setItem(i.toString()+"panierend",document.getElementById("end").value)

}