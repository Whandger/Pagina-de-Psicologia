let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.getElementById("slides");

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth; // pega largura real do slide
  const offset = -index * slideWidth;
  slidesContainer.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


