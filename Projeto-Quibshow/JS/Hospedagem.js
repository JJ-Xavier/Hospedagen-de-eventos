// --- CONTROLE DO MENU LATERAL (SIDEBAR) ---
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

// Verifica se os elementos do menu existem na página antes de aplicar os eventos
if (sidebar && overlay && menuBtn && closeBtn) {
  // Abrir o menu lateral
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Impede o scroll do fundo
  });

  // Fechar menu lateral
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
}

function closeMenu() {
  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Devolve o scroll ao fechar
  }
}

// --- FUNÇÃO DE PESQUISA DA NAVBAR ---
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert(`Buscando por: ${searchInput.value}`);
      // Aqui você pode redirecionar para a página de busca futuramente:
      // window.location.href = `../busca.html?q=${encodeURIComponent(searchInput.value)}`;
    }
  });
}

// --- LÓGICA DO FORMULÁRIO DE NEWSLETTER (RODAPÉ) ---
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento automático da página
    
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput) {
      const email = emailInput.value;
      
      // Simulação de cadastro com sucesso
      alert(`Sucesso! O e-mail "${email}" foi cadastrado. Você receberá avisos de novos ingressos em breve.`);
      
      // Limpa o campo após o envio
      emailInput.value = '';
    }
  });
}