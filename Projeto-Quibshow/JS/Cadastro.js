const form = document.getElementById('form-cadastro');
const mensagem = document.getElementById('mensagem');
const cpfInput = document.getElementById('cpf');

// --- MÁSCARA AUTOMÁTICA DE CPF ---
cpfInput.addEventListener('input', (e) => {
  let value = e.target.value;

  // Remove qualquer caractere que não seja número
  value = value.replace(/\D/g, "");

  // Limita a 11 dígitos
  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  // Aplica a formatação de pontos e traço dinamicamente
  if (value.length > 9) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
  } else if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
  }

  e.target.value = value;
});

// --- AUXILIARES PARA EXIBIR MENSAGENS NO LAYOUT ---
function mostrarMensagem(texto, tipo = 'erro') {
  mensagem.textContent = texto;
  mensagem.classList.remove('erro-texto', 'sucesso-texto');
  
  if (tipo === 'erro') {
    mensagem.classList.add('erro-texto');
    mensagem.style.color = "red";
  } else if (tipo === 'sucesso') {
    mensagem.classList.add('sucesso-texto');
    mensagem.style.color = "green";
  }

  // Estilos inline para garantir visibilidade com o seu CSS original
  mensagem.style.opacity = '1';
  mensagem.style.height = 'auto';
  mensagem.style.padding = '0.8rem';
  mensagem.style.overflow = 'visible';
  mensagem.style.boxSizing = 'border-box';
  
  void mensagem.offsetWidth;
}

function esconderMensagem() {
  mensagem.textContent = '';
  mensagem.classList.remove('erro-texto', 'sucesso-texto');
  mensagem.style.opacity = '0';
  mensagem.style.height = '0';
  mensagem.style.padding = '0';
  mensagem.style.overflow = 'hidden';
}

// --- EVENTO DE SUBMISSÃO DO FORMULÁRIO ---
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const senha = document.getElementById('senha');
  const confirmarSenha = document.getElementById('confirmar-senha');

  // Limpa estados de erros anteriores
  esconderMensagem();
  senha.classList.remove('erro');
  confirmarSenha.classList.remove('erro');

  // Validação: Verificar se as senhas coincidem
  if (senha.value !== confirmarSenha.value) {
    mostrarMensagem("❌ As senhas não coincidem.", 'erro');
    senha.classList.add('erro');
    confirmarSenha.classList.add('erro');
    return; 
  }

  // Estrutura do usuário do QuibSHOW
  const usuario = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    cpf: cpfInput.value,
    email: document.getElementById('email').value,
    senha: senha.value
  };

  // Mostrar animação de carregamento simulado
  mensagem.textContent = "⏳ Enviando dados para o sistema...";
  mensagem.style.color = "#FFA500";
  mensagem.style.opacity = '1';
  mensagem.style.height = 'auto';

  // SIMULAÇÃO DE BANCO DE DADOS (LocalStorage)
  // Aguarda 1.5 segundos simulando o tempo de resposta de um servidor real
  setTimeout(() => {
    try {
      // Salva no navegador para simular o banco de dados
      localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
      
      console.log('Usuário salvo com sucesso no LocalStorage:', usuario);

      // Exibe mensagem de sucesso verde
      mostrarMensagem("✅ Usuário cadastrado com sucesso!", 'sucesso');
      
      // Reseta todos os campos do formulário
      form.reset();
      
      // Opcional: Redireciona para a página de login após 2 segundos
      setTimeout(() => {
         window.location.href = "Home-Cliente.html";
      }, 2000);

    } catch (erro) {
      console.error(erro);
      mostrarMensagem("❌ Erro ao cadastrar usuário. Tente novamente.", 'erro');
    }
  }, 1500);
});