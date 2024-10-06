let masque1 = /kyalo/g;
let masque2 = new RegExp('benj')
let masque4 = /[^abp]/g
let masque5 = /[^a-z]/



let chaine = "je suis avec kyalo et kyalo est avec moi"

let result1 = chaine.match(masque5)
let result2 = chaine.search(masque1)
let result3 = masque1.test(chaine)

function validation (mail){
let valid = /@gmail.com|@yahoo.com/
return valid.test(mail)?"mail correct":"mail incorrect"
}

console.log(validation('kyalo@gmail.com'))
