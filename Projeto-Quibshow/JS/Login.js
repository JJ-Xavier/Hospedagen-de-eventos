const form = document.getElementById('form-login');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  // 1. Validação básica de campos vazios
  if (!email || !senha) {
    mostrarMensagem('Por favor, preencha todos os campos.', 'erro');
    return;
  }

  // 2. Validação de tamanho mínimo da senha
  if (senha.length < 8) {
    mostrarMensagem('A senha deve ter pelo menos 8 caracteres.', 'erro');
    return;
  }

  // 3. BUSCA O USUÁRIO CADASTRADO NO NAVEGADOR (LocalStorage)
  const usuarioSalvoRaw = localStorage.getItem('usuarioCadastrado');

  if (usuarioSalvoRaw) {
    const usuarioSalvo = JSON.parse(usuarioSalvoRaw);

    // Verifica se as credenciais coincidem com o cadastro
    if (email !== usuarioSalvo.email || senha !== usuarioSalvo.senha) {
      mostrarMensagem('❌ E-mail ou senha incorretos.', 'erro');
      return;
    }
  } else {
    // Caso o localStorage esteja vazio (usuário ainda não testou o cadastro)
    // Vamos permitir uma credencial padrão para testes não travarem você:
    if (email !== "admin@email.com" && senha !== "12345678") {
      mostrarMensagem('❌ Usuário não encontrado. Cadastre-se primeiro!', 'erro');
      return;
    }
  }

  // 4. SUCESSO: Limpa erros e exibe animação de carregamento
  esconderMensagem();
  
  // Mostra o sinal de carregamento idêntico ao do cadastro
  mensagem.textContent = "⏳ Verificando credenciais...";
  mensagem.style.color = "#FFA500";
  mensagem.style.display = 'block';
  mensagem.style.backgroundColor = 'rgba(255, 165, 0, 0.1)';
  mensagem.style.border = '1px solid #FFA500';

  // Aguarda 1.5 segundos para exibir o sucesso verde
  setTimeout(() => {
    mostrarMensagem('✅ Login realizado com sucesso! Entrando...', 'sucesso');

    // Aguarda mais 2 segundos (os 2000ms que você gostou) para redirecionar para a Home real
    setTimeout(() => {
      window.location.href = 'Home-Cliente.html'; // Corrigido para a sua página real
    }, 2000);

  }, 1500);
});

// --- AUXILIARES VISUAIS ---
function mostrarMensagem(texto, tipo = 'erro') {
  mensagem.textContent = texto;
  mensagem.style.display = 'block';
  mensagem.style.color = tipo === 'erro' ? '#ff6b6b' : '#4CAF50';
  mensagem.style.backgroundColor = tipo === 'erro' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)';
  mensagem.style.border = tipo === 'erro' ? '1px solid #ff6b6b' : '1px solid #4CAF50';
  mensagem.style.padding = '0.8rem';
  mensagem.style.borderRadius = '8px';
  mensagem.style.textAlign = 'center';
}

function esconderMensagem() {
  mensagem.style.display = 'none';
}