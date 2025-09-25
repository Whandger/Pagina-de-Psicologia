// Aplica animação em todos os elementos com a classe 'reveal'
ScrollReveal().reveal('.reveal', {
    distance: '50px',      // distancia que vai percorrer
    duration: 1000,        // tempo da animação em ms
    easing: 'ease-out',    // estilo da animação
    origin: 'bottom',      // de onde vem a animação
    interval: 200          // intervalo entre elementos
  });