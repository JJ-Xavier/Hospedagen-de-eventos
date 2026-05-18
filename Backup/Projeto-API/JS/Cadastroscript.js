const form = document.getElementById('form-cadastro');
const mensagem = document.getElementById('mensagem');

// URL do webhook do n8n
const WEBHOOK_URL = 'https://n8n-n8n.tscd6m.easypanel.host/webhook/95dcf446-f4ba-40c2-8631-d27b0fac6e0e';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const senha = document.getElementById('senha');
  const confirmarSenha = document.getElementById('confirmar-senha');

  // limpa mensagens anteriores
  mensagem.textContent = "";
  senha.classList.remove('erro');
  confirmarSenha.classList.remove('erro');
  mensagem.classList.remove('erro-texto');

  // validacao de senhas
  if (senha.value !== confirmarSenha.value) {
    mensagem.textContent = "❌ As senhas não coincidem.";
    mensagem.classList.add('erro-texto');
    senha.classList.add('erro');
    confirmarSenha.classList.add('erro');
    return; 
  }

  const usuario = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    cpf: document.getElementById('cpf').value,
    email: document.getElementById('email').value,
    senha: senha.value
  };

  // mostrar mensagem de carregamento
  mensagem.textContent = "⏳ Enviando dados...";
  mensagem.style.color = "#FFA500";

  try {
    // enviar dados para o n8n via POST
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario)
    });

    if (response.ok) {
      const resultado = await response.json();
      console.log('Resposta do n8n:', resultado);
      console.log('Usuário cadastrado:', usuario);

      mensagem.textContent = "✅ Usuário cadastrado com sucesso!";
      mensagem.style.color = "green";
      
      // limpar o formulário apos sucesso
      form.reset();
      senha.style.border = "";
      confirmarSenha.style.border = "";
    } else {
      throw new Error('Erro ao enviar dados');
    }

  } catch (erro) {
    console.error('Erro:', erro);
    mensagem.textContent = "❌ Erro ao cadastrar usuário. Tente novamente.";
    mensagem.style.color = "red";
  }
});
