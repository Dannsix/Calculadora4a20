function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.textContent = '🌙'; // Texto inicial

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});



function calcular() {
  const valorMedido = document.getElementById('valorMedido').value;
  const fundoEscala = document.getElementById('fundoEscala').value;

  // Verifica se algum dos campos está vazio
  if (!valorMedido) {
    alert("Por favor, preencha o campo 'Valor Medido'.");
    return;
  } else if (!fundoEscala) {
    alert("Por favor, preencha o campo 'Fundo de Escala'.");
    return;
  }

  // Se ambos os campos estiverem preenchidos, realiza o cálculo
  let resultado = ((parseFloat(valorMedido) - 4) * parseFloat(fundoEscala)) / 16;
  resultado = resultado.toFixed(2);
  document.getElementById('resultado').textContent = `${resultado}`;
  //alert("O resultado é: " + resultado);
  document.getElementById("resultado-popup").textContent = resultado;
  showPopup();
  
}

// Função de limpar permanece a mesma

function limpar() {
  document.getElementById('valorMedido').value = "";
  document.getElementById('fundoEscala').value = "";
  document.getElementById('resultado').textContent = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    const valorMedidoInput = document.getElementById('valorMedido');
    const fundoEscalaInput = document.getElementById('fundoEscala');
    const resultadoElement = document.getElementById('resultado');
    const resultadoPopupElement = document.getElementById('resultado-popup');
    const popup = document.getElementById('popup');
    const toggleModeButton = document.getElementById('toggle-mode');
    let isDarkMode = false;

    function calcular() {
        const valorMedido = parseFloat(valorMedidoInput.value);
        const fundoEscala = parseFloat(fundoEscalaInput.value);

        if (isNaN(valorMedido) || isNaN(fundoEscala)) {
            resultadoElement.textContent = "Insira valores válidos.";
            return;
        }

        const resultado = (valorMedido / fundoEscala) * 100;
        resultadoElement.textContent = resultado.toFixed(2) + "%";
        resultadoPopupElement.textContent = resultado.toFixed(2) + "%";
        popup.style.display = 'block';
    }

    function limpar() {
        valorMedidoInput.value = '';
        fundoEscalaInput.value = '';
        resultadoElement.textContent = '0';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            toggleModeButton.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            toggleModeButton.textContent = '🌙';
        }
    }

    toggleModeButton.addEventListener('click', toggleDarkMode);

    window.calcular = calcular;
    window.limpar = limpar;
    window.closePopup = closePopup;
});
