

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
    idd="01"
)

var nb2=new Voyage(
    ville="Ankara",
    prix=300,
    image="../images/ankara.jpg",
    enfant="pas autoriser",
    repas="couscous",
    animaux="pas autoriser",
    idd="02"
)

var nb3=new Voyage(
    ville="Rio",
    prix=500,
    image="../images/Rio.jpg",
    enfant="pas autoriser",
    repas="salade",
    animaux="pas autoriser",
    idd="03"
)

function weather(voyage){
    const key="4c280b90ff25b4fbd57d770d12f45694";
    var url="https://api.openweathermap.org/data/2.5/weather?q="+voyage._ville+"&units=metric&appid="+key;
    fetch(url).then(function(resp) { return resp.json()}).then(function(data){
        voyage.set(data.main.temp);  
        afflater(voyage);
        });
};

function afflater(voyage){
    var str = document.getElementById(voyage._ville+"5").innerHTML;
    var res = str.replace(/attendre/g, voyage._weather);
    document.getElementById(voyage._ville+"5").innerHTML = res;
}

function affiche(voyage){
    document.getElementById("toutvoyage").innerHTML += `<div class="affvoyage" id=`+voyage._ville+`5>
        <a href="formulaire.html" ><img src="`+voyage._image+`" alt="Photo"`+voyage._ville+` onclick="sessionStorage.setItem('prix',`+voyage._prix+`)"></a>
        <ul>
            <li>`+voyage._ville+`</li>
            <li>prix `+voyage._prix+` €</li>
            <li>enfant `+voyage._enfant+`</li>
            <li>repas du voyage `+voyage._repas+`</li>
            <li>animaux `+voyage._animaux+`</li>
            <li>température attendre °C</li>
        </ul> 
    </div>`
};

const lvoyage=[nb1,nb2,nb3];

oui = decroissantprix(lvoyage);
console.log(oui);
for (i of oui){
    affiche(i)
    weather(i)
 
};

function croissantprix(lvoyage){
    var lvoyage2 = lvoyage;
    var voyage =lvoyage[0];
    var l = [];
    var index = 0;
    var len = lvoyage.length;
    var u = 0;
    for (; u < len ;){
        u+=1;
        for (i in lvoyage2){
            if (lvoyage2[i]._prix < voyage._prix){
                voyage=lvoyage2[i]
            }
        }
        index = lvoyage2.indexOf(voyage);
        lvoyage2.splice(index,1);
        l.push(voyage);
        voyage = lvoyage2[0];
    }

    return l

};


function decroissantprix(lvoyage){
    l = croissantprix(lvoyage);
    var l2=[];
    for (i of l){
        l2.unshift(i);
    }
    return l2
};

function paenfant(lvoyage){
    var l = [];
    for (voyage of lvoyage){
        if (voyage._enfant == "pas autoriser"){
            l.push(voyage)
        }
    }
    return l
}

