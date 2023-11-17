document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a, .menu-toggle');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    }

    // Manejar el envío del formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        // Aquí puedes agregar la lógica de envío del formulario
        // En este ejemplo, simplemente mostramos una alerta de confirmación
        alert('¡Formulario enviado con éxito!');

        // También puedes reiniciar el formulario después del envío si es necesario
        form.reset();

        // Desplazarse al principio de la página después de aceptar la alerta
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Mostrar/ocultar menú en dispositivos móviles
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav ul');

    mobileMenuToggle.addEventListener('click', function () {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
});
