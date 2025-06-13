document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('asesor-form');
  const confirmMessage = document.getElementById('confirm-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmMessage.classList.add('show');
    setTimeout(() => {
      confirmMessage.classList.remove('show');
    }, 3000);
  });
});