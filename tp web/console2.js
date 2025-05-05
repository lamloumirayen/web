function NomValide(nom) {
    for (let i = 0; i < nom.length; i++) {
        let c = nom.charAt(i).toUpperCase();
        if (!((c >= "A" && c <= "Z") || c === "" )) {
            return false;
        }
    }
    return true;
}

function estEmailValide(email) {
    let arobaseTrouve = false;
    let pointTrouve = false;
    let i = 0;

    while (i < email.length) {
        if (email[i] === "@") {
            arobaseTrouve = true;
        }
        if (arobaseTrouve && email[i] === ".") {
            pointTrouve = true;
        }
        i++;
    }
    return arobaseTrouve && pointTrouve;
}

function verif() {
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let objet = document.getElementById("objet").value.trim();

    document.getElementById("erreurNom").textContent = "";
    document.getElementById("erreurEmail").textContent = "";
    document.getElementById("erreurObjet").textContent = "";

    let valide = true;

    if (nom === "") {
        document.getElementById("erreurNom").textContent = "Le nom est requis.";
        valide = false;
    } else if (!estNomValide(nom)) {
        document.getElementById("erreurNom").textContent = "Le nom ne doit contenir que des lettres.";
        valide = false;
    }

    if (objet === "") {
        document.getElementById("erreurObjet").textContent = "L'objet est requis.";
        valide = false;
    }

    if (email === "") {
        document.getElementById("erreurEmail").textContent = "L'email est requis.";
        valide = false;
    } else if (!estEmailValide(email)) {
        document.getElementById("erreurEmail").textContent = "Adresse email invalide (doit contenir '@' et '.').";
        valide = false;
    }

    return valide;
}
