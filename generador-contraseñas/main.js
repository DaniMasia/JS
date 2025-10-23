
function generarContrasena() {
    const lengthInput = document.getElementById("length");
    const length = parseInt(lengthInput.value);
    const errorDiv = document.getElementById("error");
    const passwordDiv = document.getElementById("password");

    // Limpiar mensajes anteriores
    errorDiv.textContent = "";
    passwordDiv.textContent = "";

    if (!lengthInput.value) {
        error.textContent = "Por favor, introduce una longitud.";
        return;
    }

    if (isNaN(length) || length < 4) {
    errorDiv.textContent = "La longitud debe ser un número mayor o igual a 4.";
    return;
    }

    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
    let contrasena = "";

    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[randomIndex];
    }

    passwordDiv.textContent = `Contraseña generada: ${contrasena}`;
}