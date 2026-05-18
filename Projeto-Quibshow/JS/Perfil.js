document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // CONTROLE DO MENU LATERAL (SIDEBAR)
  // ==========================================
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });
  }

  if (closeBtn && sidebar && overlay) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  // ==========================================
  // ALTERNÂNCIA DE ABAS NO PERFIL
  // ==========================================
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // 1. Remove classe ativa de todos os botões de abas
      tabButtons.forEach(btn => btn.classList.remove("active"));
      
      // 2. Oculta todos os painéis
      tabPanels.forEach(panel => panel.classList.remove("active"));

      // 3. Ativa o botão clicado
      button.classList.add("active");

      // 4. Mostra o painel correspondente ao atributo data-tab
      const targetTabId = button.getAttribute("data-tab");
      const targetPanel = document.getElementById(targetTabId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // ==========================================
  // ATUALIZAÇÃO SÍNCRONA DE NOMES (FEEDBACK VISUAL)
  // ==========================================
  const formDados = document.getElementById("formDadosPessoais");
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const displayUserName = document.getElementById("displayUserName");
  const displayUserEmail = document.getElementById("displayUserEmail");

  if (formDados) {
    formDados.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita recarregar a página
      
      // Atualiza os textos no card principal do topo
      if (inputName && displayUserName) {
        displayUserName.textContent = inputName.value;
      }
      if (inputEmail && displayUserEmail) {
        displayUserEmail.textContent = inputEmail.value;
      }

      alert("Dados pessoais atualizados com sucesso!");
    });
  }

  // Formulário de Segurança
  const formSeguranca = document.getElementById("formSeguranca");
  if (formSeguranca) {
    formSeguranca.addEventListener("submit", (e) => {
      e.preventDefault();
      const newPass = document.getElementById("newPassword").value;
      const confirmPass = document.getElementById("confirmPassword").value;

      if (newPass !== confirmPass) {
        alert("Erro: A confirmação de senha não confere com a nova senha.");
        return;
      }

      alert("Senha modificada com sucesso!");
      formSeguranca.reset();
    });
  }
});