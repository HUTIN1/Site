class Voyage {
    constructor(ville,prix,image,enfant,repas,animaux){
        this._ville=ville;
        this._prix=prix;
        this._image=image;
        this._enfant=enfant;
        this._repas=repas;
        this._animaux=animaux;
    }
    get (){
        return  this._ville, this._prix, this._enfant, this._repas, this._animaux
    }
}

const nb1=new Voyage(
    ville="Monaco",
    prix=100,
    image="../images/monaco.jpg",
    enfant="pas autoriser",
    repas="steak frite",
    animaux="pas autoriser"
)

const nb2=new Voyage(
    ville="Ankara",
    prix=300,
    image="../images/ankara.jpg",
    enfant="pas autoriser",
    repas="couscous",
    animaux="pas autoriser"
)

const lvoyage=[nb1,nb2];

var div1 = document.getElementsByClassName("toutvoyage")[0];

for (i of lvoyage){
    console.log(i);
    div1.innerHTML += `<div class="affvoyage">
    <a href="formulaire.html"><img src="`+i._image+`" alt="Photo"`+i._ville+`></a>
    <ul>
        <li>`+i._ville+`</li>
        <li>prix`+i._prix+`</li>
        <li>enfant `+i._enfant+`</li>
        <li>repas du voyage `+i._repas+`</li>
        <li>animaux `+i._animaux+`</li>
    </ul> 
</div>`
}