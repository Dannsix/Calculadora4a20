// Controle de Tema
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

// Funções da Calculadora
function calcular() {
    const valorMedido = document.getElementById('valorMedido').value;
    const fundoEscala = document.getElementById('fundoEscala').value;

    if (!valorMedido || !fundoEscala) {
        showAlert('Por favor, preencha ambos os campos!');
        return;
    }

    const resultado = ((parseFloat(valorMedido) - 4) * parseFloat(fundoEscala)) / 16;
    document.getElementById('resultado').textContent = resultado.toFixed(2);
}

function limpar() {
    document.getElementById('valorMedido').value = '';
    document.getElementById('fundoEscala').value = '';
    document.getElementById('resultado').textContent = '0';
}

// Sistema de Alertas
function showAlert(message) {
    const alertElement = document.createElement('div');
    alertElement.style.position = 'fixed';
    alertElement.style.bottom = '20px';
    alertElement.style.left = '50%';
    alertElement.style.transform = 'translateX(-50%)';
    alertElement.style.padding = '15px 25px';
    alertElement.style.background = body.classList.contains('dark-mode') ? '#444' : '#fff';
    alertElement.style.color = body.classList.contains('dark-mode') ? '#fff' : '#333';
    alertElement.style.borderRadius = '8px';
    alertElement.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    alertElement.style.zIndex = '1000';
    alertElement.textContent = message;

    document.body.appendChild(alertElement);
    setTimeout(() => alertElement.remove(), 3000);
}

// Detecção de Dispositivo Inteligente
function handleDeviceAdaptation() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (isMobile && window.innerWidth < 768) {
                window.scrollTo(0, input.offsetTop - 100);
            }
        });
    });
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    handleDeviceAdaptation();
});

// Redimensionamento
