const buttonPrimo = document.getElementById('btn')

const buttonSecondo = document.querySelector('#btn-2')

const text = document.querySelector("h1")

buttonPrimo.addEventListener('click',()=>{
    console.log("dhhdh")
    text.style.display = "block"
})
buttonSecondo.addEventListener('click',()=>{
    text.style.display = "none"
})
document.querySelector("#update").addEventListener("click",()=>{

    text.textContent = document.querySelector("#input").value
})

