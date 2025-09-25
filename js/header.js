window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 1) { // Adjust '50' to your desired scroll threshold
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });