// ==========================================================================
// CONTROLE DO MENU LATERAL (SIDEBAR)
// ==========================================================================
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

// ==========================================================================
// FUNÇÃO DE PESQUISA / FILTRO DA TABELA DO DASHBOARD
// ==========================================================================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const termoBusca = searchInput.value.toLowerCase().trim();
      
      // Captura todas as linhas da tabela (menos o cabeçalho)
      const linhasTabela = document.querySelectorAll(".admin-table tbody tr");

      if (linhasTabela.length > 0) {
        linhasTabela.forEach((linha) => {
          // Pega o texto do Hóspede (coluna 1) e do Evento (coluna 2)
          const nomeHospede = linha.querySelector(".guest-profile strong")?.textContent.toLowerCase() || "";
          const nomeEvento = linha.querySelector(".event-name-tag")?.textContent.toLowerCase() || "";

          // Se encontrar o termo em qualquer um dos dois campos, mantém a linha visível
          if (nomeHospede.includes(termoBusca) || nomeEvento.includes(termoBusca)) {
            linha.style.display = ""; // Mostra a linha
          } else {
            linha.style.display = "none"; // Esconde a linha
          }
        });
      } else {
        // Fallback caso a tabela não esteja nessa página específica
        alert(`Buscando por: ${searchInput.value}`);
      }
    }
  });
}

// ==========================================================================
// LÓGICA DO FORMULÁRIO DE NEWSLETTER (RODAPÉ)
// ==========================================================================
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
// ==========================================================================
// FUNÇÃO DE PESQUISA / FILTRO UNIFICADO (TABELA E LOJAS)
// ==========================================================================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const termoBusca = searchInput.value.toLowerCase().trim();
      
      // 1. Filtro da Tabela de Hóspedes
      const linhasTabela = document.querySelectorAll(".admin-table tbody tr");
      linhasTabela.forEach((linha) => {
        const nomeHospede = linha.querySelector(".guest-profile strong")?.textContent.toLowerCase() || "";
        const nomeEvento = linha.querySelector(".event-name-tag")?.textContent.toLowerCase() || "";

        if (nomeHospede.includes(termoBusca) || nomeEvento.includes(termoBusca)) {
          linha.style.display = ""; 
        } else {
          linha.style.display = "none"; 
        }
      });

      // 2. Filtro dos Cards de Lojas
      const cardsLojas = document.querySelectorAll(".store-card-box");
      cardsLojas.forEach((card) => {
        const nomeLoja = card.querySelector(".store-info-main h3")?.textContent.toLowerCase() || "";

        if (nomeLoja.includes(termoBusca)) {
          card.style.display = ""; // Mostra o card da loja
        } else {
          card.style.display = "none"; // Esconde o card da loja
        }
      });
    }
  });
}