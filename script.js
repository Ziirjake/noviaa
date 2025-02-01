// Obtener elementos del DOM
const portada = document.getElementById('portada');
const pregunta = document.getElementById('pregunta');
const continuarBtn = document.getElementById('continuar');
const noButton = document.getElementById('no');
const siButton = document.getElementById('si');

// Mostrar la pregunta al hacer clic en "Continuar"
continuarBtn.addEventListener('click', () => {
  portada.classList.add('hidden');
  pregunta.classList.remove('hidden');
});

// Función para mover el botón "No"
const moverBotonNo = () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};

// Mover el botón "No" cuando el cursor se acerque (para escritorio)
noButton.addEventListener('mouseover', moverBotonNo);

// Mover el botón "No" cuando se toque (para móviles)
noButton.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evitar el comportamiento por defecto del touch
  moverBotonNo();
});

// Mostrar mensaje cuando se hace clic en "Sí"
siButton.addEventListener('click', () => {
  alert('¡Sabía que dirías que sí! 💖 ¡Feliz San Valentín!');
});