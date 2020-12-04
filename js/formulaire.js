console.log(sessionStorage.getItem("prix"))
console.log("cookie")

function affiche(){
    var prix = sessionStorage.getItem("prix")
    var x = document.getElementById("nb_adulte").value;
    var y = document.getElementById("nb_enfant").value;

    prix = x*prix+y*prix*0.4;
    prix.toString()
    return prix+"€"
};



