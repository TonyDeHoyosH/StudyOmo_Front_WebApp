document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    alert(`Bienvenido, ${username}!\n(Esto es solo una simulación)`);

    loginForm.reset();
  });
});
