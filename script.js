var nb1 = document.querySelector(".nb1") ;
var nb2 = document.querySelector(".nb2") ;
var op = document.querySelector(".op") ;
var Message = document.querySelector(".Message") ;
var score = document.querySelector(".score") ;
var link = document.querySelector(".link") ;
var section = document.querySelector("section") ;
var compteur = 0 ;

//Nombres aléatoires Début du jeu
random1 = Math.random()*11 << 0; //Pour gènerer des nombres entre 0 et 11
random2 = Math.random()*11 << 0; //Pour gènerer des nombres entre 0 et 11
console.log(random1) ;
console.log(random2) ;
//Insérer les nombres au hasard dans les nombres nb1 et nb2 
nb1.innerHTML = random1 ;
nb2.innerHTML = random2 ;

//fonction de vérification
function verifier() {
    //Récupérer le résultat entré par le joueur
    var res = document.querySelector(".res").value ;
    if (random1 + random2 == res) {
        Message.style.backgroundColor = "green" ;
        Message.innerHTML = "Correcte." ;
        //Créer d'autrs nombres aléatoires
     //Nombres aléatoires Début du jeu
     random1 = Math.random()*11 << 0; //Pour gènerer des nombres entre 0 et 11
      random2 = Math.random()*11 << 0; //Pour gènerer des nombres entre 0 et 11
       console.log(random1) ;
        console.log(random2) ;
//Insérer les nombres au hasard dans les nombres nb1 et nb2 
      nb1.innerHTML = random1 ;
      nb2.innerHTML = random2 ;
      compteur = compteur + 1 ;

    }
    else {
        Message.style.backgroundColor = "red" ;
        Message.innerHTML = "Vous avez perdu." ;
        section.innerHTML = " " ;
        score.innerHTML = compteur + '</br>' + 'score'; //(Attention ce signe est donné par la combinaison "ALTGR + 7 alphanumerie " 
        link.style.display = "block" ;

    }

}