const readlineSync = require("readline-sync");
const fs = require("fs");

let tableauDeMot = fs.readFileSync("mot.txt", "utf-8").split(/\r?\n/);
let essai = 9;
let mot = tableauDeMot[rand(tableauDeMot.length)];
let soluce = [];

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(mot);

function hidden(soluce) {
    mot.split('').forEach(element => {
        soluce.push("*")
    })
}
hidden(soluce)


while (essai != 0 && !(soluce.join('') == mot)) {
    let lettre = readlineSync.question('quelle lettre vouler vs testez? '); //lettre que l'utilisateur choisi

    mot.split('').forEach((element, ind) => {
        if (element == lettre) {
            soluce[ind] = element
        }
    });
    console.log(soluce.join(''))
    essai--
    console.log(essai)
    win(essai, soluce)

}

function win(essai, soluce) {
    if (soluce.join('') == mot) {
        console.log('Vous avez gagner')
    } else if (essai == 0 && !(soluce.join('') == mot)) {
        console.log('Vous etes nul')
    }
} */
