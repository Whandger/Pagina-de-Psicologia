const favicon = document.getElementById("favicon");

// Quando o usuário sai da aba
window.addEventListener("blur", () => {
    favicon.href = "https://res.cloudinary.com/deygsv2fm/image/upload/v1759499511/logo-white_yk7of1.png"; // ícone alternativo
});

// Quando o usuário volta pra aba
window.addEventListener("focus", () => {
    favicon.href = "./images/logo.png"; // ícone original
});