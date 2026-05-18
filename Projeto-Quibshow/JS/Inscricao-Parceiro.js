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
  // LÓGICA DO FORMULÁRIO DINÂMICO
  // ==========================================
  const radioGuide = document.getElementById("roleGuide");
  const radioDriver = document.getElementById("roleDriver");
  const guideFields = document.getElementById("guideFields");
  const driverFields = document.getElementById("driverFields");
  const inputCnh = document.getElementById("cnh");
  const inputCadastur = document.getElementById("cadastur");

  function toggleFields() {
    if (radioDriver.checked) {
      // Ativa campos do Motorista e esconde os de Guia
      driverFields.classList.remove("hidden");
      guideFields.classList.add("hidden");
      
      // Define require no input visível para consistência de dados
      inputCnh.setAttribute("required", "true");
      inputCadastur.removeAttribute("required");
    } else {
      // Ativa campos de Guia e esconde os do Motorista
      guideFields.classList.remove("hidden");
      driverFields.classList.add("hidden");
      
      inputCadastur.setAttribute("required", "true");
      inputCnh.removeAttribute("required");
    }
  }

  // Escuta os cliques de mudança nas opções (Tiles)
  if (radioGuide && radioDriver) {
    radioGuide.addEventListener("change", toggleFields);
    radioDriver.addEventListener("change", toggleFields);
  }

  // Roda uma vez na carga da página para definir estado inicial
  toggleFields();
});