class Voyage {
    constructor(id1,id2,ville,prix,image,enfant,repas,animaux){
        this._id2=id1
        this._id2=id2
        this._ville=ville;
        this._prix=prix;
        this._image=image;
        this._enfant=enfant;
        this._repas=repas;
        this._animaux=animaux;
    }
    get (){
        return this._id1, this._id2, this._ville, this._prix, this._enfant, this._repas, this._animaux
    }
}

const nb1=new Voyage(
    ville="Monaco",
    id1=1,
    id2=2,
    prix=100,
    image="monaco.jpg",
    enfant="pas autoriser",
    repas="steak frite",
    animaux="pas autoriser"
)

const nb2=new Voyage(
    ville="Ankara",
    id1=100,
    id2=200,
    prix=300,
    image="ankara.jpg",
    enfant="pas autoriser",
    repas="couscous",
    animaux="pas autoriser"
)

function addElement(id1,id2, ville,prix,enfant,repas,animaux){
    let newDiv=document.createElement('div');
    newDiv.id=id1;

    let liste=document.createElement('ul');
    liste.id=id2;
    document.getElementById(id1).appendChild(liste);

    let element1=document.createElement('il');
    element1.textContent=ville;
    document.getElementById(id2).appendChild(element1);

    let element2=document.createElement('il');
    element1.textContent=prix;
    document.getElementById(id2).appendChild(element2);

    let element3=document.createElement('il');
    element1.textContent=enfant;
    document.getElementById(id2).appendChild(element3);

    let element4=document.createElement('il');
    element1.textContent=repas;
    document.getElementById(id2).appendChild(element4);

    let element5=document.createElement('il');
    element1.textContent=animaux;
    document.getElementById(id2).appendChild(element5);


}

addElement(nb2.get());