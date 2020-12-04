

class Voyage {
    constructor(ville,prix,image,enfant,repas,animaux,idd){
        this._ville=ville;
        this._prix=prix;
        this._image=image;
        this._enfant=enfant;
        this._repas=repas;
        this._animaux=animaux;
        this._idd=idd;
        this._weather="none";
    
    }
    set(meteo){
        this._weather=meteo;
    }
};



var nb1=new Voyage(
    ville="Monaco",
    prix=100,
    image="../images/monaco.jpg",
    enfant="pas autoriser",
    repas="steak frite",
    animaux="pas autoriser",
    idd=1
)

var nb2=new Voyage(
    ville="Ankara",
    prix=300,
    image="../images/ankara.jpg",
    enfant="pas autoriser",
    repas="couscous",
    animaux="pas autoriser",
    idd=2
)

function weather(voyage){
    const key="4c280b90ff25b4fbd57d770d12f45694";
    var url="https://api.openweathermap.org/data/2.5/weather?q="+voyage._ville+"&units=metric&appid="+key;
    fetch(url).then(function(resp) { return resp.json()}).then(function(data){
        voyage.set(data.main.temp);
        console.log(voyage);   
        div1.innerHTML += `<div class="affvoyage">
        <a href="formulaire.html"><img src="`+voyage._image+`" alt="Photo"`+voyage._ville+`></a>
        <ul>
            <li>`+voyage._ville+`</li>
            <li>prix`+voyage._prix+`</li>
            <li>enfant `+voyage._enfant+`</li>
            <li>repas du voyage `+voyage._repas+`</li>
            <li>animaux `+voyage._animaux+`</li>
            <li>température`+voyage._weather+`<li>
        </ul> 
    </div>`});
};

const lvoyage=[nb1,nb2];

var div1 = document.getElementsByClassName("toutvoyage")[0];

for (i of lvoyage){
    weather(i)
};




