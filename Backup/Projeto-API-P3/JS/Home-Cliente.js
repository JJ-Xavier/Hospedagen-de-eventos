// Código existente para o menu lateral
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

// Abrir o menu lateral
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Fechar menu lateral
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Função simples de pesquisa
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alert(`Buscando por: ${searchInput.value}`);
  }
});

// CÓDIGO DO SLIDER ÚNICO
class SimpleSlider {
  constructor() {
    this.slider = document.getElementById('main-slider');
    this.slides = this.slider.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.currentIndex = 0;
    this.autoSlideInterval = null;
    
    this.init();
  }
  
  init() {
    this.showSlide(this.currentIndex);
    this.startAutoSlide();
    this.addEventListeners();
  }
  
  showSlide(index) {
    // Esconder todos os slides
    this.slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remover active de todos os dots
    this.dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Mostrar slide atual com transição
    setTimeout(() => {
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        this.currentIndex = index;
    }, 50);
}
  
  nextSlide() {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.slides.length) {
      nextIndex = 0;
    }
    this.showSlide(nextIndex);
  }
  
  prevSlide() {
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.slides.length - 1;
    }
    this.showSlide(prevIndex);
  }
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda a cada 5 segundos
  }
  
  resetAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }
  
  addEventListeners() {
    // Botões de navegação
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    
    prevBtn.addEventListener('click', () => {
      this.prevSlide();
      this.resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
      this.nextSlide();
      this.resetAutoSlide();
    });
    
    // Dots de navegação
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
        this.resetAutoSlide();
      });
    });
    
    // Pausar auto-slide no hover
    this.slider.addEventListener('mouseenter', () => {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
      }
    });
    
    this.slider.addEventListener('mouseleave', () => {
      this.startAutoSlide();
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
        this.resetAutoSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.resetAutoSlide();
      }
    });
  }
}

// Inicializar o slider quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  const slider = new SimpleSlider();
});