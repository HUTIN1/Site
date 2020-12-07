function app(){
    var nom = document.getElementById("nom").value
    var mdp = document.getElementById("mdp").value
    var i =0;
    var typ = typeof(sessionStorage.getItem(i.toString()+"inscrinom"));
    while(typ == "string"){
        pnom = sessionStorage.getItem(i.toString()+"inscrinom");
        pmdp = sessionStorage.getItem(i.toString()+"inscrimdp");
        if ((pnom == nom) && (pmdp == mdp)){
            sessionStorage.setItem("utilisateurnom",nom);
            sessionStorage.setItem("utilisateurprenom",sessionStorage.getItem(i.toString()+"inscriprenom"));
            sessionStorage.setItem("utilisateurtel",sessionStorage.getItem(i.toString()+"inscripretel"));
            sessionStorage.setItem("utilisateuremail",sessionStorage.getItem(i.toString()+"inscriemail"));
            document.location.href="projet_site.html";
        }
        i+=1 ;
        typ = typeof(sessionStorage.getItem(i.toString()+"inscrinom"));
    }
    document.getElementById("alerte").innerHTML = "Vous avez du faire une faute dans le nom ou le mot de passe";
}