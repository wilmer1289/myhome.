function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const isActive = navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll', isActive);
}

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username && email && password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
      alert('Este email ya está registrado.');
    } else {
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registro exitoso. ¡Bienvenido a MYHOME!');
      document.getElementById('registerForm').reset();
    }
  } else {
    alert('Por favor, completa todos los campos.');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = this.querySelector('input[placeholder="Usuario"]').value;
  const password = this.querySelector('input[placeholder="Contraseña"]').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  const message = document.getElementById('loginMessage');
  if (user) {
    message.textContent = '¡Inicio de sesión exitoso!';
    message.style.color = '#1E3A8A';
    setTimeout(() => {
      message.textContent = '';
      toggleLogin();
    }, 2000);
  } else {
    message.textContent = 'Usuario o contraseña incorrectos.';
  }
});
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