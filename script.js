document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const messages = JSON.parse(localStorage.getItem('users')) || [];
    messages.push({ name, email, message });
    localStorage.setItem('users', JSON.stringify(messages));

    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
});
