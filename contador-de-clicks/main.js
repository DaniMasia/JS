
let contador=0

const boton=document.getElementById("boton")
const mcontador=document.getElementById("contador")

boton.addEventListener("click",()=>{
    contador++;
    mcontador.textContent=contador
})