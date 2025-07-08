document.addEventListener('DOMContentLoaded', () => {
    
    // ======================================================================
    // FUNCIÓN REUTILIZABLE: Cargar Avatar de Usuario
    // Simula una llamada al backend para obtener la URL de la imagen del usuario.
    // @param {string} containerId - El ID del elemento contenedor del avatar.
    // @param {string} imageUrl - La URL de la imagen a cargar.
    // ======================================================================
    const loadUserAvatar = (containerId, imageUrl) => {
        const avatarContainer = document.getElementById(containerId);
        if (avatarContainer) {
            // Se usa backgroundImage para que la imagen llene el círculo
            avatarContainer.style.backgroundImage = `url('${imageUrl}')`;
        } else {
            console.error(`Contenedor de avatar con ID "${containerId}" no encontrado.`);
        }
    };
    
    // ======================================================================
    // FUNCIÓN REUTILIZABLE: Animar Elemento al Cargar
    // Añade una clase a un elemento para disparar una animación CSS.
    // @param {string} elementId - El ID del elemento a animar.
    // @param {string} animationClass - La clase CSS que contiene la animación.
    // ======================================================================
    const animateOnLoad = (elementId, animationClass) => {
        const element = document.getElementById(elementId);
        if (element) {
            // Un pequeño retardo para asegurar que la transición sea visible
            setTimeout(() => {
                element.classList.add(animationClass);
            }, 100);
        } else {
            console.error(`Elemento con ID "${elementId}" no encontrado para animar.`);
        }
    };

    // --- EJECUCIÓN DEL CÓDIGO ---

    // 1. Cargar el avatar del usuario.
    // En una aplicación real, esta URL vendría de una API.
    // Usamos una imagen de placeholder para la demostración.
    const userImageFromBackend = 'https://i.pravatar.cc/100?u=a042581f4e29026704d';
    loadUserAvatar('user-avatar-container', userImageFromBackend);

    // 2. Animar la tarjeta de información al cargar la página.
    animateOnLoad('info-card', 'fade-in');

});