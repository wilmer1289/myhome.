function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const isActive = navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll', isActive);
}

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  const message = document.getElementById('loginMessage');
  if (user) {
    message.textContent = '¡Inicio de sesión exitoso!';
    message.style.color = '#1E3A8A';
    setTimeout(() => {
      message.textContent = '';
      toggleLogin();
      window.location.href = 'index.html'; // Opcional: redirigir tras login
    }, 2000);
  } else {
    message.textContent = 'Usuario o contraseña incorrectos.';
  }
});

// Animación de carga para las tarjetas de asesores
document.addEventListener('DOMContentLoaded', () => {
  const advisorCards = document.querySelectorAll('.advisor-card');
  advisorCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
    }, index * 200); // Retraso de 200ms por tarjeta
  });
});