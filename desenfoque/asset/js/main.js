let img=document.querySelector(".img")
let numero=document.querySelector(".numero")
let btn=document.querySelector(".btn")
let caja=document.querySelector(".caja")

let percent=1
let blurr=30

btn.addEventListener("click",()=>{
    btn.style.display="none"
    let intervalo=setInterval(()=>{
        percent++
        blurr -=30/100

        if (percent>100){
            clearInterval(intervalo);
            let p=document.createElement("p")
            p.textContent="¡Carga Completada!"
            p.classList.add("texto")
            caja.appendChild(p)
        }else{
            numero.innerHTML=percent + '%'
            img.style.filter=`blur(${blurr}px)`
        }
    },20)
})