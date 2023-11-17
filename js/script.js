// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces dentro del elemento 'nav'
    const links = document.querySelectorAll('nav a');

    // Agrega un event listener a cada enlace para el desplazamiento suave
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Función para desplazamiento suave al hacer clic en un enlace
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        const targetElement = document.getElementById(targetId);

        // Realiza el desplazamiento suave a la posición del elemento 
        window.scroll({
            top: targetElement.offsetTop - 20, // Ajusta la posición final
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    // Maneja el envío del formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);

    // Función para manejar el envío del formulario
    function handleFormSubmit(event) {
        event.preventDefault();


        // muestra una alerta de confirmación
        alert('¡Formulario enviado con éxito!');

        // Reinicia el formulario después del envío
        form.reset();

        // Desplazarse al principio de la página después de aceptar la alerta
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
