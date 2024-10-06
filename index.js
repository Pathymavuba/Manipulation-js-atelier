
// const checkboxs = document.querySelectorAll('.check');

// console.log(checkboxs)
// let som = 0

// Array.from(checkboxs).map(item=>{
//     item.addEventListener('input',function(){
//         console.log(item.checked)
//         console.log(som,"som")
//         if (item.checked) return som = som + 1;
//         else return som = som -1
//     })
// })

// function PGCD (a,b){
//     let q ;
//     let r
//     while(b !== 0 ){
//         q = a/b;
//         r = a - q * b;
//         a = b ;
//         b = r;
//     }
//     return a
// }

const PGCD = (a,b) =>{
  let q
    if (a > b) {
        while (! a === 0) {
            q = a/b;
        }
    }

}

console.log(PGCD(20,2))