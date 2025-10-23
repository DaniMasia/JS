const textarea = document.getElementById('texto');
const palabrasSpan = document.getElementById('palabras');
const caracteresSpan = document.getElementById('caracteres');

textarea.addEventListener('input', () => {
    const texto = textarea.value;

    // Contar palabras (eliminando espacios extras y líneas vacías)
    const palabras = texto.match(/\S+/g);
    const numPalabras = palabras.length
    //(/VALOR/)los / / son para crear la funcion y dentro se añade el valor
    // \S selecciona los caracteres.
    // \S+ selecciona las palabras
    // + significa "uno o más" de esos caracteres .
    // \s en minuscula selecciona los espacios
    // El modificador g busca todas las coincidencias.

    // Contar caracteres (sin espacios ni saltos de línea)
    const textoSinEspacios = texto.match(/\S/g);
    const numCaracteres = textoSinEspacios.length;

    // Mostrar resultados
    palabrasSpan.textContent = numPalabras;
    caracteresSpan.textContent = numCaracteres;
});