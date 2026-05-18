document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // EXIBIR / OCULTAR SENHA
  // ==========================================
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const admPasswordInput = document.getElementById("admPassword");

  if (togglePasswordBtn && admPasswordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      // Altera o tipo do input
      const isPassword = admPasswordInput.getAttribute("type") === "password";
      admPasswordInput.setAttribute("type", isPassword ? "text" : "password");
      
      // Altera a classe do ícone visualmente
      togglePasswordBtn.classList.toggle("fa-eye");
      togglePasswordBtn.classList.toggle("fa-eye-slash");
    });
  }
});

// ==========================================
// INTERCEPTADOR DE ENVIO (SIMULAÇÃO DE LOGIN)
// ==========================================
function handleAdmLogin() {
  const email = document.getElementById("admEmail").value;
  const token = document.getElementById("admToken").value;

  // Validação simples ilustrativa de 6 dígitos do token 
  if (token.length !== 6 || isNaN(token)) {
    alert("Código Verificador inválido! O token precisa conter 6 números.");
    return;
  }

  // Alerta de sucesso simulando entrada na rota administrativa
  alert(`Acesso autorizado para: ${email}!\nRedirecionando para o Dashboard Geral...`);
  
  // Exemplo de redirecionamento futuro:
  // window.location.href = "DashboardGlobal.html";
}