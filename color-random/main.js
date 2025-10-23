const boton = document.querySelector('#cambiarColorBtn');
const colorTexto = document.querySelector('#colorCodigo');

function generarColorAleatorio() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

boton.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();
    document.body.style.backgroundColor = nuevoColor;
    colorTexto.textContent = `Color actual: ${nuevoColor}`;
});