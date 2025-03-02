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
