class Voyage {
    destination(ville,pays){
        this._ville=ville;
        this._pays=pays;
    }
    petite_description(prix,nbjour,nbplace,meteo,date){
        this._prix=prix;
        this._nbjour=nbjour;
        this._nbplace=nbplace;
        this._meteo=meteo;
        this._date=date;
    }
    grande_description(descritpion,jliste,jdescription){
        this._descritption=descritpion;
        this._jliste=liste;    //"liste des jours du voyage"
        this._jdescription=jdescription;  //"liste de description de chaque jour"
    }
}