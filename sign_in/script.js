document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        alert(`¡Registro exitoso!\n\nUsuario: ${username}\n(Esto es solo una demostración)`);

        console.log('Formulario enviado:', { username, password });

        signupForm.reset();
    });
});