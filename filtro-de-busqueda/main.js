// Lista predefinida de elementos
const elementos = [
    'Manzana',
    'Banana',
    'Naranja',
    'Pera',
    'Mango',
    'Sandía',
    'Melón',
    'Kiwi',
    'Fresa',
    'Uva'
];

const inputFiltro = document.getElementById('filtro');
const listaHTML = document.getElementById('lista');

// Función para renderizar la lista filtrada
function renderizarLista(filtro) {
    // Limpiar contenido actual
    listaHTML.innerHTML = '';

    // Filtrar los elementos según el texto ingresado
    const filtrados = elementos.filter(item =>
    item.toLowerCase().includes(filtro.toLowerCase())
    );

    // Mostrar elementos filtrados
    if (filtrados.length > 0) {
    filtrados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaHTML.appendChild(li);
    });
    } else {
    listaHTML.innerHTML = '<li>No se encontraron resultados.</li>';
    }
}

// Evento: actualizar lista mientras el usuario escribe
inputFiltro.addEventListener('input', () => {
    renderizarLista(inputFiltro.value);
});

// Mostrar lista completa al cargar la página
renderizarLista("");