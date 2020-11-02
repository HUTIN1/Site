function calculTotal() {
                var prix = Number(document.getElementById("prix").value);
 
                var nombre_enfant= Number(document.getElementById("nb_enfant").value);
                var nombre_adulte= Number(document.getElementById("nb_adulte").value);
 
                var amount = prix*(nombre_adulte + 0.6*nombre_enfant);
                document.getElementById("amount").value = amount;
            }
