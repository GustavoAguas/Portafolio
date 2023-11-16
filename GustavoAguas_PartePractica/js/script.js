const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    // Validar el formulario
    if (!validarFormulario()) {
        // Si el formulario no es valido
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evitar el envío del formulario si no es válido
    } else {
        // Mostrar mensaje al validar el formulario
        alert('Formulario Enviado');
    }
});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        return false;
    }

    // si el formulario es valido
    return true;
}
