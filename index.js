let currentSlide = 0;

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  
}


function quickSearch(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const ubicacion = formData.get('ubicacion');
  const tipo = formData.get('tipo');
  const precio = formData.get('precio');
  alert(`Buscando: Ubicación: ${ubicacion || 'Cualquiera'}, Tipo: ${tipo || 'Cualquiera'}, Precio Máximo: $${precio || 'Sin límite'}`);
  window.location.href = `buscar-propiedades.html?ubicacion=${ubicacion || ''}&tipo=${tipo || ''}&precio=${precio || ''}`;

}

document.addEventListener('DOMContentLoaded', () => {
  // Código original...
  
  // Efecto de scroll en el header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      header.style.padding = '10px 5%';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.padding = '15px 5%';
    }
  });

  // Mejorar la función toggleMenu para móviles
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }
});

function showDetails(id) {
  const propertyDetails = {
    1: { title: 'Casa en Miraflores', description: 'Hermosa casa en el corazón de Miraflores, cerca de parques y tiendas.', extra: '2 baños, 1 cochera, jardín de 50 m²', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0d'] },
    2: { title: 'Departamento en San Isidro', description: 'Moderno departamento con vistas panorámicas.', extra: '2 baños, seguridad 24/7', images: ['https://images.unsplash.com/photo-1600585154080-5aaff62d7c0b', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0e'] },
    3: { title: 'Chalet en Surco', description: 'Amplio chalet ideal para familias grandes.', extra: '3 baños, piscina', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0d', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0f'] },
    4: { title: 'Ático en Barranco', description: 'Ático con estilo bohemio y vistas al mar.', extra: '1 baño, terraza', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a1a'] },
    5: { title: 'Casa en La Molina', description: 'Casa moderna con jardín espacioso.', extra: '2 baños, 2 cocheras', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0f', 'https://images.unsplash.com/photo-1600585154340-be6161a56a2b'] },
    6: { title: 'Departamento en Lince', description: 'Acogedor departamento cerca de centros comerciales.', extra: '1 baño, gimnasio', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a1a', 'https://images.unsplash.com/photo-1600585154340-be6161a56a3c'] },
    7: { title: 'Casa en Chorrillos', description: 'Amplia casa con patio trasero y vistas al mar.', extra: '3 baños, 2 cocheras, piscina, seguridad 24h', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a2b', 'https://images.unsplash.com/photo-1600585154340-be6161a56a4d'] },
    8: { title: 'Departamento en Jesús María', description: 'Moderno departamento en zona tranquila.', extra: '2 baños, 1 cochera, gimnasio, seguridad', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a3c', 'https://images.unsplash.com/photo-1600585154340-be6161a56a5f'] },
    9: { title: 'Villa en Magdalena', description: 'Villa de lujo con acabados de primera.', extra: '4 baños, 3 cocheras, piscina, seguridad 24h', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a4d', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'] },
  };
  const details = propertyDetails[id];
  const modal = document.getElementById('detailsModal');
  const content = document.getElementById('propertyDetails');
  content.innerHTML = `
    <h3>${details.title}</h3>
    ${details.images.map((img, index) => `<img src="${img}" alt="${details.title}" class="${index === 0 ? 'active' : ''}">`).join('')}
    <p>${details.description}</p>
    <p>${details.extra}</p>
    <button class="btn btn-secondary" onclick="contactAgent()">Contactar Agente</button>
  `;
  currentSlide = 0;
  modal.style.display = 'block';
}

function plusSlides(n) {
  const slides = document.querySelectorAll('#propertyDetails img');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function closeModal() {
  document.getElementById('detailsModal').style.display = 'none';
}

function contactAgent() {
  alert('Contactando al agente... Por favor, espera un mensaje.');
}

function virtualTour(id) {
  alert(`Iniciando tour virtual para la propiedad ${id}... (Integrar un servicio como Matterport para tours reales)`);
}

function calculateMortgage(event) {
  event.preventDefault();
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

  if (loanAmount && interestRate && loanTerm) {
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    document.getElementById('monthlyPayment').innerHTML = `Pago mensual estimado: <strong>$${monthlyPayment.toFixed(2)}</strong>`;
  } else {
    document.getElementById('monthlyPayment').innerHTML = 'Por favor, completa todos los campos.';
  }
}

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.querySelector('#loginForm input[placeholder="Usuario"]').value;
  const password = document.querySelector('#loginForm input[placeholder="Contraseña"]').value;
  const message = document.getElementById('loginMessage');
  if (username === 'admin' && password === '1234') {
    message.textContent = '¡Inicio de sesión exitoso!';
    message.style.color = '#1E3A8A';
    setTimeout(() => {
      message.textContent = '';
      toggleLogin();
    }, 2000);
  } else {
    message.textContent = 'Usuario o contraseña incorrectos.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.property-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100);
  });

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.forEach(id => {
    const btn = document.querySelector(`.property-card[data-id="${id}"] .favorite-btn`);
    if (btn) btn.classList.add('favorited');
  });
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
// chatbot.js
document.addEventListener('DOMContentLoaded', () => {
  class Chatbot {
    constructor() {
      this.chatWindow = null;
      this.currentStep = 1;
      this.selectedProperty = null;
      this.responses = {};
      this.init();
    }

    init() {
      const buttons = document.querySelectorAll('.contact-btn');
      if (buttons.length === 0) {
        console.error('No se encontraron botones con clase .contact-btn');
        return;
      }
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.selectedProperty = btn.closest('.property-card');
          if (!this.selectedProperty) {
            console.error('No se encontró la tarjeta de propiedad');
            return;
          }
          this.openChat();
        });
      });
    }

    openChat() {
      if (!this.chatWindow) {
        this.chatWindow = document.createElement('div');
        this.chatWindow.className = 'chatbot-window';
        this.chatWindow.innerHTML = `
          <div class="chatbot-header">
            <span class="chat-icon">💬</span>
            <span>Chat con Agente MYHOME</span>
            <span class="close-chat" onclick="chatbot.closeChat()">×</span>
          </div>
          <div class="chatbot-messages" id="chatMessages"></div>
          <div class="chatbot-input" id="chatInputContainer" style="display: none;">
            <input type="text" id="chatInput" placeholder="Escribe aquí...">
            <button onclick="chatbot.sendMessage()">Enviar</button>
          </div>
        `;
        document.body.appendChild(this.chatWindow);
      }
      this.chatWindow.style.display = 'block';
      this.currentStep = 1;
      this.responses = {};
      this.displayMessage('¡Hola! ¿En qué puedo ayudarte hoy con tu propiedad? Por favor, selecciona una opción:', [
        'Consultar detalles de la propiedad',
        'Solicitar una visita',
        'Preguntar por el proceso de compra',
        'Otro tema'
      ]);
    }

    closeChat() {
      if (this.chatWindow) {
        this.chatWindow.style.display = 'none';
        this.currentStep = 1;
        this.responses = {};
      }
    }

    displayMessage(text, options = null) {
      const messagesDiv = document.getElementById('chatMessages');
      if (!messagesDiv) return;

      const messageDiv = document.createElement('div');
      messageDiv.className = 'chatbot-message';
      messageDiv.innerHTML = `<p>${text}</p>`;

      if (options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.onclick = () => this.handleOption(option);
          optionsDiv.appendChild(button);
        });
        messageDiv.appendChild(optionsDiv);
      }

      messagesDiv.innerHTML = ''; // limpiar mensajes anteriores
      messagesDiv.appendChild(messageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      const inputContainer = document.getElementById('chatInputContainer');
      if (inputContainer) inputContainer.style.display = 'none';
    }

    showInput() {
      const inputContainer = document.getElementById('chatInputContainer');
      if (inputContainer) {
        inputContainer.style.display = 'flex';
        document.getElementById('chatInput')?.focus();
      }
    }

    handleOption(option) {
      this.responses[this.currentStep] = option;
      this.currentStep++;

      const messagesDiv = document.getElementById('chatMessages');
      if (!messagesDiv) return;
      messagesDiv.innerHTML = '';

      switch (this.currentStep) {
        case 2:
          if (option === 'Consultar detalles de la propiedad') {
            this.displayMessage('¡Entendido! ¿Qué te gustaría saber? Elige una opción:', [
              'Precio y condiciones',
              'Características (habitaciones, baños, etc.)',
              'Ubicación y alrededores',
              'Volver al menú principal'
            ]);
          } else if (option === 'Solicitar una visita') {
            this.displayMessage('¡Perfecto! ¿Cuándo te gustaría agendar la visita? Elige una opción:', [
              'Hoy',
              'Mañana',
              'Esta semana',
              'Volver al menú principal'
            ]);
          } else if (option === 'Preguntar por el proceso de compra') {
            this.displayMessage('¡Claro! ¿Sobre qué aspecto necesitas información? Elige una opción:', [
              'Requisitos iniciales',
              'Financiamiento y hipoteca',
              'Documentación necesaria',
              'Volver al menú principal'
            ]);
          } else if (option === 'Otro tema') {
            this.displayMessage('Por favor, describe brevemente tu consulta.');
            this.showInput();
          }
          break;

        case 3:
          const propData = this.getPropertyData();
          if (!propData) return;

          if (this.responses[1] === 'Consultar detalles de la propiedad') {
            let response = '';
            let nextOptions = ['Sí, quiero más detalles', 'No, continuar'];
            if (option === 'Precio y condiciones') {
              response = `El precio es $${propData.price.toLocaleString()} con condiciones de pago flexibles. ¿Te interesa más información?`;
            } else if (option === 'Características (habitaciones, baños, etc.)') {
              response = `La propiedad tiene ${propData.rooms} hab., ${propData.bathrooms} baños y ${propData.area} m². ¿Necesitas más detalles?`;
            } else if (option === 'Ubicación y alrededores') {
              response = `Está ubicada en ${propData.location} cerca de parques y comercios. ¿Quieres saber más?`;
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
            this.displayMessage(response, nextOptions);
          } else if (this.responses[1] === 'Solicitar una visita') {
            if (option === 'Hoy' || option === 'Mañana' || option === 'Esta semana') {
              this.displayMessage(`Genial, ¿a qué hora te vendría bien ${option.toLowerCase()}?`);
              this.responses[2] = option;
              this.currentStep = 3; // no avanzar aún
              this.showInput();
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
          } else if (this.responses[1] === 'Preguntar por el proceso de compra') {
            let response = '';
            let nextOptions = ['Sí', 'No'];
            if (option === 'Requisitos iniciales') {
              response = 'Necesitarás identificación y un depósito inicial. ¿Te ayudo con algo más?';
            } else if (option === 'Financiamiento y hipoteca') {
              response = 'Ofrecemos opciones de financiamiento. ¿Quieres detalles?';
            } else if (option === 'Documentación necesaria') {
              response = 'Deberás presentar DNI y comprobantes de ingresos. ¿Más preguntas?';
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
            this.displayMessage(response, nextOptions);
          }
          break;

        case 4:
          if (this.responses[1] === 'Consultar detalles de la propiedad') {
            if (option === 'No, continuar') {
              this.displayMessage('¡Gracias por tu consulta! Un agente se pondrá en contacto contigo pronto. ¿Deseas cerrar el chat?', ['Sí, cerrar', 'No, volver al menú principal']);
            } else if (option === 'Sí, quiero más detalles') {
              this.displayMessage('Por favor, especifica qué más te gustaría saber.');
              this.showInput();
            }
          } else if (this.responses[1] === 'Preguntar por el proceso de compra') {
            if (option === 'No') {
              this.displayMessage('¡Gracias por tu consulta! Un agente se pondrá en contacto contigo pronto. ¿Deseas cerrar el chat?', ['Sí, cerrar', 'No, volver al menú principal']);
            } else if (option === 'Sí') {
              this.displayMessage('Por favor, dime qué más necesitas.');
              this.showInput();
            }
          }
          break;

        case 5:
          if (option === 'No' || option === 'Sí, cerrar') {
            this.displayMessage('¡Chat cerrado! Un agente te contactará pronto.');
            setTimeout(() => this.closeChat(), 3000);
          } else if (option === 'No, volver al menú principal') {
            this.currentStep = 1;
            this.openChat();
          }
          break;
      }
    }

    sendMessage() {
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
      if (!message) return;

      const messagesDiv = document.getElementById('chatMessages');
      const userMessageDiv = document.createElement('div');
      userMessageDiv.className = 'chatbot-message user';
      userMessageDiv.innerHTML = `<p>${message}</p>`;
      messagesDiv.appendChild(userMessageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      input.value = '';
      document.getElementById('chatInputContainer').style.display = 'none';

      this.responses[this.currentStep] = message;

      if (this.responses[1] === 'Otro tema') {
        this.displayMessage(`Gracias por tu mensaje: "${message}". Lo revisaremos y te responderemos pronto. ¿Algo más?`, ['Sí', 'No']);
        this.currentStep = 4;
      } else if (this.responses[1] === 'Solicitar una visita' && this.currentStep === 3) {
        this.displayMessage(`Confirmado para ${this.responses[2]} a las ${message}. ¿Algo más en lo que pueda ayudarte?`, ['Sí', 'No']);
        this.currentStep = 4;
      } else {
        this.displayMessage(`Gracias por tu mensaje: "${message}". ¿Puedo ayudarte con algo más?`, ['Sí', 'No']);
        this.currentStep = 5;
      }
    }

    getPropertyData() {
      if (!this.selectedProperty) return null;
      const title = this.selectedProperty.querySelector('h3')?.textContent || 'Sin título';
      const location = this.selectedProperty.querySelector('p:nth-child(2)')?.textContent.replace('Ubicación: ', '') || 'Sin ubicación';
      const details = this.selectedProperty.querySelector('p:nth-child(3)')?.textContent.match(/(\d+) hab\. \| (\d+) baños \| (\d+) m²/);
      const price = parseInt(this.selectedProperty.querySelector('.details')?.textContent.replace('$', '').replace(',', '') || 0);
      return {
        title,
        location,
        rooms: details ? parseInt(details[1]) : 0,
        bathrooms: details ? parseInt(details[2]) : 0,
        area: details ? parseInt(details[3]) : 0,
        price
      };
    }
  }

  // Instanciar el chatbot
  window.chatbot = new Chatbot();
});
