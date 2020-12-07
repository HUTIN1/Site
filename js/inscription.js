function app(){
    console.log("bouton");
    var pnom = document.getElementById("nom").value
    var pprenom = document.getElementById("prenom").value
    var pemail = document.getElementById("email").value
    var ptel = document.getElementById("tel").value
    var pmdp = document.getElementById("mdp").value
    const l = [pnom,pprenom,pemail,ptel,pmdp];
    const l2 = ["nom","prenom","email","tel","mdp"];
    const pinscri={
        nom : pnom,
        prenom : pprenom,
        email : pemail,
        tel : ptel,
        mdp : pmdp
    }
    console.log(sessionStorage.getItem("inscri"));
    var v = 0;
    var len = 4;
    var u = 0;
    for (i of l){
        if (i == ""){
            v = 1;
        }
    }
    if (v == 0){
        var i=0;
        while( typeof(sessionStorage.getItem(i.toString()+"inscrinom") == "string")){
            i+=1;
            console.log(i);
        }
        for (; u < len;){
            sessionStorage.setItem("utilisateur"+l2[u],l[u]);
            sessionStorage.setItem(i.toString()+"inscri"+l2[u],l[u]);
            u = u + 1;
        }
        document.location.href="projet_site.html";
    } else {
        console.log("pas rempli");
        document.getElementById("alerte").innerHTML = "Veuillir donner toutes vos information "
    }
}

