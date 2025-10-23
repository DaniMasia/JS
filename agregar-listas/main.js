const entrada = document.querySelector("#entrada");
const botonAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");

botonAgregar.addEventListener("click", () => {
    const texto = entrada.value.trim();//.trim() es para borrar los espacios
    
    if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    // Crear botón de eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");//Esta clase es para darle forma en CSS
    btnEliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    entrada.value = "";
    }
});


