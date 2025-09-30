function toggleMenu() {
  document.getElementById("nav_menu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("nav_menu").classList.remove("active");
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("nav_menu");
  const toggle = document.querySelector(".menu_toggle"); 

  if (
    menu.classList.contains("active") &&
    !menu.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    closeMenu();
  }
});
