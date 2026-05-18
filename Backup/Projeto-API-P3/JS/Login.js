const form = document.getElementById('form-login');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    mostrarMensagem('Por favor, preencha todos os campos.');
    return;
  }

  if (senha.length < 8) {
    mostrarMensagem('A senha deve ter pelo menos 8 caracteres.');
    return;
  }

  esconderMensagem();
  mostrarMensagem('Login realizado com sucesso!', 'sucesso');

  // Redirecionamento simulado após login
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 1500);
});

function mostrarMensagem(texto, tipo = 'erro') {
  mensagem.textContent = texto;
  mensagem.style.display = 'block';
  mensagem.style.color = tipo === 'erro' ? '#ff6b6b' : '#4CAF50';
  mensagem.style.backgroundColor = tipo === 'erro' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)';
  mensagem.style.border = tipo === 'erro' ? '1px solid #ff6b6b' : '1px solid #4CAF50';
}

function esconderMensagem() {
  mensagem.style.display = 'none';
}
