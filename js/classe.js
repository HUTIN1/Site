class Voyage {
    constructor(ville,prix,image,enfant,repas,animaux){
        this._ville=ville;
        this._prix=prix;
        this._image=image;
        this._enfant=enfant;
        this._repas=repas;
        this._animaux=animaux
    }
    get presentation(){
        return this._ville, this._prix, this._enfant, this._repas, this._aniamux
    }
}

const nb1=new Voyage(
    ville="Monaco",
    prix=100,
    image="monaco.jpg",
    enfant="pas autoriser",
    repas="steak frite",
    animaux="pas autoriser"
)

const nb2=new Voyage(
    ville="Ankara",
    prix=300,
    image="ankara.jpg",
    enfant="pas autoriser",
    repas="couscous",
    animaux="pas autoriser"
)