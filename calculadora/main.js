

function calcular(operacion) {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validar entradas
    if (num1 === '' || num2 === '') {
    resultadoDiv.textContent = 'Por favor, ingrese ambos números.';
    return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
    resultadoDiv.textContent = 'Entradas inválidas. Asegúrate de ingresar números.';
    return;
    }

    let resultado;

    switch (operacion) {
    case 'sumar':
        resultado = a + b;
        break;
    case 'restar':
        resultado = a - b;
        break;
    case 'multiplicar':
        resultado = a * b;
        break;
    case 'dividir':
        if (b === 0) {
        resultadoDiv.textContent = 'Error: No se puede dividir por cero.';
        return;
        }
        resultado = a / b;
        break;
    default:
        resultadoDiv.textContent = 'Operación no válida.';
        return;
    }

    resultadoDiv.textContent = `Resultado: ${resultado}`;
}

function resetear() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = '';
}