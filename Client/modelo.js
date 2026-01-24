const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const form = document.getElementById('contact-form');

// ELEMENTOS DEL MENÚ MÓVIL
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('#mobile-menu nav a:not(#mobile-contact-trigger)');
const mobileContactTrigger = document.getElementById('mobile-contact-trigger');

// Escuchamos el clic en TODO el contenedor (el fondo oscuro)

if (open && modal_container && close) {
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    // Cerrar al hacer clic fuera del modal
    modal_container.addEventListener('click', (e) => {
        if (e.target === modal_container) {
            modal_container.classList.remove('show');
        }
    });
} else {
    console.log("Modal elements not found on this page.");
}

// Capturar el formulario


if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        // Aquí podrías capturar los datos
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        
        // Cerramos el modal
        modal_container.classList.remove('show');
        form.reset(); // Limpia los campos del formulario
    });
}


// LÓGICA DEL MENÚ MÓVIL
if (mobileMenuOpen && mobileMenuClose && mobileMenu) {
    mobileMenuOpen.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-y-full');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-y-full');
    });

    // Cerrar el menú al hacer clic en un enlace normal
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-y-full');
        });
    });

    // Trigger de contacto desde móvil
    if (mobileContactTrigger) {
        mobileContactTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.add('-translate-y-full'); // Cerrar menú
            if (modal_container) {
                modal_container.classList.add('show'); // Abrir contacto
            }
        });
    }
}

