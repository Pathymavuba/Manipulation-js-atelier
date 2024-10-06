// LEAN REGEX WITH PATH

let masque1 = /[pathy]/;
let masque2 = new RegExp('tonton')

console.log(masque1,'et',masque2)

let chaine = "tu as vu pathy et tu dis pathy"

let resultat = chaine.match(masque1)

// console.log("resultat:",resultat)

let masque3 = /\w/

console.log(masque3,'3')